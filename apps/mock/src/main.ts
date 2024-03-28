import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { bootstrapLog } from '@raipiot-infra/bootstrap-animation'

import { AppModule } from './app.module'

async function main() {
  const app = await NestFactory.create(AppModule, {
    cors: false
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动删除非 dto 中的属性
      transform: true, // 自动转换类型
      transformOptions: {
        enableImplicitConversion: true // 允许隐式转换
      },
      stopAtFirstError: true, // 遇到错误立即停止
      disableErrorMessages: false // 禁用错误消息
    })
  )

  await app.listen(4080)
}
main().then(() =>
  bootstrapLog({
    name: 'raipiot 2F Mock Server',
    description: 'raipiot SaaS 管理系统',
    lang: 'zh-CN'
  })
)
