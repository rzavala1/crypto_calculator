
const https = require('https');
const { readConfig } = require('../utils/ReadConfig');

const HOSTNAME_MESSARI = process.env.HOSTNAME_MESSARI;
const PORT_MESSARI = process.env.PORT_MESSARI;
const PATH_ASSETS_MESSARI = process.env.PATH_ASSETS_MESSARI;

const requestData = async (io) => {
  try {
    const assets = await readConfig();
    const configAssets = assets.map((item) => item.asset);

    const options = {
      hostname: HOSTNAME_MESSARI,
      port: PORT_MESSARI,
      path: PATH_ASSETS_MESSARI,
      method: 'GET'
    };


    const selectedCoinsPromise = new Promise((resolve, reject) => {
      https.request(options, (res) => {
        let str = '';
        res.on('data', (dataResponse) => {
          str += dataResponse;
        });
        res.on('end', () => {
          const selectedCoins = JSON.parse(str).data?.filter((item) =>
            configAssets.includes(item.symbol)
          );
          resolve(selectedCoins);
        });
      }).end();
    });

    const selectedCoins = await selectedCoinsPromise;
    const data = selectedCoins?.map((item) => {
      return {
        id: item.id,
        symbol: item.symbol,
        name: item.name,
        price_usd: parseFloat(item.metrics.market_data.price_usd.toFixed(2)),
        percent_change_usd_last_1_hour: item.metrics.market_data.percent_change_usd_last_1_hour.toFixed(3),
        real_volume_last_24_hours: item.metrics.market_data.real_volume_last_24_hours.toFixed(3),
        percent_change_usd_last_24_hours: item.metrics.market_data.percent_change_usd_last_24_hours.toFixed(3),

        current_marketcap_usd: item.metrics.marketcap.current_marketcap_usd.toFixed(3),

        percent_change_last_1_week: item.metrics.roi_data.percent_change_last_1_week.toFixed(3),
        percent_change_last_1_month: item.metrics.roi_data.percent_change_last_1_month.toFixed(3),
        percent_change_last_1_year: item.metrics.roi_data.percent_change_last_1_year.toFixed(3),

        last_30_days: item.metrics.risk_metrics.sharpe_ratios.last_30_days.toFixed(3),
        last_1_year: item.metrics.risk_metrics.sharpe_ratios.last_1_year.toFixed(3)
      }
    });

    io.emit('crypto', data);

  } catch (error) {
    console.error(error);
  }
};

const getDataCrypto = (io) => {
  requestData(io);
  setInterval(() => {
    requestData(io);
  }, 5000);
}

module.exports = {
  getDataCrypto
};