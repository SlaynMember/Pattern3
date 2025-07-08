import { useState, useEffect } from 'react'
import { performanceMonitor, type PerformanceReport } from '../../utils/advancedPerformanceMonitor'
import { serviceWorkerManager } from '../../utils/serviceWorkerManager'
import Card from './Card'
import LoadingSpinner from './LoadingSpinner'

export default function EnhancedPerformanceDashboard() {
  const [performanceData, setPerformanceData] = useState<PerformanceReport | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [cacheInfo, setCacheInfo] = useState<{ name: string; size: number }[]>([])
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    const loadPerformanceData = async () => {
      try {
        const report = await performanceMonitor.getPerformanceReport()
        setPerformanceData(report)
        
        const caches = await serviceWorkerManager.getCacheInfo()
        setCacheInfo(caches)
      } catch (error) {
        console.error('Failed to load performance data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Load initial data
    loadPerformanceData()

    // Subscribe to performance updates
    const unsubscribe = performanceMonitor.onReport(setPerformanceData)

    return unsubscribe
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  if (isLoading) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card variant="elevated" padding="sm">
          <div className="flex items-center space-x-2">
            <LoadingSpinner size="sm" />
            <span className="text-sm">Analyzing performance...</span>
          </div>
        </Card>
      </div>
    )
  }

  if (!performanceData) return null

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getMetricColor = (value: number, thresholds: { good: number; needs: number }) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.needs) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatTime = (ms: number) => `${Math.round(ms)}ms`
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card variant="elevated" padding="sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-sm">Performance Monitor</h3>
          <div className="flex items-center space-x-2">
            <div className={`text-lg font-bold ${getScoreColor(performanceData.score)}`}>
              {performanceData.score}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? '−' : '+'}
            </button>
          </div>
        </div>

        {/* Core Web Vitals */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>First Contentful Paint:</span>
            <span className={getMetricColor(performanceData.webVitals.fcp, { good: 1800, needs: 3000 })}>
              {formatTime(performanceData.webVitals.fcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Largest Contentful Paint:</span>
            <span className={getMetricColor(performanceData.webVitals.lcp, { good: 2500, needs: 4000 })}>
              {formatTime(performanceData.webVitals.lcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>First Input Delay:</span>
            <span className={getMetricColor(performanceData.webVitals.fid, { good: 100, needs: 300 })}>
              {formatTime(performanceData.webVitals.fid)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Cumulative Layout Shift:</span>
            <span className={getMetricColor(performanceData.webVitals.cls * 1000, { good: 100, needs: 250 })}>
              {performanceData.webVitals.cls.toFixed(3)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Time to First Byte:</span>
            <span className={getMetricColor(performanceData.webVitals.ttfb, { good: 800, needs: 1800 })}>
              {formatTime(performanceData.webVitals.ttfb)}
            </span>
          </div>
        </div>

        {/* Expanded view */}
        {isExpanded && (
          <>
            {/* Custom Metrics */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <h4 className="font-medium text-xs mb-2">Custom Metrics</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>DOM Content Loaded:</span>
                  <span>{formatTime(performanceData.customMetrics.domContentLoaded)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Window Load:</span>
                  <span>{formatTime(performanceData.customMetrics.windowLoad)}</span>
                </div>
                <div className="flex justify-between">
                  <span>JS Heap Size:</span>
                  <span>{formatBytes(performanceData.customMetrics.jsHeapSize)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Connection:</span>
                  <span>{performanceData.customMetrics.effectiveType}</span>
                </div>
              </div>
            </div>

            {/* Cache Information */}
            {cacheInfo.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-200">
                <h4 className="font-medium text-xs mb-2">Cache Status</h4>
                <div className="space-y-1 text-xs">
                  {cacheInfo.map((cache, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="truncate">{cache.name.split('-')[0]}:</span>
                      <span>{cache.size} items</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {performanceData.recommendations.length > 0 && (
              <div className="mt-4 pt-3 border-t border-gray-200">
                <h4 className="font-medium text-xs mb-2">Recommendations</h4>
                <ul className="text-xs space-y-1">
                  {performanceData.recommendations.slice(0, 3).map((rec, index) => (
                    <li key={index} className="text-gray-600">• {rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="mt-4 pt-3 border-t border-gray-200 flex space-x-2">
              <button
                onClick={() => window.location.reload()}
                className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Reload
              </button>
              <button
                onClick={() => serviceWorkerManager.clearCaches()}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Clear Cache
              </button>
            </div>
          </>
        )}

        <div className="mt-3 text-xs text-gray-400 text-center">
          Last updated: {new Date(performanceData.timestamp).toLocaleTimeString()}
        </div>
      </Card>
    </div>
  )
}