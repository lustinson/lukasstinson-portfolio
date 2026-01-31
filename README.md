# Lukas Stinson - Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark mode support
- 🔍 Comprehensive SEO optimization
- 📊 Interactive timeline showcasing experience and projects
- 🎓 Dedicated education section
- 🏷️ Structured data (Schema.org) for better search engine understanding
- 📱 Mobile-first, responsive layout
- ⚡ Built with Next.js 14 App Router for optimal performance

## SEO Features Implemented

### 1. **Metadata & OpenGraph**
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- Proper title templates

### 2. **Structured Data (JSON-LD)**
- Person schema with professional information
- Education and skills data
- Contact information and social links
- Helps Google create knowledge panels

### 3. **Semantic HTML**
- Proper heading hierarchy (H1 → H2 → H3)
- `<article>` tags for timeline items
- `<time>` elements with dateTime attributes for dates
- Accessibility-first markup

### 4. **Technical SEO**
- Automatic sitemap generation at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Proper robots meta tags
- Fast page loads with Next.js optimization

## Setup & Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Post-Deployment SEO Checklist

### 1. **Google Search Console**
```
1. Go to https://search.google.com/search-console
2. Add your property (https://lukasstinson.com)
3. Verify ownership (DNS or file upload)
4. Submit your sitemap: https://lukasstinson.com/sitemap.xml
5. Copy verification code and add to layout.tsx metadata.verification.google
```

### 2. **Update Your Domain**
Replace all instances of `lukasstinson.com` with your actual domain:
- `app/layout.tsx` - metadataBase
- `app/sitemap.ts` - baseUrl
- `app/robots.ts` - sitemap URL

### 3. **Add Your GitHub**
Update the structured data in `app/layout.tsx`:
```typescript
sameAs: [
  "https://www.linkedin.com/in/lukasstinson422/",
  "https://github.com/lustinson", // Add this
],
```

### 4. **Test Your SEO**
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev/

### 5. **Social Media Testing**
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Performance Tips

1. **Optimize Images**: Convert to WebP format for better compression
2. **Enable Caching**: Configure proper cache headers in your hosting
3. **Use a CDN**: Deploy on Vercel, Netlify, or similar for global CDN
4. **Monitor Core Web Vitals**: Use Google Search Console

## Deployment

### Recommended: Vercel (Zero Config)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Alternative: Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## License

© 2026 Lukas Stinson. All rights reserved.

## Contact

- Email: stinser01@gmail.com
- LinkedIn: [linkedin.com/in/lukasstinson422](https://www.linkedin.com/in/lukasstinson422/)
- Location: Victoria, BC / Toronto, ON
