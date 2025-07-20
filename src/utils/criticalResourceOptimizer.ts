// Critical resource optimization utilities

interface CriticalResource {
  url: string
  type: 'font' | 'image' | 'script' | 'style'
  priority: 'high' | 'medium' | 'low'
  crossorigin?: boolean
}

class CriticalResourceOptimizer {
  private static instance: CriticalResourceOptimizer
  private preloadedResources = new Set<string>()
  private criticalCSS = ''

  static getInstance(): CriticalResourceOptimizer {
    if (!CriticalResourceOptimizer.instance) {
      CriticalResourceOptimizer.instance = new CriticalResourceOptimizer()
    }
    return CriticalResourceOptimizer.instance
  }

  // Preload critical resources
  preloadCriticalResources() {
    const criticalResources: CriticalResource[] = [
      // Critical images
      { url: '/images/headshot.jpg', type: 'image', priority: 'high' },
      { url: '/images/pattern3black.png', type: 'image', priority: 'high' },
      { url: '/images/pattern3white.png', type: 'image', priority: 'medium' },
    ]

    criticalResources.forEach(resource => {
      this.preloadResource(resource)
    })
  }

  private preloadResource(resource: CriticalResource) {
    if (this.preloadedResources.has(resource.url)) {
      return
    }

    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource.url
    
    switch (resource.type) {
      case 'font':
        link.as = 'font'
        link.type = 'font/woff2'
        if (resource.crossorigin) {
          link.crossOrigin = 'anonymous'
        }
        break
      case 'image':
        link.as = 'image'
        break
      case 'script':
        link.as = 'script'
        break
      case 'style':
        link.as = 'style'
        break
    }

    document.head.appendChild(link)
    this.preloadedResources.add(resource.url)
  }

  // Add optimized resource hints
  addResourceHints() {
    const hints = [
      // DNS prefetch for external domains
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//player.vimeo.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      
      // Preconnect for critical external resources
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      
      // Prefetch likely next pages
      { rel: 'prefetch', href: '/work' },
      { rel: 'prefetch', href: '/about' },
      { rel: 'prefetch', href: '/start' },
    ]

    hints.forEach(hint => {
      const existingLink = document.querySelector(`link[href="${hint.href}"]`)
      if (!existingLink) {
        const link = document.createElement('link')
        Object.assign(link, hint)
        document.head.appendChild(link)
      }
    })
  }

  // Generate and inline critical CSS
  generateCriticalCSS(): string {
    if (this.criticalCSS) {
      return this.criticalCSS
    }

    // Critical above-the-fold styles
    this.criticalCSS = `
      /* Critical CSS for above-the-fold content */
      *,*::before,*::after{box-sizing:border-box}
      html{line-height:1.5;-webkit-text-size-adjust:100%}
      body{margin:0;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;color:#1e293b;background:#fff;line-height:1.6;font-weight:400;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
      
      /* Navigation styles */
      nav{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(4px);border-bottom:1px solid #e2e8f0}
      
      /* Hero section styles */
      .hero-bg{background:linear-gradient(135deg,#f8fafc 0%,#fff 50%,#f8fafc 100%);position:relative;overflow:hidden;padding:5rem 0 8rem}
      .hero-bg::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 30% 20%,rgba(8,145,178,0.05) 0%,transparent 50%),radial-gradient(circle at 70% 80%,rgba(20,184,166,0.05) 0%,transparent 50%);pointer-events:none;z-index:1}
      
      /* Typography */
      .heading-1{font-size:clamp(2.5rem,5vw,4rem);font-weight:900;line-height:1.1;letter-spacing:-0.025em;color:#1e293b}
      .text-gradient{background:linear-gradient(135deg,#0891b2,#14b8a6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
      
      /* Button styles */
      .btn-primary{background:linear-gradient(135deg,#0891b2,#06b6d4);color:#fff;font-weight:600;padding:0.875rem 2rem;border-radius:0.75rem;border:none;cursor:pointer;transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:0 4px 6px -1px rgba(8,145,178,0.1),0 2px 4px -1px rgba(8,145,178,0.06);font-size:1rem;letter-spacing:-0.01em;display:inline-flex;align-items:center;justify-content:center;text-decoration:none}
      
      /* Layout utilities */
      .container{width:100%;max-width:80rem;margin:0 auto;padding:0 1rem}
      .flex{display:flex}
      .items-center{align-items:center}
      .justify-center{justify-content:center}
      .text-center{text-align:center}
      .mb-6{margin-bottom:1.5rem}
      .mb-8{margin-bottom:2rem}
      
      /* Loading states */
      .lazy-loading{opacity:0.5;filter:blur(5px)}
      .lazy-loaded{opacity:1;filter:none;transition:opacity 0.3s ease-out,filter 0.3s ease-out}
    `

    return this.criticalCSS
  }

  // Inline critical CSS into the document head
  inlineCriticalCSS() {
    const existingStyle = document.querySelector('#critical-css')
    if (existingStyle) {
      return
    }

    const style = document.createElement('style')
    style.id = 'critical-css'
    style.textContent = this.generateCriticalCSS()
    document.head.appendChild(style)
  }

  // Initialize all optimizations
  initialize() {
    this.addResourceHints()
    this.preloadCriticalResources()
    this.inlineCriticalCSS()
  }
}

export const criticalResourceOptimizer = CriticalResourceOptimizer.getInstance()