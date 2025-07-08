import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          vendor: ['react', 'react-dom'],
          
          // Router (likely to be used across pages)
          router: ['react-router-dom'],
          
          // Chart.js (only used on specific pages)
          charts: ['chart.js', 'react-chartjs-2'],
          
          // Icons (used throughout the app)
          icons: ['lucide-react'],
          
          // Supabase (used for forms and data)
          supabase: ['@supabase/supabase-js']
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            const name = facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            return `${name}-[hash].js`
          }
          return '[name]-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return 'images/[name]-[hash][extname]'
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Optimize for better compression
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
    
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Enable CSS minification
    cssMinify: true
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react'
    ],
    exclude: [
      // Exclude large dependencies that should be loaded on demand
      'chart.js',
      'react-chartjs-2'
    ]
  },
  
  // Development server configuration
  server: {
    port: 3000,
    host: true,
    // Enable HTTP/2 in development
    https: false,
    // Optimize HMR
    hmr: {
      overlay: false
    }
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true
  },
  
  // Enable experimental features for better performance
  esbuild: {
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Enable tree shaking
    treeShaking: true,
    // Optimize for modern browsers
    target: 'es2020'
  },
  
  // Define environment variables
  define: {
    __DEV__: process.env.NODE_ENV === 'development'
  }
})