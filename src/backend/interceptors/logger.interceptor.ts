import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as winston from 'winston';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'app-service' },
      transports: [new winston.transports.File({ filename: './logs/app.log' })],
    });
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const req = context.switchToHttp().getRequest();
    const ip = req.ip;
    return next
      .handle()
      .pipe(tap(() => this.logger.info(ip + ' ' + req.method + ' ' + req.url)));
  }
}
