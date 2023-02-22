import axios from 'axios';
import { useEffect, useState } from 'react';
import { IloginGetProps, IloginResProps } from '../@types/IProps';
import { useLoginApi } from './useLoginApi';

export const useGetLoginDataApi = (args: IloginGetProps) => {
  const { loginData } = useLoginApi({
    url: 'http://13.124.15.174:8080/api/v1/auth/login',
    method: 'POST',
    body: {
      email: 'a@naver.com',
      password: 'abc1234@',
    },
  });

  // console.log(loginData?.data);

  const [getLoginData, setGetLoginData] = useState<IloginResProps>();
  const [accToken, setAccToken] = useState(loginData?.data);
  const url = args.url;

  // console.log(accToken);

  useEffect(() => {
    setAccToken(loginData?.data);
  }, [loginData?.data]);

  useEffect(() => {
    try {
      axios(url, {
        method: args.method,
        headers: {
          Authorization: `Bearer ${accToken?.tokenDto.accessToken}`,
        },
      }).then(response => {
        setGetLoginData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  });

  // console.log(accToken, getLoginData);

  return { getLoginData };
};
