/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import HeadTable from '../@molecules/HeadTable';

test('renders head crypto table with values', () => {
    const values=["Cryptomoneda", "Inversión USD", "Precio compra USD", "Cryptos compradas", "Proyección anual", "Proyección Cryptos"]
    const { getByText } = render(<HeadTable values={values} />);

    values.forEach(value => {
      const element = getByText(value);
      expect(element).toBeInTheDocument();
    });
});
