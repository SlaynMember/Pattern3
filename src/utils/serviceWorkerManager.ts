// Advanced service worker management for caching and performance

interface CacheStrategy {
  name: string
  pattern: RegExp
  strategy: 'cache-first' | 'network-first' | 'stale-while-revalidate' | 'network-only' | 'cache-only'
  maxAge?: number
  maxEntries?: number
}

class ServiceWorkerManager {
  private static instance: ServiceWorkerManager
  private registration: ServiceWorkerRegistration | null = null
  private isSupported = 'serviceWorker' in navigator

  static getInstance(): ServiceWorkerManager {
    if (!ServiceWorkerManager.instance) {
      ServiceWorkerManager.instance = new ServiceWorkerManager()
    }
    return ServiceWorkerManager.instance
  }

  // Register service worker with advanced caching strategies
  async register(): Promise<void> {
    if (!this.isSupported) {
      console.warn('Service Worker not supported')
      return
    }

    try {
      // Generate service worker content dynamically
      const swContent = this.generateServiceWorkerContent()
      const blob = new Blob([swContent], { type: 'application/javascript' })
      const swUrl = URL.createObjectURL(blob)

      this.registration = await navigator.serviceWorker.register(swUrl, {
        scope: '/'
      })

      console.log('Service Worker registered successfully')

      // Listen for updates
      this.registration.addEventListener('updatefound', () => {
        const newWorker = this.registration!.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              this.notifyUpdate()
            }
          })
        }
      })

    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }

  // Generate service worker content with advanced caching strategies
  private generateServiceWorkerContent(): string {
    const cacheStrategies: CacheStrategy[] = [
      {
        name: 'static-assets',
        pattern: /\.(js|css|woff2?|png|jpg|jpeg|svg|ico)$/,
        strategy: 'cache-first',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        maxEntries: 100
      },
      {
        name: 'api-cache',
        pattern: /\/api\//,
        strategy: 'network-first',
        maxAge: 5 * 60 * 1000, // 5 minutes
        maxEntries: 50
      },
      {
        name: 'images',
        pattern: /\/images\//,
        strategy: 'cache-first',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        maxEntries: 200
      },
      {
        name: 'pages',
        pattern: /\/(work|about|start)/,
        strategy: 'stale-while-revalidate',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        maxEntries: 20
      }
    ]

    return `
      const CACHE_VERSION = 'v${Date.now()}';
      const CACHE_STRATEGIES = ${JSON.stringify(cacheStrategies)};
      
      // Install event - cache critical resources
      self.addEventListener('install', (event) => {
        event.waitUntil(
          caches.open('critical-' + CACHE_VERSION).then((cache) => {
            return cache.addAll([
              '/',
              '/static/css/main.css',
              '/static/js/main.js',
              '/fonts/inter-400.woff2',
              '/fonts/inter-500.woff2',
              '/fonts/inter-700.woff2',
              '/images/pattern3black.png',
              '/images/pattern3white.png',
              '/images/headshot.jpg'
            ]);
          })
        );
        self.skipWaiting();
      });

      // Activate event - clean up old caches
      self.addEventListener('activate', (event) => {
        event.waitUntil(
          caches.keys().then((cacheNames) => {
            return Promise.all(
              cacheNames.map((cacheName) => {
                if (!cacheName.includes(CACHE_VERSION)) {
                  return caches.delete(cacheName);
                }
              })
            );
          })
        );
        self.clients.claim();
      });

      // Fetch event - implement caching strategies
      self.addEventListener('fetch', (event) => {
        const url = new URL(event.request.url);
        
        // Skip non-GET requests
        if (event.request.method !== 'GET') {
          return;
        }

        // Find matching strategy
        const strategy = CACHE_STRATEGIES.find(s => s.pattern.test(url.pathname));
        
        if (strategy) {
          event.respondWith(handleRequest(event.request, strategy));
        } else {
          // Default to network-first for unmatched requests
          event.respondWith(
            fetch(event.request).catch(() => {
              return caches.match(event.request);
            })
          );
        }
      });

      // Handle requests based on caching strategy
      async function handleRequest(request, strategy) {
        const cacheName = strategy.name + '-' + CACHE_VERSION;
        const cache = await caches.open(cacheName);

        switch (strategy.strategy) {
          case 'cache-first':
            return cacheFirst(request, cache, strategy);
          case 'network-first':
            return networkFirst(request, cache, strategy);
          case 'stale-while-revalidate':
            return staleWhileRevalidate(request, cache, strategy);
          case 'network-only':
            return fetch(request);
          case 'cache-only':
            return cache.match(request);
          default:
            return fetch(request);
        }
      }

      // Cache-first strategy
      async function cacheFirst(request, cache, strategy) {
        const cached = await cache.match(request);
        if (cached && !isExpired(cached, strategy.maxAge)) {
          return cached;
        }

        try {
          const response = await fetch(request);
          if (response.ok) {
            await cache.put(request, response.clone());
            await cleanupCache(cache, strategy.maxEntries);
          }
          return response;
        } catch (error) {
          return cached || new Response('Network error', { status: 408 });
        }
      }

      // Network-first strategy
      async function networkFirst(request, cache, strategy) {
        try {
          const response = await fetch(request);
          if (response.ok) {
            await cache.put(request, response.clone());
            await cleanupCache(cache, strategy.maxEntries);
          }
          return response;
        } catch (error) {
          const cached = await cache.match(request);
          if (cached && !isExpired(cached, strategy.maxAge)) {
            return cached;
          }
          throw error;
        }
      }

      // Stale-while-revalidate strategy
      async function staleWhileRevalidate(request, cache, strategy) {
        const cached = await cache.match(request);
        
        const fetchPromise = fetch(request).then(async (response) => {
          if (response.ok) {
            await cache.put(request, response.clone());
            await cleanupCache(cache, strategy.maxEntries);
          }
          return response;
        });

        if (cached && !isExpired(cached, strategy.maxAge)) {
          // Return cached version immediately, update in background
          fetchPromise.catch(() => {}); // Ignore errors for background update
          return cached;
        }

        // No valid cache, wait for network
        return fetchPromise;
      }

      // Check if cached response is expired
      function isExpired(response, maxAge) {
        if (!maxAge) return false;
        
        const dateHeader = response.headers.get('date');
        if (!dateHeader) return false;
        
        const date = new Date(dateHeader);
        return Date.now() - date.getTime() > maxAge;
      }

      // Clean up cache to respect maxEntries limit
      async function cleanupCache(cache, maxEntries) {
        if (!maxEntries) return;
        
        const keys = await cache.keys();
        if (keys.length > maxEntries) {
          // Remove oldest entries
          const keysToDelete = keys.slice(0, keys.length - maxEntries);
          await Promise.all(keysToDelete.map(key => cache.delete(key)));
        }
      }
    `
  }

  // Notify user about available update
  private notifyUpdate() {
    if (window.confirm('A new version is available. Reload to update?')) {
      window.location.reload()
    }
  }

  // Update service worker
  async update(): Promise<void> {
    if (this.registration) {
      await this.registration.update()
    }
  }

  // Unregister service worker
  async unregister(): Promise<void> {
    if (this.registration) {
      await this.registration.unregister()
      this.registration = null
    }
  }

  // Get cache usage information
  async getCacheInfo(): Promise<{ name: string; size: number }[]> {
    if (!('caches' in window)) return []

    const cacheNames = await caches.keys()
    const cacheInfo = await Promise.all(
      cacheNames.map(async (name) => {
        const cache = await caches.open(name)
        const keys = await cache.keys()
        return { name, size: keys.length }
      })
    )

    return cacheInfo
  }

  // Clear all caches
  async clearCaches(): Promise<void> {
    if (!('caches' in window)) return

    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map(name => caches.delete(name)))
  }
}

export const serviceWorkerManager = ServiceWorkerManager.getInstance()