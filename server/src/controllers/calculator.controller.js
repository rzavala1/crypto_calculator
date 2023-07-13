const { getDataCryptoService } = require('../services/calculator.service');
const { readConfig } = require('../utils/ReadConfig');
let configAssets = [];
let configPercentage = [];

readConfig()
  .then((data) => {
    configAssets = data.map((item) => item.asset);
    configPercentage=data.map((item) => item.percentage);
  })
  .catch((error) => {
    console.error(error);
  });

  const getProfit =(investmentAmount,  monthlyGrowthRate, price) =>{
    console.info(investmentAmount,monthlyGrowthRate,price)
    const porcet=monthlyGrowthRate/100;
    console.info(porcet)
    const profitTotal=investmentAmount*porcet*12+Number(investmentAmount);
    //const profitTotal=((investmentAmount*(monthlyGrowthRate/100))*12)+investmentAmount;
    const buyInit=investmentAmount/price;
    const buyFinal=profitTotal/price;
    return {profitTotal,buyInit,buyFinal};
  }

const runGetDataCrypto = async (investmentAmount,res) => {
  try {
    const prices = await getDataCryptoService();
    const selectedCoins = prices.filter((item) => configAssets.includes(item.name));
    let i=0;
    const newData = selectedCoins.map((item) => {
      const profit=getProfit(investmentAmount,configPercentage[i], item.price);
      //const profit = (investmentAmount*item.price*(configPercentage[i]/100))*12;
      i++;
      return {
        ...item,
        profit,
      };
    });
    console.info(newData)
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
};

const getDataCrypto = (req, res) => {
  const investmentAmount = req.query.investment;
  runGetDataCrypto(investmentAmount, res);
};

module.exports = {
  getDataCrypto,
};
