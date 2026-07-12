import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // Use classic runtime for CDN React
    })
  ],
  base: '/',

  build: {
    outDir: 'dist',
    assetsInlineLimit: 2048, // Inline small assets
    cssCodeSplit: false, // Single CSS file for better caching
    sourcemap: false,

    rollupOptions: {
      // CRITICAL: Use React from CDN
      external: [
        'react',
        'react-dom',
        'react-dom/client'
      ],

      output: {
        // Map external modules to window globals
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'react-dom/client': 'ReactDOM'
        },

        // Aggressive code splitting
        manualChunks: (id) => {
          // Lazy load everything except critical
          if (id.includes('framer-motion')) return 'animation';
          if (id.includes('gsap')) return 'gsap';
          if (id.includes('styled-components')) return 'styles';
          if (id.includes('i18next')) return 'i18n';
          if (id.includes('heroicons') || id.includes('lucide') || id.includes('react-icons')) return 'icons';
          if (id.includes('node_modules')) return 'vendor';
        },

        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]'
      }
    },

    // Safe minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 1,
      },
      format: {
        comments: false,
      },
      mangle: {
        keep_classnames: true,
        keep_fnames: true,
      },
    },

    chunkSizeWarningLimit: 200
  },

  optimizeDeps: {
    exclude: ['react', 'react-dom'], // Don't pre-bundle React
    include: [
      'styled-components',
      'framer-motion',
      'react-router-dom'
    ]
  },

  esbuild: {
    drop: ['debugger'],
    target: 'es2020',
  }
})