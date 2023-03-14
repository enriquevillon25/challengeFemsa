import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {BASE_URL} from '../api/Api';
import {Product} from '../interfaces/Product';
import {getAllProducts} from '../services/ProductService';
import {formatFirstMayusWord, formatGetMonth} from '../utils/Formats';

export const useMovements = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const [typeProductsView, setTypeProductsView] = useState<
    'earn' | 'redeemed' | 'all'
  >('all');

  const reduceTotalPoints = (arr: Product[]) =>
    arr.reduce((accumulated: any, current: any) => ({
      ...accumulated,
      points: current.is_redemption
        ? accumulated.points - current.points
        : accumulated.points + current.points,
    })).points;

  const listProducts = async () => {
    setLoading(true);
    const response = await getAllProducts();
    setProducts(response);
    setTotalPoints(reduceTotalPoints(response));
    setLoading(false);
  };

  const showListProducts = {
    earn: () => products.filter((product: Product) => !product.is_redemption),
    redeemed: () =>
      products.filter((product: Product) => product.is_redemption),
    all: () => products,
  };

  useEffect(() => {
    listProducts();
  }, []);

  return {
    products,
    setProducts,
    totalPoints,
    currentMonth: formatFirstMayusWord(formatGetMonth()),
    showListProducts,
    typeProductsView,
    setTypeProductsView,
    loading,
    listProducts,
  };
};
