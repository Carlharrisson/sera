# Sera Works

> AI-Powered Automation Website built with Next.js and React

A modern, responsive landing page for Sera Works - a platform that helps businesses automate their workflows and processes through intelligent automation solutions.

## 🌐 Live Demo

- **Production**: [sera-nine.vercel.app](https://sera-nine.vercel.app)
- **Domain**: [seraworks.com](https://seraworks.com)

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Meta tags, sitemap, and structured data included
- **Type Safe**: Built with TypeScript for better code quality
- **Accessibility**: WCAG compliant design patterns
- **Analytics Ready**: Google Analytics and ContentSquare integration

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Form Backend**: [Formspree](https://formspree.io/) for contact forms
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
sera/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── legal/          # Legal pages
│   │   ├── manifest.ts     # PWA manifest
│   │   └── sitemap.ts      # Dynamic sitemap
│   ├── components/         # React components
│   │   ├── sections/       # Page sections
│   │   ├── ui/            # Reusable UI components
│   │   ├── analytics.tsx   # Analytics components
│   │   ├── footer.tsx      # Site footer
│   │   └── navbar.tsx      # Navigation
│   ├── content/           # Content and copy
│   │   ├── data/          # Static data files
│   │   └── copy.ts        # Site copy and text
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
│   ├── images/           # Image assets
│   ├── fonts/            # Custom fonts
│   └── icons/            # Favicon and app icons
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Carlharrisson/sera.git
   cd sera
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your environment variables to `.env.local`:

   ```env
   # Add your environment variables here
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🎨 Customization

### Content Management

All site content is managed through configuration files:

- **Copy & Text**: `src/content/copy.ts`
- **FAQ Data**: `src/content/data/faq.ts`
- **Testimonials**: `src/content/data/testimonials.ts`
- **Projects**: `src/content/data/latest-projects.ts`
- **Legal Content**: `src/content/data/legal.ts`

### Styling

- **Global Styles**: `src/app/globals.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Custom Fonts**: Loaded in `src/app/layout.tsx`

### SEO Configuration

- **Metadata**: Configured in `src/app/layout.tsx`
- **Sitemap**: Generated in `src/app/sitemap.ts`
- **Manifest**: PWA manifest in `src/app/manifest.ts`

## 🌍 Domain Configuration

The site includes automatic redirects for multiple domains:

- `serabuilds.com` → `seraworks.com`
- `serasystem.co` → `seraworks.com`
- `seraworkflow.com` → `seraworks.com`

Domain redirects are configured in `next.config.ts`.

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- CSRF protection
- Secure cookie settings
- Frame options protection

## 📊 Analytics & Monitoring

- **Google Analytics**: Integrated via `src/components/analytics.tsx`
- **ContentSquare**: User experience analytics
- **Performance**: Core Web Vitals monitoring

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push to main

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

- **Website**: [seraworks.com](https://seraworks.com)
- **Email**: hello@seraworks.com
- **GitHub**: [@Carlharrisson](https://github.com/Carlharrisson)

---

Built with ❤️ by the Sera Works team
