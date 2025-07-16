import { Suspense, Component, ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/ui/Navigation'
import ScrollToTop from './components/ui/ScrollToTop'
import Footer from './components/ui/Footer'
import LoadingSpinner from './components/ui/LoadingSpinner'
import PerformanceDashboard from './components/ui/PerformanceDashboard'

// Lazy load all page components for better performance
import LazyHomePage from './components/pages/LazyHomePage'
import LazyWorkPage from './components/pages/LazyWorkPage'
import LazyStartPage from './components/pages/LazyStartPage'
import LazyAboutPage from './components/pages/LazyAboutPage'
import LazyProjectDetailPage from './components/pages/LazyProjectDetailPage'

// Loading fallback component
function PageLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" variant="triangles" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

// Error boundary class component for route-level errors
class RouteErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Route error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">Please try refreshing the page</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <RouteErrorBoundary>
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/work" element={<LazyWorkPage />} />
            <Route path="/start" element={<LazyStartPage />} />
            <Route path="/about" element={<LazyAboutPage />} />
            <Route path="/work/:projectId" element={<LazyProjectDetailPage />} />
          </Routes>
        </Suspense>
      </RouteErrorBoundary>
      <Footer />
      <PerformanceDashboard />
    </div>
  )
}

export default App