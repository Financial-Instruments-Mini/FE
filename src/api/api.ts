import axios, { AxiosError } from 'axios';
import { ProductsResponse, ISearchForm } from '../@types/data';

export enum Keyword {
  '전체' = '',
  '주거래 우대' = 'MAIN_BANK',
  '청년 우대' = 'YOUTH_PREFERENTIAL_TREATMENT',
  '주택 청약' = 'HOUSING_SUBSCRIPTION',
  '노후 준비' = 'PREPARING_FOR_OLD_AGE',
}

export const instance = axios.create({
  baseURL: 'https://www.ticcle.store:8080/api/v1',
});

export const logIn = async (email: string, password: string): Promise<any> => {
  try {
    const response = await instance.post(`auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response?.data;
  }
};

export const getAllProducts = async (page = 0): Promise<ProductsResponse> => {
  const response = await instance.get('/products', {
    params: {
      page,
      sort: 'last',
    },
  });
  return response.data.data;
};

export const getKeywordProducts = async (keyword: keyof typeof Keyword) => {
  const response = await instance.get(`/keyword/${Keyword[`${keyword}`]}`);
  return response.data.data;
};

export const getSearchResult = async ({ input, toggle }: ISearchForm) => {
  if (input === '') return [];
  const sort = toggle ? 'interest' : 'last';
  const response = await instance.get(`/products/search?`, {
    params: {
      search: input,
      sort,
    },
  });
  return response.data.data;
};

export const getRecommendProducts = async (accessToken: string): Promise<ProductsResponse | undefined> => {
  try {
    const response = await instance.get('/member/recommend', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
