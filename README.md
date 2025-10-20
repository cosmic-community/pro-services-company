# Professional Services Showcase

![App Preview](https://imgix.cosmicjs.com/06b83600-ad75-11f0-8dcc-651091f6a7c0-photo-1460925895917-afdab827c52f-1760937856098.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 15 and powered by Cosmic CMS. Showcase your services, team, client testimonials, and successful case studies with a beautiful, responsive design.

## Features

- 🎯 **Dynamic Services Display** - Showcase your services with descriptions, pricing, and categories
- 👥 **Team Member Profiles** - Professional team grid with photos, bios, and social links
- 💬 **Client Testimonials** - Build trust with client reviews and ratings
- 📊 **Case Studies** - Detailed project showcases with challenges, solutions, and results
- 🎨 **Modern Design** - Clean, professional interface with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Server-Side Rendering** - Lightning-fast performance with Next.js 15
- 🔄 **Real-time Updates** - Content updates instantly from Cosmic CMS
- 🎭 **TypeScript** - Full type safety throughout the application
- ♿ **Accessible** - WCAG compliant design patterns

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68f5c71f42dce237f0121421&clone_repository=68f5c8a742dce237f01214cc)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with bucket credentials

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members

```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Case Study

```typescript
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'project-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses the following content types from your Cosmic bucket:

- **Services** - Service offerings with descriptions, pricing, and categories
- **Team Members** - Team profiles with photos, roles, and social links
- **Testimonials** - Client reviews with ratings and photos
- **Case Studies** - Project showcases with detailed results

All content is fetched server-side for optimal performance and SEO.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

The application will automatically deploy on every push to your main branch.

### Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage with hero and features
│   ├── services/           # Services pages
│   ├── team/               # Team member pages
│   ├── testimonials/       # Testimonials page
│   └── case-studies/       # Case study pages
├── components/             # Reusable components
├── lib/
│   └── cosmic.ts          # Cosmic SDK configuration
├── types.ts               # TypeScript type definitions
└── public/                # Static assets
```

## License

MIT License - feel free to use this project for your own purposes.

<!-- README_END -->