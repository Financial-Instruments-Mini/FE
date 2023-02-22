export interface item {
  id: number;
  productType: string;
  bankName: string;
  productName: string;
  joinWay: string;
  content: string;
  job: string;
  productMakeDay?: string | null;
  keyword?: string | null;
  interestList: InterestList[];
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
  maxRate: number;
  productName: string;
  bankName: string;
  productType: string;
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
