# Sera Landing Page - Deployment Guide

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (Optional - for future implementation)
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@sera.com

# Security (Optional - for future authentication)
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://sera.com
```

## Deployment Checklist

### 1. Update Domain References

- [ ] Update `src/app/layout.tsx` OpenGraph URL from `https://sera.com` to your domain
- [ ] Update `src/app/sitemap.ts` baseUrl from `https://sera.com` to your domain
- [ ] Update `public/robots.txt` sitemap URL to your domain

### 2. Analytics Setup

- [ ] Create Google Analytics account
- [ ] Add GA_ID to environment variables
- [ ] Set up Google Search Console
- [ ] Verify domain ownership

### 3. Performance

- [ ] Run `npm run build` to check for errors
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Optimize images if needed

### 4. SEO

- [ ] Create and add og-image.jpg (1200x630px) to public folder
- [ ] Update Twitter handle in metadata (@sera_agency)
- [ ] Submit sitemap to Google Search Console

### 5. Legal & Compliance

- [ ] Review legal page content
- [ ] Ensure cookie consent is working
- [ ] Update contact information in legal.ts

### 6. Testing

- [ ] Test all buttons and tracking
- [ ] Verify cookie consent functionality
- [ ] Test contact forms (when implemented)
- [ ] Cross-browser testing

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run lint
```

## Performance Tips

1. **Images**: Already optimized with WebP/AVIF support
2. **Fonts**: Add font optimization if using custom fonts
3. **Bundle**: Icons are optimized via `optimizePackageImports`
4. **Caching**: Static assets cached for 1 year
5. **Security**: Headers configured for security

## Recommended Hosting

- **Vercel**: Optimal for Next.js (automatic optimization)
- **Netlify**: Good alternative with edge functions
- **Cloudflare Pages**: Fast global CDN
