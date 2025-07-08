import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
  className?: string
  onClick?: () => void
}

export default function Card({
  children,
  variant = 'default',
  padding = 'lg',
  hover = false,
  className = '',
  onClick
}: CardProps) {
  const baseClasses = `
    bg-white rounded-xl
    transition-all duration-200 ease-out
  `.trim()

  const variantClasses = {
    default: 'border border-gray-200 shadow-sm',
    elevated: 'shadow-lg border border-gray-100',
    outlined: 'border-2 border-gray-200',
    glass: 'backdrop-blur-sm bg-white/80 border border-white/20 shadow-lg'
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  }

  const hoverClass = hover ? 'card-hover cursor-pointer' : ''
  const clickableClass = onClick ? 'cursor-pointer' : ''

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverClass}
    ${clickableClass}
    ${className}
  `.trim()

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  )
}