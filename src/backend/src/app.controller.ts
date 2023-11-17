import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { get } from 'http';
import { NluController } from './nlu/nlu.controller';


@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return this.appService.getHello(request);
  } 
}
