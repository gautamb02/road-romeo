# Road Romeo Website Development Plan

## Project Overview

**Business:** Road Romeo Services - Two-wheeler servicing & repair in Pune, India
**USP:** Free pickup & drop service across Pune city
**Goal:** Build a modern, SEO-optimized React website that outperforms competitors and maximizes conversions

---

## Tech Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| Framework | React 18 + TypeScript | Type safety, component reusability |
| Build Tool | Vite | Fast HMR, optimized builds |
| Styling | Tailwind CSS | Rapid UI development, easy theming |
| Routing | React Router v6 | SPA navigation, SEO-friendly |
| Forms | React Hook Form | Performance, validation |
| Icons | Lucide React | Lightweight, consistent |
| SEO | React Helmet Async | Meta tags, structured data |
| Analytics | Google Analytics 4 | Traffic tracking |
| Hosting | Vercel/Netlify | Fast CDN, easy deployment |

---

## Color Theme Configuration

### Theme System Architecture

The website will support **two configurable color themes** that can be switched via environment variable or runtime config.

```
src/
├── config/
│   └── theme.ts          # Theme configuration
├── styles/
│   └── themes/
│       ├── orange-blue.css    # Option 1
│       └── red-black.css      # Option 2
```

### Option 1: Orange & Blue (Trust + Conversion)

```css
/* Primary Theme - Recommended */
:root[data-theme="orange-blue"] {
  /* Primary Colors */
  --color-primary: #1A56DB;           /* Deep Blue - Trust */
  --color-primary-light: #3B82F6;     /* Light Blue */
  --color-primary-dark: #1E40AF;      /* Dark Blue */

  /* Accent Colors */
  --color-accent: #F97316;            /* Vibrant Orange - CTA */
  --color-accent-light: #FB923C;      /* Light Orange */
  --color-accent-dark: #EA580C;       /* Dark Orange - Hover */

  /* Backgrounds */
  --color-bg-primary: #FFFFFF;        /* White */
  --color-bg-secondary: #F3F4F6;      /* Light Gray */
  --color-bg-dark: #1E3A5F;           /* Navy - Footer */

  /* Text */
  --color-text-primary: #1F2937;      /* Dark Gray */
  --color-text-secondary: #6B7280;    /* Medium Gray */
  --color-text-light: #FFFFFF;        /* White */

  /* Semantic */
  --color-success: #10B981;           /* Green */
  --color-warning: #F59E0B;           /* Amber */
  --color-error: #EF4444;             /* Red */

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Option 2: Red, Black & White (Bold + Premium)

```css
/* Alternative Theme */
:root[data-theme="red-black"] {
  /* Primary Colors */
  --color-primary: #DC2626;           /* Racing Red */
  --color-primary-light: #EF4444;     /* Light Red */
  --color-primary-dark: #B91C1C;      /* Dark Red */

  /* Accent Colors */
  --color-accent: #111827;            /* Jet Black */
  --color-accent-light: #374151;      /* Dark Gray */
  --color-accent-dark: #030712;       /* Near Black */

  /* Backgrounds */
  --color-bg-primary: #FFFFFF;        /* White */
  --color-bg-secondary: #F9FAFB;      /* Off White */
  --color-bg-dark: #111827;           /* Black - Footer */

  /* Text */
  --color-text-primary: #111827;      /* Near Black */
  --color-text-secondary: #4B5563;    /* Gray */
  --color-text-light: #FFFFFF;        /* White */

  /* Semantic */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #DC2626;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
}
```

### Theme Configuration File

```typescript
// src/config/theme.ts
export type ThemeName = 'orange-blue' | 'red-black';

export const THEME_CONFIG = {
  // Change this to switch themes
  activeTheme: (import.meta.env.VITE_THEME || 'orange-blue') as ThemeName,

  themes: {
    'orange-blue': {
      name: 'Trust & Conversion',
      primary: '#1A56DB',
      accent: '#F97316',
    },
    'red-black': {
      name: 'Bold & Premium',
      primary: '#DC2626',
      accent: '#111827',
    }
  }
};
```

---

## Site Structure

```
Road Romeo Website
│
├── 🏠 Home (/)
│   ├── Hero Section (booking form)
│   ├── Trust Badges (rating, customers, warranty)
│   ├── Services Overview
│   ├── How It Works
│   ├── Why Choose Us
│   ├── Google Reviews (live from API)
│   ├── Brands We Service
│   ├── Areas Served (list only)
│   └── CTA Section
│
├── 🔧 Services (/services)
│   ├── All Services Grid
│   └── Individual Service Pages:
│       ├── /services/general-service
│       ├── /services/oil-change
│       ├── /services/brake-repair
│       ├── /services/engine-repair
│       ├── /services/battery-replacement
│       ├── /services/tyre-service
│       ├── /services/ceramic-coating
│       ├── /services/paint-protection-film
│       └── /services/bike-wash-polish
│
├── 💰 Pricing (/pricing)
│   ├── Service Packages
│   ├── Price Calculator
│   └── Package Comparison
│
├── 👥 About Us (/about)
│   ├── Our Story
│   ├── Mission & Vision
│   ├── Team
│   └── Certifications
│
├── ⭐ Reviews (/reviews)
│   ├── Google Reviews Widget (live)
│   └── Before/After Gallery
│
├── 📞 Contact (/contact)
│   ├── Contact Form
│   ├── Location Map
│   ├── Business Hours
│   └── FAQ Section
│
└── 📄 Legal Pages
    ├── /privacy-policy
    └── /terms-of-service
```

---

## Component Architecture

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── Rating.tsx
│   │   └── Loader.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Layout.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBadges.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── GoogleReviews.tsx
│   │   ├── BrandsServed.tsx
│   │   ├── AreasServed.tsx
│   │   ├── CTASection.tsx
│   │   └── FAQSection.tsx
│   │
│   ├── booking/
│   │   ├── BookingForm.tsx
│   │   ├── BikeSelector.tsx
│   │   ├── ServiceSelector.tsx
│   │   ├── DateTimePicker.tsx
│   │   └── BookingConfirmation.tsx
│   │
│   ├── seo/
│   │   ├── SEOHead.tsx
│   │   ├── SchemaMarkup.tsx
│   │   └── BreadcrumbSchema.tsx
│   │
│   └── widgets/
│       ├── FloatingCTA.tsx
│       ├── WhatsAppButton.tsx
│       ├── CallButton.tsx
│       └── GoogleReviewsWidget.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Pricing.tsx
│   ├── About.tsx
│   ├── Reviews.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── hooks/
│   ├── useTheme.ts
│   ├── useBooking.ts
│   ├── useGoogleReviews.ts
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
│
├── data/
│   ├── services.ts
│   ├── bikes.ts
│   ├── pricing.ts
│   └── areas.ts           # Simple list of served areas (no individual pages)
│
├── utils/
│   ├── seo.ts
│   ├── schema.ts
│   └── analytics.ts
│
├── config/
│   ├── theme.ts
│   ├── site.ts
│   └── seo.ts
│
└── styles/
    ├── globals.css
    └── themes/
        ├── orange-blue.css
        └── red-black.css
```

---

## Key Features Implementation

### 1. Booking Form (Hero Section)

```
┌─────────────────────────────────────────────────────────┐
│  🏍️ Book Your Bike Service                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Bike Brand         Bike Model                          │
│  ┌──────────────┐  ┌──────────────┐                    │
│  │ Select Brand ▼│  │ Select Model ▼│                    │
│  └──────────────┘  └──────────────┘                    │
│                                                         │
│  Service Type       Phone Number                        │
│  ┌──────────────┐  ┌──────────────┐                    │
│  │ General Svc  ▼│  │ +91          │                    │
│  └──────────────┘  └──────────────┘                    │
│                                                         │
│  ☑️ Free Pickup & Drop                                  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │         🟠 BOOK FREE PICKUP NOW                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Or call us: 📞 9730963184                              │
└─────────────────────────────────────────────────────────┘
```

**Supported Bike Brands:**
- Hero, Honda, Bajaj, TVS, Yamaha
- Royal Enfield, KTM, Suzuki, Vespa
- Kawasaki, Triumph, BMW, Ducati

### 2. Trust Badges Section

```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│  ⭐ 4.8  │  │ 🏍️ 5000+ │  │ 🛡️ 10-Day│  │ 🚚 FREE  │
│ Google  │  │Customers│  │Warranty │  │ Pickup  │
│ Rating  │  │ Served  │  │         │  │ & Drop  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```

### 3. Floating Action Buttons

```
                                    ┌─────────┐
                                    │ 📞 Call │
                                    └─────────┘
                                    ┌─────────┐
                                    │💬 WhatsApp│
                                    └─────────┘
```

- Sticky position on right side
- Visible on all pages
- Mobile: Bottom bar with both options

### 4. Service Cards

```
┌─────────────────────────┐
│      🔧 Icon            │
│                         │
│   General Service       │
│                         │
│   Complete inspection   │
│   Oil change, filter    │
│   cleanup & more        │
│                         │
│   Starting ₹799         │
│                         │
│   [Book Now 🟠]         │
└─────────────────────────┘
```

---

## Google Reviews Integration

### Overview

Live Google reviews will be fetched and displayed on the website. This builds trust and keeps content fresh automatically.

### Integration Options

#### Option A: Google Places API (Recommended)

**Pros:** Official API, reliable, real-time data
**Cons:** Requires API key, has usage limits (free tier: ~$200/month credit)

```typescript
// src/hooks/useGoogleReviews.ts
import { useState, useEffect } from 'react';

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

export const useGoogleReviews = (placeId: string) => {
  const [data, setData] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Using Google Places API via backend proxy (to hide API key)
        const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to fetch reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId]);

  return { data, loading, error };
};
```

**Backend Proxy (to secure API key):**
```typescript
// api/google-reviews.ts (Vercel serverless function)
export default async function handler(req, res) {
  const { placeId } = req.query;
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  // Cache for 1 hour
  res.setHeader('Cache-Control', 's-maxage=3600');
  res.json(data.result);
}
```

#### Option B: Third-Party Widget (Easiest)

Use a free widget service that handles everything:

| Service | Free Tier | Features |
|---------|-----------|----------|
| [Shapo.io](https://shapo.io) | 10 reviews | Customizable, no coding |
| [EmbedSocial](https://embedsocial.com) | Limited | Auto-sync, widgets |
| [Elfsight](https://elfsight.com) | 1 widget | Easy setup |
| [SociableKIT](https://sociablekit.com) | Basic | Simple embed code |

**Embed Example (Shapo.io):**
```html
<!-- Add to your React component -->
<div id="shapo-widget" data-widget-id="YOUR_WIDGET_ID"></div>
<script src="https://widget.shapo.io/widget.js" async></script>
```

#### Option C: Manual Curation (Fallback)

If API isn't available, manually curate reviews with periodic updates:

```typescript
// src/data/reviews.ts
export const curatedReviews = [
  {
    author: "Rajesh Kumar",
    rating: 5,
    text: "Excellent service! They picked up my Pulsar from home and delivered it in perfect condition.",
    date: "2 weeks ago",
    source: "Google"
  },
  // Add more manually from Google Business Profile
];
```

### Recommended Approach

1. **Primary:** Google Places API with backend proxy
2. **Fallback:** Third-party widget (Shapo.io free tier)
3. **Backup:** Manual curation updated monthly

### Component Implementation

```typescript
// src/components/sections/GoogleReviews.tsx
import { useGoogleReviews } from '@/hooks/useGoogleReviews';
import { Star } from 'lucide-react';

const PLACE_ID = 'YOUR_GOOGLE_PLACE_ID'; // Get from Google Maps URL

export const GoogleReviews = () => {
  const { data, loading, error } = useGoogleReviews(PLACE_ID);

  if (loading) return <ReviewsSkeleton />;
  if (error) return <FallbackReviews />;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with aggregate rating */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl font-bold">{data.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={i < Math.round(data.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600">({data.user_ratings_total} reviews)</span>
          </div>
          <a
            href="https://g.page/r/YOUR_REVIEW_LINK/review"
            target="_blank"
            className="text-primary underline mt-2 inline-block"
          >
            Leave us a review on Google
          </a>
        </div>

        {/* Reviews carousel/grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.reviews?.slice(0, 6).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Getting Your Google Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Road Romeo Services Pune"
3. Copy the Place ID (format: `ChIJ...`)

### Environment Variables

```env
# Add to .env
GOOGLE_PLACES_API_KEY=your_api_key_here
VITE_GOOGLE_PLACE_ID=ChIJxxxxxxxxxxxxxxxxxx
```

---

## SEO Implementation

### 1. Meta Tags (per page)

```typescript
// Example: Home page
const homePageSEO = {
  title: "Bike Service in Pune | Free Pickup & Drop | Road Romeo",
  description: "Best two-wheeler service in Pune with FREE pickup & drop. Oil change, repairs, ceramic coating & more. Trusted by 5000+ riders. Call 9730963184",
  keywords: "bike service pune, two wheeler service, doorstep bike repair, motorcycle service pune",
  canonical: "https://www.roadromeo.in/",
  ogImage: "https://www.roadromeo.in/og-image.jpg"
};
```

### 2. Schema Markup (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "MotorcycleRepair",
  "name": "Road Romeo Services",
  "image": "https://www.roadromeo.in/logo.png",
  "url": "https://www.roadromeo.in",
  "telephone": "+91-9730963184",
  "email": "contact@roadromeo.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5204",
    "longitude": "73.8567"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "500",
    "bestRating": "5"
  },
  "areaServed": [
    "Kothrud", "Hadapsar", "Wakad", "Hinjewadi",
    "Viman Nagar", "Baner", "Aundh", "Pimpri-Chinchwad"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bike Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "General Service",
          "description": "Complete bike inspection, oil change, filter cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ceramic Coating",
          "description": "Premium paint protection with ceramic coating"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/roadromeoservices",
    "https://www.instagram.com/roadromeo"
  ]
}
```

### 3. Technical SEO Checklist

- [ ] Sitemap.xml generation
- [ ] Robots.txt configuration
- [ ] Canonical URLs on all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card meta tags
- [ ] Image alt texts
- [ ] Lazy loading for images
- [ ] Core Web Vitals optimization
- [ ] Mobile-first responsive design
- [ ] HTTPS enforcement
- [ ] 404 page with navigation
- [ ] Breadcrumb navigation with schema

---

## Performance Optimization

### Target Metrics (Core Web Vitals)

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Optimize hero image, lazy load below-fold |
| FID | < 100ms | Minimize JS, defer non-critical scripts |
| CLS | < 0.1 | Set image dimensions, avoid layout shifts |
| FCP | < 1.8s | Critical CSS inline, preload fonts |

### Implementation

1. **Image Optimization**
   - WebP format with JPEG fallback
   - Responsive images with srcset
   - Lazy loading for below-fold images

2. **Code Splitting**
   - Route-based code splitting
   - Dynamic imports for heavy components

3. **Caching Strategy**
   - Service worker for offline support
   - Browser caching headers
   - CDN for static assets

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Project setup with Vite + React + TypeScript
- [ ] Tailwind CSS configuration with theme system
- [ ] Component library (Button, Card, Input, etc.)
- [ ] Layout components (Header, Footer, Navigation)
- [ ] Routing setup with React Router
- [ ] Theme switching implementation

### Phase 2: Core Pages (Week 2)
- [ ] Home page with all sections
- [ ] Services listing page
- [ ] Individual service detail pages
- [ ] Contact page with form
- [ ] About page

### Phase 3: Booking & Conversion (Week 3)
- [ ] Booking form component
- [ ] Bike/Service selector dropdowns
- [ ] Form validation
- [ ] WhatsApp integration
- [ ] Floating CTA buttons
- [ ] Mobile booking experience

### Phase 4: SEO & Reviews (Week 4)
- [ ] SEO head component with meta tags
- [ ] Schema markup implementation
- [ ] Google Reviews API integration
- [ ] Sitemap generation
- [ ] Google Business Profile integration
- [ ] Analytics setup

### Phase 5: Polish & Launch (Week 5)
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness QA
- [ ] Accessibility audit
- [ ] Final content review
- [ ] Deployment setup
- [ ] SSL certificate
- [ ] Go live!

---

## Data Files Structure

### services.ts
```typescript
export const services = [
  {
    id: 'general-service',
    name: 'General Service',
    slug: 'general-service',
    icon: 'wrench',
    shortDescription: 'Complete inspection & maintenance',
    description: 'Full bike inspection including oil change, filter cleaning, brake check, chain lubrication, and 20+ checkpoint inspection.',
    price: 799,
    duration: '2-3 hours',
    features: [
      'Engine oil change',
      'Oil filter cleaning',
      'Air filter cleaning',
      'Spark plug check',
      'Brake inspection',
      'Chain lubrication',
      '20-point inspection'
    ]
  },
  // ... more services
];
```

### areas.ts (Simple list for display)
```typescript
export const areasServed = [
  'Kothrud', 'Hadapsar', 'Wakad', 'Hinjewadi', 'Viman Nagar',
  'Baner', 'Aundh', 'Pimpri-Chinchwad', 'Magarpatta', 'Kalyani Nagar',
  'Koregaon Park', 'Camp', 'Shivaji Nagar', 'Deccan', 'Swargate'
];
```

### bikes.ts
```typescript
export const bikeData = {
  brands: [
    {
      id: 'hero',
      name: 'Hero',
      logo: '/images/brands/hero.png',
      models: ['Splendor Plus', 'HF Deluxe', 'Passion Pro', 'Glamour', 'Xtreme 160R']
    },
    {
      id: 'honda',
      name: 'Honda',
      logo: '/images/brands/honda.png',
      models: ['Activa 6G', 'Shine', 'Unicorn', 'SP 125', 'Hornet 2.0']
    },
    // ... more brands
  ]
};
```

---

## Environment Variables

```env
# .env.example

# Theme Configuration
VITE_THEME=orange-blue  # or 'red-black'

# Site Configuration
VITE_SITE_URL=https://www.roadromeo.in
VITE_SITE_NAME=Road Romeo Services

# Contact Information
VITE_PHONE=9730963184
VITE_WHATSAPP=919730963184
VITE_EMAIL=contact@roadromeo.in

# Google Services
VITE_GA_ID=G-XXXXXXXXXX
VITE_GOOGLE_MAPS_KEY=your_maps_api_key
GOOGLE_PLACES_API_KEY=your_places_api_key  # Server-side only
VITE_GOOGLE_PLACE_ID=ChIJxxxxxxxxxx        # Your Google Place ID

# Social Media
VITE_FACEBOOK_URL=https://facebook.com/roadromeoservices
VITE_INSTAGRAM_URL=https://instagram.com/roadromeo
```

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Build optimization verified
- [ ] All images compressed
- [ ] Favicon and app icons added
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] SSL certificate active
- [ ] Redirects configured (www to non-www or vice versa)
- [ ] 404 page working
- [ ] Analytics tracking verified
- [ ] Schema markup validated (Google Rich Results Test)
- [ ] Mobile usability tested (Google Mobile-Friendly Test)
- [ ] Page speed tested (Google PageSpeed Insights)
- [ ] Social sharing previews working

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 3s | Google PageSpeed |
| Mobile Score | > 90 | Lighthouse |
| Bounce Rate | < 50% | Google Analytics |
| Conversion Rate | > 5% | Booking form submissions |
| Local Pack Ranking | Top 3 | "bike service pune" search |
| Organic Traffic | +200% in 6 months | Google Search Console |

---

## Notes

- Prioritize mobile experience (70%+ traffic expected from mobile)
- WhatsApp is primary conversion channel for this market
- Regular Google Business Profile updates are critical
- Collect and respond to reviews consistently
- Google reviews auto-sync keeps content fresh for SEO

---

*Plan created: January 2026*
*Last updated: January 2026*
