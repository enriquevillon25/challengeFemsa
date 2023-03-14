import axios from 'axios';
import {BASE_URL} from './../api/Api';
import {Product} from '../interfaces/Product';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
