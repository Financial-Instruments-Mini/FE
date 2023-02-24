import React from 'react';
import { ISearchKeywordsProps } from '../../@types/IProps';

const SearchKeywords = ({ children }: ISearchKeywordsProps) => {
  return (
    <div className='flex flex-col gap-3 bg-main-blue bg-opacity-10 p-4 rounded-2xl'>
      <h3 className='font-bold mb-1'>추천 검색어</h3>
      <ul className='flex flex-wrap gap-2 text-main-blue text-xs'>{children}</ul>
    </div>
  );
};

export default SearchKeywords;
