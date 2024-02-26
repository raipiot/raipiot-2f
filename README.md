# raipiot-2f

## Apps

- [`admin`](apps/admin/): 2F SaaS 管理后台
- [`mock`](apps/mock/): 基于 Nest 的 Mock 接口服务
- [`shopping`](apps/shopping/): 商城
- [`sso`](apps/sso/): SSO 统一身份认证站点

## Admin

- [`/app`](apps/admin/src/app/): 应用层，用于存放应用基本资源、初始化脚本等
- [`/features`](apps/admin/src/features/): 业务层，用于存放应用功能模块
- [`/routes`](apps/admin/src/routes/): 路由层，用于存放应用路由配置、页面组件等
- [`/shared`](apps/adin/src/shared/): 共享层，用于存放应用共享资源、通用组件等

## Packages

- [`api`](packages/api/): 通用 API 模块
- [`axios`](packages/axios/): 通用 Axios 模块
- [`config`](packages/config/): 通用配置、环境变量模块
- [`cspell`](packages/cspell/): CSpell 业务词典
- [`hooks`](packages/hooks/): 通用 Hooks 模块
- [`i18n`](packages/i18n/): 通用 i18n 模块
- [`template`](packages/template/): 通用子包模版

## 安装依赖

```bash
pnpm i
```

## 配置环境变量

在根目录下新建 `.env.developemnt.local` 文件，配置环境变量，复制 .env.example 即可。

```bash
cp .env.example .env.developemnt.local
```

## 启动

```bash
pnpm dev:admin    # 启动 2F 管理系统
pnpm dev:shopping # 启动 2F 商城
pnpm dev:mock     # 启动 2F Mock 服务
```

## 部署

### Staging

```bash
pnpm i
VITE_BASIC_AUTH_CODE=$xxx VITE_BASE_API_PREFIX=/base-api pnpm build:admin:staging
```

生成的 dist 包位于 /apps/admin/dist。

## 新建子包

```bash
pnpm gen:package
```
