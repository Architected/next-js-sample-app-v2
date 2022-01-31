import nc from 'next-connect';
import { unexpectedError } from 'architected-client/helper/unexpectedError.js';
import { connectClient } from '../../../services/defaultServices.js';

const handler = nc();

handler.post(async (req, res) => {
  try {
    console.log('starting calling connectService.authorize');
    const authorizeResponse = await connectClient.authorize(req.body);
    console.log('connectService.authorize:finish');
    res.send(authorizeResponse.data);
  } catch (err) {
    console.log('error calling connectService.authorize');
    res.status(500).send(unexpectedError(err));
  }
});

export default handler;
