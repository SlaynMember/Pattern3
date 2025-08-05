// Static optimized image component for build-time compatibility
function StaticImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '' 
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            About <span className="text-gradient">Pattern3 LLC</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI strategy, automation, and design-forward tools that bridge technology and human connection.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Do
            </h2>
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              Pattern3 LLC specializes in making advanced AI accessible to small businesses, solo entrepreneurs, 
              and creative teams. We don't just implement technology — we craft human-centered experiences 
              that feel intuitive and natural.
            </p>
            
            <p>
              Our approach combines cutting-edge AI capabilities with thoughtful design and rapid 
              implementation, delivering solutions that feel intuitive and resonate with your users while solving real 
              business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Will Patterson */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Will Patterson
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  As the founder of Pattern3 LLC, my journey has been shaped by a unique perspective forged 
                  across cultures, disciplines, and technologies. Raised in the artistic landscapes of Italy, 
                  I developed an eye for design and beauty that continues to influence my approach to AI 
                  innovation.
                </p>
                
                <p>
                  My academic path began in medicine at Baylor University, where I developed the analytical 
                  and systematic thinking that now drives my approach to solving complex business problems. 
                  This foundation in scientific rigor, combined with my natural affinity for creative solutions, 
                  led me to discover where technology, design, and human understanding become my passion.
                </p>
                
                <p>
                  What sets my approach apart is my passion for storytelling at the bridge between technology and 
                  humanity. I don't see AI implementation as a purely technical challenge, but as an opportunity to create 
                  solutions that feel compelling story that resonates on a fundamental human level. Making complex 
                  technology accessible, meaningful, and impactful.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 text-center">
              <StaticImage
                src="/images/headshot.jpg" 
                alt="Will Patterson - Founder of Pattern3"
                width={320}
                height={320}
                className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Pattern3 Way */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Pattern3 Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our methodology emphasizes narrative-driven, visual-first, no-code enabled builds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">N</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Narrative-Driven</h3>
              <p className="text-gray-600">
                Every solution starts with understanding your story, your challenges, and your vision for the future.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Visual-First</h3>
              <p className="text-gray-600">
                Beautiful, intuitive interfaces that make AI feel like a natural extension of your workflow.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">N</span>
              </div>
              <h3 className="text-xl font-bold mb-4">No-Code Enabled</h3>
              <p className="text-gray-600">
                Rapid prototyping and implementation using modern no-code tools that integrate seamlessly with your existing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finding the Pattern */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Finding the Pattern
            </h2>
            <p className="text-lg text-gray-600">
              At Pattern3, we believe that every challenge has a pattern — a repeatable solution that combines design thinking, cutting-edge technology, and human-centered approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Discover</h3>
              <p className="text-gray-600">
                We identify the patterns in your workflow and uncover opportunities for AI enhancement.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <p className="text-gray-600">
                We craft human-centered solutions that feel intuitive and align with your business goals.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Deploy</h3>
              <p className="text-gray-600">
                We implement and deploy AI tools that integrate seamlessly into your existing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Tools
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              'Claude', 'Bolt', 'Supabase', 'Stripe', 'GPT-4', 'OpenAI', 'Meta', 'Google Cloud',
              'LangChain', 'JavaScript', 'APIs', 'No-Code', 'AI Agents'
            ].map((skill) => (
              <div key={skill} className="bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors">
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Childhood Photo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <StaticImage
            src="/images/childhood.jpg" 
            alt="Will and his brother as children"
            width={320}
            height={320}
            className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-2xl mb-8"
          />
          <p className="text-lg text-gray-600 italic">
            "Growing up with my brother taught me that the best solutions come from understanding people first, technology second."
          </p>
        </div>
      </section>
    </div>
  )
}