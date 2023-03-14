import axios from 'axios';
import {BASE_URL} from './../api/Api';
import {Product} from '../interfaces/Product';

interface ProductService {
  getAllProducts(): Promise<Product[]>;
}

class ApiProductService implements ProductService {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error();
    }
  }
}

export default new ApiProductService();
