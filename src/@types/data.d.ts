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
