import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Import all performance optimization utilities
import { preloadFonts, addResourceHints, measurePerformance } from './utils/performance'
import { criticalResourceOptimizer } from './utils/criticalResourceOptimizer'
import { serviceWorkerManager } from './utils/serviceWorkerManager'
import { performanceMonitor } from './utils/advancedPerformanceMonitor'

// Initialize performance optimizations immediately
const initializePerformanceOptimizations = async () => {
  // Critical resource optimization (highest priority)
  criticalResourceOptimizer.initialize()
  
  // Legacy performance utilities
  preloadFonts()
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