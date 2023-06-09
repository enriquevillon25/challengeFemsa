import {renderHook} from '@testing-library/react-hooks';
import ProductService from '../services/ProductService';
import {useMovements} from './useMovements';

jest.mock('../services/ProductService');

describe('useMovements hook', () => {
  const mockProducts = [
    {id: 3, name: 'Title 1', points: 2000, is_redemption: false},
    {id: 4, name: 'Title 2', points: 4300, is_redemption: true},
    {id: 5, name: 'Title 3', points: 1000, is_redemption: false},
  ];
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should get values consume endpoint', async () => {
    (ProductService.getAllProducts as jest.Mock).mockResolvedValueOnce(
      mockProducts,
    );

    const {result, waitForNextUpdate} = renderHook(() => useMovements());
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.totalPoints).toBe(-1300);
  });

  it('Should filter products', async () => {
    (ProductService.getAllProducts as jest.Mock).mockResolvedValueOnce(
      mockProducts,
    );

    const {result, waitForNextUpdate} = renderHook(() => useMovements());

    await waitForNextUpdate();

    expect(result.current.showListProducts.all()).toEqual(mockProducts);
    expect(result.current.showListProducts.earn()).toEqual([
      mockProducts[0],
      mockProducts[2],
    ]);
    expect(result.current.showListProducts.redeemed()).toEqual([
      mockProducts[1],
    ]);
  });
});
