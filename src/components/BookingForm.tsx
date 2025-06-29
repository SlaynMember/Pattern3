import { useState } from 'react';
import { Check, AlertCircle, Loader2, X, Calendar, User, Building, Target } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface FormData {
  fullName: string;
  email: string;
  businessName: string;
  industry: string;
  helpWith: string[];
  currentChallenges: string;
  preferredTime: string;
  hearAbout: string;
  sourcePage: string;
}

interface BookingFormProps {
  sourcePage?: string;
  className?: string;
}

const BookingForm = ({ sourcePage = 'unknown', className = '' }: BookingFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    businessName: '',
    industry: '',
    helpWith: [],
    currentChallenges: '',
    preferredTime: '',
    hearAbout: '',
    sourcePage
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const helpOptions = [
    'Website Development',
    'AI Automation',
    'Content & Copy',
    'Business Strategy',
    'AI Integration',
    'Other'
  ];

  const industries = [
    'Healthcare',
    'Dental',
    'Professional Services',
    'Retail',
    'Technology',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Finance',
    'Other'
  ];

  const timeSlots = [
    'Morning (9 AM - 12 PM)',
    'Afternoon (12 PM - 5 PM)',
    'Evening (5 PM - 8 PM)',
    'Flexible'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      helpWith: prev.helpWith.includes(option)
        ? prev.helpWith.filter(item => item !== option)
        : [...prev.helpWith, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            business_name: formData.businessName,
            industry: formData.industry,
            help_with: formData.helpWith.join(', '),
            current_challenges: formData.currentChallenges,
            preferred_time: formData.preferredTime,
            hear_about: formData.hearAbout,
            source_page: formData.sourcePage,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        businessName: '',
        industry: '',
        helpWith: [],
        currentChallenges: '',
        preferredTime: '',
        hearAbout: '',
        sourcePage
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={`card text-center ${className}`}>
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Thanks! Request Received</h3>
        <p className="text-lg text-gray-600 mb-6">
          I'll review your information and follow up within 48 hours to schedule your free consultation.
        </p>
        <p className="text-sm text-gray-500">
          Keep an eye on your inbox (and spam folder) for my response.
        </p>
      </div>
    );
  }

  return (
    <div className={`card ${className}`}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Book Your Free AI Consultation
        </h3>
        <p className="text-gray-600">
          Tell me about your business and I'll provide a personalized AI roadmap at no cost.
        </p>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Business Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
              <Building className="w-4 h-4 inline mr-2" />
              Business/Project Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
              placeholder="Your business name"
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
              What industry are you in? *
            </label>
            <select
              id="industry"
              name="industry"
              required
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="">Select your industry</option>
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </div>

        {/* What do you want help with? */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            <Target className="w-4 h-4 inline mr-2" />
            What do you want help with? (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {helpOptions.map(option => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.helpWith.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Current Challenges */}
        <div>
          <label htmlFor="currentChallenges" className="block text-sm font-semibold text-gray-700 mb-2">
            Describe your current challenges *
          </label>
          <textarea
            id="currentChallenges"
            name="currentChallenges"
            required
            rows={4}
            value={formData.currentChallenges}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none bg-white"
            placeholder="What are your biggest time-consuming tasks or operational challenges?"
          />
        </div>

        {/* Preferred Meeting Time */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred meeting time
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="">Select preferred time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="hearAbout" className="block text-sm font-semibold text-gray-700 mb-2">
              How did you hear about Pattern3?
            </label>
            <input
              type="text"
              id="hearAbout"
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
              placeholder="Referral, search, social media, etc."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Request Free Consultation'
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Secure submission • Free consultation • No payment required
        </p>
      </form>
    </div>
  );
};

export default BookingForm;