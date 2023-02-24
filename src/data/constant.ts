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

export const searchKeywords: string[] = ['목돈', '직장인', '사업', '내맘대로', '여행', '정기', '적립식'];
