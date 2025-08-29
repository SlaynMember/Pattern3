import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import RelatedProjects from '../ui/RelatedProjects'
import StructuredData from '../ui/StructuredData'

interface Project {
  title: string
  category: string
  tags: string[]
  year: string
  client: string
  services: string
  overview: string
  description: string
  vimeoEmbed?: string
  images?: string[]
  nextProject?: string
}

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)

  // Helper function to get project images (cover + up to 5 additional images)
  const getProjectImages = (folderPath: string): string[] => {
    const images: string[] = []
    
    // Project-specific image handling
    switch (folderPath) {
      case 'rewriter':
        images.push(
          `/images/projects/rewriter/cover.png`,
          `/images/projects/rewriter/screenshot 2025-06-07 155840.png`,
          `/images/projects/rewriter/screenshot 2025-06-07 160145.png`,
          `/images/projects/rewriter/screenshot 2025-06-07 160158.png`
        )
        break
      case 'echo':
        images.push(
          `/images/projects/echo/cover.png`,
          `/images/projects/echo/1.jpg`,
          `/images/projects/echo/2.jpg`
        )
        break
      case 'basketball':
        images.push(
          `/images/projects/basketball/cover.jpg`,
          `/images/projects/basketball/1.jpg`,
          `/images/projects/basketball/2.jpg`,
          `/images/projects/basketball/3.jpg`,
          `/images/projects/basketball/4.jpg`
        )
        break
      case 'perks':
        images.push(
          `/images/projects/perks/cover.jpg`,
          `/images/projects/perks/p1.jpg`,
          `/images/projects/perks/p3.jpg`
        )
        break
      case 'ai automation':
        images.push(
          `/images/projects/ai automation/Pattern3Automation.png`
        )
        break
      default:
        // For projects without additional images, just use cover
        const extensions = ['png', 'jpg']
        for (const ext of extensions) {
          images.push(`/images/projects/${folderPath}/cover.${ext}`)
          break // Just try the first one that might exist
        }
    }
    
    return images.slice(0, 6) // Limit to 6 images max (cover + 5 additional)
  }

  // Project data - updated with correct folder paths and details
  const projects: Record<string, Project> = {
    'brand-builder': {
      title: "AI Automation - Brand Builder",
      category: "Automation",
      tags: ["AI Automation", "No-Code", "Brand Strategy", "OpenAI", "Docker"],
      year: "2024",
      client: "Internal Project",
      services: "Automation Development, Brand Strategy, System Architecture",
      overview: "Built a fully automated workflow that takes a client's form submission and turns it into a full brand voice guide — styled, written, and delivered automatically.",
      description: "This is a fully automated brand system built using n8n, Docker, and the OpenAI API — all running locally, powered by curiosity and extensive research. The system takes client input through a Tally form, processes it via a self-hosted n8n instance through ngrok, and leverages GPT-4o using OpenAI's API. The custom-built prompt returns a comprehensive tone-of-voice breakdown, writing examples, and personality guide structured like a creative brief. The result is automatically formatted into a Google Doc and delivered via email. Running on a local PC with Docker and PowerShell, this solution eliminates expensive backend costs, with OpenAI API being the only significant expense at just cents per submission — far more cost-effective than traditional writing or strategy services.",
      vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1088605068?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" width="2160" height="3840" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Fully Automated Brand Builder – Powered by AI + No-Code"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      images: getProjectImages('ai automation'),
      nextProject: 'golf-canvas'
    },
    'golf-canvas': {
      title: "Golf Canvas Project",
      category: "AI Video",
      tags: ["AI Video", "Creative", "Luxury"],
      year: "2024",
      client: "Internal Project",
      services: "AI Video Generation, Content Creation, Prompt Engineering",
      overview: "A Spotify Canvas video built with Sora, designed to capture the surreal drama of impact — and destruction — on the green.",
      description: "This experimental content project explores the intersection of AI video generation and cinematic storytelling. Using Sora (OpenAI) for ultra-realistic video generation, the concept plays on cinematic suspense — imagining a golfer witnessing supernatural interference on the green. Built as a looped Canvas for Spotify, it's intended to feel like a teaser to something bigger, with sci-fi or horror adjacent vibes. The project required careful prompt engineering to achieve realistic textures and handheld camera feel, while timing the blast and reaction to sync with music. This showcases Sora's frame control and scene realism capabilities to avoid typical CGI weirdness, demonstrating advanced AI art-direction workflows.",
      vimeoEmbed: `<div style="padding:167.47% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1093384622?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Spotify Canvas (Professional-Grade AI Video)" loading="lazy"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      images: ['/images/projects/ai video/cover.png'],
      nextProject: 'd32-text-rewriter'
    },
    'd32-text-rewriter': {
      title: "D32 Text Message Re-Writer",
      category: "Personal Challenge",
      tags: ["AI", "Healthcare", "Communication"],
      year: "2024",
      client: "Dental32",
      services: "AI Development, Healthcare Solutions, Communication Tools",
      overview: "Built a custom chatbot assistant to help Dental32 turn basic staff communication into professional, branded messaging.",
      description: "A specialized AI tool designed to transform casual staff communications into professional, brand-consistent messaging that maintains the authentic voice while elevating the presentation. This solution improved patient communication quality and reduced staff training time for professional correspondence. The system features an intuitive interface that allows staff members to input their basic messages and receive polished, professional versions that align with Dental32's brand voice and communication standards.",
      images: getProjectImages('rewriter'),
      nextProject: 'echo-transcription'
    },
    'echo-transcription': {
      title: "Echo - AI Transcription",
      category: "Personal Challenge",
      tags: ["Healthcare", "AI", "Transcription"],
      year: "2024",
      client: "Healthcare Practice",
      services: "AI Development, Healthcare Solutions, Transcription Technology",
      overview: "Built an internal AI-powered transcription tool for healthcare professionals using React, Supabase, and advanced AI models.",
      description: "A comprehensive transcription solution designed specifically for healthcare environments, ensuring accuracy, privacy, and seamless integration with existing workflows. The system provides real-time transcription capabilities with medical terminology recognition and HIPAA-compliant data handling.",
      images: getProjectImages('echo'),
      nextProject: 'ai-implementation'
    },
    'ai-implementation': {
      title: "AI Implementation Strategy",
      category: "AI Implementation",
      tags: ["Strategy", "Implementation", "AI"],
      year: "2024",
      client: "Multiple Clients",
      services: "AI Strategy, Implementation Planning, System Integration",
      overview: "Comprehensive AI strategy and implementation for small businesses looking to leverage artificial intelligence.",
      description: "A strategic approach to AI implementation that focuses on practical, measurable outcomes for small and medium businesses. This service includes assessment of current systems, identification of AI opportunities, and step-by-step implementation planning with clear ROI metrics.",
      images: ['/images/projects/ai implementation/cover.jpg'],
      nextProject: 'dental32-basketball'
    },
    'dental32-basketball': {
      title: "Dental32 Basketball Initiative",
      category: "Sports Analytics",
      tags: ["Branding", "Sports", "Community Engagement"],
      year: "2024",
      client: "Dental32",
      services: "Brand Strategy, Logo Design, Community Relations",
      overview: "Complete rebranding project connecting Dental32's culture team with local basketball.",
      description: "A comprehensive rebranding initiative that united Dental32's culture team with local basketball, creating a unique community engagement opportunity. This project involved full logo development and brand strategy, effectively bridging corporate culture with community sports to create meaningful connections and strengthen our local presence.",
      images: getProjectImages('basketball'),
      nextProject: 'dna-customer-stories'
    },
    'dna-customer-stories': {
      title: "Getting Back to Our DNA",
      category: "Healthcare",
      tags: ["Healthcare", "Video", "Strategy"],
      year: "2024",
      client: "Dental32",
      services: "Strategy Development, Internal Communications, AI Video Generation",
      overview: "Strategic internal campaign analyzing business performance to create team motivation.",
      description: 'Through careful analysis of our company\'s past two years of business performance, we developed a powerful internal campaign centered around the concept of "getting back to our DNA" and "finding our DNA." The campaign\'s centerpiece features a stunning DNA strand visual created entirely through generative AI using Kling and Sora. This required extensive prompt engineering and editing expertise to achieve the perfect blend of scientific accuracy and artistic appeal. The result is a compelling narrative that unites our team around core values and strategic goals, demonstrating how cutting-edge AI technology can be leveraged to create impactful internal communications.',
      vimeoEmbed: `<iframe src="https://player.vimeo.com/video/1075751446?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" width="3840" height="2160" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" title="Dental32 Presents: The DNA Project" style="width: 100%; height: 56.25%; position: absolute; top: 0; left: 0;" loading="lazy"></iframe>`,
      images: ['/images/projects/dna/cover.jpg'],
      nextProject: 'new-patient-experience'
    },
    'new-patient-experience': {
      title: "New Patient Experience",
      category: "Healthcare",
      tags: ["Healthcare", "Video", "Patient Care"],
      year: "2024",
      client: "Dental32",
      services: "Video Production, Content Creation, Patient Communications",
      overview: "Comprehensive video production showcasing business highlights for new patients.",
      description: "Wrote, directed, and produced an engaging video presentation for new Dental32 patients. The video effectively communicates our business highlights and core values, creating a welcoming and informative first impression for patients beginning their journey with our practice.",
      vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1044757293?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Your First Visit: The Dental32 Difference" loading="lazy"></iframe></div>`,
      images: ['/images/projects/new patient/cover.jpg'],
      nextProject: 'local-business-perks'
    },
    'local-business-perks': {
      title: "Local Business Perks Program",
      category: "E-commerce",
      tags: ["Strategy", "Healthcare", "Community"],
      year: "2024",
      client: "Dental32",
      services: "Program Development, Business Strategy, Community Outreach",
      overview: "Innovative strategy connecting local businesses with affordable dental care.",
      description: "Developed and implemented a strategic program that creates mutually beneficial relationships between local small businesses and our dental practice. The initiative provides affordable dental care options while strengthening community business ties, resulting in a win-win situation for both the local business community and healthcare access.",
      images: getProjectImages('perks'),
      nextProject: 'pattern3-starter-kit'
    },
    'pattern3-starter-kit': {
      title: "Pattern3 Starter Kit Funnel",
      category: "Product Development",
      tags: ["Stripe Integration", "Automation", "Product Development"],
      year: "2024",
      client: "Internal Project",
      services: "Payment Integration, Automation Development, Product Strategy",
      overview: "A free product offering built with Stripe + Supabase + Bolt.",
      description: "Developed a streamlined product delivery system that combines Stripe's payment processing with Supabase's database capabilities and Bolt's automation features. The toolkit includes branded prompt templates, an agent setup guide, and an automated delivery system. This project serves as both a lead generation tool and a proof of concept for our automated checkout and fulfillment capabilities.",
      images: ['/images/projects/stripe/cover.png'],
      nextProject: 'professional-photography'
    },
    'professional-photography': {
      title: "Professional Photography Portfolio",
      category: "Photography",
      tags: ["Product Photography", "Portrait Photography", "Dental Photography"],
      year: "2024",
      client: "Various Clients",
      services: "Professional Photography, Product Photography, Portrait Photography",
      overview: "Collection of professional headshot photography showcasing technical expertise.",
      description: "A showcase of professional photography skills demonstrating versatility across product, portrait, and dental photography. This portfolio highlights the ability to capture compelling professional images while maintaining technical excellence and attention to detail across different photography disciplines.",
      images: [
        '/images/projects/professional/cover.png',
        '/images/projects/professional/facetune_08-04-2025-12-53-144.jpg',
        '/images/projects/professional/facetune_28-03-2025-15-00-044.jpg',
        '/images/projects/professional/facetune_28-03-2025-15-39-533.jpg'
      ],
      nextProject: 'pattern3-starter-kit'
    }
  }

  const project = projects[projectId as string]

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/work" className="btn-primary">
            Back to Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Structured Data for Project */}
      <StructuredData 
        type="article" 
        data={{
          title: project.title,
          description: project.overview,
          image: project.images?.[0],
          datePublished: `${project.year}-01-01`,
          dateModified: `${project.year}-12-31`
        }} 
      />
      
      {/* Breadcrumbs for project pages only */}
      <section className="py-3 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:text-primary-dark">Home</Link>
            <span className="text-gray-400">→</span>
            <Link to="/work" className="text-primary hover:text-primary-dark">Case Studies</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </div>
        </div>
      </section>
      
      {/* Header */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/work" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all projects
          </Link>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Video/Images */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-sm font-medium text-primary bg-blue-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Video Embed */}
              {project.vimeoEmbed && (
                <div 
                  className="mb-8 relative"
                  dangerouslySetInnerHTML={{ __html: project.vimeoEmbed }}
                />
              )}

              {/* Project Images Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-video bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setZoomedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Project Details */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Overview</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.overview}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Project Details</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Client</span>
                        <p className="text-gray-900">{project.client}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Year</span>
                        <p className="text-gray-900">{project.year}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Services</span>
                        <p className="text-gray-900">{project.services}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Description */}
          <div className="mt-12">
            <div className="max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Next Project */}
          {project.nextProject && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link 
                to={`/work/${project.nextProject}`}
                className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
                title={`View next project: ${project.nextProject.replace(/-/g, ' ')}`}
              >
                Next Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Projects */}
      <RelatedProjects 
        currentProjectId={projectId!} 
        currentCategory={project.category}
        maxItems={3}
      />

      {/* Image Zoom Overlay */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoomedImage}
              alt="Zoomed project image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
              aria-label="Close zoomed image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}