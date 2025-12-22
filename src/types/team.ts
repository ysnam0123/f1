import { flags } from '@/images/flags';
import { StaticImageData } from 'next/image';

export type Nationality = keyof typeof flags;
export interface Driver {
  name: string;
  krName: string;
  driverSlug: string;
  nationality: Nationality;
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
