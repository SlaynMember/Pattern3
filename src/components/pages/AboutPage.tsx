import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            About <span className="text-gradient">Pattern3</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make AI accessible and practical for small businesses. 
            No buzzwords, no complexity—just solutions that work.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vision-mission-container">
            <div className="vision-mission-column">
              <h2 className="vision-mission-header">Our Vision</h2>
              <p className="vision-mission-intro">
                Democratizing AI for small businesses everywhere
              </p>
              <p className="vision-mission-description">
                We believe that every business, regardless of size, should have access to the transformative power of artificial intelligence. Our vision is a world where small businesses can compete on equal footing with large corporations through intelligent automation and data-driven insights.
              </p>
              <p className="vision-mission-description">
                We're building the bridge between cutting-edge AI technology and practical business applications, making what was once exclusive to tech giants accessible to the local bakery, the family law firm, and the growing e-commerce startup.
              </p>
            </div>

            <div className="mobile-divider"></div>

            <div className="vision-mission-column">
              <h2 className="vision-mission-header">Our Mission</h2>
              <p className="vision-mission-intro">
                Delivering AI solutions that actually solve real problems
              </p>
              <p className="vision-mission-description">
                We cut through the AI hype to focus on what matters: solving real business challenges with practical, measurable solutions. Every project we take on must pass one simple test—does it make our client's business measurably better?
              </p>
              
              <div className="mission-points-container">
                <p className="mission-points-intro">
                  Our approach is built on three core principles:
                </p>
                
                <div className="mission-points-grid">
                  <div className="mission-point">
                    <div className="mission-icon">1</div>
                    <div className="mission-content">
                      <h4 className="mission-subheader">Practical First</h4>
                      <p className="mission-description">
                        We prioritize solutions that deliver immediate, tangible value over impressive-sounding technology that doesn't move the needle.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mission-point">
                    <div className="mission-icon">2</div>
                    <div className="mission-content">
                      <h4 className="mission-subheader">Human-Centered</h4>
                      <p className="mission-description">
                        AI should enhance human capabilities, not replace them. We design systems that empower your team to do their best work.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mission-point">
                    <div className="mission-icon">3</div>
                    <div className="mission-content">
                      <h4 className="mission-subheader">Growth Focused</h4>
                      <p className="mission-description">
                        Every solution we build is designed to scale with your business, adapting and growing as your needs evolve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the Founder
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/5">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">W</span>
                </div>
              </div>
              
              <div className="lg:w-3/5 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Will</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  After years of watching small businesses struggle with technology that promised the world but delivered complexity, I founded Pattern3 to bridge the gap between AI innovation and practical business solutions.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My background spans software development, business operations, and AI implementation across various industries. I've seen firsthand how the right technology can transform a business—and how the wrong approach can waste time and money.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  At Pattern3, we're not just building AI solutions; we're building partnerships with businesses ready to embrace the future of work.
                </p>
                
                <Link to="/start" className="btn-primary">
                  Let's Work Together <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every solution we build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Clear communication, honest timelines, and no hidden complexities. You'll always know exactly what we're building and why.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-gray-600">
                We measure success by your success. Every solution must deliver measurable improvements to your business operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Simplicity</h3>
              <p className="text-gray-600">
                Complex problems don't require complex solutions. We believe in elegant, intuitive systems that just work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-gray-600">
                We're not just vendors; we're partners in your growth. Your success is our success, and we're invested in the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's have a conversation about how AI can transform your business.
          </p>
          <Link to="/start" className="btn-accent">
            Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}