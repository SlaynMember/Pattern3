import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Users, Building, Stethoscope, UserCheck, FileText, Video, Plus, Shield, Zap, Target, Sparkles } from 'lucide-react'
import { projectsData } from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'AI Solutions for Small Businesses',
  description: 'Pattern3 LLC brings enterprise-level AI to small businesses, solo founders, and creative teams. No dev team or massive budget required.',
  openGraph: {
    title: 'Pattern3 | AI Solutions for Small Businesses',
    description: 'Pattern3 LLC brings enterprise-level AI to small businesses, solo founders, and creative teams.',
    url: 'https://pattern3.com',
    images: ['/images/profile/headshot.jpg'],
  },
}

// Generate structured data for home page
function generateHomeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://pattern3.com/#website',
    name: 'Pattern3 LLC',
    url: 'https://pattern3.com',
    description: 'AI solutions and automation services for small businesses, healthcare practices, and startups.',
    publisher: {
      '@id': 'https://pattern3.com/#organization'
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://pattern3.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    ],
    mainEntity: {
      '@id': 'https://pattern3.com/#organization'
    }
  }
}

export default function HomePage() {
  // Get specific projects for featured work
  const featuredProjects = [
    projectsData.find(p => p.id === 'd32-text-rewriter'),
    projectsData.find(p => p.id === 'echo'),
    projectsData.find(p => p.id === 'ai-automation')
  ].filter(Boolean)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHomeStructuredData()),
        }}
      />
      
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="hero-bg relative min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-full">
            <div className="flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-8 lg:gap-12 max-w-full">
              <div className="lg:w-3/5 text-left max-w-full">
                <h1 className="leading-tight max-w-full mb-6">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
                    <span className="block sm:inline">AI Solutions for the </span>
                    <span className="text-gradient font-black block sm:inline whitespace-nowrap">Little Guys</span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  Pattern3 LLC brings enterprise-level AI to small businesses, solo founders, and creative teams. 
                  No dev team or massive budget required — just smart solutions that work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-full">
                  <Link
                    href="/start"
                    className="btn-primary inline-flex items-center justify-center gap-3 text-base md:text-lg max-w-full"
                  >
                    Book Free Consultation <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/work"
                    className="btn-outline inline-flex items-center justify-center gap-3 text-base md:text-lg max-w-full"
                  >
                    View Case Studies
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-6 max-w-full">
                  Based in Oklahoma City, serving clients nationwide.
                </p>
              </div>
              <div className="lg:w-2/5 max-w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-full">
                  <Image
                    src="/images/profile/headshot.jpg"
                    alt="Will Patterson - Founder of Pattern3 LLC"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover max-w-full"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pattern3 Section */}
        <section className="section-light relative">
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-full">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20 max-w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6">Why Pattern3 LLC</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  We don't just implement AI — we craft experiences where AI meets human creativity.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto text-left">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-10 text-gray-900 max-w-full">
                  Human-Centered, Design-Driven AI Solutions
                </h3>
                
                <div className="space-y-8 max-w-full">
                  <div className="flex items-start gap-4 md:gap-6 max-w-full">
                    <div className="card-icon flex-shrink-0">
                      <Zap className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="max-w-full overflow-hidden">
                      <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Accessible AI for everyone.</h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Solutions designed for small teams without enterprise budgets or IT departments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6 max-w-full">
                    <div className="card-icon flex-shrink-0">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="max-w-full overflow-hidden">
                      <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Design meets technology.</h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Beautiful, intuitive systems that feel like creative partners, not just automation tools.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6 max-w-full">
                    <div className="card-icon flex-shrink-0">
                      <Target className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="max-w-full overflow-hidden">
                      <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Rapid implementation.</h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Launch your first AI-driven feature in weeks, not months, with zero-code prototypes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6 max-w-full">
                    <div className="card-icon flex-shrink-0">
                      <Users className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="max-w-full overflow-hidden">
                      <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Local expertise, global innovation.</h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Oklahoma City-based with deep understanding of real business challenges.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6 max-w-full">
                    <div className="card-icon flex-shrink-0">
                      <Shield className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="max-w-full overflow-hidden">
                      <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Proven in the field.</h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                        Built by someone who's worked directly with healthcare, startups, and creative teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-12 md:py-16 bg-gray-50 overflow-x-hidden relative">
          <div className="container mx-auto px-4 md:px-8 max-w-full relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 max-w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
                  After Our Live Google Meet Call, You'll Receive:
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  A personalized AI roadmap, no strings attached — even if you don't move forward.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-full">
                {[
                  {
                    icon: FileText,
                    title: "PDF Roadmap",
                    description: "Personalized with automation opportunities and quick wins for your specific business."
                  },
                  {
                    icon: UserCheck,
                    title: "System Analysis",
                    description: "A walkthrough of your current system bottlenecks and inefficiencies."
                  },
                  {
                    icon: Video,
                    title: "Follow-up Calls",
                    description: "1–2 follow-up calls with tailored updates and action plans."
                  },
                  {
                    icon: Plus,
                    title: "Visual Breakdown",
                    description: "A fully visual breakdown of what your business could look like with modern AI tools."
                  }
                ].map((item, index) => (
                  <div key={index} className="card text-center max-w-full relative">
                    <div className="relative">
                      <div className="card-icon mx-auto">
                        <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="section-light overflow-x-hidden relative">
          <div className="container mx-auto px-4 md:px-8 max-w-full relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 max-w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-gray-900">
                  Who It's For
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-full">
                {[
                  {
                    icon: Stethoscope,
                    title: "Healthcare Clinics",
                    description: "Drowning in paperwork and manual processes? We'll show you where AI can save hours daily.",
                    gradient: "from-blue-500 to-blue-600",
                    bgGradient: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: Users,
                    title: "Solo Founders",
                    description: "Overwhelmed by AI tool options? We'll cut through the noise and focus on what actually moves your business.",
                    gradient: "from-purple-500 to-purple-600",
                    bgGradient: "from-purple-50 to-purple-100"
                  },
                  {
                    icon: Building,
                    title: "Local Businesses",
                    description: "Running on outdated systems? Discover simple AI upgrades that don't require a tech team.",
                    gradient: "from-green-500 to-green-600",
                    bgGradient: "from-green-50 to-green-100"
                  }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${item.bgGradient} p-8 md:p-10 rounded-3xl text-center card max-w-full`}>
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg flex-shrink-0`}>
                      <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="section-gray overflow-x-hidden relative">
          <div className="container mx-auto px-4 md:px-8 max-w-full relative z-10">
            <div className="text-center mb-16 max-w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Featured Work</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Real solutions for real businesses — see how we've helped clients bridge technology and human connection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-full">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="max-w-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 max-w-full">
              <Link
                href="/work"
                className="btn-primary inline-flex items-center gap-3 text-base md:text-lg"
              >
                View All Case Studies <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-dark overflow-x-hidden relative">
          <div className="container mx-auto px-4 md:px-8 max-w-full relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-white">
                Ready to discover your AI opportunities?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-gray-300">
                Book your free consultation with Pattern3 LLC and get a clear roadmap for your business.
              </p>
              <Link
                href="/start"
                className="btn-accent inline-flex items-center gap-3 text-lg md:text-xl px-8 md:px-10 py-4 md:py-5"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                Book Free Consultation
              </Link>
              <p className="text-sm text-gray-400 mt-6">
                Live Google Meet call + personalized PDF roadmap.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}