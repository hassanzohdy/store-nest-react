# Nest Store React

A modular e-commerce storefront built with React and TypeScript. The application implements product discovery, comparison, cart and wishlist state, account flows, informational pages, reusable UI primitives, and API-backed modules in a feature-oriented architecture.

[Original reference design](https://nest-frontend-v6.netlify.app/) · [Repository](https://github.com/hassanzohdy/store-nest-react)

## Features

- Home page with category navigation, deals, sliders, and top products
- Product catalog with category filters, display modes, pagination, and quick view
- Product detail views and image galleries
- Product comparison table
- Cart and wishlist state through Mongez atoms
- Login, registration, password recovery, account details, addresses, and order pages
- About, privacy, terms, and contact pages
- Responsive shared layout and navigation
- English/Arabic-ready localization modules
- Reusable design system built from Radix UI primitives and custom components
- Centralized endpoint behavior for authorization, locale headers, response normalization, and `401` handling
- Route modules loaded through application-module configuration

## Tech Stack

- React 18 and TypeScript
- Vite 5 with SWC
- Tailwind CSS and Sass
- Mongez Router, HTTP, React Atom, forms, localization, cache, and user packages
- Axios transport through `@mongez/http`
- Radix UI
- React Hook Form
- Embla Carousel and Swiper
- Lucide and React Icons
- ESLint, Prettier, and Husky hooks

## Getting Started

### Prerequisites

- Node.js 18+
- npm or Yarn
- Access to a backend matching the configured Nest Store API contracts

### Installation

```bash
git clone https://github.com/hassanzohdy/store-nest-react.git
cd store-nest-react
npm install
```

Create `.env` with the application and backend configuration. Vite is configured with the `APP_` prefix:

```env
APP_NAME=Nest Store
APP_CODE_NAME=nest-store
APP_VERSION=1.0.0
APP_BASE_PATH=/
APP_DEFAULT_LOCALE_CODE=en

APP_API_URL=https://your-api.example.com
APP_API_OS=web
APP_CLIENT_ID=your-client-id
APP_API_KEY=
APP_API_TOKEN=
```

Start Vite:

```bash
npm run start
```

> `npm run dev` is a project-maintenance shortcut that removes Vite's cache, updates dependencies with Yarn, reinstalls them, and then starts the app. Use `npm run start` for normal development.

## Scripts

| Command | Description |
| --- | --- |
| `npm run start` | Start Vite and expose it on the local network |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint on `src/` |
| `npm run fix` | Apply ESLint fixes |
| `npm run format` | Format source files with Prettier |
| `npm run tsc` | Type-check without emitting output |
| `npm run update` | Update dependency ranges with npm-check-updates |

## Application Architecture

Feature modules follow this convention:

```text
src/app/<module>/
├── atoms/          # Fine-grained shared state
├── components/     # Module UI
├── hooks/          # Reusable behavior and side effects
├── pages/          # Route-level UI
├── services/       # API adapters
├── utils/          # Types, flags, helpers, and translations
├── main.ts         # Module registration
└── routes.ts       # Route definitions
```

Main modules include:

```text
account · home · shop · cart · wishlist · pages-info · contact-us · 404
```

The application shell loads module metadata from `src/app/app-modules.json`. Reusable controls and visual primitives live under `src/design-system/`; cross-module API, localization, hooks, and utilities live under `src/shared/`.

## API Integration

`src/shared/endpoint.ts` configures the shared HTTP client:

- Uses `APP_API_URL` as the base URL
- Adds a bearer token when a user is signed in
- Sends `client-id` and current `locale` headers
- Unwraps `{ data: ... }` responses
- Updates local user state when a response includes a user
- Clears the session and refreshes routing on `401`

Feature-specific API adapters live beside their modules, for example:

- `src/app/shop/services/`
- `src/app/cart/services/`
- `src/app/wishlist/services/`
- `src/app/account/services/`
- `src/app/home/services/`

## State Management

Mongez atoms hold focused domain state such as the cart, wishlist, product quick view, categories, products, and display mode. Logic is kept in hooks and services so most visual components remain reusable and presentation-focused.

## Production Build

```bash
npm run lint
npm run tsc
npm run build
npm run preview
```

Provide production `APP_*` values during the build and configure the hosting provider to fall back to `index.html` for client-side routes.

## License

No license file is currently included in this repository.
