const crytoService = require('../services/crypto.service');
const ALLOWED_ORIGIN=process.env.ALLOWED_ORIGIN;

const getDataCrypto = (server) => {

    const io = require('socket.io')(server, {
        cors: {
            origin: ALLOWED_ORIGIN,
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