/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalculatorFields from '../@molecules/CalculatorFields';

test('calls onCalculate with correct investment value on button click', () => {
  const mockOnCalculate = jest.fn();
  const { getByText, getByLabelText } = render(<CalculatorFields onCalculate={mockOnCalculate} />);
  const input = getByLabelText('Inversión');
  const button = getByText('Calcular');
  
  fireEvent.change(input, { target: { value: '500' } });
  fireEvent.click(button);
  
  expect(mockOnCalculate).toHaveBeenCalledWith('500');
});
