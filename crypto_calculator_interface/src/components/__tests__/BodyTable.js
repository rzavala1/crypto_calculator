/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import BodyTable from '../@molecules/BodyTable';

test('renders the table body with correct data', () => {
    const data = [
        {
            name: 'Bitcoin',
            price: 30000,
            profit: {
                buyInit: 0.01,
                profitTotal: 1000,
                buyFinal: 0.02
            }
        }
    ];
    const investment = 100;

    const { getByAltText, getByText } = render(
        <BodyTable data={data} investment={investment} />
    );

    const bitcoinImage = getByAltText('Bitcoin');
    expect(bitcoinImage).toBeInTheDocument();

    const bitcoinName = getByText('Bitcoin');
    const investmentAmount = getByText('$100');
    const bitcoinPrice = getByText('$30000.000');
    const bitcoinBuyInit = getByText('0.0100');
    const bitcoinProfitTotal = getByText('$1000.000');
    const bitcoinBuyFinal = getByText('0.0200');

    expect(bitcoinName).toBeInTheDocument();
    expect(investmentAmount).toBeInTheDocument();
    expect(bitcoinPrice).toBeInTheDocument();
    expect(bitcoinBuyInit).toBeInTheDocument();
    expect(bitcoinProfitTotal).toBeInTheDocument();
    expect(bitcoinBuyFinal).toBeInTheDocument();
});
