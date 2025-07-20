import { useState, useRef, useEffect } from 'react'
import { imageOptimizer, generatePlaceholder, type ImageOptimizationConfig } from '../../utils/advancedImageOptimization'

interface AdvancedOptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: 'blur' | 'empty' | string
  onLoad?: () => void
  onError?: () => void
}

export default function AdvancedOptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  placeholder = 'empty',
  onLoad,
  onError
}: AdvancedOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Generate optimized URLs and srcSets
  const config: ImageOptimizationConfig = { width, height, quality, priority }
  const optimizedSrc = imageOptimizer.generateOptimizedUrl(src, config)
  const { webp, avif, fallback } = imageOptimizer.generateResponsiveSrcSet(src, config)

  // Generate placeholder
  const placeholderSrc = (() => {
    if (placeholder === 'empty') return ''
    if (placeholder === 'blur') {
      return imageOptimizer.generateOptimizedUrl(src, { ...config, quality: 10 })
    }
    if (typeof placeholder === 'string') return placeholder
    return generatePlaceholder(width || 400, height || 300)
  })()

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    if (priority) {
      // Load immediately for priority images - no need to set currentSrc
    } else {
      // Set up lazy loading
      img.src = placeholderSrc
      img.dataset.src = optimizedSrc
      img.classList.add('lazy-loading')
      imageOptimizer.observeImage(img)
    }
  }, [optimizedSrc, placeholderSrc, priority])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
    console.warn(`Failed to load image: ${src}`)
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

  // Check browser support for modern formats
  // Note: Browser format support should be checked differently
  // For now, we'll assume support and let the browser handle fallbacks
  const supportsAvif = true
  const supportsWebp = true

  return (
    <picture>
      {/* AVIF format for supported browsers */}
      {supportsAvif && (
        <source
          srcSet={avif}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          type="image/avif"
        />
      )}
      
      {/* WebP format for supported browsers */}
      {supportsWebp && (
        <source
          srcSet={webp}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          type="image/webp"
        />
      )}
      
      {/* Fallback JPEG format */}
      <source
        srcSet={fallback}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        type="image/jpeg"
      />
      
      <img
        ref={imgRef}
        src={priority ? optimizedSrc : placeholderSrc}
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
        style={{
          filter: isLoaded ? 'none' : 'blur(5px)',
          transition: 'filter 0.3s ease-out, opacity 0.3s ease-out'
        }}
      />
    </picture>
  )
}