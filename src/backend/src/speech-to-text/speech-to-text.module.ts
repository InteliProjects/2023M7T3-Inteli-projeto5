import { Module } from '@nestjs/common';
import { SpeechToTextService } from './speech-to-text.service';
import { SpeechToTextController } from './speech-to-text.controller';
import { NluModule } from '../nlu/nlu.module';

@Module({
  imports: [NluModule],
  controllers: [SpeechToTextController],
  providers: [SpeechToTextService]
})
export class SpeechToTextModule {}
