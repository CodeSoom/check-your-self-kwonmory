const mockInterviews = [
  {
    id: 1,
    title: '주니어 프론트엔드 개발자라면!',
    description: '주니어 개발자분들께서 도전할만한 인터뷰 문제입니다.',
    image: {
      id: 1,
      url: 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/02/Blog_Front-End-Dev.jpg.webp',
      alt: '이미지',
    },
    tags: [
      {
        id: 1,
        title: 'frontend',
      },
      {
        id: 2,
        title: 'junior',
      },
    ],
    default_limit_second: 30,
    problems: [
      {
        id: 1,
        title: 'wow1',
        limit_second: 40,
      },
      {
        id: 2,
        title: 'hoho1',
      },
    ],
  },
  {
    id: 2,
    title: '주니어 백엔드 개발자를 위한 인터뷰',
    description: '주니어 개발자분들께서 도전할만한 인터뷰 문제입니다.',
    image: {
      id: 1,
      url: 'https://miro.medium.com/proxy/1*ukXwFrIFFD3VJPphaItq0w.jpeg',
      alt: '이미지',
    },
    tags: [
      {
        id: 1,
        title: 'backend',
      },
      {
        id: 2,
        title: 'junior',
      },
    ],
    default_limit_second: 30,
    problems: [
      {
        id: 1,
        title: 'wow2',
      },
      {
        id: 2,
        title: 'hoho2',
      },
    ],
  },
  {
    id: 3,
    title: '기초 자바스크립트에 대해서 얼마나 아시나요?',
    description: '자바스크립트 실력을 향상 시켜주는 인터뷰즈입니다!',
    image: {
      id: 1,
      url: 'https://wordpress.lapw.org/wp-content/uploads/2020/03/1920px-Unofficial_JavaScript_logo_2.svg-800x445.png',
      alt: '이미지',
    },
    tags: [
      {
        id: 3,
        title: 'javascript',
      },
      {
        id: 4,
        title: 'lang',
      },
    ],
    default_limit_second: 300,
    problems: [
      {
        id: 1,
        title: 'wow2',
        limit_second: 30,
      },
      {
        id: 2,
        title: 'hoho2',
      },
    ],
  },
];

export default mockInterviews;
