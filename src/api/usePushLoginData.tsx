import axios from 'axios';
import { useEffect, useState } from 'react';
import { IloginPushProps, IloginPushResProps } from '../@types/IProps';

export const usePushLoginData = (args: IloginPushProps) => {
  const [pushLogin, setPushLogin] = useState<IloginPushResProps>();
  const url = args.url;
  const option = {
    method: args.method,
    data: args.body,
    headers: {
      Authorization: `Bearer ${args.token}`,
    },
  };

  useEffect(() => {
    // console.log(args);
    try {
      axios(url, option).then(response => {
        setPushLogin(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [option, url]);

  return { pushLogin };
};
