/** @type {import('@raipiot-infra/rpx').RaipiotConfig} */
module.exports = {
  lang: 'zh-CN',
  org: 'raipiot',
  repo: 'raipiot-2f',
  genCode: {
    rootPath: './',
    paths: {
      api: './packages/api/src',
      feature: './apps/*/src/features'
    }
  }
}
