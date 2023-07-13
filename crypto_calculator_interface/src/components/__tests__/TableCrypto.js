/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render } from '@testing-library/react';
import TableCrypto from '../@molecules/TableCrypto';

describe('TableCrypto', () => {
  it('renders table columns and rows correctly', () => {
    const data = [
      {
        name: 'Bitcoin',
        price_usd: 35000,
        percent_change_usd_last_1_hour: 1.5,
        percent_change_usd_last_24_hours: -2.3,
        current_marketcap_usd: 1000000000,
        real_volume_last_24_hours: 5000000,
        percent_change_last_1_week: 5.2,
        percent_change_last_1_month: -3.7,
        percent_change_last_1_year: 20.1,
      }
    ];

    const { container } = render(<TableCrypto />);

    const headers = container.querySelectorAll('thead tr th');
    expect(headers).toHaveLength(10);
    expect(headers[0]).toHaveTextContent('ASSET');
    expect(headers[1]).toHaveTextContent('Price (USD)');
    expect(headers[2]).toHaveTextContent('CHANGE VS USD (1H)');
    expect(headers[3]).toHaveTextContent('CHANGE VS USD (24H)');
    expect(headers[5]).toHaveTextContent('REPORTED MARKETCAP');
    expect(headers[6]).toHaveTextContent('REAL VOLUME (24H)');
    expect(headers[7]).toHaveTextContent('CHANGE VS USD (7D)');
    expect(headers[8]).toHaveTextContent('CHANGE VS USD (30D)');
    expect(headers[9]).toHaveTextContent('CHANGE VS USD(YTD)');


    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(data.length-1);

    rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll('td');
      expect(cells).toHaveLength(11);
      expect(cells[0].querySelector('img')).toBeInTheDocument();
      expect(cells[1]).toHaveTextContent('$35000');
      expect(cells[2]).toHaveTextContent('1.5');
      expect(cells[3]).toHaveTextContent('-2.3');
      expect(cells[5]).toHaveTextContent('1000000000');
      expect(cells[6]).toHaveTextContent('5000000');
      expect(cells[7]).toHaveTextContent('5000000');
      expect(cells[8]).toHaveTextContent('-3.7');
      expect(cells[8]).toHaveTextContent('20.1');

    });
  });
});
