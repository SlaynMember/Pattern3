interface IconProps {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
  hover?: boolean
  bounce?: boolean
}

// Clean, crisp SVG icons with consistent design
const icons = {
  // Core navigation and UI icons
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  'arrow-up': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" clipRule="evenodd" />
    </svg>
  ),
  
  // Business and strategy icons
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  
  // Industry-specific icons
  'medical-cross': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 2h2v8h8v2h-8v8h-2v-8H3v-2h8V2z" />
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <path d="M12 6v6M9 9h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  creative: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  ),
  
  // Pattern3 brand icons
  triangle: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 20h20L12 2z" />
    </svg>
  ),
  'triangle-outline': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  
  // AI and tech icons
  'ai-brain': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4L12 22l4.5-10c1-1 1.5-2.5 1.5-4 0-3.5-2.5-6-6-6z" />
      <circle cx="12" cy="8" r="2" fill="white" />
    </svg>
  ),
  
  // Star rating
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12'
  }

  const baseClasses = `
    inline-block flex-shrink-0
    transition-transform duration-200 ease-out
    ${sizeClasses[size]}
  `
  
  const hoverClass = hover ? 'hover:scale-110' : ''
  const bounceClass = bounce ? 'hover:animate-bounce' : ''
  
  const classes = `${baseClasses} ${hoverClass} ${bounceClass} ${className}`.trim()

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