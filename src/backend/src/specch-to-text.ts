// import express from 'express';
// import bodyParser from 'body-parser';
// import SpeechToTextV1 from 'ibm-watson/SpeechToTextV1';
// import { IamAuthenticator } from 'ibm-watson/auth';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.raw({ type: 'audio/flac', limit: '50mb' }));

// const speechToText = new SpeechToTextV1({
//   authenticator: new IamAuthenticator({
//     apikey: process.env.API_KEY_SPEECH_TO_TEXT,
//   }),
//   serviceUrl: process.env.SERVICE_URL_SPEECH_TO_TEXT,
// });

// async function generateText(audio: Buffer) {
//   try {
//     const result = await speechToText.recognize({
//       audio: audio,
//       contentType: 'audio/flac',
//       model: 'pt-BR_BroadbandModel',
//       keywords: ['oi'],
//       keywordsThreshold: 0.5,
//       maxAlternatives: 3,
//     });

//     return result.result.results[0].alternatives[0].transcript;
//   } catch (error) {
//     throw new Error('Error recognizing audio');
//   }
// }

// app.get('/', (req, res) => {
//   res.send({
//     message: 'Health check completed!',
//     status: 200,
//   });
// });

// app.post('/text', async (req, res) => {
//   try {
//     const text = await generateText(req.body);
//     console.log(text);

//     res.status(200).json({
//       message: text,
//       audio: req.body.toString('base64'),
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//       audio: req.body.toString('base64'),
//     });
//   }
// });

// app.get('/keys', (req, res) => {
//   res.send({
//     API_KEY_TEXT_TO_SPEECH: process.env.API_KEY_TEXT_TO_SPEECH,
//     SERVICE_URL_TEXT_TO_SPEECH: process.env.SERVICE_URL_TEXT_TO_SPEECH,
    
//   });
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });
