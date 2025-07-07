// Performance optimization utilities

// Font preloading
export function preloadFonts() {
  const fonts = [
    '/fonts/inter-400.woff2',
    '/fonts/inter-500.woff2',
    '/fonts/inter-700.woff2'
  ]

  fonts.forEach(font => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    link.href = font
    document.head.appendChild(link)
  })
}

// Critical CSS inlining
export function inlineCriticalCSS() {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    body { font-family: 'Inter', sans-serif; }
    .hero-bg { background: linear-gradient(135deg, #f8fafc 0%, white 50%, #f8fafc 100%); }
    .text-gradient { 
      background: linear-gradient(135deg, #0891b2, #14b8a6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
  
  const style = document.createElement('style')
  style.textContent = criticalCSS
  document.head.appendChild(style)
}

// Intersection Observer for lazy loading
export function createLazyLoader() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = img.dataset.src || ''
        img.classList.remove('lazy')
        observer.unobserve(img)
      }
    })
  })

  return imageObserver
}

// Performance monitoring
export function measurePerformance() {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      console.log('Performance Metrics:', {
        'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
        'TCP Connection': perfData.connectEnd - perfData.connectStart,
        'Request': perfData.responseStart - perfData.requestStart,
        'Response': perfData.responseEnd - perfData.responseStart,
        'DOM Processing': perfData.domComplete - perfData.domLoading,
        'Total Load Time': perfData.loadEventEnd - perfData.navigationStart
      })
    })
  }
}

// Resource hints
export function addResourceHints() {
  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ]

  hints.forEach(hint => {
    const link = document.createElement('link')
    Object.assign(link, hint)
    document.head.appendChild(link)
  })
}

// Service Worker registration
export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}