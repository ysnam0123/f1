import { StaticImageData } from 'next/image';

export interface Driver {
  name: string;
  number: number;
  image: StaticImageData;
}

export interface Team {
  name: string;
  slug: string;
  colorFrom: string; // 그라데이션 시작
  colorTo: string; // 그라데이션 끝
  logo: StaticImageData;
  logoBg: string;
  logoImg: StaticImageData;
  car: StaticImageData;
  drivers: Driver[];
}
