import { IProtectedRouteProps } from '../@types/IProps';
import { useCookies } from 'react-cookie';
import { postRefreshToken } from './../api/api';
import { useSetRecoilState } from 'recoil';
import { isLogInState } from '../data/atoms';
import { userInfoState } from './../data/atoms';

const DetailProtectedRoute = ({ children, home = false }: IProtectedRouteProps) => {
  const setIsLogIn = useSetRecoilState(isLogInState);
  const setUserInfo = useSetRecoilState(userInfoState);
  const [token, setToken] = useCookies();

  if (!token.accessToken && !token.refreshToken && home) {
    setIsLogIn(false);
    setUserInfo({
      email: '',
      phoneNumber: 0,
      name: '',
      birthDate: 0,
      productType: '',
      job: '',
      bankName: '',
    });
    return children;
  }

  if (!token.accessToken && token.refreshToken) {
    postRefreshToken(token.refreshToken).then(res => {
      setToken('accessToken', res.data.accessToken, { maxAge: 60 * 30 });
      setToken('refreshToken', res.data.refreshToken, { maxAge: 60 * 60 * 24 * 14 });
    });
    return children;
  }
  return children;
};

export default DetailProtectedRoute;
