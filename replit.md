# Cybaem Tech - Corporate Website

## Overview
This is the official corporate website for Cybaem Tech, a technology solutions company. The website is built with React, TypeScript, and Vite, featuring a modern UI with Tailwind CSS and shadcn/ui components.

## Project Structure
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)

## Recent Changes (September 30, 2025)
- **GitHub Import Setup**: Configured project for Replit environment from fresh clone
- **Dependencies**: Installed all npm dependencies successfully
- **Vite Configuration**: Updated Vite config to bind to 0.0.0.0:5000 with `allowedHosts: true` for Replit proxy compatibility
- **Backend Port Fix**: Changed contact-backend.js from port 5000 to 3001 on localhost to avoid frontend conflict
- **Workflow**: Verified "Start application" workflow runs `npm run dev` on port 5000
- **Deployment**: Configured autoscale deployment with build and preview commands
- **Testing**: Verified website loads correctly through Replit proxy

## Development Setup
The project runs on port 5000 in development mode. The Vite dev server is configured to work with Replit's proxy system.

### Commands
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features
- Multi-page application with routing
- Contact form with captcha validation
- Blog section
- Service pages (Cloud Solutions, Cybersecurity, AI/Data Analytics, etc.)
- Industries section
- Careers and company information pages
- SEO optimized with React Helmet
- Responsive design

## Technical Details
- The contact form currently submits to an external PHP endpoint at cybaemtech.com
- Backend contact service (contact-backend.js) available but not currently used - configured with environment variables for security
- Uses Google Analytics integration
- Implements React Helmet for SEO
- Features animated backgrounds and modern UI components
- Dark theme with gradient backgrounds

## Deployment
The project is configured for Replit deployment using:
- Build command: `npm run build`
- Run command: `npm run preview`
- Deployment target: autoscale (stateless web application)
