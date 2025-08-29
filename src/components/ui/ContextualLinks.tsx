import { Link } from 'react-router-dom'

interface ContextualLink {
  text: string
  href: string
  context: 'primary' | 'secondary' | 'subtle'
  external?: boolean
}

interface ContextualLinksProps {
  links: ContextualLink[]
  className?: string
}

export default function ContextualLinks({ links, className = '' }: ContextualLinksProps) {
  const getLinkClasses = (context: ContextualLink['context']) => {
    const baseClasses = 'transition-colors duration-200'
    
    switch (context) {
      case 'primary':
        return `${baseClasses} text-primary hover:text-primary-dark font-medium underline decoration-primary/30 hover:decoration-primary/60 underline-offset-2`
      case 'secondary':
        return `${baseClasses} text-gray-700 hover:text-primary font-medium`
      case 'subtle':
        return `${baseClasses} text-gray-600 hover:text-primary`
      default:
        return baseClasses
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {links.map((link, index) => {
        const linkClasses = getLinkClasses(link.context)
        
        if (link.external) {
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
              title={`Learn more about ${link.text} (opens in new tab)`}
            >
              {link.text}
            </a>
          )
        }

        return (
          <Link
            key={index}
            to={link.href}
            className={linkClasses}
            title={`Navigate to ${link.text}`}
          >
            {link.text}
          </Link>
        )
      })}
    </div>
  )
}

// Pre-defined link collections for common use cases
export const commonLinks = {
  services: [
    { text: 'AI automation solutions', href: '/work', context: 'primary' as const },
    { text: 'healthcare AI tools', href: '/work?category=Healthcare', context: 'secondary' as const },
    { text: 'business strategy consulting', href: '/about', context: 'secondary' as const }
  ],
  
  caseStudies: [
    { text: 'D32 Text Message Re-Writer project', href: '/work/d32-text-rewriter', context: 'primary' as const },
    { text: 'Echo AI Transcription system', href: '/work/echo-transcription', context: 'primary' as const },
    { text: 'Brand Builder automation', href: '/work/brand-builder', context: 'primary' as const }
  ],
  
  gettingStarted: [
    { text: 'book a free consultation', href: '/start', context: 'primary' as const },
    { text: 'learn about our process', href: '/about', context: 'secondary' as const },
    { text: 'view client results', href: '/work', context: 'secondary' as const }
  ]
}