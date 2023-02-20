import axios from 'axios';
import { useEffect, useState } from 'react';
import { item } from '../@types/data';

export const useProductData = (url: string) => {
  const [ress, setRess] = useState<item[]>();

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
