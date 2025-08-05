import { Link, useLocation, useSearchParams } from 'react-router-dom'

interface Category {
  id: string
  name: string
  count: number
  description: string
}

export default function CategoryNav() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  const categories: Category[] = [
    { id: 'All', name: 'All Projects', count: 11, description: 'Complete portfolio of AI solutions' },
    { id: 'Automation', name: 'AI Automation', count: 1, description: 'Workflow automation and AI agents' },
    { id: 'Healthcare', name: 'Healthcare', count: 3, description: 'HIPAA-compliant medical solutions' },
    { id: 'Personal Challenge', name: 'AI Tools', count: 2, description: 'Custom AI tool development' },
    { id: 'AI Video', name: 'AI Video', count: 1, description: 'Creative AI video production' },
    { id: 'Photography', name: 'Photography', count: 1, description: 'Professional photography services' },
    { id: 'Product Development', name: 'Product Dev', count: 1, description: 'Full-stack product development' }
  ]

  // Only show on work page
  if (!location.pathname.startsWith('/work') || location.pathname.includes('/work/')) {
    return null
  }

  return (
    <nav 
      aria-label="Project categories"
      className="bg-white border-b border-gray-200 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            const href = category.id === 'All' ? '/work' : `/work?category=${encodeURIComponent(category.id)}`
            
            return (
              <Link
                key={category.id}
                to={href}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5 border border-gray-200 hover:border-primary/20'
                  }
                `}
                title={`${category.description} (${category.count} projects)`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-1 text-xs opacity-75">({category.count})</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}