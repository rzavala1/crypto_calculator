const https = require('https');

const HOSTNAME_MESSARI = process.env.HOSTNAME_MESSARI;
const PORT_MESSARI = process.env.PORT_MESSARI;
const PATH_ASSETS_MESSARI_PRICE = process.env.PATH_ASSETS_MESSARI_PRICE;
const API_KEY_MESSARI=process.env.API_KEY_MESSARI;

const options = {
  hostname: HOSTNAME_MESSARI,
  port: PORT_MESSARI,
  path: PATH_ASSETS_MESSARI_PRICE,
  method: 'GET',
  headers: { "x-messari-api-key": API_KEY_MESSARI },
};


const getDataCryptoService = () => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let str = '';
      res.on('data', (dataResponse) => {
        str += dataResponse;
      });
      res.on('end', () => {
        try {
          const prices = JSON.parse(str).data.map((item) => ({
            id: item.id,
            name: item.symbol,
            price: item.metrics.market_data.price_usd,
            profit: 0
          }));
          resolve(prices);
        } catch (error) {
          reject(new Error('Failed to parse response data'));
        }
      });
    });

    req.on('error', (error) => {
      reject(new Error('Request failed'));
    });

    req.end();
  });
};




module.exports = {
  getDataCryptoService,
};
