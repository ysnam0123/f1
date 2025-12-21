import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        ria: ['RiaSans', 'sans-serif'], // 메인 타이틀용
        partial: ['PartialSans', 'sans-serif'], // 포인트 / 한글 강조
        pretendard: ['PretendardVariable', 'sans-serif'], // 기본 본문
      },
    },
  },
};

export default config;
