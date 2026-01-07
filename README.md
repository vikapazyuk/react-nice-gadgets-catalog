# Nice Gadgets — Product Catalog

Nice Gadgets is a product catalog web application built with React and TypeScript.
The app represents an online electronics store where users can browse products by category, search and sort items, view detailed product information, and manage favorites and a shopping cart.

---

## Live Preview

Nice Gadgets App
https://vikapazyuk.github.io/react-nice-gadgets-catalog/

---

## Design Reference

The application design is based on Figma Design:
https://www.figma.com/design/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog--V2--Original?node-id=0-1&p=f

---

## Technologies Used

### Core

- **React** — UI framework
- **TypeScript** — Static type checking
- **SCSS** — Styling
- **CSS Modules** — Scoped component styles

### State Management

- **Redux Toolkit** — Application state management
- **Redux Persist** — State persistence in localStorage

### UI / UX

- **React Router** — Client-side routing
- **Swiper** — Image sliders and galleries
- **React Loading Skeleton** — Loading states
- **use-react-router-breadcrumbs** — Navigation breadcrumbs

### Development & Deployment

- **Vite** — Build tool
- **ESLint** — Code quality and linting
- **Prettier** — Code formatting
- **Husky** — Git hooks
- **GitHub Pages** — Hosting and deployment

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/vikapazyuk/react-nice-gadgets-catalog.git
cd react-nice-gadgets-catalog
npm install
npm start

## Features

- Product catalog with categories: **Phones**, **Tablets**, **Accessories**
- Home page with image and product sliders
- Product sorting, pagination, and items-per-page selection
- Search with debounce and URL synchronization
- Product details page with image gallery, color, and capacity selection
- Favorites and shopping cart with persistent storage
- Quantity control and automatic total price calculation
- Loader, error handling, empty states, and Not Found page
