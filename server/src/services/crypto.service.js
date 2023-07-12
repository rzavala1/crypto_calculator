
const https = require('https');

const HOSTNAME_MESSARI=process.env.HOSTNAME_MESSARI;
const PORT_MESSARI=process.env.PORT_MESSARI;
const PATH_ASSETS_MESSARI=process.env.PATH_ASSETS_MESSARI;

const requestData=(io)=>{
    const options = {
        hostname: HOSTNAME_MESSARI,
        port: PORT_MESSARI,
        path: PATH_ASSETS_MESSARI,
        method: 'GET'
    };
    https.request(options, (res) => {
        let str = '';
        res.on('data', (dataResponse) => {
            (str += dataResponse);
        });
        res.on('end', () => {
            /*const prices = JSON.parse(str).data.map((item) => {
                return {
                    id: item.id,
                    name: item.symbol,
                    price: item.metrics.market_data.price_usd
                }
            });*/
            io.emit('crypto', str)
        })
    }).end();

}
const getDataCrypto = async (io) => {
    setInterval(() => {
        requestData(io);
    }, 5000);
}

module.exports = {
    getDataCrypto
};