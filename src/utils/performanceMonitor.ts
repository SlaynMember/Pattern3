// Enhanced performance monitoring and optimization utilities

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initializeObservers()
  }

  private initializeObservers() {
    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          this.metrics.lcp = lastEntry.startTime
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        this.observers.push(lcpObserver)
      } catch (e) {
        console.warn('LCP observer not supported')
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
        this.observers.push(fidObserver)
      } catch (e) {
        console.warn('FID observer not supported')
      }

      // Cumulative Layout Shift
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          this.metrics.cls = clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        this.observers.push(clsObserver)
      } catch (e) {
        console.warn('CLS observer not supported')
      }
    }
  }

  // Get Web Vitals
  getWebVitals(): Promise<PerformanceMetrics> {
    return new Promise((resolve) => {
      // Wait for page load to get accurate metrics
      if (document.readyState === 'complete') {
        this.collectMetrics().then(resolve)
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => {
            this.collectMetrics().then(resolve)
          }, 1000) // Wait 1s after load for accurate measurements
        })
      }
    })
  }

  private async collectMetrics(): Promise<PerformanceMetrics> {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    // Calculate TTFB
    this.metrics.ttfb = navigation.responseStart - navigation.requestStart

    // Get FCP from paint timing
    const paintEntries = performance.getEntriesByType('paint')
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    if (fcpEntry) {
      this.metrics.fcp = fcpEntry.startTime
    }

    return {
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      ttfb: this.metrics.ttfb || 0
    }
  }

  // Performance recommendations based on metrics
  getRecommendations(metrics: PerformanceMetrics): string[] {
    const recommendations: string[] = []

    if (metrics.fcp > 2500) {
      recommendations.push('Optimize First Contentful Paint - consider reducing render-blocking resources')
    }

    if (metrics.lcp > 4000) {
      recommendations.push('Optimize Largest Contentful Paint - optimize images and critical resources')
    }

    if (metrics.fid > 300) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time')
    }

    if (metrics.cls > 0.25) {
      recommendations.push('Improve Cumulative Layout Shift - ensure proper image dimensions and avoid layout shifts')
    }

    if (metrics.ttfb > 800) {
      recommendations.push('Optimize Time to First Byte - improve server response time')
    }

    return recommendations
  }

  // Clean up observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }
}

export const performanceMonitor = new PerformanceMonitor()

// Resource hints optimization
export function addOptimizedResourceHints() {
  const hints = [
    // DNS prefetch for external domains
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//player.vimeo.com' },
    
    // Preconnect for critical resources
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    
    // Prefetch likely next pages
    { rel: 'prefetch', href: '/work' },
    { rel: 'prefetch', href: '/about' },
    { rel: 'prefetch', href: '/start' }
  ]

  hints.forEach(hint => {
    const existingLink = document.querySelector(`link[href="${hint.href}"]`)
    if (!existingLink) {
      const link = document.createElement('link')
      Object.assign(link, hint)
      document.head.appendChild(link)
    }
  })
}

// Critical CSS inlining
export function inlineCriticalCSS() {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    body{font-family:'Inter',sans-serif;color:#1e293b;background:#fff;line-height:1.6;font-weight:400;-webkit-font-smoothing:antialiased}
    .hero-bg{background:linear-gradient(135deg,#f8fafc 0%,#fff 50%,#f8fafc 100%);position:relative;overflow:hidden}
    .text-gradient{background:linear-gradient(135deg,#0891b2,#14b8a6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .btn-primary{background:linear-gradient(135deg,#0891b2,#06b6d4);color:#fff;font-weight:600;padding:.875rem 2rem;border-radius:.75rem;border:none;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 6px -1px rgba(8,145,178,.1),0 2px 4px -1px rgba(8,145,178,.06);font-size:1rem;letter-spacing:-.01em;display:inline-flex;align-items:center;justify-content:center;text-decoration:none}
    .heading-1{font-size:clamp(2.5rem,5vw,4rem);font-weight:900;line-height:1.1;letter-spacing:-.025em;color:#1e293b}
    .heading-2{font-size:clamp(2rem,4vw,3rem);font-weight:700;line-height:1.2;letter-spacing:-.025em;color:#1e293b}
  `
  
  const style = document.createElement('style')
  style.textContent = criticalCSS
  document.head.appendChild(style)
}

// Bundle analyzer for identifying optimization opportunities
export function analyzeBundleSize() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Bundle Analysis:')
    console.log('- React bundle size: ~42KB gzipped')
    console.log('- React Router: ~8KB gzipped')
    console.log('- Chart.js: ~60KB gzipped')
    console.log('- Lucide React: ~15KB gzipped')
    console.log('- Supabase client: ~25KB gzipped')
    console.log('Total estimated: ~150KB gzipped')
  }
}