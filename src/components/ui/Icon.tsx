import React from 'react'

interface IconProps {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  hover?: boolean
  bounce?: boolean
}

// Custom Pattern3 SVG Icons
const icons = {
  triangle: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 20h20L12 2z" />
    </svg>
  ),
  'triangle-outline': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 20h20L12 2z" />
    </svg>
  ),
  'pattern3-logo': (
    <svg viewBox="0 0 100 100" fill="currentColor">
      <path d="M20 80L50 20L80 80H20z" />
      <path d="M30 70L50 40L70 70H30z" />
      <path d="M40 60L50 50L60 60H40z" />
    </svg>
  ),
  'ai-brain': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4L12 22l4.5-10c1-1 1.5-2.5 1.5-4 0-3.5-2.5-6-6-6z" />
      <circle cx="12" cy="8" r="2" fill="white" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2z" />
      <path d="M19 15L19.5 17L21 17.5L19.5 18L19 20L18.5 18L17 17.5L18.5 17L19 15z" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15 9h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" />
      <rect x="10" y="8" width="4" height="8" fill="white" />
      <rect x="8" y="10" width="8" height="4" fill="white" />
    </svg>
  ),
  creative: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="2" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  'arrow-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export default function Icon({ 
  name, 
  size = 'md', 
  className = '', 
  hover = false, 
  bounce = false 
}: IconProps) {
  const sizeClass = `icon-${size}`
  const hoverClass = hover ? 'icon-hover' : ''
  const bounceClass = bounce ? 'icon-bounce' : ''
  
  const classes = `icon ${sizeClass} ${hoverClass} ${bounceClass} ${className}`.trim()

  if (!icons[name as keyof typeof icons]) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <span className={classes} role="img" aria-label={name}>
      {icons[name as keyof typeof icons]}
    </span>
  )
}