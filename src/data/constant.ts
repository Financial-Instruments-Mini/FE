import banner_1 from '../assets/images/banner_img_1.jpg';
import banner_2 from '../assets/images/banner_img_2.jpg';
import banner_3 from '../assets/images/banner_img_3.jpg';

export const options = [
  {
    title: '어떤 종류의 /상품/을 원하시나요?',
    contents: ['예금', '적금'],
  },
  {
    title: '/주거래 은행/은 어떻게 되시나요?',
    contents: ['우리은행', '국민은행', '신한은행', '하나은행'],
  },
  {
    title: '/직업/은 어떻게 되시나요?',
    contents: [
      '직장인',
      '공무원',
      '전문직',
      '농축수산업 종사자',
      '개인사업자/자영업자',
      '자유직/프리랜서',
      '전업주부',
      '학생',
      '군인',
      '무직',
    ],
  },
];

export const boxVars = {
  initial: {
    x: 800,
    opacity: 0,
    scale: 0,
    display: 'none',
    transition: {
      duration: 1,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: -800,
    opacity: 0,
    scale: 0,
    display: 'none',
    transition: {
      duration: 1,
    },
  },
};

// 검색페이지 추천검색어
export const searchKeywords: string[] = ['목돈', '직장인', '사업', '내맘대로', '여행', '정기', '적립식'];

// 홈화면 슬라이드 관련
export const slideVars = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 350 : -350,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 350 : -350,
    };
  },
};

export const slideImgColor = [
  { img: banner_1, bgColor: 'bg-[#C5D6F4]' },
  { img: banner_2, bgColor: 'bg-[#F9EFF0]' },
  { img: banner_3, bgColor: 'bg-[#BCA1E4]' },
];

export const slideProducts = [
  {
    id: 1,
    productType: '예금',
    bankName: '국민',
    productName: 'KB 주부 자녀사랑 예금',
    joinWay: '휴대폰',
    content:
      '자녀에게 증여 NEEDS가 있는 고객을 위한 상품으로, 자녀가 어릴 때 동 상품을 자녀 명의로 미리 증여함으로써 절세효과와 재테크효과를 함께 얻을 수 있는 정기예금',
    job: '주부',
    productMakeDay: '2023-02-16',
    keyword: '주거래 은행',
    minimumAmount: 1000000,
    maxLimit: null,
    interests: [
      {
        id: 1,
        dueDate: 12,
        rate: 3.0,
      },
      {
        id: 2,
        dueDate: 24,
        rate: 3.3,
      },
    ],
  },
  {
    id: 2,
    productType: '적금',
    bankName: '국민',
    productName: 'KB 공무원 노후준비 적립식 예금',
    joinWay: '휴대폰',
    content: '공무를 열심히 수행해온 당신 미리미리 적금으로 퇴직 이후의 삶을 준비하자',
    job: '공무원',
    productMakeDay: '2023-02-16',
    keyword: '노후 준비',
    minimumAmount: null,
    maxLimit: 10000000,
    interests: [
      {
        id: 3,
        dueDate: 12,
        rate: 2.0,
      },
      {
        id: 4,
        dueDate: 24,
        rate: 2.5,
      },
    ],
  },
  {
    id: 3,
    productType: '예금',
    bankName: '국민',
    productName: 'KB 직장인 골드 예금',
    joinWay: '인터넷',
    content:
      '목돈을 예치 후 매월 원금 분할수령하여, 은퇴 후 공적연금 수급전까지 생활비로 사용하거나, 적립식 상품 등으로 재테크할 수 있도록 지원하는 가교형 정기예금',
    job: '회사원',
    productMakeDay: '2023-02-16',
    keyword: '노후 준비',
    minimumAmount: 10000000,
    maxLimit: null,
    interests: [
      {
        id: 5,
        dueDate: 12,
        rate: 2.0,
      },
      {
        id: 6,
        dueDate: 24,
        rate: 2.5,
      },
    ],
  },
];
