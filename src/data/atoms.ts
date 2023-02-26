import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IUserInfo } from '../@types/data';

const { persistAtom } = recoilPersist();

export const userInfoState = atom<IUserInfo>({
  key: 'userInfo',
  default: {
    email: '',
    phoneNumber: 0,
    name: '',
    birthDate: 0,
    productType: '',
    job: '',
    bankName: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const isLogInState = atom({
  key: 'login',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
