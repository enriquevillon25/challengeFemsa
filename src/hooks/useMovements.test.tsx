import {act} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-native';
import {useMovements} from './useMovements';

describe('Test in useMovements', () => {
  it('Should get total points', () => {
    const {result} = renderHook(() => useMovements);
    act(() => {
      expect(result.current).toBeTruthy();
    });
  });
});
