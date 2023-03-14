import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ProductDetailScreen} from './ProductDetailScreen';

describe('Test in ProductDetailScreen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  let component;
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
  beforeEach(() => {
    component = render(
      <ProductDetailScreen navigation={mockNavigation} route={mockRoute} />,
    );
  });
  it('Render correct produt detail', () => {
    expect(component.getByTestId('ProductDetailScreen')).toBeDefined();
  });

  it('Shoul to home screen on button press', () => {
    const button = component.getByText('Aceptar');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });

  it('Should show correct product points information', () => {
    expect(component.getByText('Detalles del producto')).toBeDefined();
    expect(component.getByText('1000 puntos')).toBeDefined();
  });
});
