import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react-native';

import React from 'react';
import {PrimaryButtonComponent} from './PrimaryButtonComponent';

let component: RenderResult;
const onEventMock = jest.fn();

describe('Test rimary button component', () => {
  beforeEach(() => {
    component = render(
      <PrimaryButtonComponent
        title={'Aceptar'}
        width={'100%'}
        onPress={onEventMock}
      />,
    );
  });
  it('Render primary button', () => {
    expect(component).toBeDefined();
  });

  it('Should send button component', () => {
    const button = screen.getByRole('button');
    fireEvent(button, 'press');
    expect(onEventMock).toHaveBeenCalledTimes(1);
  });
});
