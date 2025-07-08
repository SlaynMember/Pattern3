import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { preloadFonts, addResourceHints, measurePerformance } from './utils/performance'
import { addOptimizedResourceHints, inlineCriticalCSS } from './utils/performanceMonitor'
import { preloadCriticalImages } from './utils/imageOptimization'

// Initialize performance optimizations
preloadFonts()
addResourceHints()
addOptimizedResourceHints()
inlineCriticalCSS()
preloadCriticalImages()
measurePerformance()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)