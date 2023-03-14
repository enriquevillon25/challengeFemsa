import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {BASE_URL} from '../api/Api';
import {Product} from '../interfaces/Product';
import ProductService from '../services/ProductService';
import {formatFirstMayusWord, formatGetMonth} from '../utils/Formats';

export const useMovements = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [typeProductsView, setTypeProductsView] = useState<
    'earn' | 'redeemed' | 'all'
  >('all');

  const calculateTotalPoints = useCallback((arr: Product[]) => {
    const newTotalPoints = arr.reduce((accumulated, current) => {
      const newPoints = current.is_redemption
        ? accumulated - current.points
        : accumulated + current.points;
      return newPoints;
    }, 0);
    setTotalPoints(newTotalPoints);
  }, []);

  const listProducts = async () => {
    setLoading(true);
    try {
      const response = await ProductService.getAllProducts();
      setProducts(response);
    } catch (error) {
      setError('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  const showListProducts = useMemo(
    () => ({
      earn: () => products.filter((product: Product) => !product.is_redemption),
      redeemed: () =>
        products.filter((product: Product) => product.is_redemption),
      all: () => products,
    }),
    [products],
  );

  useEffect(() => {
    listProducts();
  }, []);

  useEffect(() => {
    calculateTotalPoints(products);
  }, [products, calculateTotalPoints]);

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
