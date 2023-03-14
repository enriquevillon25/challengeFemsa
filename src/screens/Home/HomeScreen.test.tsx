import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {HomeScreen} from './HomeScreen';

describe('Test Home Screen', () => {
  let component;
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
});
