import express from 'express';
import bodyParser from 'body-parser';
import { processJson } from './utils';

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const result = processJson(req.body);
  res.send(result);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
