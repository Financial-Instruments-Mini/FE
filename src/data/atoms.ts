import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userInfoState = atom({
  key: 'userInfo',
  default: {
    email: '',
    phoneNumber: '',
    name: '',
    birthDate: '',
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
