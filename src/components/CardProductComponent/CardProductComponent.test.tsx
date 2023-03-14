import {render, RenderAPI, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {CardProductComponent} from './CardProductComponent';

describe('CardProductComponent', () => {
  let component: RenderAPI;
  const onEventMock = jest.fn();

  beforeEach(() => {
    component = render(
      <CardProductComponent
        image="https://loremflickr.com/640/480/city"
        name="Product Name"
        createdAt="2022-03-14T11:22:33.456Z"
        isRedemption={false}
        points={10}
        onPress={onEventMock}
      />,
    );
  });

  it('should render the product image', () => {
    const image = component.getByTestId('product-image');
    expect(image.props.source.uri).toEqual(
      'https://loremflickr.com/640/480/city',
    );
  });

  it('should correct format date created at', () => {
    const date = component.getByTestId('product-created-at');
    expect(date.props.children).toEqual('14 de marzo, 2022');
  });

  it('should onPress button', () => {
    const container = component.getByTestId('product-card');
    fireEvent.press(container);
    expect(onEventMock).toHaveBeenCalled();
  });
});
