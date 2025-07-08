import { useEffect, useState } from 'react'
import { performanceMonitor } from '../utils/performanceMonitor'

interface PerformanceData {
  fcp: number
  lcp: number
  fid: number
  cls: number
  ttfb: number
  recommendations: string[]
}

export function usePerformanceOptimization() {
  const [performanceData, setPerformanceData] = useState<PerformanceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const collectPerformanceData = async () => {
      try {
        const metrics = await performanceMonitor.getWebVitals()
        const recommendations = performanceMonitor.getRecommendations(metrics)
        
        setPerformanceData({
          ...metrics,
          recommendations
        })
      } catch (error) {
        console.error('Failed to collect performance metrics:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Collect metrics after component mount
    const timer = setTimeout(collectPerformanceData, 2000)

    return () => {
      clearTimeout(timer)
      performanceMonitor.disconnect()
    }
  }, [])

  return { performanceData, isLoading }
}

// Hook for optimizing component rendering
export function useRenderOptimization() {
  const [renderCount, setRenderCount] = useState(0)

  useEffect(() => {
    setRenderCount(prev => prev + 1)
  })

  // Warn about excessive re-renders in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && renderCount > 10) {
      console.warn(`Component rendered ${renderCount} times - consider optimization`)
    }
  }, [renderCount])

  return { renderCount }
}

// Hook for managing expensive computations
export function useExpensiveComputation<T>(
  computeFn: () => T,
  dependencies: React.DependencyList,
  shouldCompute: boolean = true
): T | null {
  const [result, setResult] = useState<T | null>(null)
  const [isComputing, setIsComputing] = useState(false)

  useEffect(() => {
    if (!shouldCompute) return

    setIsComputing(true)
    
    // Use requestIdleCallback for non-critical computations
    const computeWhenIdle = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 1000 })
      } else {
        setTimeout(callback, 0)
      }
    }

    computeWhenIdle(() => {
      try {
        const computed = computeFn()
        setResult(computed)
      } catch (error) {
        console.error('Expensive computation failed:', error)
      } finally {
        setIsComputing(false)
      }
    })
  }, [...dependencies, shouldCompute])

  return isComputing ? null : result
}