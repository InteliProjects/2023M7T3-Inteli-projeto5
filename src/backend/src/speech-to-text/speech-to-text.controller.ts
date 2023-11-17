import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Body,
  HttpException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SpeechToTextService } from './speech-to-text.service';
import {
  ApiBody,
  ApiOperation,
  ApiTags,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiConsumes,
  ApiResponse,
} from '@nestjs/swagger';
import { DTOnlubody } from 'src/nlu/DTO/DTOnlubody';

@ApiTags('speech-to-text')
@Controller('upload')
export class SpeechToTextController {
  constructor(private readonly speechToTextService: SpeechToTextService) {}

  @ApiOperation({ summary: 'Fazer um upload de um arquivo .flac' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Audio transcrito com sucesso' })
  @ApiBadRequestResponse({ description: 'Arquivo inválido' })
  @ApiInternalServerErrorResponse({ description: 'Erro interno do servidor' })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { contentType: string },
  ) {
    if (!file) {
      throw new HttpException('Arquivo obrigatório', 400);
    }

    if (file.mimetype !== 'audio/x-flac') {
      throw new BadRequestException('Apenas arquivos .flac são aceitos');
    }

    if (file.size > 1024 * 1024 * 50) {
      throw new BadRequestException('Arquivo muito grande');
    }

    console.log(file.mimetype);

    const result = await this.speechToTextService.generateText(
      file.buffer,
      body.contentType,
    );

    // {
    //   text: 'estratégias de vendas da i b m ',
    //   categories: [
    //     '/shopping/sales and promotions',
    //     '/business and finance/business/sales'
    //   ],
    //   keywords: [ 'estratégias de vendas da i b' ],
    //   texts: [
    //     'Com um profundo compromisso com a pesquisa e o desenvolvimento, a IBM continua a ser pioneira na criação de tecnologias emergentes, utilizando-se de insights data-driven para alimentar inovações que desafiam os limites do possível.',
    //     'A IBM proporciona a seus clientes um ecossistema de inovação aberta, onde ideias são compartilhadas e soluções colaborativas são desenvolvidas.',
    //     'Em um mundo onde os dados são o novo petróleo, a IBM investe vigorosamente em tecnologias de blockchain para criar soluções de gerenciamento de dados seguras, transparentes e eficientes, reforçando assim sua posição como uma força revolucionária no espaço tecnológico.'
    //   ]
    // }

    console.log(result);
    console.log(result.texts);

    return result.texts;
  }

  @Post('/text')
  async sendText(@Body() { text }: DTOnlubody) {
    const result = await this.speechToTextService.generateTextForText(text);
    return result;
  }
}
