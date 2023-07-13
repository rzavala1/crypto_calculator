const getDataCryptoService = require('../src/services/calculator.service');
const readConfig = require('../src/utils/ReadConfig');
const { runGetDataCrypto } = require('../src/controllers/calculator.controller');

describe('runGetDataCrypto', () => {
  let mockGetDataCryptoService;
  let mockReadConfig;
  let mockResponse;
  let mockJson;
  let mockStatus;
  let mockQuery;

  beforeEach(() => {
    mockGetDataCryptoService = jasmine.createSpy().and.returnValue(Promise.resolve([
      { symbol: 'BTC', price: 50000 },
      { symbol: 'ETH', price: 2000 },
    ]));

    mockReadConfig = jasmine.createSpy().and.returnValue(Promise.resolve([
      { asset: 'BTC', percentage: 50 },
      { asset: 'ETH', percentage: 50 },
    ]));

    mockJson = jasmine.createSpy();
    mockStatus = jasmine.createSpy().and.returnValue({ json: mockJson });
    mockResponse = { json: mockJson, status: mockStatus };

    mockQuery = { investment: 1000 };
  });

  it('should fetch data and calculate profit correctly', async () => {
    spyOn(global, 'parseFloat').and.callFake(parseFloat);
    spyOn(global, 'console').and.callFake({ error: jasmine.createSpy() });

    const expectedData = [
      {
        symbol: 'BTC',
        price: 50000,
        profit: {
          profitTotal: 1000 * (50 / 100) * 12 + parseFloat(1000),
          buyInit: 1000 / 50000,
          buyFinal: (1000 * (50 / 100) * 12 + parseFloat(1000)) / 50000,
        },
      },
      {
        symbol: 'ETH',
        price: 2000,
        profit: {
          profitTotal: 1000 * (50 / 100) * 12 + parseFloat(1000),
          buyInit: 1000 / 2000,
          buyFinal: (1000 * (50 / 100) * 12 + parseFloat(1000)) / 2000,
        },
      },
    ];

    await runGetDataCrypto(mockQuery.investment, mockResponse);

    expect(mockReadConfig).toHaveBeenCalled();
    expect(mockGetDataCryptoService).toHaveBeenCalled();
    expect(mockJson).toHaveBeenCalledWith(expectedData);
    expect(mockStatus).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
  });

  it('should handle error when fetching data', async () => {
    spyOn(global.console, 'error').and.callFake(() => {}); 

    mockGetDataCryptoService.and.returnValue(Promise.reject(new Error('Failed to fetch prices')));

    await runGetDataCrypto(mockQuery.investment, mockResponse);

    expect(mockReadConfig).toHaveBeenCalled();
    expect(mockGetDataCryptoService).toHaveBeenCalled();
    expect(mockStatus).toHaveBeenCalledWith(500);
    expect(mockJson).toHaveBeenCalledWith({ error: 'Failed to fetch prices' });
    expect(console.error).toHaveBeenCalledWith(new Error('Failed to fetch prices'));
  });
});
