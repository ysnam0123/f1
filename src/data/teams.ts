import { Cars } from '@/images/cars';
import { Drivers } from '@/images/drivers';
import { Logos } from '@/images/logo';
import type { Team } from '@/types/team';

export const teams: Team[] = [
  {
    name: 'Red Bull Racing',
    colorFrom: '#3671C6',
    colorTo: '#1A3760',
    logo: Logos.RedBull,
    car: Cars.RedBull,
    drivers: [
      { name: 'Max Verstappen', number: 1, image: Drivers.Max },
      { name: 'Liam Lawson', number: 30, image: Drivers.Lawson },
    ],
  },
  {
    name: 'Racing Bulls',
    colorFrom: '#3671C6',
    colorTo: '#1A3760',
    logo: Logos.RedBullRacing,
    car: Cars.RacingBulls,
    drivers: [
      { name: 'Yuki Tsunoda', number: 22, image: Drivers.Yuki },
      { name: 'Isack Hadjar', number: 6, image: Drivers.Isac },
    ],
  },
  {
    name: 'Ferrari',
    colorFrom: '#DC0000',
    colorTo: '#760000',
    logo: Logos.Ferrari,
    car: Cars.Ferrari,
    drivers: [
      { name: 'Charles Leclerc', number: 16, image: Drivers.Leclerc },
      { name: 'Lewis Hamilton', number: 44, image: Drivers.Lewis },
    ],
  },
  {
    name: 'McLaren',
    colorFrom: '#FF8700',
    colorTo: '#995100',
    logo: Logos.McLaren,
    car: Cars.McLaren,
    drivers: [
      { name: 'Lando Norris', number: 4, image: Drivers.Lando },
      { name: 'Oscar Piastri', number: 81, image: Drivers.Oscar },
    ],
  },
  {
    name: 'Mercedes',
    colorFrom: '#00D2BE',
    colorTo: '#006C62',
    logo: Logos.Mercedes,
    car: Cars.Mercedes,
    drivers: [
      { name: 'George Russell', number: 63, image: Drivers.Russell },
      { name: 'Kimi Antonelli', number: 12, image: Drivers.Kimi },
    ],
  },
  {
    name: 'Aston Martin',
    colorFrom: '#00D5BC',
    colorTo: '#006F62',
    logo: Logos.AstonMartin,
    car: Cars.AstonMartin,
    drivers: [
      { name: 'Fernando Alonso', number: 14, image: Drivers.Alonso },
      { name: 'Lance Stroll', number: 18, image: Drivers.Lance },
    ],
  },
  {
    name: 'Haas',
    colorFrom: '#B6BABD',
    colorTo: '#545657',
    logo: Logos.Haas,
    car: Cars.Haas,
    drivers: [
      { name: 'Esteban Ocon', number: 31, image: Drivers.Ocon },
      { name: 'Oliver Bearman', number: 87, image: Drivers.Bearman },
    ],
  },
  {
    name: 'Alpine',
    colorFrom: '#2173B8',
    colorTo: '#0F3352',
    logo: Logos.Alpine,
    car: Cars.Alpine,
    drivers: [
      { name: 'Pierre Gasly', number: 10, image: Drivers.Gasly },
      { name: 'Jack Doohan', number: 7, image: Drivers.Colapinto },
    ],
  },
  {
    name: 'Williams',
    colorFrom: '#1E41FF',
    colorTo: '#122799',
    logo: Logos.Williams,
    car: Cars.Williams,
    drivers: [
      { name: 'Alex Albon', number: 23, image: Drivers.Albon },
      { name: 'Carlos Sainz Jr.', number: 55, image: Drivers.Sainz },
    ],
  },
  {
    name: 'Sauber',
    colorFrom: '#07E207',
    colorTo: '#2D7C2D',
    logo: Logos.Sauber,
    car: Cars.KickSauber,
    drivers: [
      { name: 'Nico Hülkenberg', number: 27, image: Drivers.Hulkenberg },
      { name: 'Gabriel Bortoleto', number: 5, image: Drivers.Bortoleto },
    ],
  },
];
