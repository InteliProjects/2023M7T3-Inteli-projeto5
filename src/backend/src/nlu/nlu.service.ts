/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { nluOutput } from 'src/Types/getAnalysis.types';
import { transcriptInput } from 'src/Types/transcript.types';

const Watson = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

@Injectable()
export class NluService {
  async getAnalysis(text: transcriptInput): Promise<nluOutput> {
    try {
      const naturalLanguageUnderstanding = new Watson({
        version: '2022-04-07',
        authenticator: new IamAuthenticator({
          apikey: process.env.NLP_API_KEY,
        }),
        serviceUrl: process.env.NLP_URL,
      });

      const analyzeParams = {
        text: text,
        features: {
          keywords: {
            limit: 3,
          },
          categories: {
            limit: 3,
          },
        },
      };

      //Arrays to store the keywords and categories
      const keywords = [];
      const categories = [];

      //Complete JSON result from the NLU
      const completeResult = await naturalLanguageUnderstanding.analyze(
        analyzeParams,
      );

      //Extracting the keywords and categories from the complete result
      completeResult.result.keywords.forEach((element) => {
        keywords.push(element.text);
      });
      completeResult.result.categories.forEach((element) => {
        categories.push(element.label);
      });

      //Object to store the final result with keywords and categories
      const finalResult = {
        keywords: keywords,
        categories: categories,
      };

      return finalResult;
    } catch (error) {
      throw Error('Error analyzing text');
    }

    //return JSON.stringify(completeResult, null, 2);
  }
}
