# E-Commerce Web Application

A modern e-commerce platform built with Next.js, React, TypeScript, and Tailwind CSS. The project is designed to support a complete online shopping experience, including product browsing, authentication, cart management, checkout, user profile management, wishlist tracking, reviews, orders, and admin management.

## Project Overview

This application allows customers to:

- Browse products by category, brand, and subcategory
- View featured and all-product listings
- Add products to a wishlist
- Add products to a cart
- Update quantities and remove items
- Apply coupons and review the order summary
- Checkout with cash or online payment session
- Create an account and sign in securely
- Recover passwords and verify reset codes
- Manage profile information and saved addresses
- View order history and current order details
- Contact the store and submit inquiries

The app also includes admin-side sections for managing users, reviews, and orders.

---

## Features and Operations Included

### 1. Authentication and Account Management

- User sign up
- User sign in
- Sign in with Google and GitHub using NextAuth
- Forgot password flow
- Reset password flow
- Email verification and reset code confirmation
- JWT-based session handling
- Protected and public routes

### 2. Product Catalog

- Home page with slider banner
- Featured products section
- Shop-by-category section
- Product listing page
- Pagination for product results
- Product details and image gallery experience
- Product filtering by category and brand logic
- Product management via backend repository services

### 3. Categories, Subcategories, and Brands

- Category listing and detail pages
- Subcategory-based organization
- Brand listing and navigation
- Category and brand-driven product browsing

### 4. Wishlist Management

- Add products to wishlist
- Remove products from wishlist
- View all saved favorite items
- Keep wishlist data synced with backend service calls

### 5. Cart and Checkout

- Add to cart
- Update item quantity
- Remove cart items
- Clear the cart
- View total amount, quantity, and summary
- Apply coupons
- Choose between:
  - Cash on delivery
  - Online checkout session
- Redirect to payment session workflow

### 6. Orders and Payment

- Create cash orders
- Create online checkout sessions
- Fetch user orders
- View order history
- Admin-order monitoring flows
- Order operations handled through centralized service repositories

### 7. Profile and User Settings

- Update user profile information
- Change password
- Manage addresses
- View profile dashboard and account settings
- View personal orders

### 9. Contact and Support

- Contact form with validation
- Submit support and inquiry messages
- Structured form validation using Zod schemas

---

## Technologies Used

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- CSS modules and custom component styling

### State and Form Management

- Redux Toolkit
- React Redux
- React Hook Form
- Zod for validation
- @hookform/resolvers

### Authentication

- NextAuth
- Google OAuth
- GitHub OAuth
- JWT session strategy

### UI and Components

- Shadcn-style component structure
- Radix UI primitives
- React Icons
- HugeIcons
- Swiper for sliders and carousels
- SweetAlert for user notifications
- React Hot Toast for alerts

### Utilities and Helpers

- clsx
- tailwind-merge
- class-variance-authority
- Resend for email-related functionality
- next-themes for theme support

### Development Tools

- ESLint
- TypeScript compiler
- PostCSS
- Next.js built-in tooling

---

## Project Architecture

The project follows a modular structure:

- app/ — pages, layouts, and route-based screens
- components/ — reusable UI blocks and feature sections
- services/ — API integration and repository layer
- schemas/ — validation schema definitions
- redux/ — global state management
- lib/ — shared config and utilities
- hooks/ — custom hooks
- public/ — static assets

This structure separates the UI, business logic, API calls, and validation for easier maintenance and scaling.

---

## Environment Variables

Create a .env.local file in the root of the project with the required values, for example:

```bash
NEXT_PUBLIC_API_URL=https://ecommerce.routemisr.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

---

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```bash
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## Summary

This application is a full-featured e-commerce platform with a customer shopping flow, secure authentication, order processing, advanced product browsing, wishlist and cart functionalities, admin management screens, and a clean modern frontend built on Next.js and TypeScript.

It includes almost all core e-commerce operations expected in a production-style online store and is structured to be scalable and easy to extend.
