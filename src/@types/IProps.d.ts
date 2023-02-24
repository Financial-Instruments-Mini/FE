import { Keyword } from '../api/api';
import { item } from './data';

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
export interface ILittleTitleProps {
  title: string;
  move?: string;
}

export interface IRadioQProps {
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

export interface ISelectQProps {
  name: string;
  loginData: IloginDataProps;
  setLoginData: undefined | React.Dispatch<React.SetStateAction<IloginDataProps>>;
  replace: boolean;
  value: string;
  question: string;
}

export interface ITextQProps {
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
  product: item;
  setRess?: React.Dispatch<React.SetStateAction<item[]>>;
  ress?: item[];
  Token?: {
    [x: string]: any;
  };
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

// export interface bank {
//   title: string;
//   value: string;
// }

export interface IItemGalleryProps {
  productId?: number;
  maxRate?: number;
  productName: string;
  bankName: string;
  productType?: string;
  keyword?: string;
}

// export interface IloginResProps {
//   success: boolean;
//   code: number;
//   message: string;
//   data: IloginDataProps;
//   error?: [];
// }
// export interface IloginDataProps {
//   email: string;
//   password: string;
//   name: string;
//   phoneNumber: string;
//   birthDate: string;
//   productType: string;
//   job: string;
//   bankName: string;
//   accessToken: string;
// }
// export interface IloginGetProps {
//   url: string;
//   method: string;
//   body?: IemailProps;
// }

// export interface IemailProps {
//   email: string;
//   password: string;
// }

export interface IputLoginDataProps {
  token: string;
  password: string;
  phoneNumber: string;
  productType: string;
  job: string;
  bankName: string;
}

export interface ISearchKeywordsProps {
  children: React.ReactNode;
}
