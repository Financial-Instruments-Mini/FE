import { atom, useRecoilState } from 'recoil';
import RadioQ from '../components/RadioQ';
import LittleTitle from '../components/LittleTitle';
import TestQ from '../components/TestQ';
import SelectQ from '../components/SelectQ';

const MyDetailPage = () => {
  const replace = atom({
    key: 'raplace',
    default: false,
  });
  const productCheck = atom({
    key: 'productCheck',
    default: [],
  });
  const productRadio = atom({
    key: 'productRadio',
    default: ['woman'],
  });

  const [reReplace, setReplace] = useRecoilState(replace);
  const [proCheck, setProCheck] = useRecoilState(productCheck);
  const [proRadio, setProRadio] = useRecoilState(productRadio);

  const submit = () => {
    setReplace(!reReplace);
  };

  return (
    <div>
      <LittleTitle title='나의 정보 보기' move='true' />
      <div className='bg-white m-7 rounded-xl shadow-xl '>
        <div className='p-10'>
          <TestQ question='이메일' value='aaa.aaver.com' type='text' id='1' />
          <TestQ question='비밀번호' value='****' type='password' id='2' reReplace={reReplace} />
          <TestQ question='이름' value='홍길동' type='text' id='3' />
          <RadioQ question='성별' value={proRadio} type='radio' />
          <TestQ question='생년월일' value='11110203' type='text' id='4' />
          <TestQ question='전화번호' value='555-6666-7777' type='text' id='5' reReplace={reReplace} />
          <RadioQ question='상품' value={proCheck} type='checkbox' reReplace={reReplace} />
          <SelectQ label='bank' name='주거래은행' value='nh' reReplace={reReplace} />
          <SelectQ label='job' name='직업' value='profession' reReplace={reReplace} />
        </div>
        <div>
          <button type='button' onClick={submit}>
            내 정보 수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDetailPage;
