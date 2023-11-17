/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
import { NluService } from '../nlu/nlu.service';
import { uploadOutput } from 'src/Types/generateText.types';
import axios from 'axios';

@Injectable()
export class SpeechToTextService {
  constructor(private readonly nluService: NluService) {}

  async generateText(
    audio: Buffer,
    contentType: string,
  ): Promise<uploadOutput> {
    const speechToText = new SpeechToTextV1({
      authenticator: new IamAuthenticator({
        apikey: process.env.SPT_API_KEY,
      }),
      serviceUrl: process.env.SPT_URL,
    });

    // console.log(audio);
    console.log(contentType);

    // const newAudio = await this.convertToFlac(audio);

    try {
      const result = await speechToText.recognize({
        audio: audio,
        contentType: contentType,
        model: 'pt-BR_BroadbandModel',
        keywords: ['hello'],
        keywordsThreshold: 0.5,
        maxAlternatives: 3,
      });

      const response = result.result.results[0].alternatives[0].transcript;
      const analysis = await this.nluService.getAnalysis(response);
      const text = await axios.post('http://backend-flask:5000/text', {
        text: response,
      });

      const results: uploadOutput = {
        text: response,
        categories: analysis.categories,
        keywords: analysis.keywords,
        texts: text.data,
      };

      return results;
    } catch (error) {
      console.log(error);
      throw Error('Error recognizing audio');
    }
  }

  async generateTextForText(textUser: string) {
    const text = await axios.post('http://backend-flask:5000/text', {
      text: textUser,
    });

    return text.data;
  }
}
