#!/bin/bash

# Script to optimize build for Netlify deployment
echo "🚀 Optimizing for Netlify deployment..."

# 1. Create optimized index.html with inline critical CSS
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src *; img-src * data: blob:; frame-src *; style-src * 'unsafe-inline';">
    <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2024" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2024" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="KAIF Club & Spa — эксклюзивный комплекс с авторской кухней, роскошным спа-центром, традиционной русской баней и современным фитнес-клубом." />
    <title>KAIF SAUNA & SPA</title>

    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Critical inline CSS for instant render -->
    <style>
      *{margin:0;padding:0;box-sizing:border-box}
      body{font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',Roboto,sans-serif;background:#000;color:#fff}
      #root{min-height:100vh}
      .app-loading{position:fixed;top:0;left:0;right:0;bottom:0;background:#000;display:flex;align-items:center;justify-content:center;z-index:9999;transition:opacity .5s}
      .app-loading.hidden{opacity:0;pointer-events:none}
      .loader{width:48px;height:48px;border:2px solid rgba(255,255,255,0.1);border-top:2px solid #fff;border-radius:50%;animation:spin .8s linear infinite}
      @keyframes spin{to{transform:rotate(360deg)}}

      /* Critical hero styles */
      section{position:relative;width:100%;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#000;overflow:hidden}
      img{max-width:100%;height:auto;display:block}
      picture{display:block}
    </style>

    <!-- Async fonts -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600&family=Bebas+Neue&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;600&family=Bebas+Neue&display=swap" media="print" onload="this.media='all'">

    <!-- Preload critical resources -->
    <link rel="preload" as="image" href="/images-optimized/spa.jpg" fetchpriority="high">
    <link rel="preload" as="image" href="/assets/images/logo-homepage-Bvg3zKLL.webp" type="image/webp">
  </head>
  <body>
    <div class="app-loading" id="loader">
      <div class="loader"></div>
    </div>

    <div id="root"></div>

    <!-- Quick loader hide -->
    <script>
      document.addEventListener('DOMContentLoaded',function(){
        setTimeout(function(){
          var l=document.getElementById('loader');
          if(l)l.classList.add('hidden');
        },100);
      });
    </script>

    <script type="module" src="/src/main.jsx"></script>

    <!-- Async Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-5WP6GKBQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-5WP6GKBQ');
    </script>
  </body>
</html>
EOF

echo "✅ Created optimized index.html"

# 2. Build the project
echo "📦 Building project..."
npm run build

# 3. Post-build optimizations
echo "🎨 Applying post-build optimizations..."

# Remove source maps if they exist
find dist -name "*.map" -type f -delete

# Create a _redirects file for Netlify if it doesn't exist
if [ ! -f dist/_redirects ]; then
  echo "/* /index.html 200" > dist/_redirects
  echo "✅ Created _redirects file"
fi

# Copy _headers to dist
if [ -f _headers ]; then
  cp _headers dist/
  echo "✅ Copied _headers file"
fi

echo "🎉 Build optimized for Netlify! Ready to deploy."
echo ""
echo "📊 Expected improvements:"
echo "- Inline critical CSS for instant rendering"
echo "- Preload critical resources"
echo "- Optimized cache headers"
echo "- Lighthouse plugin will track performance"
echo ""
echo "🚀 Push to git and Netlify will automatically deploy with optimizations!"