// Image optimization utilities
export interface ImageOptimizationOptions {
  quality?: number
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  width?: number
  height?: number
  lazy?: boolean
}

// Optimized image component with lazy loading and format detection
export function createOptimizedImageSrc(
  src: string, 
  options: ImageOptimizationOptions = {}
): string {
  const { quality = 85, format = 'webp', width, height } = options
  
  // For production, you'd integrate with a service like Cloudinary or ImageKit
  // For now, we'll return the original src with optimization hints
  const params = new URLSearchParams()
  
  if (quality !== 85) params.append('q', quality.toString())
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  if (format !== 'jpeg') params.append('f', format)
  
  return params.toString() ? `${src}?${params.toString()}` : src
}

// Lazy loading intersection observer
export class LazyImageLoader {
  public observer: IntersectionObserver
  private images: Set<HTMLImageElement> = new Set()

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            this.loadImage(img)
            this.observer.unobserve(img)
            this.images.delete(img)
          }
        })
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    )
  }

  observe(img: HTMLImageElement) {
    this.images.add(img)
    this.observer.observe(img)
  }

  private loadImage(img: HTMLImageElement) {
    const src = img.dataset.src
    if (src) {
      img.src = src
      img.classList.remove('lazy-loading')
      img.classList.add('lazy-loaded')
    }
  }

  disconnect() {
    this.observer.disconnect()
    this.images.clear()
  }
}

// Preload critical images
export function preloadCriticalImages() {
  const criticalImages = [
    '/images/headshot.jpg',
    '/images/pattern3black.png',
    '/images/pattern3white.png'
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}