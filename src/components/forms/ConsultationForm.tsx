import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { supabase, type ConsultationBooking } from '../../lib/supabase'

interface ConsultationFormProps {
  onSuccess?: () => void
  onError?: (error: string) => void
  sourcePage: string
  showTitle?: boolean
  compact?: boolean
}

export default function ConsultationForm({ 
  onSuccess, 
  onError, 
  sourcePage,
  showTitle = true,
  compact = false 
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    business_name: '',
    industry: '',
    help_with: [] as string[],
    current_challenges: '',
    preferred_time: '',
    hear_about: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const submissionData: ConsultationBooking = {
        full_name: formData.full_name,
        email: formData.email,
        business_name: formData.business_name || undefined,
        industry: formData.industry,
        help_with: formData.help_with.join(', ') || undefined,
        current_challenges: formData.current_challenges,
        preferred_time: formData.preferred_time || undefined,
        hear_about: formData.hear_about || undefined,
        source_page: sourcePage
      }

      const { error } = await supabase
        .from('consultation_bookings')
        .insert([submissionData])

      if (error) {
        throw error
      }

      // Open Google Calendar with security best practices
      window.open(
        'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ20Vqo2cMGfOWDwybhkY_2j-rtsWeaqdmFsYiFZ5UY8gM8B3caO91sBgSYhvUuH_Hyo98CHSlZD?gv=true', 
        '_blank',
        'noopener,noreferrer'
      )
      
      const successMessage = '🎉 Success! Opening calendar to schedule your meeting.'
      setMessage(successMessage)
      
      // Reset form
      setFormData({
        full_name: '',
        email: '',
        business_name: '',
        industry: '',
        help_with: [],
        current_challenges: '',
        preferred_time: '',
        hear_about: ''
      })
      
      // Call success callback
      if (onSuccess) {
        setTimeout(() => {
          onSuccess()
        }, 2000)
      }
      
      // Clear message after delay
      setTimeout(() => {
        setMessage('')
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = 'Error submitting form. Please try again.'
      setMessage(errorMessage)
      if (onError) {
        onError(errorMessage)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      help_with: checked 
        ? [...prev.help_with, value]
        : prev.help_with.filter(item => item !== value)
    }))
  }

  const openGoogleCalendar = () => {
    window.open(
      'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ20Vqo2cMGfOWDwybhkY_2j-rtsWeaqdmFsYiFZ5UY8gM8B3caO91sBgSYhvUuH_Hyo98CHSlZD?gv=true', 
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className={compact ? 'space-y-4' : 'space-y-6'}>
      {showTitle && (
        <>
          <h2 className="text-3xl font-bold text-center mb-8">
            Book Your Free AI Consultation
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Tell us about your business and we'll provide a personalized AI roadmap to reaching all your goals, plus something fun.
          </p>
        </>
      )}
      
      <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-6'}>
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              required
              autoComplete="name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Business Name and Industry */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-2">
              Business/Project Name
            </label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              autoComplete="organization"
              value={formData.business_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select your industry</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Professional Services">Professional Services</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="Technology">Technology</option>
              <option value="Creative & Arts">Creative & Arts</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* What do you want help with */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What do you want help with? (Select all that apply)
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Website Development',
              'AI Automation',
              'Business Strategy',
              'AI Integration',
              'Content & Copy',
              'Other'
            ].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                  checked={formData.help_with.includes(option)}
                  onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Current Challenges */}
        <div>
          <label htmlFor="current_challenges" className="block text-sm font-medium text-gray-700 mb-2">
            Current Business Challenges *
          </label>
          <textarea
            id="current_challenges"
            name="current_challenges"
            required
            rows={4}
            value={formData.current_challenges}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            placeholder="What are your biggest time-consuming tasks or operational challenges?"
          />
        </div>

        {/* Preferred Time and How did you hear */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Meeting Time
            </label>
            <select
              id="preferred_time"
              name="preferred_time"
              value={formData.preferred_time}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select preferred time</option>
              <option value="Morning (9-12 PM)">Morning (9-12 PM)</option>
              <option value="Afternoon (12-5 PM)">Afternoon (12-5 PM)</option>
              <option value="Evening (5-8 PM)">Evening (5-8 PM)</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="hear_about" className="block text-sm font-medium text-gray-700 mb-2">
              How did you hear about Pattern3?
            </label>
            <input
              type="text"
              id="hear_about"
              name="hear_about"
              value={formData.hear_about}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Referral, search, social media, etc."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <Calendar className="w-5 h-5 mr-2" />
          {isSubmitting ? 'Submitting...' : 'Submit & Schedule Meeting'}
        </button>

        {/* Success/Error Message with Accessibility */}
        {message && (
          <div 
            className={`p-4 rounded-lg text-center ${
              message.includes('Success') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>
        )}

        {/* Footer */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-500">
            Secure submission • Free consultation • No payment required
          </p>
          <p className="text-xs text-gray-400">
            After submitting, you'll be directed to Google Calendar to choose your meeting time
          </p>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Prefer to schedule directly?</p>
            <button
              type="button"
              onClick={openGoogleCalendar}
              className="text-primary hover:text-primary-dark font-medium transition-colors flex items-center justify-center mx-auto"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Open Google Calendar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}