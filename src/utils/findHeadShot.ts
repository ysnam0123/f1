import { driverHeadshots } from '@/images/drivers';

export const findHeadshot = (name: string, year: number) => {
  const imgName = name.split(' ').join('').toLowerCase() + year;
  return driverHeadshots[imgName];
};
