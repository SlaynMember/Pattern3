import { lazy, Suspense } from 'react'

// Lazy load the AboutPage component with error boundary
const AboutPage = lazy(() => import('./AboutPage'))

// Simple loading fallback that works during build
function AboutPageFallback() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse bg-primary rounded-full w-8 h-8 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

// Error boundary component
function AboutPageErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<AboutPageFallback />}>
      {children}
    </Suspense>
  )
}

export default function LazyAboutPage() {
  return (
    <AboutPageErrorBoundary>
      <AboutPage />
    </AboutPageErrorBoundary>
  )
}