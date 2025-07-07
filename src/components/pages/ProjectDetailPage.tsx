import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProjectDetailPage() {
  const { projectId } = useParams()

  // Project data - in a real app this would come from a database or API
  const projects = {
    'brand-builder': {
      title: "AI Automation - Brand Builder",
      category: "Automation",
      tags: ["AI Automation", "No-Code", "Brand Strategy", "OpenAI", "Docker"],
      year: "2024",
      client: "Internal Project",
      services: "Automation Development, Brand Strategy, System Architecture",
      overview: "Built a fully automated workflow that takes a client's form submission and turns it into a full brand voice guide — styled, written, and delivered automatically.",
      description: "This is a fully automated brand system built using n8n, Docker, and the OpenAI API — all running locally, powered by Curiosity and extensive research. The system takes client input through a Tally form, processes it via a self-hosted n8n instance through OpenAI, and leverages GPT-4o using OpenAI's API. The custom-built prompt returns a comprehensive tone-of-voice breakdown, writing examples, and personality guide structured like a creative brief. The result is automatically formatted and delivered via email. Built with a focus on cost-effectiveness using Docker and PowerShell, this solution eliminates expensive backend costs, with OpenAI API being the only significant expense at just cents per submission — far more cost-effective than traditional writing or strategy services.",
      vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1088605068?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Fully Automated Brand Builder – Powered by AI + No-Code"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
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
      vimeoEmbed: `<div style="padding:167.47% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1093384622?badge=0&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Spotify Canvas (Professional-Grade AI Video)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
      nextProject: 'd32-text-rewriter'
    },
    'd32-text-rewriter': {
      title: "D32 Text Message Re-Writer",
      category: "Personal Challenge",
      tags: ["AI", "Content", "Communication"],
      year: "2024",
      client: "Darnell32",
      services: "AI Development, Content Strategy, Communication Tools",
      overview: "Built a custom chatbot assistant to help Darnell32 turn basic staff communication into professional, branded messaging.",
      description: "A specialized AI tool designed to transform casual staff communications into professional, brand-consistent messaging that maintains the authentic voice while elevating the presentation.",
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
      description: "A comprehensive transcription solution designed specifically for healthcare environments, ensuring accuracy, privacy, and seamless integration with existing workflows.",
      nextProject: 'ai-implementation'
    }
  }

  const project = projects[projectId as keyof typeof projects]

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
            {/* Left Column - Video */}
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
                  className="mb-8"
                  dangerouslySetInnerHTML={{ __html: project.vimeoEmbed }}
                />
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
              >
                Next Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want something like this?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your business with custom AI solutions? Let's discuss your project.
          </p>
          <Link to="/start" className="btn-accent">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}