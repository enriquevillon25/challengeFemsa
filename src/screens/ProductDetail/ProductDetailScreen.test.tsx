import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react-native';
import {ProductDetailScreen} from './ProductDetailScreen';

describe('Test Product Detail Screen', () => {
  let component: RenderResult;
  const onEventMock = jest.fn();
  beforeEach(() => {
    component = render(<ProductDetailScreen navigation="" route="" />);
  });
  it('Render Product Detail', () => {});
});
