import { useState, useEffect } from 'react';
import { Check, AlertCircle, Loader2, X } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface FormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  teamSize: string;
  currentChallenges: string;
  aiExperience: string;
  timeline: string;
  budget: string;
  additionalInfo: string;
}

interface RoadmapBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoadmapBookingModal = ({ isOpen, onClose }: RoadmapBookingModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    teamSize: '',
    currentChallenges: '',
    aiExperience: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('roadmap_bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            industry: formData.industry,
            team_size: formData.teamSize,
            current_challenges: formData.currentChallenges,
            ai_experience: formData.aiExperience,
            timeline: formData.timeline,
            budget: formData.budget,
            additional_info: formData.additionalInfo,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        teamSize: '',
        currentChallenges: '',
        aiExperience: '',
        timeline: '',
        budget: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
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
                I'll review your information and follow up within 48 hours with your custom AI roadmap details.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Keep an eye on your inbox (and spam folder) for my response.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-[#6ba1a3] text-white rounded-xl hover:bg-[#4f8385] transition-colors font-medium"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Book Your AI Roadmap
                </h3>
                <p className="text-gray-600">
                  Tell me about your business and I'll create a custom 5-day AI implementation plan for $399.
                </p>
              </div>

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white"
                      placeholder="Your company name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="">Select your industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="dental">Dental</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="retail">Retail</option>
                      <option value="technology">Technology</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="education">Education</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="finance">Finance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Team Size *
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      required
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="">Select team size</option>
                      <option value="solo">Just me</option>
                      <option value="2-5">2-5 people</option>
                      <option value="6-15">6-15 people</option>
                      <option value="16-50">16-50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="aiExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      AI Experience *
                    </label>
                    <select
                      id="aiExperience"
                      name="aiExperience"
                      required
                      value={formData.aiExperience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="">Select experience level</option>
                      <option value="none">No AI experience</option>
                      <option value="basic">Basic (ChatGPT, etc.)</option>
                      <option value="intermediate">Some automation tools</option>
                      <option value="advanced">Advanced AI user</option>
                    </select>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors resize-none bg-white"
                    placeholder="What are your biggest time-consuming tasks or operational challenges?"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Implementation Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (within 30 days)</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly AI Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500/month</option>
                      <option value="500-1500">$500-$1,500/month</option>
                      <option value="1500-5000">$1,500-$5,000/month</option>
                      <option value="5000+">$5,000+/month</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6ba1a3] focus:border-transparent transition-colors resize-none bg-white"
                    placeholder="Anything else you'd like me to know about your business or goals?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6ba1a3] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#4f8385] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Book My AI Roadmap - $399'
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Secure submission • 5-day delivery • Custom PDF + Loom walkthrough
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoadmapBookingModal;