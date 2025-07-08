// Code optimization utilities and best practices

// Debounce utility for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }

    const callNow = immediate && !timeout
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    
    if (callNow) func(...args)
  }
}

// Throttle utility for scroll and resize events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Memoization utility for expensive calculations
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map()
  
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args)
    
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    const result = fn(...args)
    cache.set(key, result)
    
    return result
  }) as T
}

// Error boundary utility
export class ErrorHandler {
  private static instance: ErrorHandler
  private errors: Error[] = []

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler()
    }
    return ErrorHandler.instance
  }

  logError(error: Error, context?: string) {
    this.errors.push(error)
    
    console.error(`Error ${context ? `in ${context}` : ''}:`, error)
    
    // In production, send to error tracking service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(error, context)
    }
  }

  private sendToErrorService(error: Error, context?: string) {
    // Implement error tracking service integration
    // e.g., Sentry, LogRocket, etc.
    console.log('Would send to error service:', { error, context })
  }

  getErrors(): Error[] {
    return [...this.errors]
  }

  clearErrors() {
    this.errors = []
  }
}

// Performance-optimized array operations
export const ArrayUtils = {
  // Efficient array deduplication
  dedupe<T>(array: T[]): T[] {
    return [...new Set(array)]
  },

  // Chunked processing for large arrays
  processInChunks<T, R>(
    array: T[],
    processor: (chunk: T[]) => R[],
    chunkSize: number = 100
  ): Promise<R[]> {
    return new Promise((resolve) => {
      const results: R[] = []
      let index = 0

      const processChunk = () => {
        const chunk = array.slice(index, index + chunkSize)
        if (chunk.length === 0) {
          resolve(results)
          return
        }

        const chunkResults = processor(chunk)
        results.push(...chunkResults)
        index += chunkSize

        // Use requestIdleCallback for non-blocking processing
        if ('requestIdleCallback' in window) {
          requestIdleCallback(processChunk)
        } else {
          setTimeout(processChunk, 0)
        }
      }

      processChunk()
    })
  },

  // Binary search for sorted arrays
  binarySearch<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): number {
    let left = 0
    let right = array.length - 1
    const compare = compareFn || ((a, b) => a < b ? -1 : a > b ? 1 : 0)

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const comparison = compare(array[mid], target)

      if (comparison === 0) return mid
      if (comparison < 0) left = mid + 1
      else right = mid - 1
    }

    return -1
  }
}

// DOM optimization utilities
export const DOMUtils = {
  // Efficient DOM updates using DocumentFragment
  batchDOMUpdates(container: HTMLElement, updates: () => void) {
    const fragment = document.createDocumentFragment()
    const originalParent = container.parentNode
    
    if (originalParent) {
      originalParent.replaceChild(fragment, container)
      updates()
      originalParent.replaceChild(container, fragment)
    }
  },

  // Optimized scroll position detection
  createScrollObserver(
    callback: (scrollY: number, direction: 'up' | 'down') => void,
    throttleMs: number = 16
  ) {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      
      callback(currentScrollY, direction)
      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition)
        ticking = true
      }
    }

    window.addEventListener('scroll', throttle(onScroll, throttleMs), { passive: true })
    
    return () => window.removeEventListener('scroll', onScroll)
  }
}

// Memory management utilities
export const MemoryUtils = {
  // Cleanup function for removing event listeners and observers
  createCleanupManager() {
    const cleanupTasks: (() => void)[] = []

    return {
      add(cleanup: () => void) {
        cleanupTasks.push(cleanup)
      },
      
      cleanup() {
        cleanupTasks.forEach(task => {
          try {
            task()
          } catch (error) {
            console.error('Cleanup task failed:', error)
          }
        })
        cleanupTasks.length = 0
      }
    }
  },

  // Weak reference cache for preventing memory leaks
  createWeakCache<K extends object, V>(): {
    set: (key: K, value: V) => void
    get: (key: K) => V | undefined
    has: (key: K) => boolean
    delete: (key: K) => boolean
  } {
    const cache = new WeakMap<K, V>()

    return {
      set: (key: K, value: V) => cache.set(key, value),
      get: (key: K) => cache.get(key),
      has: (key: K) => cache.has(key),
      delete: (key: K) => cache.delete(key)
    }
  }
}