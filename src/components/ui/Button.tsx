import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
  rel?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  href,
  target,
  rel
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200 ease-out
    focus-ring btn-hover-lift
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:transform-none disabled:shadow-none
  `.trim()

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-primary to-primary-light
      text-white shadow-md hover:shadow-lg
      border border-transparent
    `,
    secondary: `
      bg-gradient-to-r from-accent to-accent-light
      text-white shadow-md hover:shadow-lg
      border border-transparent
    `,
    outline: `
      bg-transparent text-primary
      border-2 border-primary
      hover:bg-primary hover:text-white
    `,
    ghost: `
      bg-transparent text-gray-700
      hover:bg-gray-100
      border border-transparent
    `
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim()

  const content = (
    <>
      {loading && (
        <LoadingSpinner 
          size="sm" 
          variant="spin" 
          className="mr-2" 
        />
      )}
      {children}
    </>
  )

  // Check if href is an internal route (starts with /)
  if (href && href.startsWith('/')) {
    return (
      <Link
        to={href}
        className={classes}
      >
        {content}
      </Link>
    )
  }
  
  // External links
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </button>
  )
}