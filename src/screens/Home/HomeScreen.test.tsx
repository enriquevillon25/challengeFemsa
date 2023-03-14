import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {HomeScreen} from './HomeScreen';
import {expect} from '@jest/globals';

describe('Test Home Screen', () => {
  let component;
  const onEventMock = jest.fn();

  beforeEach(() => {
    component = render(<HomeScreen navigation={''} />);
  });
  it('Should render title principle', () => {
    expect(component).toBeDefined();
  });
  it('Should render title principle', () => {
    expect(component.getByText('Bienvenido de vuelta!')).toBeTruthy();
  });
  it('Should render Name ', () => {
    const fullName = 'Ruben Rodriguez';
    const name = component.getByText(fullName);
    expect(name).toBeDefined();
  });
  it('Should render text Movements ', () => {
    const movements = 'TUS MOVIMIENTOS';
    const title = component.getByText(movements);
    expect(title).toBeDefined();
  });
});
