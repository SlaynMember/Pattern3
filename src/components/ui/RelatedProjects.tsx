import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Card from './Card'
import OptimizedImage from './OptimizedImage'

interface RelatedProject {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

interface RelatedProjectsProps {
  currentProjectId: string
  currentCategory?: string
  maxItems?: number
}

export default function RelatedProjects({ 
  currentProjectId, 
  currentCategory,
  maxItems = 3 
}: RelatedProjectsProps) {
  const allProjects: RelatedProject[] = [
    {
      id: 'brand-builder',
      title: "AI Automation - Brand Builder",
      category: "Automation",
      description: "Fully automated workflow creating comprehensive brand guidelines and assets.",
      image: "/images/projects/ai automation/Pattern3Automation.png",
      tags: ["AI", "Automation", "Branding"]
    },
    {
      id: 'golf-canvas',
      title: "Golf Canvas Project",
      category: "AI Video",
      description: "Luxury canvas video production with AI-enhanced storytelling.",
      image: "/images/projects/ai video/cover.png",
      tags: ["AI Video", "Creative", "Luxury"]
    },
    {
      id: 'd32-text-rewriter',
      title: "D32 Text Message Re-Writer",
      category: "Personal Challenge",
      description: "Custom chatbot for professional, branded messaging.",
      image: "/images/projects/rewriter/cover.png",
      tags: ["AI", "Content", "Communication"]
    },
    {
      id: 'echo-transcription',
      title: "Echo - AI Transcription",
      category: "Personal Challenge",
      description: "AI-powered transcription tool for healthcare professionals.",
      image: "/images/projects/echo/cover.png",
      tags: ["Healthcare", "AI", "Transcription"]
    },
    {
      id: 'dental32-basketball',
      title: "Dental32 Basketball Initiative",
      category: "Sports Analytics",
      description: "Complete rebrand connecting culture team with local basketball.",
      image: "/images/projects/basketball/cover.jpg",
      tags: ["Sports", "Analytics", "Branding"]
    },
    {
      id: 'professional-photography',
      title: "Professional Photography Portfolio",
      category: "Photography",
      description: "Versatile photography across product, portrait, and dental work.",
      image: "/images/projects/professional/cover.png",
      tags: ["Photography", "Product Photography", "Portrait Photography"]
    }
  ]

  // Filter and sort related projects
  const getRelatedProjects = (): RelatedProject[] => {
    const filtered = allProjects.filter(project => project.id !== currentProjectId)
    
    // Prioritize same category projects
    const sameCategory = filtered.filter(project => project.category === currentCategory)
    const otherProjects = filtered.filter(project => project.category !== currentCategory)
    
    // Combine with same category first
    const sorted = [...sameCategory, ...otherProjects]
    
    return sorted.slice(0, maxItems)
  }

  const relatedProjects = getRelatedProjects()

  if (relatedProjects.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore more AI solutions and case studies from Pattern3
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Card key={project.id} hover className="group">
              <Link to={`/work/${project.id}`} className="block">
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
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors">
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/work"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}