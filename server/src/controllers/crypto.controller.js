const socketIO = require('socket.io');
const crytoService = require('../services/crypto.service');

const getDataCrypto = (server) => {

    const io = require('socket.io')(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.info('Client connected!');

        socket.on('disconnect', () => {
            console.info('Client disconnected!');
        });
    });

    crytoService.getDataCrypto(io);
}


module.exports = {
    getDataCrypto
};