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
        'DOM Processing': perfData.domComplete - perfData.domInteractive,
        'Total Load Time': perfData.loadEventEnd - perfData.fetchStart
      })
    })
  }
}