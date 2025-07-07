export default function WorkPage() {
  const projects = [
    {
      id: 1,
      title: "AI Video Generation",
      category: "Content Creation",
      description: "Automated video content generation for social media marketing",
      image: "/images/projects/ai video/cover.png",
      tags: ["AI", "Video", "Automation"]
    },
    {
      id: 2,
      title: "Professional Services Automation",
      category: "Business Process",
      description: "Streamlined client onboarding and document processing",
      image: "/images/projects/professional/cover.png",
      tags: ["Automation", "CRM", "Workflow"]
    },
    {
      id: 3,
      title: "Content Rewriter Tool",
      category: "Content Management",
      description: "AI-powered content optimization and rewriting system",
      image: "/images/projects/rewriter/cover.png",
      tags: ["AI", "Content", "NLP"]
    },
    {
      id: 4,
      title: "Basketball Analytics",
      category: "Sports Analytics",
      description: "Advanced player performance tracking and analysis",
      image: "/images/projects/basketball/cover.jpg",
      tags: ["Analytics", "Sports", "Data"]
    },
    {
      id: 5,
      title: "Healthcare Patient Management",
      category: "Healthcare",
      description: "Automated patient intake and appointment scheduling",
      image: "/images/projects/new patient/cover.jpg",
      tags: ["Healthcare", "Automation", "CRM"]
    },
    {
      id: 6,
      title: "E-commerce Perks System",
      category: "E-commerce",
      description: "Customer loyalty and rewards automation platform",
      image: "/images/projects/perks/cover.jpg",
      tags: ["E-commerce", "Loyalty", "Automation"]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Real AI solutions that have transformed businesses across industries. 
            See how we've helped companies automate processes, gain insights, and grow.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{project.title.charAt(0)}</span>
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
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can create a custom AI solution for your business.
          </p>
          <a href="/start" className="btn-accent">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  )
}