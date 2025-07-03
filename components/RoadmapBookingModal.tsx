import { useState, useEffect } from 'react';
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

interface RoadmapBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoadmapBookingModal = ({ isOpen, onClose }: RoadmapBookingModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    businessName: '',
    industry: '',
    helpWith: [],
    currentChallenges: '',
    preferredTime: '',
    hearAbout: '',
    sourcePage: 'modal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Google Calendar booking URL
  const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ20Vqo2cMGfOWDwybhkY_2j-rtsWeaqdmFsYiFZ5UY8gM8B3caO91sBgSYhvUuH_Hyo98CHSlZD?gv=true';

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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
      // Insert data into Supabase consultation_bookings table
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
        sourcePage: 'modal'
      });

      // Open Google Calendar booking in a new tab after successful submission
      setTimeout(() => {
        window.open(GOOGLE_CALENDAR_URL, '_blank', 'noopener,noreferrer');
      }, 1000); // Small delay to let user see success message

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (submitStatus === 'success') {
      setSubmitStatus('idle');
    }
    onClose();
  };

  const openCalendarDirectly = () => {
    window.open(GOOGLE_CALENDAR_URL, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Container with proper overflow handling */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header with Close Button - Fixed */}
        <div className="relative flex-shrink-0 px-6 pt-6 pb-2">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thanks! Request Received</h3>
              <p className="text-lg text-gray-600 mb-6">
                Your consultation request has been submitted successfully. A Google Calendar booking window should have opened automatically.
              </p>
              <p className="text-base text-gray-600 mb-6">
                If the calendar didn't open, click the button below to schedule your meeting:
              </p>
              <button
                onClick={openCalendarDirectly}
                className="btn-primary inline-flex items-center gap-3 mb-6"
              >
                <Calendar className="w-5 h-5" />
                Schedule Your Meeting
              </button>
              <p className="text-sm text-gray-500 mb-8">
                I'll also follow up within 48 hours via email with additional details.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Book Your Free AI Consultation
                </h3>
                <p className="text-gray-600 mb-2">
                  Tell me about your business and I'll provide a personalized AI roadmap at no cost.
                </p>
                <p className="text-sm text-gray-500">
                  After submitting, you'll be directed to schedule your meeting time.
                </p>
              </div>

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-red-700">{errorMessage}</p>
                    <button
                      onClick={openCalendarDirectly}
                      className="text-red-600 hover:text-red-800 underline text-sm mt-1"
                    >
                      Or schedule directly via Google Calendar
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
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

                <div>
                  <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Business Challenges *
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Meeting Time
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
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Submit & Schedule Meeting
                    </>
                  )}
                </button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">
                    Secure submission • Free consultation • No payment required
                  </p>
                  <p className="text-xs text-gray-400">
                    After submitting, you'll be directed to Google Calendar to choose your meeting time
                  </p>
                </div>
              </form>

              {/* Alternative booking option */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Prefer to schedule directly?
                </p>
                <button
                  onClick={openCalendarDirectly}
                  className="btn-outline inline-flex items-center gap-2 text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Open Google Calendar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoadmapBookingModal;