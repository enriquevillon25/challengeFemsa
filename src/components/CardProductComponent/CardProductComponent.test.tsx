import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react-native';

import React from 'react';
import {CardProductComponent} from './CardProductComponent';

let component: RenderResult;
const onEventMock = jest.fn();

describe('Test Card Product Component', () => {
  beforeEach(() => {
    component = render(
      <CardProductComponent
        name={'Rustic Rubber Bacon'}
        image={'https://loremflickr.com/640/480/business'}
        createdAt={'09102022'}
        isRedemption={false}
        points={1000}
        onPress={onEventMock}
      />,
    );
  });
  it('Render Card Product', () => {
    expect(component).toBeDefined();
  });

  it('Should send button component', () => {
    const button = screen.getByRole('button');
    fireEvent(button, 'press');
    expect(onEventMock).toHaveBeenCalledTimes(1);
  });
});
