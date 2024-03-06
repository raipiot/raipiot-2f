/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as PortalRouteImport } from './../routes/_portal/route'
import { Route as BaseRouteImport } from './../routes/_base/route'
import { Route as SplatRouteImport } from './../routes/$/route'
import { Route as PortalSsoRouteImport } from './../routes/_portal/sso/route'
import { Route as PortalSignupRouteImport } from './../routes/_portal/signup/route'
import { Route as PortalLoginRouteImport } from './../routes/_portal/login/route'
import { Route as PortalForgotPasswordRouteImport } from './../routes/_portal/forgot-password/route'
import { Route as BaseUserInfoRouteImport } from './../routes/_base/user-info/route'
import { Route as BaseDashboardRouteImport } from './../routes/_base/dashboard/route'
import { Route as BaseChangePasswordRouteImport } from './../routes/_base/change-password/route'
import { Route as Base500RouteImport } from './../routes/_base/500/route'
import { Route as Base404RouteImport } from './../routes/_base/404/route'
import { Route as Base403RouteImport } from './../routes/_base/403/route'
import { Route as PortalIndexRouteImport } from './../routes/_portal/index/route'
import { Route as BaseSystemUsersRouteImport } from './../routes/_base/system/users/route'
import { Route as BaseSystemTenantsRouteImport } from './../routes/_base/system/tenants/route'
import { Route as BaseSystemRolesRouteImport } from './../routes/_base/system/roles/route'
import { Route as BaseSystemPostsRouteImport } from './../routes/_base/system/posts/route'
import { Route as BaseSystemPermissionsRouteImport } from './../routes/_base/system/permissions/route'
import { Route as BaseSystemParamsRouteImport } from './../routes/_base/system/params/route'
import { Route as BaseSystemDeptsRouteImport } from './../routes/_base/system/depts/route'
import { Route as BaseSystemBusinessDictsRouteImport } from './../routes/_base/system/business-dicts/route'
import { Route as BaseDevTemplatesRouteImport } from './../routes/_base/dev/templates/route'
import { Route as BaseDevStorybookRouteImport } from './../routes/_base/dev/storybook/route'
import { Route as BaseSystemDictsIdRouteImport } from './../routes/_base/system/dicts/$id/route'
import { Route as BaseDevTemplatesCommonTableRouteImport } from './../routes/_base/dev/templates/common-table/route'
import { Route as BaseDevTemplatesSplatRouteImport } from './../routes/_base/dev/templates/$/route'
import { Route as BaseSystemDictsIndexRouteImport } from './../routes/_base/system/dicts/index/route'
import { Route as BaseDevTemplatesIndexRouteImport } from './../routes/_base/dev/templates/index/route'

// Create/Update Routes

const PortalRouteRoute = PortalRouteImport.update({
  id: '/_portal',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/_portal/route.lazy').then((d) => d.Route),
)

const BaseRouteRoute = BaseRouteImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../routes/_base/route.lazy').then((d) => d.Route),
)

const SplatRouteRoute = SplatRouteImport.update({
  path: '/$',
  getParentRoute: () => rootRoute,
} as any)

const PortalSsoRouteRoute = PortalSsoRouteImport.update({
  path: '/sso',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../routes/_portal/sso/route.lazy').then((d) => d.Route),
)

const PortalSignupRouteRoute = PortalSignupRouteImport.update({
  path: '/signup',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../routes/_portal/signup/route.lazy').then((d) => d.Route),
)

const PortalLoginRouteRoute = PortalLoginRouteImport.update({
  path: '/login',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../routes/_portal/login/route.lazy').then((d) => d.Route),
)

const PortalForgotPasswordRouteRoute = PortalForgotPasswordRouteImport.update({
  path: '/forgot-password',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../routes/_portal/forgot-password/route.lazy').then((d) => d.Route),
)

const BaseUserInfoRouteRoute = BaseUserInfoRouteImport.update({
  path: '/user-info',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/user-info/route.lazy').then((d) => d.Route),
)

const BaseDashboardRouteRoute = BaseDashboardRouteImport.update({
  path: '/dashboard',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/dashboard/route.lazy').then((d) => d.Route),
)

const BaseChangePasswordRouteRoute = BaseChangePasswordRouteImport.update({
  path: '/change-password',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/change-password/route.lazy').then((d) => d.Route),
)

const Base500RouteRoute = Base500RouteImport.update({
  path: '/500',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/500/route.lazy').then((d) => d.Route),
)

const Base404RouteRoute = Base404RouteImport.update({
  path: '/404',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/404/route.lazy').then((d) => d.Route),
)

const Base403RouteRoute = Base403RouteImport.update({
  path: '/403',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/403/route.lazy').then((d) => d.Route),
)

const PortalIndexRouteRoute = PortalIndexRouteImport.update({
  path: '/',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../routes/_portal/index/route.lazy').then((d) => d.Route),
)

const BaseSystemUsersRouteRoute = BaseSystemUsersRouteImport.update({
  path: '/system/users',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/users/route.lazy').then((d) => d.Route),
)

const BaseSystemTenantsRouteRoute = BaseSystemTenantsRouteImport.update({
  path: '/system/tenants',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/tenants/route.lazy').then((d) => d.Route),
)

const BaseSystemRolesRouteRoute = BaseSystemRolesRouteImport.update({
  path: '/system/roles',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/roles/route.lazy').then((d) => d.Route),
)

const BaseSystemPostsRouteRoute = BaseSystemPostsRouteImport.update({
  path: '/system/posts',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/posts/route.lazy').then((d) => d.Route),
)

const BaseSystemPermissionsRouteRoute = BaseSystemPermissionsRouteImport.update(
  {
    path: '/system/permissions',
    getParentRoute: () => BaseRouteRoute,
  } as any,
).lazy(() =>
  import('./../routes/_base/system/permissions/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSystemParamsRouteRoute = BaseSystemParamsRouteImport.update({
  path: '/system/params',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/params/route.lazy').then((d) => d.Route),
)

const BaseSystemDeptsRouteRoute = BaseSystemDeptsRouteImport.update({
  path: '/system/depts',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/depts/route.lazy').then((d) => d.Route),
)

const BaseSystemBusinessDictsRouteRoute =
  BaseSystemBusinessDictsRouteImport.update({
    path: '/system/business-dicts',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../routes/_base/system/business-dicts/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseDevTemplatesRouteRoute = BaseDevTemplatesRouteImport.update({
  path: '/dev/templates',
  getParentRoute: () => BaseRouteRoute,
} as any)

const BaseDevStorybookRouteRoute = BaseDevStorybookRouteImport.update({
  path: '/dev/storybook',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/dev/storybook/route.lazy').then((d) => d.Route),
)

const BaseSystemDictsIdRouteRoute = BaseSystemDictsIdRouteImport.update({
  path: '/system/dicts/$id',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/dicts/$id/route.lazy').then((d) => d.Route),
)

const BaseDevTemplatesCommonTableRouteRoute =
  BaseDevTemplatesCommonTableRouteImport.update({
    path: '/common-table',
    getParentRoute: () => BaseDevTemplatesRouteRoute,
  } as any).lazy(() =>
    import('./../routes/_base/dev/templates/common-table/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseDevTemplatesSplatRouteRoute = BaseDevTemplatesSplatRouteImport.update(
  {
    path: '/$',
    getParentRoute: () => BaseDevTemplatesRouteRoute,
  } as any,
)

const BaseSystemDictsIndexRouteRoute = BaseSystemDictsIndexRouteImport.update({
  path: '/system/dicts/',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../routes/_base/system/dicts/index/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseDevTemplatesIndexRouteRoute = BaseDevTemplatesIndexRouteImport.update(
  {
    path: '/',
    getParentRoute: () => BaseDevTemplatesRouteRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$': {
      preLoaderRoute: typeof SplatRouteImport
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
    '/_portal/': {
      preLoaderRoute: typeof PortalIndexRouteImport
      parentRoute: typeof PortalRouteImport
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
    '/_base/dashboard': {
      preLoaderRoute: typeof BaseDashboardRouteImport
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
    '/_base/dev/storybook': {
      preLoaderRoute: typeof BaseDevStorybookRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/dev/templates': {
      preLoaderRoute: typeof BaseDevTemplatesRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/business-dicts': {
      preLoaderRoute: typeof BaseSystemBusinessDictsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/depts': {
      preLoaderRoute: typeof BaseSystemDeptsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/params': {
      preLoaderRoute: typeof BaseSystemParamsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/permissions': {
      preLoaderRoute: typeof BaseSystemPermissionsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/posts': {
      preLoaderRoute: typeof BaseSystemPostsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/roles': {
      preLoaderRoute: typeof BaseSystemRolesRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/tenants': {
      preLoaderRoute: typeof BaseSystemTenantsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/users': {
      preLoaderRoute: typeof BaseSystemUsersRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/dev/templates/': {
      preLoaderRoute: typeof BaseDevTemplatesIndexRouteImport
      parentRoute: typeof BaseDevTemplatesRouteImport
    }
    '/_base/system/dicts/': {
      preLoaderRoute: typeof BaseSystemDictsIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/dev/templates/$': {
      preLoaderRoute: typeof BaseDevTemplatesSplatRouteImport
      parentRoute: typeof BaseDevTemplatesRouteImport
    }
    '/_base/dev/templates/common-table': {
      preLoaderRoute: typeof BaseDevTemplatesCommonTableRouteImport
      parentRoute: typeof BaseDevTemplatesRouteImport
    }
    '/_base/system/dicts/$id': {
      preLoaderRoute: typeof BaseSystemDictsIdRouteImport
      parentRoute: typeof BaseRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  SplatRouteRoute,
  BaseRouteRoute.addChildren([
    Base403RouteRoute,
    Base404RouteRoute,
    Base500RouteRoute,
    BaseChangePasswordRouteRoute,
    BaseDashboardRouteRoute,
    BaseUserInfoRouteRoute,
    BaseDevStorybookRouteRoute,
    BaseDevTemplatesRouteRoute.addChildren([
      BaseDevTemplatesIndexRouteRoute,
      BaseDevTemplatesSplatRouteRoute,
      BaseDevTemplatesCommonTableRouteRoute,
    ]),
    BaseSystemBusinessDictsRouteRoute,
    BaseSystemDeptsRouteRoute,
    BaseSystemParamsRouteRoute,
    BaseSystemPermissionsRouteRoute,
    BaseSystemPostsRouteRoute,
    BaseSystemRolesRouteRoute,
    BaseSystemTenantsRouteRoute,
    BaseSystemUsersRouteRoute,
    BaseSystemDictsIndexRouteRoute,
    BaseSystemDictsIdRouteRoute,
  ]),
  PortalRouteRoute.addChildren([
    PortalIndexRouteRoute,
    PortalForgotPasswordRouteRoute,
    PortalLoginRouteRoute,
    PortalSignupRouteRoute,
    PortalSsoRouteRoute,
  ]),
])

/* prettier-ignore-end */
