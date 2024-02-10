/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WhitelistImport } from './routes/_whitelist'
import { Route as AuthImport } from './routes/_auth'
import { Route as LoginRouteImport } from './routes/login/route'
import { Route as RouteImport } from './routes/*/route'
import { Route as LayoutsIndexImport } from './routes/_layouts/index'

// Create Virtual Routes

const R500LazyImport = createFileRoute('/500')()
const R404LazyImport = createFileRoute('/404')()
const R403LazyImport = createFileRoute('/403')()
const SignupRouteLazyImport = createFileRoute('/signup')()
const ForgotPasswordRouteLazyImport = createFileRoute('/forgot-password')()
const DashboardRouteLazyImport = createFileRoute('/dashboard')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const R500LazyRoute = R500LazyImport.update({
  path: '/500',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/500.lazy').then((d) => d.Route))

const R404LazyRoute = R404LazyImport.update({
  path: '/404',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/404.lazy').then((d) => d.Route))

const R403LazyRoute = R403LazyImport.update({
  path: '/403',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/403.lazy').then((d) => d.Route))

const SignupRouteLazyRoute = SignupRouteLazyImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/signup/route.lazy').then((d) => d.Route))

const ForgotPasswordRouteLazyRoute = ForgotPasswordRouteLazyImport.update({
  path: '/forgot-password',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/forgot-password/route.lazy').then((d) => d.Route),
)

const DashboardRouteLazyRoute = DashboardRouteLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/dashboard/route.lazy').then((d) => d.Route),
)

const WhitelistRoute = WhitelistImport.update({
  id: '/_whitelist',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const LoginRouteRoute = LoginRouteImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login/route.lazy').then((d) => d.Route))

const RouteRoute = RouteImport.update({
  path: '/*',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LayoutsIndexRoute = LayoutsIndexImport.update({
  id: '/_layouts/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/*': {
      preLoaderRoute: typeof RouteImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_whitelist': {
      preLoaderRoute: typeof WhitelistImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      preLoaderRoute: typeof DashboardRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/forgot-password': {
      preLoaderRoute: typeof ForgotPasswordRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      preLoaderRoute: typeof SignupRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/403': {
      preLoaderRoute: typeof R403LazyImport
      parentRoute: typeof rootRoute
    }
    '/404': {
      preLoaderRoute: typeof R404LazyImport
      parentRoute: typeof rootRoute
    }
    '/500': {
      preLoaderRoute: typeof R500LazyImport
      parentRoute: typeof rootRoute
    }
    '/_layouts/': {
      preLoaderRoute: typeof LayoutsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  RouteRoute,
  LoginRouteRoute,
  AuthRoute,
  WhitelistRoute,
  DashboardRouteLazyRoute,
  ForgotPasswordRouteLazyRoute,
  SignupRouteLazyRoute,
  R403LazyRoute,
  R404LazyRoute,
  R500LazyRoute,
  LayoutsIndexRoute,
])

/* prettier-ignore-end */
