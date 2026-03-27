const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: PORT,
  path: '/',
  allow_discovery: true,
});

peerServer.on('connection', (client) => {
  console.log(`[+] 연결: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`[-] 해제: ${client.getId()}`);
});

console.log(`PeerJS 서버 실행 중 (port: ${PORT})`);
