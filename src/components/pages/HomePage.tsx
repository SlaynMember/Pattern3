import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              AI Solutions for{' '}
              <span className="text-gradient">Small Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with custom AI automation, intelligent workflows, 
              and data-driven insights that actually work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/start" className="btn-primary">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-outline flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What is Pattern3?
            </h2>
            <p className="text-lg text-gray-600">
              See how we're transforming small businesses with AI
            </p>
          </div>
          <div className="relative" style={{ padding: '56.25% 0 0 0', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              src="https://player.vimeo.com/video/1099434802?title=0&byline=0&portrait=0&autoplay=0&playsinline=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="What is Pattern3?"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Help Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From automation to insights, we build AI solutions that grow with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">AI Automation</h3>
              <p className="text-gray-600">
                Streamline repetitive tasks and workflows with intelligent automation that learns and adapts.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Data Insights</h3>
              <p className="text-gray-600">
                Turn your business data into actionable insights with AI-powered analytics and reporting.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored AI implementations designed specifically for your industry and business needs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/work" className="btn-outline">
              View Our Work <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can solve your specific challenges and unlock new opportunities.
          </p>
          <Link to="/start" className="btn-accent">
            Start Your AI Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}