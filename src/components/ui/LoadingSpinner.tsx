import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'triangles' | 'pulse' | 'spin'
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'triangles',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  if (variant === 'triangles') {
    return (
      <div className={`loading-triangles ${className}`} role="status" aria-label="Loading">
        <div className="loading-triangle"></div>
        <div className="loading-triangle"></div>
        <div className="loading-triangle"></div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div 
        className={`animate-pulse bg-primary rounded-full ${sizeClasses[size]} ${className}`}
        role="status" 
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  // Spin variant
  return (
    <div 
      className={`animate-spin border-2 border-gray-300 border-t-primary rounded-full ${sizeClasses[size]} ${className}`}
      role="status" 
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}