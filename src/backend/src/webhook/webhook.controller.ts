import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';

import {
  ApiBody,
  ApiOperation,
  ApiTags,
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiConsumes,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('webhook')
@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @ApiOperation({ summary: 'Enviar alerta para o IFTTT' })
  @ApiResponse({
    status: 200,
    description: 'Alerta enviado com sucesso',
  })
  @ApiBadRequestResponse({ description: 'Erro ao enviar alerta' })
  @ApiInternalServerErrorResponse({ description: 'Erro interno do servidor' })
  @Get()
  findAll() {
    return this.webhookService.iftttAlert();
  }

}
