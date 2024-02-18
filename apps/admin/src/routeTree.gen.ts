/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PortalRouteImport } from './routes/_portal/route'
import { Route as BaseRouteImport } from './routes/_base/route'
import { Route as RouteImport } from './routes/*/route'
import { Route as BaseIndexImport } from './routes/_base/index'
import { Route as PortalSignupRouteImport } from './routes/_portal/signup/route'
import { Route as PortalLoginRouteImport } from './routes/_portal/login/route'
import { Route as BaseTestRouteImport } from './routes/_base/test/route'
import { Route as BaseDashboardRouteImport } from './routes/_base/dashboard/route'

// Create Virtual Routes

const Base500LazyImport = createFileRoute('/_base/500')()
const Base404LazyImport = createFileRoute('/_base/404')()
const Base403LazyImport = createFileRoute('/_base/403')()
const PortalSsoRouteLazyImport = createFileRoute('/_portal/sso')()
const PortalForgotPasswordRouteLazyImport = createFileRoute('/_portal/forgot-password')()
const BaseUserInfoRouteLazyImport = createFileRoute('/_base/user-info')()
const BaseDashboardRouteLazyImport = createFileRoute('/_base/dashboard')()
const BaseChangePasswordRouteLazyImport = createFileRoute('/_base/change-password')()

// Create/Update Routes

const PortalRouteRoute = PortalRouteImport.update({
  id: '/_portal',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./routes/_portal/route.lazy').then((d) => d.Route))

const BaseRouteRoute = BaseRouteImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute
} as any).lazy(() => import('./routes/_base/route.lazy').then((d) => d.Route))

const RouteRoute = RouteImport.update({
  path: '/*',
  getParentRoute: () => rootRoute
} as any)

const BaseIndexRoute = BaseIndexImport.update({
  path: '/',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/index.lazy').then((d) => d.Route))

const Base500LazyRoute = Base500LazyImport.update({
  path: '/500',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/500.lazy').then((d) => d.Route))

const Base404LazyRoute = Base404LazyImport.update({
  path: '/404',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/404.lazy').then((d) => d.Route))

const Base403LazyRoute = Base403LazyImport.update({
  path: '/403',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/403.lazy').then((d) => d.Route))

const PortalSsoRouteLazyRoute = PortalSsoRouteLazyImport.update({
  path: '/sso',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/sso/route.lazy').then((d) => d.Route))

const PortalForgotPasswordRouteLazyRoute = PortalForgotPasswordRouteLazyImport.update({
  path: '/forgot-password',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/forgot-password/route.lazy').then((d) => d.Route))

const BaseUserInfoRouteLazyRoute = BaseUserInfoRouteLazyImport.update({
  path: '/user-info',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/user-info/route.lazy').then((d) => d.Route))

const BaseDashboardRouteLazyRoute = BaseDashboardRouteLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/dashboard/route.lazy').then((d) => d.Route))

const BaseChangePasswordRouteLazyRoute = BaseChangePasswordRouteLazyImport.update({
  path: '/change-password',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/change-password/route.lazy').then((d) => d.Route))

const PortalSignupRouteRoute = PortalSignupRouteImport.update({
  path: '/signup',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/signup/route.lazy').then((d) => d.Route))

const PortalLoginRouteRoute = PortalLoginRouteImport.update({
  path: '/login',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/login/route.lazy').then((d) => d.Route))

const BaseTestRouteRoute = BaseTestRouteImport.update({
  path: '/test',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/test/route.lazy').then((d) => d.Route))

const BaseDashboardRouteRoute = BaseDashboardRouteImport.update({
  path: '/dashboard',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/dashboard/route.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/*': {
      preLoaderRoute: typeof RouteImport
      parentRoute: typeof rootRoute
    }
    '/_base': {
      preLoaderRoute: typeof BaseRouteImport
      parentRoute: typeof rootRoute
    }
    '/_portal': {
      preLoaderRoute: typeof PortalRouteImport
      parentRoute: typeof rootRoute
    }
    '/_base/dashboard': {
      preLoaderRoute: typeof BaseDashboardRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/test': {
      preLoaderRoute: typeof BaseTestRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_portal/login': {
      preLoaderRoute: typeof PortalLoginRouteImport
      parentRoute: typeof PortalRouteImport
    }
    '/_portal/signup': {
      preLoaderRoute: typeof PortalSignupRouteImport
      parentRoute: typeof PortalRouteImport
    }
    '/_base/change-password': {
      preLoaderRoute: typeof BaseChangePasswordRouteLazyImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/dashboard': {
      preLoaderRoute: typeof BaseDashboardRouteLazyImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/user-info': {
      preLoaderRoute: typeof BaseUserInfoRouteLazyImport
      parentRoute: typeof BaseRouteImport
    }
    '/_portal/forgot-password': {
      preLoaderRoute: typeof PortalForgotPasswordRouteLazyImport
      parentRoute: typeof PortalRouteImport
    }
    '/_portal/sso': {
      preLoaderRoute: typeof PortalSsoRouteLazyImport
      parentRoute: typeof PortalRouteImport
    }
    '/_base/403': {
      preLoaderRoute: typeof Base403LazyImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/404': {
      preLoaderRoute: typeof Base404LazyImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/500': {
      preLoaderRoute: typeof Base500LazyImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/': {
      preLoaderRoute: typeof BaseIndexImport
      parentRoute: typeof BaseRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  RouteRoute,
  BaseRouteRoute.addChildren([
    BaseChangePasswordRouteLazyRoute,
    BaseDashboardRouteLazyRoute,
    BaseUserInfoRouteLazyRoute,
    Base403LazyRoute,
    Base404LazyRoute,
    Base500LazyRoute,
    BaseIndexLazyRoute
  ]),
  PortalRouteRoute.addChildren([
    PortalLoginRouteRoute,
    PortalSignupRouteRoute,
    PortalForgotPasswordRouteLazyRoute,
    PortalSsoRouteLazyRoute
  ])
])

/* prettier-ignore-end */
