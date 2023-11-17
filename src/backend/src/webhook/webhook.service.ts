import * as dotenv from 'dotenv'; 
dotenv.config();

import { Injectable } from '@nestjs/common';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';
import { response } from 'express';
import { http, https } from 'follow-redirects';


const IFTTT_SERVICE_KEY = process.env.IFTTT_KEY;
const URL = `https://maker.ifttt.com/trigger/notify/json/with/key/${IFTTT_SERVICE_KEY}`;

@Injectable()
export class WebhookService {
  async iftttAlert() {
    const httpClient = URL.startsWith('https://') ? https : http;

    httpClient
      .get(URL, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          console.log(data);
        });
      })
      .on('error', (error) => {
        console.error(`Error making GET request: ${error.message}`);
      });
  }
}
