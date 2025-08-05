import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface InternalLinkProps {
  href: string
  children: ReactNode
  variant?: 'inline' | 'button' | 'subtle'
  showIcon?: boolean
  className?: string
  title?: string
}

export default function InternalLink({
  href,
  children,
  variant = 'inline',
  showIcon = false,
  className = '',
  title
}: InternalLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const isInternal = href.startsWith('/') && !isExternal

  const getVariantClasses = () => {
    switch (variant) {
      case 'button':
        return 'btn-primary inline-flex items-center'
      case 'subtle':
        return 'text-gray-600 hover:text-primary transition-colors'
      case 'inline':
      default:
        return 'text-primary hover:text-primary-dark font-medium transition-colors underline decoration-primary/30 hover:decoration-primary/60 underline-offset-2'
    }
  }

  const classes = `${getVariantClasses()} ${className}`.trim()

  // Enhanced title attribute for better UX
  const enhancedTitle = title || (
    isInternal 
      ? `Navigate to ${typeof children === 'string' ? children : href}`
      : `Visit ${href} (opens in new tab)`
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        title={enhancedTitle}
      >
        {children}
        {showIcon && (
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={classes}
      title={enhancedTitle}
    >
      {children}
      {showIcon && (
        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  )
}

// Utility component for creating contextual link clusters
interface LinkClusterProps {
  title: string
  links: Array<{
    text: string
    href: string
    description?: string
  }>
  className?: string
}

export function LinkCluster({ title, links, className = '' }: LinkClusterProps) {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <div key={index}>
            <InternalLink href={link.href} variant="inline">
              {link.text}
            </InternalLink>
            {link.description && (
              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}