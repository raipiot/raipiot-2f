/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../../routes/__root'
import { Route as PortalRouteImport } from './../../routes/_portal/route'
import { Route as BaseRouteImport } from './../../routes/_base/route'
import { Route as SplatRouteImport } from './../../routes/$/route'
import { Route as PortalSsoRouteImport } from './../../routes/_portal/sso/route'
import { Route as PortalSignupRouteImport } from './../../routes/_portal/signup/route'
import { Route as PortalLoginRouteImport } from './../../routes/_portal/login/route'
import { Route as PortalForgotPasswordRouteImport } from './../../routes/_portal/forgot-password/route'
import { Route as BaseUserInfoRouteImport } from './../../routes/_base/user-info/route'
import { Route as BaseDevRouteImport } from './../../routes/_base/dev/route'
import { Route as BaseChangePasswordRouteImport } from './../../routes/_base/change-password/route'
import { Route as Base500RouteImport } from './../../routes/_base/500/route'
import { Route as Base404RouteImport } from './../../routes/_base/404/route'
import { Route as Base403RouteImport } from './../../routes/_base/403/route'
import { Route as BaseIndexRouteImport } from './../../routes/_base/index/route'
import { Route as BaseSystemUsersRouteImport } from './../../routes/_base/system/users/route'
import { Route as BaseSystemTenantsRouteImport } from './../../routes/_base/system/tenants/route'
import { Route as BaseSystemRolesRouteImport } from './../../routes/_base/system/roles/route'
import { Route as BaseSystemPostsRouteImport } from './../../routes/_base/system/posts/route'
import { Route as BaseSystemParamsRouteImport } from './../../routes/_base/system/params/route'
import { Route as BaseSystemMenusRouteImport } from './../../routes/_base/system/menus/route'
import { Route as BaseSystemDeptsRouteImport } from './../../routes/_base/system/depts/route'
import { Route as BaseSrmSupplierGreenChannelsRouteImport } from './../../routes/_base/srm/supplier-green-channels/route'
import { Route as BaseSrmSupplierChangeRecordRouteImport } from './../../routes/_base/srm/supplier-change-record/route'
import { Route as BaseSrmSupplierBlacklistRouteImport } from './../../routes/_base/srm/supplier-blacklist/route'
import { Route as BaseDevStorybookRouteImport } from './../../routes/_base/dev/storybook/route'
import { Route as BaseDevEditTableRouteImport } from './../../routes/_base/dev/edit-table/route'
import { Route as BaseSystemPermsIdRouteImport } from './../../routes/_base/system/perms/$id/route'
import { Route as BaseSystemDictsIdRouteImport } from './../../routes/_base/system/dicts/$id/route'
import { Route as BaseSystemBizDictsIdRouteImport } from './../../routes/_base/system/biz-dicts/$id/route'
import { Route as BaseSrmSupplierIntroduceCreateRouteImport } from './../../routes/_base/srm/supplier-introduce/create/route'
import { Route as BaseSrmSupplierEntryCreateRouteImport } from './../../routes/_base/srm/supplier-entry/create/route'
import { Route as BaseSrmResourcePoolScopesCreateRouteImport } from './../../routes/_base/srm/resource-pool-scopes/create/route'
import { Route as BaseSrmResourcePoolScopesIdRouteImport } from './../../routes/_base/srm/resource-pool-scopes/$id/route'
import { Route as BaseSrmQuestionnairesCreateRouteImport } from './../../routes/_base/srm/questionnaires/create/route'
import { Route as BaseSrmQuestionnairesIdRouteImport } from './../../routes/_base/srm/questionnaires/$id/route'
import { Route as BaseSrmInvitationsRegisterRouteImport } from './../../routes/_base/srm/invitations/register/route'
import { Route as BaseDevTemplatesBasicTableRouteImport } from './../../routes/_base/dev/templates/basic-table/route'
import { Route as BaseDevTemplatesAdvancedTableRouteImport } from './../../routes/_base/dev/templates/advanced-table/route'
import { Route as BaseSystemPermsIndexRouteImport } from './../../routes/_base/system/perms/index/route'
import { Route as BaseSystemDictsIndexRouteImport } from './../../routes/_base/system/dicts/index/route'
import { Route as BaseSystemBizDictsIndexRouteImport } from './../../routes/_base/system/biz-dicts/index/route'
import { Route as BaseSrmSuppliersIndexRouteImport } from './../../routes/_base/srm/suppliers/index/route'
import { Route as BaseSrmSupplierIntroduceIndexRouteImport } from './../../routes/_base/srm/supplier-introduce/index/route'
import { Route as BaseSrmSupplierEntryIndexRouteImport } from './../../routes/_base/srm/supplier-entry/index/route'
import { Route as BaseSrmResourcePoolScopesIndexRouteImport } from './../../routes/_base/srm/resource-pool-scopes/index/route'
import { Route as BaseSrmResourcePoolPlansIndexRouteImport } from './../../routes/_base/srm/resource-pool-plans/index/route'
import { Route as BaseSrmQuestionnairesIndexRouteImport } from './../../routes/_base/srm/questionnaires/index/route'
import { Route as BaseSrmInvitationsIndexRouteImport } from './../../routes/_base/srm/invitations/index/route'
import { Route as BaseSrmSuppliersIdRelatedRouteImport } from './../../routes/_base/srm/suppliers/$id/related/route'
import { Route as BaseSrmSupplierIntroduceIdEditRouteImport } from './../../routes/_base/srm/supplier-introduce/$id/edit/route'
import { Route as BaseSrmSupplierIntroduceIdDetailRouteImport } from './../../routes/_base/srm/supplier-introduce/$id/detail/route'
import { Route as BaseSrmSupplierEntryIdEditRouteImport } from './../../routes/_base/srm/supplier-entry/$id/edit/route'
import { Route as BaseSrmSupplierEntryIdDetailRouteImport } from './../../routes/_base/srm/supplier-entry/$id/detail/route'
import { Route as BaseSrmResourcePoolScopesIdEditRouteImport } from './../../routes/_base/srm/resource-pool-scopes/$id/edit/route'
import { Route as BaseSrmInvitationsIdDetailRouteImport } from './../../routes/_base/srm/invitations/$id/detail/route'

// Create/Update Routes

const PortalRouteRoute = PortalRouteImport.update({
  id: '/_portal',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../../routes/_portal/route.lazy').then((d) => d.Route),
)

const BaseRouteRoute = BaseRouteImport.update({
  id: '/_base',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./../../routes/_base/route.lazy').then((d) => d.Route),
)

const SplatRouteRoute = SplatRouteImport.update({
  path: '/$',
  getParentRoute: () => rootRoute,
} as any)

const PortalSsoRouteRoute = PortalSsoRouteImport.update({
  path: '/sso',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_portal/sso/route.lazy').then((d) => d.Route),
)

const PortalSignupRouteRoute = PortalSignupRouteImport.update({
  path: '/signup',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_portal/signup/route.lazy').then((d) => d.Route),
)

const PortalLoginRouteRoute = PortalLoginRouteImport.update({
  path: '/login',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_portal/login/route.lazy').then((d) => d.Route),
)

const PortalForgotPasswordRouteRoute = PortalForgotPasswordRouteImport.update({
  path: '/forgot-password',
  getParentRoute: () => PortalRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_portal/forgot-password/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseUserInfoRouteRoute = BaseUserInfoRouteImport.update({
  path: '/user-info',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/user-info/route.lazy').then((d) => d.Route),
)

const BaseDevRouteRoute = BaseDevRouteImport.update({
  path: '/dev',
  getParentRoute: () => BaseRouteRoute,
} as any)

const BaseChangePasswordRouteRoute = BaseChangePasswordRouteImport.update({
  path: '/change-password',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/change-password/route.lazy').then(
    (d) => d.Route,
  ),
)

const Base500RouteRoute = Base500RouteImport.update({
  path: '/500',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/500/route.lazy').then((d) => d.Route),
)

const Base404RouteRoute = Base404RouteImport.update({
  path: '/404',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/404/route.lazy').then((d) => d.Route),
)

const Base403RouteRoute = Base403RouteImport.update({
  path: '/403',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/403/route.lazy').then((d) => d.Route),
)

const BaseIndexRouteRoute = BaseIndexRouteImport.update({
  path: '/',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/index/route.lazy').then((d) => d.Route),
)

const BaseSystemUsersRouteRoute = BaseSystemUsersRouteImport.update({
  path: '/system/users',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/users/route.lazy').then((d) => d.Route),
)

const BaseSystemTenantsRouteRoute = BaseSystemTenantsRouteImport.update({
  path: '/system/tenants',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/tenants/route.lazy').then((d) => d.Route),
)

const BaseSystemRolesRouteRoute = BaseSystemRolesRouteImport.update({
  path: '/system/roles',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/roles/route.lazy').then((d) => d.Route),
)

const BaseSystemPostsRouteRoute = BaseSystemPostsRouteImport.update({
  path: '/system/posts',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/posts/route.lazy').then((d) => d.Route),
)

const BaseSystemParamsRouteRoute = BaseSystemParamsRouteImport.update({
  path: '/system/params',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/params/route.lazy').then((d) => d.Route),
)

const BaseSystemMenusRouteRoute = BaseSystemMenusRouteImport.update({
  path: '/system/menus',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/menus/route.lazy').then((d) => d.Route),
)

const BaseSystemDeptsRouteRoute = BaseSystemDeptsRouteImport.update({
  path: '/system/depts',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/depts/route.lazy').then((d) => d.Route),
)

const BaseSrmSupplierGreenChannelsRouteRoute =
  BaseSrmSupplierGreenChannelsRouteImport.update({
    path: '/srm/supplier-green-channels',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-green-channels/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSupplierChangeRecordRouteRoute =
  BaseSrmSupplierChangeRecordRouteImport.update({
    path: '/srm/supplier-change-record',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-change-record/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSupplierBlacklistRouteRoute =
  BaseSrmSupplierBlacklistRouteImport.update({
    path: '/srm/supplier-blacklist',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-blacklist/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseDevStorybookRouteRoute = BaseDevStorybookRouteImport.update({
  path: '/storybook',
  getParentRoute: () => BaseDevRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/dev/storybook/route.lazy').then((d) => d.Route),
)

const BaseDevEditTableRouteRoute = BaseDevEditTableRouteImport.update({
  path: '/edit-table',
  getParentRoute: () => BaseDevRouteRoute,
} as any)

const BaseSystemPermsIdRouteRoute = BaseSystemPermsIdRouteImport.update({
  path: '/system/perms/$id',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/perms/$id/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSystemDictsIdRouteRoute = BaseSystemDictsIdRouteImport.update({
  path: '/system/dicts/$id',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/dicts/$id/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSystemBizDictsIdRouteRoute = BaseSystemBizDictsIdRouteImport.update({
  path: '/system/biz-dicts/$id',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/biz-dicts/$id/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSrmSupplierIntroduceCreateRouteRoute =
  BaseSrmSupplierIntroduceCreateRouteImport.update({
    path: '/srm/supplier-introduce/create',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/supplier-introduce/create/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmSupplierEntryCreateRouteRoute =
  BaseSrmSupplierEntryCreateRouteImport.update({
    path: '/srm/supplier-entry/create',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-entry/create/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmResourcePoolScopesCreateRouteRoute =
  BaseSrmResourcePoolScopesCreateRouteImport.update({
    path: '/srm/resource-pool-scopes/create',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/resource-pool-scopes/create/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmResourcePoolScopesIdRouteRoute =
  BaseSrmResourcePoolScopesIdRouteImport.update({
    path: '/srm/resource-pool-scopes/$id',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/resource-pool-scopes/$id/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmQuestionnairesCreateRouteRoute =
  BaseSrmQuestionnairesCreateRouteImport.update({
    path: '/srm/questionnaires/create',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/questionnaires/create/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmQuestionnairesIdRouteRoute =
  BaseSrmQuestionnairesIdRouteImport.update({
    path: '/srm/questionnaires/$id',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/questionnaires/$id/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmInvitationsRegisterRouteRoute =
  BaseSrmInvitationsRegisterRouteImport.update({
    path: '/srm/invitations/register',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/invitations/register/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseDevTemplatesBasicTableRouteRoute =
  BaseDevTemplatesBasicTableRouteImport.update({
    path: '/templates/basic-table',
    getParentRoute: () => BaseDevRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/dev/templates/basic-table/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseDevTemplatesAdvancedTableRouteRoute =
  BaseDevTemplatesAdvancedTableRouteImport.update({
    path: '/templates/advanced-table',
    getParentRoute: () => BaseDevRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/dev/templates/advanced-table/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSystemPermsIndexRouteRoute = BaseSystemPermsIndexRouteImport.update({
  path: '/system/perms/',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/perms/index/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSystemDictsIndexRouteRoute = BaseSystemDictsIndexRouteImport.update({
  path: '/system/dicts/',
  getParentRoute: () => BaseRouteRoute,
} as any).lazy(() =>
  import('./../../routes/_base/system/dicts/index/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSystemBizDictsIndexRouteRoute =
  BaseSystemBizDictsIndexRouteImport.update({
    path: '/system/biz-dicts/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/system/biz-dicts/index/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSuppliersIndexRouteRoute = BaseSrmSuppliersIndexRouteImport.update(
  {
    path: '/srm/suppliers/',
    getParentRoute: () => BaseRouteRoute,
  } as any,
).lazy(() =>
  import('./../../routes/_base/srm/suppliers/index/route.lazy').then(
    (d) => d.Route,
  ),
)

const BaseSrmSupplierIntroduceIndexRouteRoute =
  BaseSrmSupplierIntroduceIndexRouteImport.update({
    path: '/srm/supplier-introduce/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-introduce/index/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSupplierEntryIndexRouteRoute =
  BaseSrmSupplierEntryIndexRouteImport.update({
    path: '/srm/supplier-entry/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-entry/index/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmResourcePoolScopesIndexRouteRoute =
  BaseSrmResourcePoolScopesIndexRouteImport.update({
    path: '/srm/resource-pool-scopes/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/resource-pool-scopes/index/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmResourcePoolPlansIndexRouteRoute =
  BaseSrmResourcePoolPlansIndexRouteImport.update({
    path: '/srm/resource-pool-plans/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/resource-pool-plans/index/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmQuestionnairesIndexRouteRoute =
  BaseSrmQuestionnairesIndexRouteImport.update({
    path: '/srm/questionnaires/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/questionnaires/index/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmInvitationsIndexRouteRoute =
  BaseSrmInvitationsIndexRouteImport.update({
    path: '/srm/invitations/',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/invitations/index/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSuppliersIdRelatedRouteRoute =
  BaseSrmSuppliersIdRelatedRouteImport.update({
    path: '/srm/suppliers/$id/related',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/suppliers/$id/related/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSupplierIntroduceIdEditRouteRoute =
  BaseSrmSupplierIntroduceIdEditRouteImport.update({
    path: '/srm/supplier-introduce/$id/edit',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/supplier-introduce/$id/edit/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmSupplierIntroduceIdDetailRouteRoute =
  BaseSrmSupplierIntroduceIdDetailRouteImport.update({
    path: '/srm/supplier-introduce/$id/detail',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/supplier-introduce/$id/detail/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmSupplierEntryIdEditRouteRoute =
  BaseSrmSupplierEntryIdEditRouteImport.update({
    path: '/srm/supplier-entry/$id/edit',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/supplier-entry/$id/edit/route.lazy').then(
      (d) => d.Route,
    ),
  )

const BaseSrmSupplierEntryIdDetailRouteRoute =
  BaseSrmSupplierEntryIdDetailRouteImport.update({
    path: '/srm/supplier-entry/$id/detail',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/supplier-entry/$id/detail/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmResourcePoolScopesIdEditRouteRoute =
  BaseSrmResourcePoolScopesIdEditRouteImport.update({
    path: '/edit',
    getParentRoute: () => BaseSrmResourcePoolScopesIdRouteRoute,
  } as any).lazy(() =>
    import(
      './../../routes/_base/srm/resource-pool-scopes/$id/edit/route.lazy'
    ).then((d) => d.Route),
  )

const BaseSrmInvitationsIdDetailRouteRoute =
  BaseSrmInvitationsIdDetailRouteImport.update({
    path: '/srm/invitations/$id/detail',
    getParentRoute: () => BaseRouteRoute,
  } as any).lazy(() =>
    import('./../../routes/_base/srm/invitations/$id/detail/route.lazy').then(
      (d) => d.Route,
    ),
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
    '/_base/dev': {
      preLoaderRoute: typeof BaseDevRouteImport
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
    '/_base/dev/edit-table': {
      preLoaderRoute: typeof BaseDevEditTableRouteImport
      parentRoute: typeof BaseDevRouteImport
    }
    '/_base/dev/storybook': {
      preLoaderRoute: typeof BaseDevStorybookRouteImport
      parentRoute: typeof BaseDevRouteImport
    }
    '/_base/srm/supplier-blacklist': {
      preLoaderRoute: typeof BaseSrmSupplierBlacklistRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-change-record': {
      preLoaderRoute: typeof BaseSrmSupplierChangeRecordRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-green-channels': {
      preLoaderRoute: typeof BaseSrmSupplierGreenChannelsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/depts': {
      preLoaderRoute: typeof BaseSystemDeptsRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/menus': {
      preLoaderRoute: typeof BaseSystemMenusRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/params': {
      preLoaderRoute: typeof BaseSystemParamsRouteImport
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
    '/_base/srm/invitations/': {
      preLoaderRoute: typeof BaseSrmInvitationsIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/questionnaires/': {
      preLoaderRoute: typeof BaseSrmQuestionnairesIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/resource-pool-plans/': {
      preLoaderRoute: typeof BaseSrmResourcePoolPlansIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/resource-pool-scopes/': {
      preLoaderRoute: typeof BaseSrmResourcePoolScopesIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-entry/': {
      preLoaderRoute: typeof BaseSrmSupplierEntryIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-introduce/': {
      preLoaderRoute: typeof BaseSrmSupplierIntroduceIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/suppliers/': {
      preLoaderRoute: typeof BaseSrmSuppliersIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/biz-dicts/': {
      preLoaderRoute: typeof BaseSystemBizDictsIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/dicts/': {
      preLoaderRoute: typeof BaseSystemDictsIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/perms/': {
      preLoaderRoute: typeof BaseSystemPermsIndexRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/dev/templates/advanced-table': {
      preLoaderRoute: typeof BaseDevTemplatesAdvancedTableRouteImport
      parentRoute: typeof BaseDevRouteImport
    }
    '/_base/dev/templates/basic-table': {
      preLoaderRoute: typeof BaseDevTemplatesBasicTableRouteImport
      parentRoute: typeof BaseDevRouteImport
    }
    '/_base/srm/invitations/register': {
      preLoaderRoute: typeof BaseSrmInvitationsRegisterRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/questionnaires/$id': {
      preLoaderRoute: typeof BaseSrmQuestionnairesIdRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/questionnaires/create': {
      preLoaderRoute: typeof BaseSrmQuestionnairesCreateRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/resource-pool-scopes/$id': {
      preLoaderRoute: typeof BaseSrmResourcePoolScopesIdRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/resource-pool-scopes/create': {
      preLoaderRoute: typeof BaseSrmResourcePoolScopesCreateRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-entry/create': {
      preLoaderRoute: typeof BaseSrmSupplierEntryCreateRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-introduce/create': {
      preLoaderRoute: typeof BaseSrmSupplierIntroduceCreateRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/biz-dicts/$id': {
      preLoaderRoute: typeof BaseSystemBizDictsIdRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/dicts/$id': {
      preLoaderRoute: typeof BaseSystemDictsIdRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/system/perms/$id': {
      preLoaderRoute: typeof BaseSystemPermsIdRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/invitations/$id/detail': {
      preLoaderRoute: typeof BaseSrmInvitationsIdDetailRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/resource-pool-scopes/$id/edit': {
      preLoaderRoute: typeof BaseSrmResourcePoolScopesIdEditRouteImport
      parentRoute: typeof BaseSrmResourcePoolScopesIdRouteImport
    }
    '/_base/srm/supplier-entry/$id/detail': {
      preLoaderRoute: typeof BaseSrmSupplierEntryIdDetailRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-entry/$id/edit': {
      preLoaderRoute: typeof BaseSrmSupplierEntryIdEditRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-introduce/$id/detail': {
      preLoaderRoute: typeof BaseSrmSupplierIntroduceIdDetailRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/supplier-introduce/$id/edit': {
      preLoaderRoute: typeof BaseSrmSupplierIntroduceIdEditRouteImport
      parentRoute: typeof BaseRouteImport
    }
    '/_base/srm/suppliers/$id/related': {
      preLoaderRoute: typeof BaseSrmSuppliersIdRelatedRouteImport
      parentRoute: typeof BaseRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  SplatRouteRoute,
  BaseRouteRoute.addChildren([
    BaseIndexRouteRoute,
    Base403RouteRoute,
    Base404RouteRoute,
    Base500RouteRoute,
    BaseChangePasswordRouteRoute,
    BaseDevRouteRoute.addChildren([
      BaseDevEditTableRouteRoute,
      BaseDevStorybookRouteRoute,
      BaseDevTemplatesAdvancedTableRouteRoute,
      BaseDevTemplatesBasicTableRouteRoute,
    ]),
    BaseUserInfoRouteRoute,
    BaseSrmSupplierBlacklistRouteRoute,
    BaseSrmSupplierChangeRecordRouteRoute,
    BaseSrmSupplierGreenChannelsRouteRoute,
    BaseSystemDeptsRouteRoute,
    BaseSystemMenusRouteRoute,
    BaseSystemParamsRouteRoute,
    BaseSystemPostsRouteRoute,
    BaseSystemRolesRouteRoute,
    BaseSystemTenantsRouteRoute,
    BaseSystemUsersRouteRoute,
    BaseSrmInvitationsIndexRouteRoute,
    BaseSrmQuestionnairesIndexRouteRoute,
    BaseSrmResourcePoolPlansIndexRouteRoute,
    BaseSrmResourcePoolScopesIndexRouteRoute,
    BaseSrmSupplierEntryIndexRouteRoute,
    BaseSrmSupplierIntroduceIndexRouteRoute,
    BaseSrmSuppliersIndexRouteRoute,
    BaseSystemBizDictsIndexRouteRoute,
    BaseSystemDictsIndexRouteRoute,
    BaseSystemPermsIndexRouteRoute,
    BaseSrmInvitationsRegisterRouteRoute,
    BaseSrmQuestionnairesIdRouteRoute,
    BaseSrmQuestionnairesCreateRouteRoute,
    BaseSrmResourcePoolScopesIdRouteRoute.addChildren([
      BaseSrmResourcePoolScopesIdEditRouteRoute,
    ]),
    BaseSrmResourcePoolScopesCreateRouteRoute,
    BaseSrmSupplierEntryCreateRouteRoute,
    BaseSrmSupplierIntroduceCreateRouteRoute,
    BaseSystemBizDictsIdRouteRoute,
    BaseSystemDictsIdRouteRoute,
    BaseSystemPermsIdRouteRoute,
    BaseSrmInvitationsIdDetailRouteRoute,
    BaseSrmSupplierEntryIdDetailRouteRoute,
    BaseSrmSupplierEntryIdEditRouteRoute,
    BaseSrmSupplierIntroduceIdDetailRouteRoute,
    BaseSrmSupplierIntroduceIdEditRouteRoute,
    BaseSrmSuppliersIdRelatedRouteRoute,
  ]),
  PortalRouteRoute.addChildren([
    PortalForgotPasswordRouteRoute,
    PortalLoginRouteRoute,
    PortalSignupRouteRoute,
    PortalSsoRouteRoute,
  ]),
])

/* prettier-ignore-end */
