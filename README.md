# Vite React Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/558554c3-01c7-4fdf-89be-768eb568d2cf/deploy-status)](https://app.netlify.com/sites/vite-rs/deploys)

Opinionated Vite template.

- Vite
- React
- TypeScript
- Zustand
- React Query
- Tanstack Router
- Tailwind CSS
- ESLint and Prettier
- Husky and lint-staged
- Vitest and React Testing Library
- Playwright
- Storybook
- pnpm

## Getting started

Install dependencies:

```bash
pnpm install
```

## Environment Configuration

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

Environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Running the project

Run project:

```bash
pnpm dev
```

Run storybook:

```bash
pnpm storybook
```
