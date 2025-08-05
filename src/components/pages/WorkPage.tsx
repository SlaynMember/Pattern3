import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OptimizedImage from '../ui/OptimizedImage'
import { LinkCluster } from '../ui/InternalLinkEnhancer'
import ClientTrustBanner from '../sections/ClientTrustBanner'

export default function WorkPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 'brand-builder',
      title: "AI Automation - Brand Builder",
      category: "Automation",
      description: "Built a fully automated workflow that takes brand inputs and creates comprehensive brand guidelines, assets, and advanced automations.",
      image: "/images/projects/ai automation/Pattern3Automation.png",
      tags: ["AI", "Automation", "Branding"]
    },
    {
      id: 'golf-canvas',
      title: "Golf Canvas Project",
      category: "AI Video",
      description: "A luxury canvas video production showcasing the intersection of golf and art through AI-enhanced storytelling.",
      image: "/images/projects/ai video/cover.png",
      tags: ["AI Video", "Creative", "Luxury"]
    },
    {
      id: 'd32-text-rewriter',
      title: "D32 Text Message Re-Writer",
      category: "Personal Challenge",
      description: "Built a custom chatbot assistant to help Darnell32 turn basic staff communication into professional, branded messaging.",
      image: "/images/projects/rewriter/cover.png",
      tags: ["AI", "Content", "Communication"]
    },
    {
      id: 'echo-transcription',
      title: "Echo - AI Transcription",
      category: "Personal Challenge",
      description: "Built an internal AI-powered transcription tool for healthcare professionals using React, Supabase, and advanced AI models.",
      image: "/images/projects/echo/cover.png",
      tags: ["Healthcare", "AI", "Transcription"]
    },
    {
      id: 'ai-implementation',
      title: "AI Implementation",
      category: "AI Implementation",
      description: "Comprehensive AI strategy and implementation for small businesses looking to leverage artificial intelligence.",
      image: "/images/projects/ai implementation/cover.jpg",
      tags: ["Strategy", "Implementation", "AI"]
    },
    {
      id: 'dental32-basketball',
      title: "Dental32 Basketball Initiative",
      category: "Sports Analytics",
      description: "Complete rebrand project connecting Dental32's culture team with local basketball.",
      image: "/images/projects/basketball/cover.jpg",
      tags: ["Sports", "Analytics", "Branding"]
    },
    {
      id: 'dna-customer-stories',
      title: "Getting Back to Our DNA",
      category: "Healthcare",
      description: "Strategic internal campaign analyzing business performance to create team motivation.",
      image: "/images/projects/dna/cover.jpg",
      tags: ["Healthcare", "Video", "Strategy"]
    },
    {
      id: 'new-patient-experience',
      title: "New Patient Experience",
      category: "Healthcare",
      description: "Comprehensive video production showcasing business highlights for new patients.",
      image: "/images/projects/new patient/cover.jpg",
      tags: ["Healthcare", "Video", "Patient Care"]
    },
    {
      id: 'local-business-perks',
      title: "Local Business Perks Program",
      category: "E-commerce",
      description: "Customer loyalty and rewards automation platform for local businesses and e-commerce stores.",
      image: "/images/projects/perks/cover.jpg",
      tags: ["E-commerce", "Loyalty", "Local Business"]
    },
    {
      id: 'professional-photography',
      title: "Professional Photography Portfolio",
      category: "Photography",
      description: "A showcase of professional photography skills demonstrating versatility across product, portrait, and dental photography.",
      image: "/images/projects/professional/cover.png",
      tags: ["Photography", "Product Photography", "Portrait Photography"]
    },
    {
      id: 'pattern3-starter-kit',
      title: "Pattern3 Starter Kit Funnel",
      category: "Product Development",
      description: "A free product offering built with Stripe + Supabase + Bolt.",
      image: "/images/projects/stripe/cover.png",
      tags: ["Stripe", "Automation", "Product"]
    }
  ]

  // Get unique categories for filter buttons
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const handleProjectClick = (projectId: string) => {
    navigate(`/work/${projectId}`)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Case Studies & <span className="text-gradient">Proof of Concept</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Recent builds and client outcomes showcasing real AI solutions for real businesses.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our <Link to="/about" className="text-primary hover:text-primary-dark font-medium">human-centered approach</Link> creates 
            AI solutions that save time and improve outcomes. Ready to get started? 
            <Link to="/start" className="text-primary hover:text-primary-dark font-medium ml-1">Book your free consultation</Link>.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeFilter === category
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Trust Banner */}
      <ClientTrustBanner />

      {/* All Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="card group cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <OptimizedImage
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleProjectClick(project.id)
                  }}
                >
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="text-primary font-medium hover:text-primary-dark transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleProjectClick(project.id)
                  }}
                >
                  View Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <LinkCluster
              title="Popular AI Solutions"
              links={[
                { 
                  text: "Healthcare AI automation", 
                  href: "/work?category=Healthcare",
                  description: "HIPAA-compliant tools for medical practices"
                },
                { 
                  text: "Business workflow automation", 
                  href: "/work?category=Automation",
                  description: "Save 7+ hours weekly with smart workflows"
                },
                { 
                  text: "Custom AI development", 
                  href: "/work?category=Personal%20Challenge",
                  description: "Tailored AI tools for specific business needs"
                }
              ]}
            />
            
            <LinkCluster
              title="Get Started Today"
              links={[
                { 
                  text: "Book free consultation", 
                  href: "/start",
                  description: "45-minute strategy session at no cost"
                },
                { 
                  text: "Learn about our process", 
                  href: "/about",
                  description: "Discover the Pattern3 methodology"
                },
                { 
                  text: "Meet the founder", 
                  href: "/about",
                  description: "Will Patterson's background and expertise"
                }
              ]}
            />
            
            <LinkCluster
              title="Success Stories"
              links={[
                { 
                  text: "Dental32 text automation", 
                  href: "/work/d32-text-rewriter",
                  description: "Saved 2+ hours daily on communication"
                },
                { 
                  text: "Echo transcription system", 
                  href: "/work/echo-transcription",
                  description: "4+ hours saved on medical documentation"
                },
                { 
                  text: "Brand automation workflow", 
                  href: "/work/brand-builder",
                  description: "Fully automated brand guideline creation"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}