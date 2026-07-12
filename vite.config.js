import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // PERFORMANCE: Optimize React plugin
      jsxRuntime: 'automatic',
      // FastRefresh optimizations
      fastRefresh: true,
    })
  ],
  base: '/', // Изменяем базовый путь для локальной разработки
  server: {
    historyApiFallback: true, // Перенаправляем все запросы на index.html для SPA
    // CSP removed - was causing Google Analytics/Ads to be blocked
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // Алиас для импорта из src
    }
  },
  
  // CSS конфигурация - только обычный CSS, без SCSS
  css: {
    preprocessorOptions: {
      // Отключаем все препроцессоры CSS
    },
    modules: false,
    devSourcemap: false
  },
  
  publicDir: 'public', // Публичная директория

  build: {
    outDir: 'dist',
    assetsInlineLimit: 1024, // AGGRESSIVE: Reduce to 1KB to minimize main bundle
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,

    // AGGRESSIVE: Rollup optimizations
    rollupOptions: {
      output: {
        // AGGRESSIVE CHUNK SPLITTING: Maximize code splitting for minimal initial load
        manualChunks: (id) => {
          // CRITICAL: Only React core in initial bundle
          if (id.includes('node_modules/react/') && !id.includes('react-dom') && !id.includes('react-router')) {
            return 'react-core';
          }

          // DEFER: React DOM in separate chunk
          if (id.includes('react-dom/client')) {
            return 'react-dom-client';
          }
          if (id.includes('react-dom')) {
            return 'react-dom';
          }

          // DEFER: Router
          if (id.includes('react-router-dom')) {
            return 'react-router';
          }

          // DEFER: Animations (heavy, load on interaction)
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }

          // DEFER: GSAP (not needed initially)
          if (id.includes('gsap')) {
            return 'gsap';
          }
          if (id.includes('split-type')) {
            return 'split-type';
          }

          // DEFER: i18n (load async)
          if (id.includes('i18next-browser-languagedetector')) {
            return 'i18n-detector';
          }
          if (id.includes('i18next')) {
            return 'i18n-core';
          }
          if (id.includes('react-i18next')) {
            return 'react-i18n';
          }

          // DEFER: Styled components (heavy, minimize usage)
          if (id.includes('styled-components')) {
            return 'styled-components';
          }

          // DEFER: Icons (load per page)
          if (id.includes('heroicons')) {
            return 'heroicons';
          }
          if (id.includes('lucide-react')) {
            return 'lucide';
          }
          if (id.includes('react-icons')) {
            return 'react-icons';
          }

          // DEFER: Forms (only for contact page)
          if (id.includes('formik')) {
            return 'formik';
          }
          if (id.includes('yup')) {
            return 'yup';
          }

          // DEFER: Helmet (SEO, not critical for initial render)
          if (id.includes('react-helmet')) {
            return 'react-helmet';
          }

          // DEFER: All other node_modules
          if (id.includes('node_modules')) {
            // Further split large libraries
            const match = id.match(/node_modules\/(@?[^/]+)/);
            if (match) {
              const packageName = match[1];
              // Split large packages individually
              if (['scheduler', 'object-assign', 'prop-types'].includes(packageName)) {
                return `vendor-${packageName}`;
              }
            }
            return 'vendor-misc';
          }
        },
        
        // Оптимизация имен файлов для лучшего кэширования
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|webp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          
          return `assets/[name]-[hash][extname]`;
        }
      },
      
      // Оптимизация импортов
      input: {
        main: resolve(__dirname, 'index.html')
      },
      
      // Исключаем проблемные модули
      external: (id) => {
        // Исключаем любые SCSS файлы
        if (id.includes('.scss') || id.includes('scss')) {
          return true;
        }
        return false;
      }
    },
    
    // SAFE minification - don't break styled-components
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // SAFE: Don't be too aggressive
        passes: 1,
        dead_code: true,
        conditionals: true,
        evaluate: true,
        unused: true,
        if_return: true,
        join_vars: true,
        sequences: true,
      },
      format: {
        comments: false,
      },
      mangle: {
        // CRITICAL: Don't mangle for styled-components
        keep_classnames: true,
        keep_fnames: true,
        safari10: true,
      },
    },

    // AGGRESSIVE: Target very small chunk sizes
    chunkSizeWarningLimit: 300
  },

  // Optimized pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react/jsx-runtime',
      'react-dom/client',
      // i18n - need to include for proper ESM handling
      'react-i18next',
      'i18next',
      'i18next-browser-languagedetector',
      'html-parse-stringify',
      'void-elements',
    ],
    exclude: [
      'gsap',
      'split-type',
    ],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true
      },
      treeShaking: true,
      minify: true,
    }
  },
  
  // SAFE esbuild options
  esbuild: {
    drop: ['debugger'],
    target: 'es2020',
    legalComments: 'none',
    logLevel: 'warning',
  },
  
  // Предварительный рендеринг для SEO
  prerender: {
    disabled: false, // Включаем для повышения скорости загрузки
    concurrency: 4, // Оптимизируем количество параллельных процессов
    renderOptions: {
      injectWebP: true, // Автоматическая поддержка WebP
    },
  },
})
