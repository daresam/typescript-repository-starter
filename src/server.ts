import * as http from 'http';
import * as https from 'https';
import fs from 'fs';
import { get } from './config';
import App from './app';

let server: any = http.createServer(App);

if (get('USE_SSL') == 'true') {
  const privateKey = fs.readFileSync(get('SSL_PRIVATE_KEY_PATH'), 'utf8');
  const certificate = fs.readFileSync(get('SSL_CERT_KEY_PATH'), 'utf8');
  const ca = fs.readFileSync(get('SSL_CHAIN_PATH'), 'utf8');
  const credentials = { key: privateKey, cert: certificate, ca };
  server = https.createServer(credentials, App);
}

server.listen(get('APP_PORT'), () =>
  console.log(`ATC API SERVER STARTED SUCCESSFULLY ON PORT ${get('APP_PORT')}`),
);

process.on('unhandledRejection', (err) => {
  //TODO: send email here to support when error occurs
  console.log(err);
  console.log('error occured');
});
