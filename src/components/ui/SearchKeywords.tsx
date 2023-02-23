import React from 'react';
import { ISearchKeywordsProps } from '../../@types/IProps';

const SearchKeywords = ({ children }: ISearchKeywordsProps) => {
  return <ul className='flex flex-wrap gap-2 text-main-blue text-xs'>{children}</ul>;
};

export default SearchKeywords;
