# raipiot-srm

## Apps

- [`admin`](apps/admin/): SRM 管理后台
- [`shopping`](apps/shopping/): SRM 商城

## Packages

- [`eslint-config`](packages/eslint-config/): ESLint 配置

## VSCode 工作区设置

```json
{
  "folders": [
    {
      "name": "raipiot-srm",
      "path": "raipiot-srm"
    },
    {
      "name": "@raipiot-srm/admin",
      "path": "raipiot-srm/apps/admin"
    },
    {
      "name": "@raipiot-srm/shopping",
      "path": "raipiot-srm/apps/shopping"
    },
    {
      "name": "@raipiot-srm/eslint-config",
      "path": "raipiot-srm/packages/eslint-config"
    },
    {
      "name": "@raipiot-srm/cspell",
      "path": "raipiot-srm/packages/cspell"
    }
  ]
}
```

## 安装依赖

```bash
pnpm i
```

## 启动

```bash
pnpm dev:admin    # 启动 SRM 管理系统
pnpm dev:shopping # 启动 SRM 商城
```
