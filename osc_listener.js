import { Server } from 'node-osc';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
});

var oscServer = new Server(3333, '0.0.0.0', () => {
  console.log('OSC Server is listening');
});

oscServer.on('message', function (msg) {
  console.log(`Message: ${msg[1]}`);
    wss.clients.forEach(function each(client) {
        client.send(msg[1], {isBinary: false})
    });
});