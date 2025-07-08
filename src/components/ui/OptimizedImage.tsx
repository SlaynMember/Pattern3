import React, { useState, useRef, useEffect } from 'react'
import { LazyImageLoader } from '../../utils/imageOptimization'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: string
}

const lazyLoader = new LazyImageLoader()

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img || priority) return

    // Use lazy loading for non-priority images
    img.src = placeholder
    img.dataset.src = src
    img.classList.add('lazy-loading')
    lazyLoader.observe(img)

    return () => {
      if (img) {
        lazyLoader.observer?.unobserve(img)
      }
    }
  }, [src, priority, placeholder])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    console.warn(`Failed to load image: ${src}`)
  }

  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [400, 800, 1200, 1600]
    return sizes
      .map(size => `${baseSrc}?w=${size}&q=${quality} ${size}w`)
      .join(', ')
  }

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image not found</span>
      </div>
    )
  }

  return (
    <img
      ref={imgRef}
      src={priority ? src : placeholder}
      srcSet={priority ? generateSrcSet(src) : undefined}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      onLoad={handleLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}