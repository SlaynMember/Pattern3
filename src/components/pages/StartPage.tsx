import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

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
              src="/images/logos/pattern3black.png" 
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

          {/* Video Section */}
          <div style={{ margin: '3rem 0' }}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
              <iframe
                src="https://player.vimeo.com/video/1099434802?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="What is Pattern3?"
              />
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
                    Business Name
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
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="help_with" className="block text-sm font-medium text-gray-700 mb-2">
                  What would you like help with?
                </label>
                <input
                  type="text"
                  id="help_with"
                  name="help_with"
                  value={formData.help_with}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Automating customer service, Data analysis, Process optimization"
                />
              </div>

              <div>
                <label htmlFor="current_challenges" className="block text-sm font-medium text-gray-700 mb-2">
                  What are your current biggest challenges? *
                </label>
                <textarea
                  id="current_challenges"
                  name="current_challenges"
                  required
                  rows={4}
                  value={formData.current_challenges}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about the challenges you're facing that AI might help solve..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    How did you hear about us?
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
                {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </button>
            </form>

            {message && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center">{message}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
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
                Send us a detailed message about your project and we'll get back to you within 24 hours.
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
                Follow our work and insights, or send us a DM for quick questions.
              </p>
              <a 
                href="https://instagram.com/pattern3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                @pattern3
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}