import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeechToTextModule } from './speech-to-text/speech-to-text.module';
import { NluModule } from './nlu/nlu.module';

import { WebhookModule } from './webhook/webhook.module';

import { HealthModule } from './health/health.module';


@Module({
  imports: [
    NluModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SpeechToTextModule,
    NluModule,

    WebhookModule,

    HealthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
