import axios, { AxiosError } from 'axios';
import { IputLoginDataProps } from '../@types/IProps';
import { ProductsResponse, ISearchForm, BookmarkProducts } from '../@types/data';
import { BankName, Job, Keyword, ProductType } from '../@types/enum.d';
import { ISignUpPayload, IEditMemberInfo, ProductDetails } from './../@types/data.d';

export const instance = axios.create({
  baseURL: 'https://www.ticcle.store/api/v1',
});

export const logIn = async (email: string, password: string): Promise<any> => {
  try {
    const response = await instance.post(`/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    const { response } = error as unknown as AxiosError;
    return response?.data;
  }
};

export const signUp = async (payload: ISignUpPayload): Promise<any> => {
  const { email, password, name, phoneNumber, birthDate } = payload;
  try {
    const response = await instance.post(`/auth/signup`, {
      email,
      password,
      name,
      phoneNumber,
      birthDate,
    });
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response?.data;
  }
};

export const putSurveyInfo = async (
  { productType, job, bankName }: IEditMemberInfo,
  accessToken: string,
): Promise<any> => {
  try {
    console.log({
      productType: ProductType[`${productType}`],
      job: Job[`${job}`],
      bankName: BankName[`${bankName}`],
    });
    const response = await instance.put(
      `/member`,
      {
        productType: ProductType[`${productType}`],
        job: Job[`${job}`],
        bankName: BankName[`${bankName}`],
      },
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    console.log(response);
    return response;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response;
  }
};

export const postRefreshToken = async (refreshToken: string): Promise<any> => {
  try {
    const response = await instance.post(`/auth/refresh`, {
      refreshToken,
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

export const putLoginData = async ({
  token,
  password,
  phoneNumber,
  productType,
  job,
  bankName,
}: IputLoginDataProps): Promise<any> => {
  try {
    const response = await instance.put(
      '/member',
      {
        password: password,
        phoneNumber: phoneNumber,
        productType: productType,
        job: job,
        bankName: bankName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log({
      token,
      password,
      phoneNumber,
      productType,
      job,
      bankName,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    console.log({
      token,
      password,
      phoneNumber,
      productType,
      job,
      bankName,
    });
  }
};

export const getApplyItemData = async (token: string): Promise<any> => {
  try {
    const response = await instance.get('/apply', { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = async (id: number): Promise<ProductDetails | undefined> => {
  try {
    const response = await instance.get(`products/ + ${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBookmarkProducts = async (accessToken: string): Promise<BookmarkProducts[] | undefined> => {
  try {
    const response = await instance.get('/bookmarks/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data.content;
  } catch (error) {
    console.log(error);
  }
};

export const requestAddBookmark = async (
  accessToken: string,
  productId: number,
  interestId: number,
): Promise<boolean> => {
  try {
    const res = await instance.post(
      '/bookmarks/',
      {
        productId,
        interestId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(res);
    if (res.data === 'success') return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestDeleteBookmark = async (accessToken: string, productId: number): Promise<boolean> => {
  console.log(productId);
  try {
    const res = await instance.delete(`/bookmarks/${productId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.data === 'success') return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestDeleteBookmarkAll = async (accessToken: string): Promise<boolean> => {
  try {
    const res = await instance.delete('/bookmarks', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.data === 'success') return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const requestApplyProduct = async (
  accessToken: string,
  productId: number,
  interestId: number,
): Promise<boolean> => {
  try {
    const res = await instance.post(
      '/apply',
      {
        productId,
        interestId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (res.data === 'success') return true;
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getLoginData = async (accessToken: string): Promise<any> => {
  try {
    const response = await instance.get('/member', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartData = async (accessToken: string, applyId: number) => {
  try {
    const response = await instance.delete(`/apply/${applyId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
