import axios, { AxiosError } from 'axios';

export const instance = axios.create({
  baseURL: 'http://13.124.15.174:8080/api/v1/',
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
