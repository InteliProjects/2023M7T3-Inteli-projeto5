import { Injectable,Req } from '@nestjs/common';
import { Request } from 'express';
import * as winston from 'winston';

@Injectable()
export class AppService {

  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'app-service' },
      transports: [
        new winston.transports.File({ filename: './logs/app.log' }),
      ],
    });
  }

  getHello(req:Request): string {
    const ip = req.ip;
    this.logger.info(`Request from ${ip}`);
    return 'Hello World!';
  }

}
