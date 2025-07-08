import { usePerformanceOptimization } from '../../hooks/usePerformanceOptimization'
import Card from './Card'
import LoadingSpinner from './LoadingSpinner'

export default function PerformanceDashboard() {
  const { performanceData, isLoading } = usePerformanceOptimization()

  if (process.env.NODE_ENV !== 'development') {
    return null // Only show in development
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

  const getScoreColor = (value: number, thresholds: { good: number; needs: number }) => {
    if (value <= thresholds.good) return 'text-green-600'
    if (value <= thresholds.needs) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatTime = (ms: number) => `${Math.round(ms)}ms`

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card variant="elevated" padding="sm">
        <h3 className="font-bold text-sm mb-3">Performance Metrics</h3>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span>First Contentful Paint:</span>
            <span className={getScoreColor(performanceData.fcp, { good: 1800, needs: 3000 })}>
              {formatTime(performanceData.fcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Largest Contentful Paint:</span>
            <span className={getScoreColor(performanceData.lcp, { good: 2500, needs: 4000 })}>
              {formatTime(performanceData.lcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>First Input Delay:</span>
            <span className={getScoreColor(performanceData.fid, { good: 100, needs: 300 })}>
              {formatTime(performanceData.fid)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Cumulative Layout Shift:</span>
            <span className={getScoreColor(performanceData.cls * 1000, { good: 100, needs: 250 })}>
              {performanceData.cls.toFixed(3)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Time to First Byte:</span>
            <span className={getScoreColor(performanceData.ttfb, { good: 800, needs: 1800 })}>
              {formatTime(performanceData.ttfb)}
            </span>
          </div>
        </div>

        {performanceData.recommendations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <h4 className="font-medium text-xs mb-2">Recommendations:</h4>
            <ul className="text-xs space-y-1">
              {performanceData.recommendations.slice(0, 3).map((rec, index) => (
                <li key={index} className="text-gray-600">• {rec}</li>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </div>
  )
}