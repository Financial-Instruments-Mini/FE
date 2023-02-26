import { BankName, Job, ProductType } from './enum';

export interface item {
  id?: number;
  productType: string;
  bankName: string;
  productName: string;
  joinWay?: string;
  content?: string;
  job?: string;
  productMakeDay?: string | null;
  keyword?: string | null;
  interestList?: InterestList[];
  productId?: number;
  maxLimit?: number | null;
  minimumAmount?: number | null;
  dueDate?: number;
  rate?: number;
  maxRate?: number;
}

interface InterestList {
  id: number;
  dueDate: string;
  rate: number;
}

export interface ProductsResponse {
  content: Product[];
  pageable: Pageable;
  number: number;
  sort: Sort;
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface Product {
  productId?: number;
  maxRate?: number;
  productName: string;
  bankName: string;
  productType: string;
  rate?: number;
  maxLimit?: number;
  minimumAmount?: number;
}

export interface ProductDetails {
  id: number;
  productType: string;
  bankName: string;
  productName: string;
  joinWay: string;
  content: string;
  job: string;
  productMakeDay?: string | null;
  keyword?: string | null;
  interests: Array;
  maxLimit: number | null;
  minimumAmount: number | null;
}

export interface BookmarkProducts {
  id: number;
  productId: number;
  bankName: string;
  productType: string;
  productName: string;
  dueDate: number;
  rate: number;
  id: number;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface keywordProduct {
  proId: number;
  productName: string;
  maxLimit?: number;
  bankName: string;
  minimumAmount?: number;
  maxRate: number;
}

export interface ISearchForm {
  input: string;
  toggle?: boolean;
}

export interface ISelectState {
  content: string;
  isSelect: boolean;
  type: string;
}

export interface IToTalSelectState {
  content: string;
  type: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  gender: string;
  birthDate: number;
  phoneNumber: number;
  agree: boolean;
}

export interface ISignUpPayload {
  email: string;
  password: string;
  name: string;
  phoneNumber: number;
  birthDate: number;
}

export interface IEditMemberInfo {
  password?: string;
  phoneNumber?: string;
  productType: keyof typeof ProductType;
  job: keyof typeof Job;
  bankName: keyof typeof BankName;
}
