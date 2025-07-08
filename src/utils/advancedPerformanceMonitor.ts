// Advanced performance monitoring with Web Vitals and custom metrics

interface WebVitalsMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
  inp: number // Interaction to Next Paint (new metric)
}

interface CustomMetrics {
  domContentLoaded: number
  windowLoad: number
  firstByte: number
  domComplete: number
  resourceLoadTime: number
  jsHeapSize: number
  connectionType: string
  effectiveType: string
}

interface PerformanceReport {
  webVitals: WebVitalsMetrics
  customMetrics: CustomMetrics
  recommendations: string[]
  score: number
  timestamp: number
}

class AdvancedPerformanceMonitor {
  private static instance: AdvancedPerformanceMonitor
  private observers: PerformanceObserver[] = []
  private metrics: Partial<WebVitalsMetrics> = {}
  private customMetrics: Partial<CustomMetrics> = {}
  private reportCallbacks: ((report: PerformanceReport) => void)[] = []

  static getInstance(): AdvancedPerformanceMonitor {
    if (!AdvancedPerformanceMonitor.instance) {
      AdvancedPerformanceMonitor.instance = new AdvancedPerformanceMonitor()
    }
    return AdvancedPerformanceMonitor.instance
  }

  constructor() {
    this.initializeObservers()
    this.collectCustomMetrics()
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    // Largest Contentful Paint
    this.createObserver(['largest-contentful-paint'], (entries) => {
      const lastEntry = entries[entries.length - 1] as any
      this.metrics.lcp = lastEntry.startTime
    })

    // First Input Delay
    this.createObserver(['first-input'], (entries) => {
      entries.forEach((entry: any) => {
        this.metrics.fid = entry.processingStart - entry.startTime
      })
    })

    // Cumulative Layout Shift
    this.createObserver(['layout-shift'], (entries) => {
      let clsValue = 0
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
      this.metrics.cls = clsValue
    })

    // Navigation timing
    this.createObserver(['navigation'], (entries) => {
      const [entry] = entries as PerformanceNavigationTiming[]
      this.metrics.ttfb = entry.responseStart - entry.requestStart
      
      // Use fetchStart as the baseline instead of navigationStart (which doesn't exist in PerformanceNavigationTiming)
      this.customMetrics.domContentLoaded = entry.domContentLoadedEventEnd - entry.fetchStart
      this.customMetrics.windowLoad = entry.loadEventEnd - entry.fetchStart
      this.customMetrics.firstByte = entry.responseStart - entry.fetchStart
      this.customMetrics.domComplete = entry.domComplete - entry.fetchStart
    })

    // Resource timing
    this.createObserver(['resource'], (entries) => {
      const totalResourceTime = entries.reduce((total, entry) => {
        const resourceEntry = entry as PerformanceResourceTiming
        return total + (resourceEntry.responseEnd - resourceEntry.startTime)
      }, 0)
      this.customMetrics.resourceLoadTime = totalResourceTime / entries.length
    })

    // Long tasks (for detecting blocking JavaScript)
    this.createObserver(['longtask'], (entries) => {
      entries.forEach((entry: any) => {
        console.warn(`Long task detected: ${entry.duration}ms`, entry)
      })
    })
  }

  private createObserver(entryTypes: string[], callback: (entries: PerformanceEntry[]) => void) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries())
      })
      observer.observe({ entryTypes })
      this.observers.push(observer)
    } catch (error) {
      console.warn(`Failed to create observer for ${entryTypes.join(', ')}:`, error)
    }
  }

  private collectCustomMetrics() {
    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory
      this.customMetrics.jsHeapSize = memory.usedJSHeapSize
    }

    // Network information (if available)
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      this.customMetrics.connectionType = connection.type || 'unknown'
      this.customMetrics.effectiveType = connection.effectiveType || 'unknown'
    }

    // First Contentful Paint from paint timing
    const paintEntries = performance.getEntriesByType('paint')
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    if (fcpEntry) {
      this.metrics.fcp = fcpEntry.startTime
    }
  }

  // Generate performance score based on Web Vitals
  private calculateScore(): number {
    const { fcp = 0, lcp = 0, fid = 0, cls = 0, ttfb = 0 } = this.metrics
    
    let score = 100

    // FCP scoring (good: <1.8s, needs improvement: <3s, poor: >=3s)
    if (fcp > 3000) score -= 25
    else if (fcp > 1800) score -= 10

    // LCP scoring (good: <2.5s, needs improvement: <4s, poor: >=4s)
    if (lcp > 4000) score -= 25
    else if (lcp > 2500) score -= 10

    // FID scoring (good: <100ms, needs improvement: <300ms, poor: >=300ms)
    if (fid > 300) score -= 20
    else if (fid > 100) score -= 8

    // CLS scoring (good: <0.1, needs improvement: <0.25, poor: >=0.25)
    if (cls > 0.25) score -= 20
    else if (cls > 0.1) score -= 8

    // TTFB scoring (good: <800ms, needs improvement: <1800ms, poor: >=1800ms)
    if (ttfb > 1800) score -= 10
    else if (ttfb > 800) score -= 5

    return Math.max(0, score)
  }

  // Generate performance recommendations
  private generateRecommendations(): string[] {
    const recommendations: string[] = []
    const { fcp = 0, lcp = 0, fid = 0, cls = 0, ttfb = 0 } = this.metrics

    if (fcp > 2500) {
      recommendations.push('Optimize First Contentful Paint - reduce render-blocking resources and improve server response time')
    }

    if (lcp > 4000) {
      recommendations.push('Optimize Largest Contentful Paint - optimize images, preload key resources, and improve server response time')
    }

    if (fid > 300) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time and use code splitting')
    }

    if (cls > 0.25) {
      recommendations.push('Improve Cumulative Layout Shift - ensure proper image dimensions and avoid layout shifts')
    }

    if (ttfb > 800) {
      recommendations.push('Optimize Time to First Byte - improve server response time and use CDN')
    }

    if (this.customMetrics.jsHeapSize && this.customMetrics.jsHeapSize > 50 * 1024 * 1024) {
      recommendations.push('Reduce JavaScript memory usage - optimize code and remove memory leaks')
    }

    return recommendations
  }

  // Get comprehensive performance report
  async getPerformanceReport(): Promise<PerformanceReport> {
    // Wait for metrics to be collected
    await new Promise(resolve => setTimeout(resolve, 2000))

    const webVitals: WebVitalsMetrics = {
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      ttfb: this.metrics.ttfb || 0,
      inp: 0 // Placeholder for future implementation
    }

    const customMetrics: CustomMetrics = {
      domContentLoaded: this.customMetrics.domContentLoaded || 0,
      windowLoad: this.customMetrics.windowLoad || 0,
      firstByte: this.customMetrics.firstByte || 0,
      domComplete: this.customMetrics.domComplete || 0,
      resourceLoadTime: this.customMetrics.resourceLoadTime || 0,
      jsHeapSize: this.customMetrics.jsHeapSize || 0,
      connectionType: this.customMetrics.connectionType || 'unknown',
      effectiveType: this.customMetrics.effectiveType || 'unknown'
    }

    const recommendations = this.generateRecommendations()
    const score = this.calculateScore()

    const report: PerformanceReport = {
      webVitals,
      customMetrics,
      recommendations,
      score,
      timestamp: Date.now()
    }

    // Notify callbacks
    this.reportCallbacks.forEach(callback => callback(report))

    return report
  }

  // Subscribe to performance reports
  onReport(callback: (report: PerformanceReport) => void) {
    this.reportCallbacks.push(callback)
    return () => {
      const index = this.reportCallbacks.indexOf(callback)
      if (index > -1) {
        this.reportCallbacks.splice(index, 1)
      }
    }
  }

  // Send performance data to analytics service
  sendToAnalytics(report: PerformanceReport) {
    if (typeof window === 'undefined') return

    // In production, send to your analytics service
    console.log('Performance Report:', report)

    // Example: Send to Google Analytics 4
    if ('gtag' in window) {
      const gtag = (window as any).gtag
      gtag('event', 'web_vitals', {
        metric_name: 'fcp',
        metric_value: report.webVitals.fcp,
        metric_rating: report.webVitals.fcp < 1800 ? 'good' : report.webVitals.fcp < 3000 ? 'needs-improvement' : 'poor'
      })
    }
  }

  // Clean up observers
  destroy() {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
    this.reportCallbacks = []
  }
}

export const performanceMonitor = AdvancedPerformanceMonitor.getInstance()

// Utility function to measure custom performance marks
export function measurePerformance(name: string, fn: () => void | Promise<void>) {
  const startMark = `${name}-start`
  const endMark = `${name}-end`
  const measureName = `${name}-duration`

  performance.mark(startMark)
  
  const result = fn()
  
  if (result instanceof Promise) {
    return result.finally(() => {
      performance.mark(endMark)
      performance.measure(measureName, startMark, endMark)
    })
  } else {
    performance.mark(endMark)
    performance.measure(measureName, startMark, endMark)
    return result
  }
}

// Export types for use in other modules
export type { PerformanceReport, WebVitalsMetrics, CustomMetrics }