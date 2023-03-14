import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {StackNavigation} from './Navigation';

describe('Test Navigation', () => {
  it('Should redirect navigator', async () => {
    const {getByText, container} = render(
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>,
    );
  });
});
