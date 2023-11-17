import { Test, TestingModule } from '@nestjs/testing';
import { SpeechToTextService } from '../src/speech-to-text/speech-to-text.service';
import { SpeechToTextController } from '../src/speech-to-text/speech-to-text.controller';
import { NluModule } from '../src/nlu/nlu.module';
import { FileInterceptor } from '@nestjs/platform-express';


describe('SpeechToTextController', () => {
    let speechToTextController: SpeechToTextController;
    let speechToTextService: SpeechToTextService;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            imports: [NluModule],
            controllers: [SpeechToTextController],
            providers: [SpeechToTextService],
        }).compile();

        speechToTextService = moduleRef.get<SpeechToTextService>(SpeechToTextService);
        speechToTextController = moduleRef.get<SpeechToTextController>(SpeechToTextController);
    });

    describe('uploadFile', () => {
        it('should return a string', async () => {
            const result = 'Hello World';
            const filePath = '../test/test.flac';
            const file = {
                buffer: Buffer.from(filePath),
            } as Express.Multer.File;
            jest.spyOn(speechToTextService, 'generateText').mockImplementation(() => Promise.resolve(result));
            expect(await speechToTextService.generateText(file.buffer)).toBe(result);
        });
    });
});
