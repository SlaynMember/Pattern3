import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

export default function StartPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    business_name: '',
    industry: '',
    help_with: '',
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
      // Add source page tracking
      const submissionData = {
        ...formData,
        source_page: '/start'
      }

      // Here you would integrate with your Supabase client
      // For now, we'll simulate the submission
      console.log('Form submission:', submissionData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage('🎉 Thanks! Check your inbox for next steps.')
      setFormData({
        full_name: '',
        email: '',
        business_name: '',
        industry: '',
        help_with: '',
        current_challenges: '',
        preferred_time: '',
        hear_about: ''
      })
    } catch (error) {
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Process Development</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">AI Automation</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">AI Integration</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Content & Copy</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Other</span>
                  </label>
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
                  <select
                    id="hear_about"
                    name="hear_about"
                    value={formData.hear_about}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select source</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Referral">Referral</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit & Schedule Meeting'}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </button>
            </form>

            {message && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center">{message}</p>
              </div>
            )}

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Prefer a more direct approach? + Free consultation + No payment required
              </p>
              <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                📅 Open Google Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What to Include in Your Message
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
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