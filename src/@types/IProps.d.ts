import { item } from './data';

export interface IKeyWordButtonProps {
  keyword: string;
}

export interface IButtonProps {
  text: string;
  select?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

export interface valueSaving {
  savingValue?: string;
  setSavingValue?: undefined | React.Dispatch<React.SetStateAction<string>>;
}
export interface IItemCardProps {
  item: item;
}

export interface IHeaderProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}
