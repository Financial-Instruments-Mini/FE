import axios from 'axios';
import { useEffect, useState } from 'react';
import { IloginGetProps, IloginResProps } from '../@types/IProps';

export const useLoginApi = (args: IloginGetProps) => {
  const [loginData, setLoginData] = useState<IloginResProps>();
  const url = args.url;
  const option = {
    method: args.method,
    data: args.body,
  };

  useEffect(() => {
    try {
      axios(url, option).then(response => {
        setLoginData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { loginData };
};
