import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { MongoConfig } from './configs'
import { RegisterController } from './register/register.controller'
import { QuestionnairesModule } from './supplier/questionnaires/questionnaires.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [MongoConfig],
      cache: true,
      expandVariables: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL')
      }),
      inject: [ConfigService]
    }),
    QuestionnairesModule
  ],
  controllers: [RegisterController],
  providers: []
})
export class AppModule {}
