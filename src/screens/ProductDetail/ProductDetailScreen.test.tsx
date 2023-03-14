import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductDetailScreen} from './ProductDetailScreen';

describe('Test in ProductDetailScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  const mockRoute = {
    params: {
      item: {
        image: 'https://loremflickr.com/640/480/city',
        createdAt: '2022-01-01T00:00:00.000Z',
        is_redemption: false,
        points: 1000,
      },
    },
  };
  it('Render corrent produ', () => {
    const {getByTestId} = render(
      <ProductDetailScreen navigation={mockNavigation} route={mockRoute} />,
    );
    expect(getByTestId('ProductDetailScreen')).toBeDefined();
  });

  it('Shoul to home screen on button press', () => {
    const {getByText} = render(
      <ProductDetailScreen navigation={mockNavigation} route={mockRoute} />,
    );
    const button = getByText('Aceptar');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });

  it('Should show correct product points information', () => {
    const {getByText} = render(
      <ProductDetailScreen navigation={mockNavigation} route={mockRoute} />,
    );
    expect(getByText('Detalles del producto')).toBeDefined();
    expect(getByText('1000 puntos')).toBeDefined();
  });
});
