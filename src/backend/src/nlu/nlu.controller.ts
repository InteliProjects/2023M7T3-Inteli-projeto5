import { Body, Controller, Post } from '@nestjs/common';
import { NluService } from './nlu.service';
import {
  ApiOperation,
  ApiTags,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { DTOnlubody } from './DTO/DTOnlubody';

@ApiTags('nlu')
@Controller('nlu')
export class NluController {
  constructor(private readonly nluService: NluService) {}

  @ApiOperation({ summary: 'Fazer uma análise de sentimento' })
  @ApiResponse({
    status: 200,
    description: 'Análise de sentimento realizada com sucesso',
  })
  @ApiBadRequestResponse({ description: 'Texto inválido' })
  @ApiInternalServerErrorResponse({ description: 'Erro interno do servidor' })

  //docs end here
  
  @Post()
  async getAnalysis(@Body() body: DTOnlubody) {
    const result = await this.nluService.getAnalysis(body.text);
    return result;
  }
}
