import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { supabase, type ConsultationBooking } from '../../lib/supabase'

export default function StartPage() {
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
        source_page: '/start'
      }

      const { error } = await supabase
        .from('consultation_bookings')
        .insert([submissionData])

      if (error) {
        throw error
      }

      // Redirect to Google Calendar
      window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ20Vqo2cMGfOWDwybhkY_2j-rtsWeaqdmFsYiFZ5UY8gM8B3caO91sBgSYhvUuH_Hyo98CHSlZD?gv=true', '_blank')
      
      setMessage('🎉 Success! Opening calendar to schedule your meeting.')
      
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
      
      // Clear message after short delay
      setTimeout(() => {
        setMessage('')
      }, 3000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage('Error submitting form. Please try again.')
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
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ20Vqo2cMGfOWDwybhkY_2j-rtsWeaqdmFsYiFZ5UY8gM8B3caO91sBgSYhvUuH_Hyo98CHSlZD?gv=true', '_blank')
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/images/pattern3black.png" 
              alt="Pattern3" 
              className="h-12 mx-auto mb-8"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Let's Talk About Your{' '}
            <span className="text-gradient">AI Journey</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to explore how AI can transform your business? Let's start a 
            conversation about your goals, challenges, and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <button 
              onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <ArrowRight className="mr-2 w-5 h-5" />
              Book Free Consultation
            </button>
            <a 
              href="mailto:will@pattern3.com"
              className="btn-outline flex items-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* How to Reach Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          {/* What is Pattern3 Video */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              What is Pattern3?
            </h2>
            <div className="max-w-3xl mx-auto">
              <div 
                style={{padding: '56.25% 0 0 0', position: 'relative'}}
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://player.vimeo.com/video/1099434802?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="What is Pattern3?"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`
                }}
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-600 mb-4">
                Send us a detailed message about your project or questions. We'll get back to you within 24-48 hours with a thoughtful response.
              </p>
              <a 
                href="mailto:will@pattern3.com"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                will@pattern3.com
              </a>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">IG</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <p className="text-gray-600 mb-4">
                Follow our work and insights on Instagram, or send us a DM for quick questions.
              </p>
              <a 
                href="https://instagram.com/pattern3solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                @pattern3solutions on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Book Your Free AI Consultation
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Tell us about your business and we'll provide a personalized AI roadmap to reaching all your goals, plus something fun.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Business/Project Name
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
                
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    What industry are you in? *
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

              <div>
                <label htmlFor="help_with" className="block text-sm font-medium text-gray-700 mb-2">
                  What do you want help with? (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3 mt-2">
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

              <div>
                <label htmlFor="current_challenges" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your current challenges *
                </label>
                <textarea
                  id="current_challenges"
                  name="current_challenges"
                  required
                  rows={4}
                  value={formData.current_challenges}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="What are your biggest challenges that AI might help solve? (e.g., time-consuming tasks, data analysis, customer service, etc.)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred meeting time
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit & Schedule Meeting'}
              </button>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded-lg text-center ${
                message.includes('Success') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}>
                {message}
              </div>
            )}

            <div className="mt-8 text-center px-4">
              <p className="text-sm text-gray-500">
                Secure submission • Free consultation • No payment required
              </p>
              <p className="text-xs text-gray-400 mt-2">
                After submitting, you'll be directed to Google Calendar to choose your meeting time
              </p>
              
              <div className="pt-4 border-t border-gray-200 mt-4">
                <p className="text-sm text-gray-600 mb-3">Prefer to schedule directly?</p>
                <button
                  type="button"
                  onClick={openGoogleCalendar}
                  className="text-primary hover:text-primary-dark font-medium transition-colors flex items-center justify-center mx-auto"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Open Google Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What to Include in Your Message
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
            <div>
              <h3 className="text-xl font-bold mb-4">About Your Business</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• What industry you're in</li>
                <li>• Size of your team</li>
                <li>• Current challenges you're facing</li>
                <li>• What you hope to achieve</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">About Your Project</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Timeline for implementation</li>
                <li>• Budget considerations</li>
                <li>• Any specific AI tools you're interested in</li>
                <li>• Questions about our process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6 px-4 md:px-0">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How quickly do you respond?</h3>
              <p className="text-gray-600">
                I typically respond to emails within 24-48 hours during business days.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Do you offer free consultations?</h3>
              <p className="text-gray-600">
                Yes! I offer free initial consultations to understand your needs and see if we're a good fit.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">What types of projects do you work on?</h3>
              <p className="text-gray-600">
                I specialize in AI automation, custom tools, and systems integration for small to medium businesses.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Do you work with businesses outside healthcare?</h3>
              <p className="text-gray-600">
                Absolutely! While I have experience in healthcare, I work with businesses across many industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}