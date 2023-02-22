import axios, { AxiosError } from 'axios';

interface TokenData {
  accessToken: string;
  refreshToken: string;
  accessStartTime: string;
  accessExpirationTime: string;
}

interface LoginData {
  memberId: number;
  tokenDto: TokenData;
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  birthDate: string;
  productType: string;
  job: string;
  bankName: string;
}

interface LoginResponse {
  success: boolean;
  code: number;
  message: string;
  data?: LoginData;
  errors?: Error[];
}

export const instance = axios.create({
  baseURL: 'http://13.124.15.174:8080/api/v1/',
});

export const logIn = async (email: string, password: string): Promise<any> => {
  try {
    const response = await instance.post(`auth/login`, {
      email,
      password,
    });
    // const data = response.data.data;
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    return response?.data;
  }
};
