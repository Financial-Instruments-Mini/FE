import axios from 'axios';
import { AllProductsResponse } from '../@types/data';

const instance = axios.create({
  baseURL: 'http://13.124.15.174:8080/api/v1/',
});

export const getAllProducts = async (page = 0): Promise<AllProductsResponse> => {
  const response = await instance.get('/products', {
    params: {
      page,
      sort: 'last',
    },
  });
  return response.data.data;
};
