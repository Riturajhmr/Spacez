# Spacez - Offers Platform

A modern, responsive web application for displaying and managing offers, coupons, gift cards, and payment offers. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Main Features
- **Sitewide Coupons**: Display and manage discount coupons with copy functionality
- **Gift Cards**: Show gift card offers from various brands (Myntra, Hammer, etc.)
- **Payment Offers**: Display payment-related discounts and offers
- **User Authentication State**: Different views for signed-in and signed-out users
- **Tab Navigation**: Smooth scrolling navigation with scroll spy functionality
- **Responsive Design**: Fully responsive design that works on mobile, tablet, and desktop
- **Interactive UI**: Hover effects, smooth transitions, and engaging animations

### User States
- **Signed-Out State**: 
  - Displays promotional cards with call-to-action buttons
  - Shows attractive images and descriptions
  - Encourages sign-in for exclusive benefits
  
- **Signed-In State**:
  - Shows detailed card views with brand logos
  - Displays collectible gift cards
  - Provides payment offers with detailed information
  - Interactive "Collect" and "Read more" buttons

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.2 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Icons**: Lucide React 0.553.0
- **React**: 19.2.0
- **Build Tool**: Next.js built-in bundler

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🏗️ Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd spacez
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
spacez/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── BonusGiftCards.tsx   # Gift cards component
│   ├── BottomNavigation.tsx # Mobile bottom navigation
│   ├── Header.tsx           # Site header with logo
│   ├── OffersContent.tsx    # Main offers content container
│   ├── OffersPage.tsx       # Main page component
│   ├── PaymentOffers.tsx    # Payment offers component
│   ├── SitewideCoupons.tsx  # Coupons component
│   ├── SuccessToast.tsx     # Toast notification component
│   └── TabNavigation.tsx    # Tab navigation with scroll spy
├── public/
│   ├── gift-cards-image.png # Gift cards promotional image
│   ├── hammer-logo.png      # Hammer brand logo
│   ├── hdfc-logo.png        # HDFC Bank logo
│   ├── myntra-logo.png      # Myntra brand logo
│   ├── payment-offers-image.png # Payment offers promotional image
│   └── spacez-logo.png      # Spacez brand logo
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Components Overview

### Header
- Displays the Spacez logo
- Sticky header with shadow effect
- Responsive hamburger menu

### TabNavigation
- Three tabs: Coupons, Giftcards, Payment Offers
- Smooth scroll-to-section functionality
- Active tab highlighting based on scroll position
- Sticky navigation on scroll

### SitewideCoupons
- Displays coupon cards with amounts
- Copy functionality for coupon codes
- Jagged edge effect on coupon cards
- Beige background theme

### BonusGiftCards
- **Signed-Out**: Promotional card with image and CTA button
- **Signed-In**: Individual gift card cards with brand logos
- Collect functionality
- Responsive grid layout

### PaymentOffers
- **Signed-Out**: Promotional card with payment methods image
- **Signed-In**: Payment offer cards with bank logos
- Discount information display
- Interactive buttons

### SuccessToast
- Toast notification component
- Auto-dismiss after 3 seconds
- Success message display

## 🎨 Design Features

### Color Scheme
- **Primary Color**: `#b66642` (Brown/Orange)
- **Background**: `#fafafa` (Light gray)
- **Card Background**: `#f5f5f0` (Beige) for coupons
- **White Background**: For gift cards and payment offers

### Typography
- Responsive text sizes
- Font weights: normal, medium, semibold, bold, extrabold
- Line heights optimized for readability

### Visual Effects
- **Jagged Edge**: Tear-off effect on coupon cards
- **Shadows**: Card shadows with hover effects
- **Transitions**: Smooth animations on interactions
- **Gradients**: Subtle gradient backgrounds

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: Base styles (default)
- **Tablet**: `md:` breakpoint (768px+)
- **Desktop**: `lg:` breakpoint (1024px+)
- **Large Desktop**: `xl:` breakpoint (1280px+)

### Responsive Features
- Grid layouts adapt from 1 column (mobile) to 3 columns (desktop)
- Text sizes scale appropriately
- Images resize for different screen sizes
- Padding and spacing adjust for optimal viewing
- Tab navigation centers on mobile, left-aligns on desktop

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration:
- Custom primary color: `#b66642`
- Custom breakpoints
- Custom utilities for jagged edges and vertical text

### Next.js
- React Strict Mode enabled
- Image optimization enabled
- App Router architecture

## 📝 Usage

### Sign In/Sign Out
- Click the "Sign in" button to toggle user state
- Different content is displayed based on authentication state

### Navigation
- Click tabs to scroll to respective sections
- Scroll to see active tab highlighting
- Smooth scroll animation on tab click

### Coupons
- Click "Copy" button to copy coupon code
- Click "Read more" to see coupon details

### Gift Cards
- Click "Collect" button to collect gift cards (signed-in state)
- Click "Read more" for more information

### Payment Offers
- Click "Unlock offers" button (signed-out state)
- Click "Read more" for offer details (signed-in state)

## 🎯 Key Features Implementation

### Scroll Spy
- Automatically detects which section is in view
- Updates active tab accordingly
- Smooth scroll to sections on tab click

### State Management
- React useState for authentication state
- Toast notifications for user feedback
- Component-level state management

### Image Optimization
- Next.js Image component for optimized images
- Responsive image sizing
- Background removal effects for gift card images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC

## 👨‍💻 Author

Spacez Development Team

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons

---

**Note**: This is a demo project for showcasing offers, coupons, and gift cards. Authentication is simulated for demonstration purposes.

