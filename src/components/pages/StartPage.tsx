import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import ConsultationModal from '../ui/ConsultationModal'
import ConsultationForm from '../forms/ConsultationForm'

export default function StartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="/images/pattern3black.png" 
              alt="Pattern3" 
              width="1000"
              height="500"
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
              onClick={() => setIsModalOpen(true)}
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
                  __html: `<iframe src="https://player.vimeo.com/video/1099434802?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="What is Pattern3?" loading="lazy"></iframe><script src="https://player.vimeo.com/api/player.js"></script>`
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
            <ConsultationForm
              sourcePage="/start"
              showTitle={true}
              compact={false}
            />
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

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}