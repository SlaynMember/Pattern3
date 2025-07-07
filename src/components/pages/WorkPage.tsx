import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function WorkPage() {
  const navigate = useNavigate()

  const projects = [
    {
      id: 'brand-builder',
      title: "AI Automation - Brand Builder",
      category: "Automation",
      description: "Built a fully automated workflow that takes brand inputs and creates comprehensive brand guidelines, assets, and advanced automations.",
      image: "/images/A2.jpg",
      tags: ["AI", "Automation", "Branding"]
    },
    {
      id: 'golf-canvas',
      title: "Golf Canvas Project",
      category: "AI Video",
      description: "A luxury canvas video production showcasing the intersection of golf and art through AI-enhanced storytelling.",
      image: "/images/golfcover.png",
      tags: ["AI Video", "Creative", "Luxury"]
    },
    {
      id: 'd32-text-rewriter',
      title: "D32 Text Message Re-Writer",
      category: "Personal Challenge",
      description: "Built a custom chatbot assistant to help Darnell32 turn basic staff communication into professional, branded messaging.",
      image: "/images/d32cover.png",
      tags: ["AI", "Content", "Communication"]
    },
    {
      id: 'echo-transcription',
      title: "Echo - AI Transcription",
      category: "Personal Challenge",
      description: "Built an internal AI-powered transcription tool for healthcare professionals using React, Supabase, and advanced AI models.",
      image: "/images/A1.jpg",
      tags: ["Healthcare", "AI", "Transcription"]
    },
    {
      id: 'ai-implementation',
      title: "AI Implementation",
      category: "AI Implementation",
      description: "Comprehensive AI strategy and implementation for small businesses looking to leverage artificial intelligence.",
      image: "/images/Pattern3Automation.png",
      tags: ["Strategy", "Implementation", "AI"]
    },
    {
      id: 'dental32-basketball',
      title: "Dental32 Basketball Initiative",
      category: "Sports Analytics",
      description: "Complete rebrand project connecting Dental32's culture team with local basketball.",
      image: "/images/b1.jpg",
      tags: ["Sports", "Analytics", "Branding"]
    },
    {
      id: 'dna-customer-stories',
      title: "Getting Back to Our DNA",
      category: "Healthcare",
      description: "Comprehensive video production showcasing customer highlights for a healthcare DNA analysis company.",
      image: "/images/photogcover.png",
      tags: ["Healthcare", "Video", "Customer Stories"]
    },
    {
      id: 'new-patient-experience',
      title: "New Patient Experience",
      category: "Healthcare",
      description: "Streamlined patient onboarding and experience optimization for healthcare practices.",
      image: "/images/newptcover.jpg",
      tags: ["Healthcare", "UX", "Patient Care"]
    },
    {
      id: 'local-business-perks',
      title: "Local Business Perks Program",
      category: "E-commerce",
      description: "Customer loyalty and rewards automation platform for local businesses and e-commerce stores.",
      image: "/images/stripecover.png",
      tags: ["E-commerce", "Loyalty", "Local Business"]
    },
    {
      id: 'pattern3-starter-kit',
      title: "Pattern3 Starter Kit Funnel",
      category: "Product Development",
      description: "A free product offering built with Stripe + Supabase + Bolt.",
      image: "/images/p1.jpg",
      tags: ["Stripe", "Automation", "Product"]
    }
  ]


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
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <button className="px-4 py-2 text-primary border-b-2 border-primary font-medium">
                All
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-primary transition-colors">
                Healthcare
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-primary transition-colors">
                AI Tools
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-primary transition-colors">
                Creative
              </button>
              <button className="px-4 py-2 text-gray-500 hover:text-primary transition-colors">
                Automation
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* All Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="card group cursor-pointer"
                onClick={() => navigate(`/work/${project.id}`)}
              >
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
                
                <button className="text-primary font-medium hover:text-primary-dark transition-colors">
                  View Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}