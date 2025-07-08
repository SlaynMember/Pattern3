// Advanced image optimization with WebP/AVIF support and CDN integration

export interface ImageOptimizationConfig {
  quality?: number
  format?: 'auto' | 'webp' | 'avif' | 'jpeg' | 'png'
  width?: number
  height?: number
  lazy?: boolean
  priority?: boolean
  blur?: boolean
  grayscale?: boolean
}

export class AdvancedImageOptimizer {
  private static instance: AdvancedImageOptimizer
  private cache = new Map<string, string>()
  private observer: IntersectionObserver | null = null

  static getInstance(): AdvancedImageOptimizer {
    if (!AdvancedImageOptimizer.instance) {
      AdvancedImageOptimizer.instance = new AdvancedImageOptimizer()
    }
    return AdvancedImageOptimizer.instance
  }

  constructor() {
    this.initializeObserver()
  }

  private initializeObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            this.loadImage(img)
            this.observer?.unobserve(img)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    )
  }

  // Generate optimized image URL with multiple format support
  generateOptimizedUrl(src: string, config: ImageOptimizationConfig = {}): string {
    const cacheKey = `${src}-${JSON.stringify(config)}`
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!
    }

    const {
      quality = 85,
      format = 'auto',
      width,
      height,
      blur = false,
      grayscale = false
    } = config

    // In production, this would integrate with a service like Cloudinary or ImageKit
    // For now, we'll simulate the optimization parameters
    const params = new URLSearchParams()
    
    if (quality !== 85) params.append('q', quality.toString())
    if (width) params.append('w', width.toString())
    if (height) params.append('h', height.toString())
    if (format !== 'auto') params.append('f', format)
    if (blur) params.append('blur', '300')
    if (grayscale) params.append('e', 'grayscale')

    const optimizedUrl = params.toString() ? `${src}?${params.toString()}` : src
    this.cache.set(cacheKey, optimizedUrl)
    
    return optimizedUrl
  }

  // Generate responsive srcSet with multiple formats
  generateResponsiveSrcSet(src: string, config: ImageOptimizationConfig = {}): {
    webp: string
    avif: string
    fallback: string
  } {
    const sizes = [400, 800, 1200, 1600, 2000]
    const { quality = 85 } = config

    const generateSrcSetForFormat = (format: 'webp' | 'avif' | 'jpeg') => {
      return sizes
        .map(size => {
          const url = this.generateOptimizedUrl(src, { ...config, width: size, format, quality })
          return `${url} ${size}w`
        })
        .join(', ')
    }

    return {
      avif: generateSrcSetForFormat('avif'),
      webp: generateSrcSetForFormat('webp'),
      fallback: generateSrcSetForFormat('jpeg')
    }
  }

  // Check browser support for modern image formats
  static supportsFormat(format: 'webp' | 'avif'): boolean {
    if (typeof window === 'undefined') return false

    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1

    if (format === 'webp') {
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }

    if (format === 'avif') {
      return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0
    }

    return false
  }

  // Lazy load image with intersection observer
  observeImage(img: HTMLImageElement) {
    if (this.observer && img.dataset.src) {
      this.observer.observe(img)
    }
  }

  private loadImage(img: HTMLImageElement) {
    const src = img.dataset.src
    if (src) {
      // Create a new image to preload
      const newImg = new Image()
      
      newImg.onload = () => {
        img.src = src
        img.classList.remove('lazy-loading')
        img.classList.add('lazy-loaded')
        
        // Trigger fade-in animation
        requestAnimationFrame(() => {
          img.style.opacity = '1'
        })
      }

      newImg.onerror = () => {
        img.classList.add('lazy-error')
        console.warn(`Failed to load image: ${src}`)
      }

      newImg.src = src
    }
  }

  // Preload critical images
  preloadCriticalImages(urls: string[]) {
    urls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      document.head.appendChild(link)
    })
  }

  // Clean up resources
  destroy() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.cache.clear()
  }
}

// Export singleton instance
export const imageOptimizer = AdvancedImageOptimizer.getInstance()

// Utility function for generating placeholder images
export function generatePlaceholder(width: number, height: number, color = '#f1f5f9'): string {
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>`
  )}`
}

// Utility for calculating image dimensions while maintaining aspect ratio
export function calculateAspectRatio(
  originalWidth: number,
  originalHeight: number,
  targetWidth?: number,
  targetHeight?: number
): { width: number; height: number } {
  if (targetWidth && targetHeight) {
    return { width: targetWidth, height: targetHeight }
  }

  const aspectRatio = originalWidth / originalHeight

  if (targetWidth) {
    return { width: targetWidth, height: Math.round(targetWidth / aspectRatio) }
  }

  if (targetHeight) {
    return { width: Math.round(targetHeight * aspectRatio), height: targetHeight }
  }

  return { width: originalWidth, height: originalHeight }
}