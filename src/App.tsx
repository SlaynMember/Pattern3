import { Suspense } from 'react'
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
    <div className="min-h-screen flex items-center justify-center" role="status" aria-live="polite">
      <div className="text-center">
        <LoadingSpinner size="lg" variant="triangles" />
        <p className="mt-4 text-gray-600">Loading...</p>
        <span className="sr-only">Loading page content</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/work" element={<LazyWorkPage />} />
          <Route path="/start" element={<LazyStartPage />} />
          <Route path="/about" element={<LazyAboutPage />} />
          <Route path="/work/:projectId" element={<LazyProjectDetailPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <PerformanceDashboard />
    </div>
  )
}

export default App