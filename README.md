# Vite React Starter

A modern, feature-rich React starter template built with Vite for maximum performance and development experience.

[![Netlify Status](https://api.netlify.com/api/v1/badges/558554c3-01c7-4fdf-89be-768eb568d2cf/deploy-status)](https://app.netlify.com/sites/vite-rs/deploys)

## Features

- ⚡️ **Lightning Fast HMR** with [Vite](https://vitejs.dev/)
- 🧩 **React 19** with TypeScript support
- 🧪 **Testing Suite**:
  - Unit and component testing with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  - End-to-end testing with [Playwright](https://playwright.dev/)
- 📚 **Component Documentation** with [Storybook](https://storybook.js.org/)
- 🧰 **State Management**:
  - [Zustand](https://zustand-demo.pmnd.rs/) - lightweight state management
  - [React Query](https://tanstack.com/query/latest) - data fetching and caching
- 🧭 **Routing** with [Tanstack Router](https://tanstack.com/router/latest)
- 🎨 **Styling** with [Tailwind CSS](https://tailwindcss.com/)
- 🧹 **Code Quality Tools**:
  - [ESLint](https://eslint.org/) - code linting
  - [Prettier](https://prettier.io/) - code formatting
  - Pre-commit hooks with [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged)
- 📦 **Package Management** with [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22)
- [pnpm](https://pnpm.io/installation) (v9)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/vite-react-starter.git
cd vite-react-starter
pnpm install
```

### Environment Configuration

This project uses environment variables for configuration. The following files are supported:

- `.env`: Default environment variables for all environments
- `.env.local`: Local overrides (not committed to git)
- `.env.development`: Development environment variables
- `.env.production`: Production environment variables

To get started, copy the example environment file:

```bash
cp .env.example .env.local
```

Then edit the `.env.local` file with your specific configuration.

> **Note**: Environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Development

### Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) to see your application.

### Run Storybook

```bash
pnpm storybook
```

Visit [http://localhost:6006](http://localhost:6006) to browse your component library.

## Testing

### Run Unit Tests

```bash
# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Run E2E Tests

```bash
pnpm e2e
```

## Building for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

Preview the production build:

```bash
pnpm preview
```

## Quality Checks

```bash
# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type check
pnpm type:check
```

## Project Structure

```
vite-react-starter/
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route components
│   ├── store/            # State management (Zustand)
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main application component
│   ├── router.tsx        # Application router
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── e2e/                  # End-to-end tests
├── .storybook/           # Storybook configuration
├── .husky/               # Git hooks
└── .github/              # GitHub workflows
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
