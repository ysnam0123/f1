import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ria: ['RiaSans', 'sans-serif'],
        partial: ['PartialSans', 'sans-serif'],
        pretendard: ['PretendardVariable', 'sans-serif'],
        paperlogy: ['Paperlogy', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
};

export default config;
