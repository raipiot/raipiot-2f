/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PortalRouteImport } from './routes/_portal/route'
import { Route as BaseRouteImport } from './routes/_base/route'
import { Route as RouteImport } from './routes/*/route'
import { Route as PortalSsoRouteImport } from './routes/_portal/sso/route'
import { Route as PortalSignupRouteImport } from './routes/_portal/signup/route'
import { Route as PortalLoginRouteImport } from './routes/_portal/login/route'
import { Route as PortalForgotPasswordRouteImport } from './routes/_portal/forgot-password/route'
import { Route as BaseUserInfoRouteImport } from './routes/_base/user-info/route'
import { Route as BaseChangePasswordRouteImport } from './routes/_base/change-password/route'
import { Route as Base500RouteImport } from './routes/_base/500/route'
import { Route as Base404RouteImport } from './routes/_base/404/route'
import { Route as Base403RouteImport } from './routes/_base/403/route'
import { Route as BaseIndexRouteImport } from './routes/_base/index/route'
import { Route as BaseSystemUsersRouteImport } from './routes/_base/system/users/route'

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

const PortalSsoRouteRoute = PortalSsoRouteImport.update({
  path: '/sso',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/sso/route.lazy').then((d) => d.Route))

const PortalSignupRouteRoute = PortalSignupRouteImport.update({
  path: '/signup',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/signup/route.lazy').then((d) => d.Route))

const PortalLoginRouteRoute = PortalLoginRouteImport.update({
  path: '/login',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/login/route.lazy').then((d) => d.Route))

const PortalForgotPasswordRouteRoute = PortalForgotPasswordRouteImport.update({
  path: '/forgot-password',
  getParentRoute: () => PortalRouteRoute
} as any).lazy(() => import('./routes/_portal/forgot-password/route.lazy').then((d) => d.Route))

const BaseUserInfoRouteRoute = BaseUserInfoRouteImport.update({
  path: '/user-info',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/user-info/route.lazy').then((d) => d.Route))

const BaseChangePasswordRouteRoute = BaseChangePasswordRouteImport.update({
  path: '/change-password',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/change-password/route.lazy').then((d) => d.Route))

const Base500RouteRoute = Base500RouteImport.update({
  path: '/500',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/500/route.lazy').then((d) => d.Route))

const Base404RouteRoute = Base404RouteImport.update({
  path: '/404',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/404/route.lazy').then((d) => d.Route))

const Base403RouteRoute = Base403RouteImport.update({
  path: '/403',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/403/route.lazy').then((d) => d.Route))

const BaseIndexRouteRoute = BaseIndexRouteImport.update({
  path: '/',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/index/route.lazy').then((d) => d.Route))

const BaseSystemUsersRouteRoute = BaseSystemUsersRouteImport.update({
  path: '/system/users',
  getParentRoute: () => BaseRouteRoute
} as any).lazy(() => import('./routes/_base/system/users/route.lazy').then((d) => d.Route))

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
    '/_base/': {
      preLoaderRoute: typeof BaseIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/403': {
      preLoaderRoute: typeof Base403RouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/404': {
      preLoaderRoute: typeof Base404RouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/500': {
      preLoaderRoute: typeof Base500RouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/change-password': {
      preLoaderRoute: typeof BaseChangePasswordRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/user-info': {
      preLoaderRoute: typeof BaseUserInfoRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_portal/forgot-password': {
      preLoaderRoute: typeof PortalForgotPasswordRouteImport
      parentRoute: typeof PortalRouteImport
    }
    '/_portal/login': {
      preLoaderRoute: typeof PortalLoginRouteImport
      parentRoute: typeof PortalRouteImport
    }
    '/_portal/signup': {
      preLoaderRoute: typeof PortalSignupRouteImport
      parentRoute: typeof PortalRouteImport
    }
    '/_portal/sso': {
      preLoaderRoute: typeof PortalSsoRouteImport
      parentRoute: typeof PortalRouteImport
    }
    '/_base/system/users': {
      preLoaderRoute: typeof BaseSystemUsersRouteImport
      parentRoute: typeof BaseRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  RouteRoute,
  BaseRouteRoute.addChildren([
    BaseIndexRouteRoute,
    Base403RouteRoute,
    Base404RouteRoute,
    Base500RouteRoute,
    BaseChangePasswordRouteRoute,
    BaseUserInfoRouteRoute,
    BaseSystemUsersRouteRoute
  ]),
  PortalRouteRoute.addChildren([
    PortalForgotPasswordRouteRoute,
    PortalLoginRouteRoute,
    PortalSignupRouteRoute,
    PortalSsoRouteRoute
  ])
])

/* prettier-ignore-end */
