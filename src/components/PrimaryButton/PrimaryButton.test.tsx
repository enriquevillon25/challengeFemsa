import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react-native';

import React from 'react';
import {PrimaryButton} from './PrimaryButton';

let component: RenderResult;
const onEventMock = jest.fn();

describe('Test Card Product Component', () => {
  beforeEach(() => {
    component = render(
      <PrimaryButton title={'Aceptar'} width={'100%'} onPress={onEventMock} />,
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
