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

export interface IlistItemProps {
  value: string;
  name: string;
}

export interface IinterestProps {
  id: number;
  dueDate: string;
  rate: number;
}

export interface IDatasProps {
  bankName: string;
  content: string;
  id: number;
  interestList: IinterestProps[];
  job: string;
  joinWay: string;
  keyword: string;
  productMakeDay: string;
  productName: string;
  productType: string;
}

export interface IvalueSavingProps {
  savingValue?: string;
  setSavingValue?: undefined | React.Dispatch<React.SetStateAction<string>>;
}
export interface IItemCardProps {
  item: IDatasProps;
  setRess?: undefined | React.Dispatch<React.SetStateAction<IDatasProps[] | undefined>>;
  ress?: IDatasProps[];
}

export interface IServeyCardProps {
  title: string;
  contents: string[];
  order: number;
  setVisible: Dispatch<SetStateAction<number>>;
  serveyData: string[];
  setServeyData: Dispatch<SetStateAction<string[]>>;
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
