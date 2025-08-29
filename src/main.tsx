import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import all performance optimization utilities
import { addResourceHints, measurePerformance } from './utils/performance'
import { criticalResourceOptimizer } from './utils/criticalResourceOptimizer'
import { serviceWorkerManager } from './utils/serviceWorkerManager'
import { performanceMonitor } from './utils/advancedPerformanceMonitor'

// Optimized Google Analytics loader
const loadGoogleAnalytics = () => {
  // Only load in production
  if (process.env.NODE_ENV !== 'production') return
  
  // Load after page is interactive to avoid blocking main thread
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZK870F6L8G'
  
  script.onload = () => {
    // Initialize gtag after script loads
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    
    // Make gtag globally available
    ;(window as any).gtag = gtag
    
    gtag('js', new Date())
    gtag('config', 'G-ZK870F6L8G')
  }
  
  document.head.appendChild(script)
}

// Initialize performance optimizations immediately
const initializePerformanceOptimizations = async () => {
  // Critical resource optimization (highest priority)
  criticalResourceOptimizer.initialize()
  
  // Legacy performance utilities
  addResourceHints()
  measurePerformance()
  
  // Service worker for advanced caching
  if (process.env.NODE_ENV === 'production') {
    await serviceWorkerManager.register()
  }
  
  // Start performance monitoring
  performanceMonitor.onReport((report) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Report:', report)
    } else {
      // Send to analytics in production
      performanceMonitor.sendToAnalytics(report)
    }
  })
  
  // Load Google Analytics after other optimizations
  setTimeout(loadGoogleAnalytics, 2000) // 2 second delay
}

// Initialize optimizations
initializePerformanceOptimizations().catch(console.error)

// Render app with error boundary
const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Report web vitals in production
if (process.env.NODE_ENV === 'production') {
  // Generate performance report after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.getPerformanceReport().then(report => {
        console.log('Final Performance Report:', report)
      })
    }, 3000) // Wait 3 seconds after load for accurate metrics
  })
}