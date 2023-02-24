import { boolean, string } from 'yup';
import { Keyword } from '../api/api';
import { item, Product } from './data';

export interface IKeyWordButtonProps {
  keyword: keyof typeof Keyword;
  selectedKeyword: keyof typeof Keyword;
  setSelectedKeyword: React.Dispatch<React.SetStateAction<keyof typeof Keyword>>;
}

export interface IButtonProps {
  text: string;
  select?: boolean;
  page?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface ISubtitleProps {
  title: string;
  move?: string;
}

export interface IQuestProps {
  question: string;
  loginData: IloginDataProps;
  setLoginData: undefined | React.Dispatch<React.SetStateAction<IloginDataProps>>;
  replace: boolean;
  value: string;
}

export interface IItemProps {
  id: string;
  title: string;
  name: string;
}

export interface ISelectQuestProps {
  name: string;
  loginData: IloginDataProps;
  setLoginData: undefined | React.Dispatch<React.SetStateAction<IloginDataProps>>;
  replace: boolean;
  value: string;
  question: string;
}

export interface ITextQuestProps {
  question?: string;
  loginData?: IloginDataProps;
  setLoginData?: undefined | React.Dispatch<React.SetStateAction<IloginDataProps>>;
  type?: string;
  replace?: boolean;
  placeHolder?: string;
  value?: string;
  name?: string;
}

export interface IListItemProps {
  value: string;
  name: string;
}

export interface ISavingButtonsProps {
  savingValue: string;
  setSavingValue: React.Dispatch<React.SetStateAction<string>>;
}
export interface IItemCardProps {
  product: Product;
  setRess?: undefined | React.Dispatch<React.SetStateAction<item[]>>;
  ress?: item[];
}

export interface ISurveyCardProps {
  title: string;
  contents: string[];
  order: number;
  setVisible: Dispatch<SetStateAction<number>>;
  surveyData: string[];
  setSurveyData: Dispatch<SetStateAction<string[]>>;
}

export interface IHeaderProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

export interface IModalProps {
  onCloseModal: () => void;
  children: React.ReactNode;
}

export interface IConfirmModalProps {
  onConfirm: () => void;
  onCloseModal: () => void;
  buttonText?: { confirm: string; cancel: string };
  children: React.ReactNode;
}

export interface IToggleButtonProps {
  toggle?: boolean;
  setToggle?: undefined | React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDropDownProps {
  bank?: bank;
  setBank?: undefined | React.Dispatch<React.SetStateAction<bank>>;
}

export interface bank {
  title: string;
  value: string;
}

export interface IItemGalleryProps {
  productId?: number;
  maxRate?: number;
  productName: string;
  bankName: string;
  productType?: string;
  keyword?: string;
}

export interface IloginResProps {
  success: boolean;
  code: number;
  message: string;
  data: IloginDataProps;
  error?: [];
}
export interface IloginDataProps {
  memberId: number;
  tokenDto: ItokenProps;
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  birthDate: string;
  productType: string;
  job: string;
  bankName: string;
}
export interface ItokenProps {
  accessToken: string;
  refreshToken: string;
  accessStartTime: string;
  accessExpirationTime: string;
}
export interface IloginGetProps {
  url: string;
  method: string;
  body?: IemailProps;
}

export interface IemailProps {
  email: string;
  password: string;
}

export interface IloginPushProps {
  url: string;
  method: string;
  token: string;
  body: IloginPushBodyProps;
}

export interface IloginPushResProps {
  success: boolean;
  code: number;
  message: string;
  data: IloginDataProps;
  error?: [];
}

export interface IloginPushBodyProps {
  password: string;
  phoneNumber: string;
  productType: string;
  job: string;
  bankName: string;
}

export interface ISearchKeywordsProps {
  children: React.ReactNode;
}

export interface ISlideContentProps {
  products: ProductDetails[];
  page: number;
}

export interface ISearchBoxProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  bank: {
    title: string;
    value: string;
  };
  setBank: React.Dispatch<React.SetStateAction<bank>>;
  savingValue: string;
  setSavingValue: React.Dispatch<React.SetStateAction<string>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
