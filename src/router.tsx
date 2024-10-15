import App from './App';
import Counter from '@pages/Counter';
import Posts from '@pages/Posts';
import {
  createRoute,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Counter,
});

const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/posts',
  component: Posts,
});

export const routeTree = rootRoute.addChildren([indexRoute, postsRoute]);
export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
