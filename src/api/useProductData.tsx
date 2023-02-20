import axios from 'axios';
import { useEffect, useState } from 'react';
import { IDatasProps } from '../@types/IProps';

export const useProductData = (url: string) => {
  const [ress, setRess] = useState<IDatasProps[]>();

  useEffect(() => {
    try {
      axios.get(url).then(response => {
        setRess(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return { ress, setRess };
};
