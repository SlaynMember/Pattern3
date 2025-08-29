import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  isCurrentPage?: boolean
}

export default function Breadcrumbs() {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(Boolean)

  // Generate breadcrumb items based on current path
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    if (pathSegments.length === 0) {
      return [{ label: 'Home', isCurrentPage: true }]
    }

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const isLast = index === pathSegments.length - 1

      let label = segment
      
      // Custom labels for specific pages
      switch (segment) {
        case 'work':
          label = 'Case Studies'
          break
        case 'about':
          label = 'About Pattern3'
          break
        case 'start':
          label = 'Get Started'
          break
        default:
          // For project IDs, convert kebab-case to title case
          if (href.startsWith('/work/')) {
            label = segment
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
          }
      }

      breadcrumbs.push({
        label,
        href: isLast ? undefined : href,
        isCurrentPage: isLast
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null
  }

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className="bg-gray-50 border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ArrowRight className="w-3 h-3 text-gray-400 mx-2" />
              )}
              
              {item.isCurrentPage ? (
                <span 
                  className="text-gray-900 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href!}
                  className="text-primary hover:text-primary-dark transition-colors"
                  title={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}