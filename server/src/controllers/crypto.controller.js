const socketIO = require('socket.io');
const crytoService = require('../services/crypto.service');

const getDataCrypto=(server)=>{
    const io = socketIO(server);
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