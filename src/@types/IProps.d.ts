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
  value: string[];
  type: string;
  replace?: boolean;
}

export interface IItemProps {
  id: string;
  title: string;
  name: string;
}

export interface ISelectQuestProps {
  label: string;
  name: string;
  value: string;
  replace: boolean;
}

export interface ITextQuestProps {
  readonly question: string;
  value: string;
  readonly type: string;
  replace?: boolean;
  placeHolder?: string;
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
  setRess?: undefined | React.Dispatch<React.SetStateAction<item[] | undefined>>;
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

export interface ISelectState {
  content: string;
  isSelect: boolean;
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
  birthDay: number;
  phoneNumber: number;
  agree: boolean;
}

export interface IToggleButtonProps {
  toggle?: boolean;
  setToggle?: undefined | React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDropDownProps {
  bank?: bank;
  setBank?: undefined | React.Dispatch<React.SetStateAction<bankProps>>;
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
