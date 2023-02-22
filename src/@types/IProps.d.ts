import { item } from './data';

export interface IKeyWordButtonProps {
  keyword: string;
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
  type: string;
  replace?: boolean;
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
  readonly question: string;
  loginData: IloginDataProps;
  setLoginData: undefined | React.Dispatch<React.SetStateAction<IloginDataProps>>;
  readonly type: string;
  replace?: boolean;
  placeHolder?: string;
  value?: string;
  name: string;
}

export interface IlistItemProps {
  value: string;
  name: string;
}

export interface IvalueSavingProps {
  savingValue?: string;
  setSavingValue?: undefined | React.Dispatch<React.SetStateAction<string>>;
}
export interface IItemCardProps {
  item: item;
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

export interface IsortValueProps {
  toggle?: boolean;
  setToggle?: undefined | React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IbanksProps {
  bank?: bankProp;
  setBank?: undefined | React.Dispatch<React.SetStateAction<bankProps>>;
}
export interface IbankProps {
  bankProp: {
    title: string;
    value: string;
  };
}

export interface IloginResProps {
  success: boolean;
  code: number;
  message: string;
  data: IloginDataProps;
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
