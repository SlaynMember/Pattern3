import { ReactNode } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade-in' | 'scale' | 'slide-left' | 'slide-right'
  delay?: number
  className?: string
  threshold?: number
}

export default function AnimatedSection({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
  threshold = 0.1
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold })

  const animationClasses = {
    'fade-in': 'observe-fade-in',
    'scale': 'observe-scale',
    'slide-left': 'observe-fade-in',
    'slide-right': 'observe-fade-in'
  }

  const baseClass = animationClasses[animation]
  const visibleClass = isIntersecting ? 'in-view' : ''
  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 5)}` : ''

  return (
    <div 
      ref={ref}
      className={`${baseClass} ${visibleClass} ${delayClass} ${className}`.trim()}
      style={{ 
        transitionDelay: delay > 5 ? `${delay * 0.1}s` : undefined 
      }}
    >
      {children}
    </div>
  )
}