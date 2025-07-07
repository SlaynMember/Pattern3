import { ArrowRight, Play, CheckCircle, Users, Zap, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                AI Solutions for the{' '}
                <span className="text-gradient">Little Guys</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pattern3 LLC brings enterprise-level AI to small businesses, solo entrepreneurs, 
                and creative teams. No dev team or massive budget required — just smart solutions 
                that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/start" className="btn-primary">
                  Start Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="btn-outline flex items-center justify-center">
                  <Play className="mr-2 w-5 h-5" />
                  View Past Work
                </button>
              </div>
            </div>
            
            <div className="lg:text-right">
              <img 
                src="/images/headshot.jpg" 
                alt="Will Patterson - Founder of Pattern3"
                className="w-80 h-80 object-cover rounded-2xl mx-auto lg:ml-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Pattern3 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Pattern3 LLC
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just implement AI — we craft experiences where AI meets human creativity.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">
              Human-Centered, Design-Driven AI Solutions
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3">Accessible to Everyone</h4>
                <p className="text-gray-600 text-sm">
                  Streamlined for small teams without advanced technical expertise or IT departments.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3">Design-Forward Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Beautiful, intuitive interfaces that make AI feel like a natural extension of your workflow.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3">Rapid Implementation</h4>
                <p className="text-gray-600 text-sm">
                  Custom-built solutions that ship fast and see real creative gains, not just automation wins.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold mb-3">Focus on the Biz</h4>
                <p className="text-gray-600 text-sm">
                  Powerful tech behind the scenes while understanding of your business challenges.
                </p>
              </div>
            </div>
          </div>

          {/* After Our Live Google Meet Call Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              After Our Live Google Meet Call, You'll Receive:
            </h3>
            <p className="text-center text-gray-600 mb-12">
              A personalized AI roadmap, no strings attached — even if you don't move forward.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-bold mb-3">PDF Roadmap</h4>
                <p className="text-gray-600 text-sm">
                  A comprehensive roadmap outlining your AI implementation strategy and timeline.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-bold mb-3">System Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Detailed analysis of your current systems and integration opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-bold mb-3">Follow-up Call</h4>
                <p className="text-gray-600 text-sm">
                  A follow-up session to discuss the roadmap and answer any questions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="text-lg font-bold mb-3">Cloud Breakdown</h4>
                <p className="text-gray-600 text-sm">
                  A breakdown of cloud infrastructure and ongoing costs for your solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who It's For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Healthcare Offices</h3>
              <p className="text-gray-600">
                Streamline patient intake and appointment scheduling while maintaining HIPAA compliance and improving patient experience.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Solo Founders</h3>
              <p className="text-gray-600">
                Automate the boring stuff so you can focus on what matters: building great products and serving customers.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Local Businesses</h3>
              <p className="text-gray-600">
                Compete with the big players using AI-powered customer service, inventory management, and marketing automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-gray-600">
              Real solutions for real businesses — see how we've helped others bridge technology and human connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card group cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/d32cover.png" 
                  alt="D32 Text Message Re-Writer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                D32 Text Message Re-Writer
              </h3>
              <p className="text-gray-600 mb-4">
                Built a custom chatbot assistant to help Darnell32 turn basic staff communication into professional, branded messaging.
              </p>
              <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                Content Creation
              </span>
            </div>
            
            <div className="card group cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/A1.jpg" 
                  alt="Echo - AI Transcription"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                Echo - AI Transcription
              </h3>
              <p className="text-gray-600 mb-4">
                Built an internal AI-powered transcription tool for healthcare professionals using React, Supabase, and advanced AI models.
              </p>
              <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                Healthcare
              </span>
            </div>
            
            <div className="card group cursor-pointer">
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/images/A2.jpg" 
                  alt="AI Automation - Brand Builder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                AI Automation - Brand Builder
              </h3>
              <p className="text-gray-600 mb-4">
                Built a fully automated workflow that takes brand inputs and creates comprehensive brand guidelines, assets, and advanced automations.
              </p>
              <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                Automation
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/work" className="btn-outline">
              View All Work <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to discover your AI opportunities?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your free consultation with Pattern3 LLC and get a clear roadmap for your business.
          </p>
          <Link to="/start" className="btn-accent">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}