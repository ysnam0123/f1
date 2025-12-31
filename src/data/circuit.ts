import australiaAlbertPark from '/public/circuit/austrailia_albert_park.svg';
import chinaShanghai from '/public/circuit/china_shanghai.svg';
import japanSuzuka from '/public/circuit/japan_suzuka.svg';
import bahrainSakhir from '/public/circuit/bahrain.svg';
import saudiArabiaJeddah from '/public/circuit/saudi_arabia.svg';
import usaMiami from '/public/circuit/miami.svg';
import italyImola from '/public/circuit/italy_imola.svg';
import monacoMonteCarlo from '/public/circuit/monaco.svg';
import spainBarcelona from '/public/circuit/spain_barcelona.svg';
import canadaMontreal from '/public/circuit/canada.svg';
import austriaRedBullRing from '/public/circuit/austria_red_bull_ring.svg';
import ukSilverstone from '/public/circuit/united_kingdom_silverstone.svg';
import belgiumSpa from '/public/circuit/belgium.svg';
import hungaryHungaroring from '/public/circuit/hungary.svg';
import netherlandsZandvoort from '/public/circuit/netherlands_zandvoort.svg';
import italyMonza from '/public/circuit/italy_monza.svg';
import azerbaijanBaku from '/public/circuit/azerbijan_baku.svg';
import singaporeMarinaBay from '/public/circuit/singapore_marina_bay.svg';
import usaCota from '/public/circuit/usa_cota.svg';
import mexicoHermanosRodriguez from '/public/circuit/mexico.svg';
import brazilInterlagos from '/public/circuit/brazil_interlagos.svg';
import usaLasVegas from '/public/circuit/usa_las_vegas.svg';
import qatarLusail from '/public/circuit/qatar_lusail.svg';
import abuDhabiYasMarina from '/public/circuit/abu_dhabi_yas_marina.svg';
import spainMadrid from '/public/circuit/spain_madrid.svg';
import { StaticImageData } from 'next/image';

interface Circuit {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_name: string;
  circuit_img: StaticImageData;
  laps: number;
  first_grand_prix: number;
  circuit_length: number;
  lap_record: {
    time: string | null;
    driver: string | null;
    year: number | null;
  };
}

export const circuit: Circuit[] = [
  {
    circuit_key: 10,
    circuit_short_name: 'Melbourne',
    country_code: 'AUS',
    country_name: 'Australia',
    circuit_img: australiaAlbertPark,
    laps: 58,
    first_grand_prix: 1996,
    circuit_length: 5.278,
    lap_record: {
      time: '1:20.235',
      driver: 'Sergio Pérez',
      year: 2023,
    },
  },
  {
    circuit_key: 49,
    circuit_short_name: 'Shanghai',
    country_code: 'CHN',
    country_name: 'China',
    circuit_img: chinaShanghai,
    laps: 56,
    first_grand_prix: 2004,
    circuit_length: 5.451,
    lap_record: {
      time: '1:30.641',
      driver: 'Oscar Piastri',
      year: 2025,
    },
  },
  {
    circuit_key: 46,
    circuit_short_name: 'Suzuka',
    country_code: 'JPN',
    country_name: 'Japan',
    circuit_img: japanSuzuka,
    laps: 52,
    first_grand_prix: 1987,
    circuit_length: 5.281,
    lap_record: {
      time: '1:26.983',
      driver: 'Max Verstappen',
      year: 2025,
    },
  },
  {
    circuit_key: 63,
    circuit_short_name: 'Sakhir',
    country_code: 'BRN',
    country_name: 'Bahrain',
    circuit_img: bahrainSakhir,
    laps: 57,
    first_grand_prix: 2004,
    circuit_length: 5.412,
    lap_record: {
      time: '1:31.447',
      driver: 'Pedro de la Rosa',
      year: 2005,
    },
  },
  {
    circuit_key: 149,
    circuit_short_name: 'Jeddah',
    country_code: 'KSA',
    country_name: 'Saudi Arabia',
    circuit_img: saudiArabiaJeddah,
    laps: 50,
    first_grand_prix: 2021,
    circuit_length: 6.174,
    lap_record: {
      time: '1:30.734',
      driver: 'Lewis Hamilton',
      year: 2021,
    },
  },
  {
    circuit_key: 151,
    circuit_short_name: 'Miami',
    country_code: 'USA',
    country_name: 'United States',
    circuit_img: usaMiami,
    laps: 57,
    first_grand_prix: 2022,
    circuit_length: 5.412,
    lap_record: {
      time: '1:29.708',
      driver: 'Max Verstappen',
      year: 2023,
    },
  },
  {
    circuit_key: 6,
    circuit_short_name: 'Imola',
    country_code: 'ITA',
    country_name: 'Italy',
    circuit_img: italyImola,
    laps: 63,
    first_grand_prix: 1980,
    circuit_length: 4.909,
    lap_record: {
      time: '1:15.484',
      driver: 'Lewis Hamilton',
      year: 2020,
    },
  },
  {
    circuit_key: 22,
    circuit_short_name: 'Monte Carlo',
    country_code: 'MON',
    country_name: 'Monaco',
    circuit_img: monacoMonteCarlo,
    laps: 78,
    first_grand_prix: 1950,
    circuit_length: 3.337,
    lap_record: {
      time: '1:09.954',
      driver: 'Lando Norris',
      year: 2025,
    },
  },
  {
    circuit_key: 15,
    circuit_short_name: 'Catalunya',
    country_code: 'ESP',
    country_name: 'Spain',
    circuit_img: spainBarcelona,
    laps: 66,
    first_grand_prix: 1991,
    circuit_length: 4.657,
    lap_record: {
      time: '1:16.330',
      driver: 'Max Verstappen',
      year: 2023,
    },
  },
  {
    circuit_key: 23,
    circuit_short_name: 'Montreal',
    country_code: 'CAN',
    country_name: 'Canada',
    circuit_img: canadaMontreal,
    laps: 70,
    first_grand_prix: 1978,
    circuit_length: 4.361,
    lap_record: {
      time: '1:13.078',
      driver: 'Valtteri Bottas',
      year: 2019,
    },
  },
  {
    circuit_key: 19,
    circuit_short_name: 'Spielberg',
    country_code: 'AUT',
    country_name: 'Austria',
    circuit_img: austriaRedBullRing,
    laps: 71,
    first_grand_prix: 1970,
    circuit_length: 4.318,
    lap_record: {
      time: '1:05.619',
      driver: 'Carlos Sainz',
      year: 2020,
    },
  },
  {
    circuit_key: 2,
    circuit_short_name: 'Silverstone',
    country_code: 'GBR',
    country_name: 'United Kingdom',
    circuit_img: ukSilverstone,
    laps: 52,
    first_grand_prix: 1950,
    circuit_length: 5.891,
    lap_record: {
      time: '1:27.097',
      driver: 'Max Verstappen',
      year: 2020,
    },
  },
  {
    circuit_key: 7,
    circuit_short_name: 'Spa-Francorchamps',
    country_code: 'BEL',
    country_name: 'Belgium',
    circuit_img: belgiumSpa,
    laps: 44,
    first_grand_prix: 1950,
    circuit_length: 7.004,
    lap_record: {
      time: '1:40.510',
      driver: 'Oscar Piastri',
      year: 2025,
    },
  },
  {
    circuit_key: 4,
    circuit_short_name: 'Hungaroring',
    country_code: 'HUN',
    country_name: 'Hungary',
    circuit_img: hungaryHungaroring,
    laps: 70,
    first_grand_prix: 1986,
    circuit_length: 4.381,
    lap_record: {
      time: '1:16.627',
      driver: 'Lewis Hamilton',
      year: 2020,
    },
  },
  {
    circuit_key: 55,
    circuit_short_name: 'Zandvoort',
    country_code: 'NED',
    country_name: 'Netherlands',
    circuit_img: netherlandsZandvoort,
    laps: 72,
    first_grand_prix: 1952,
    circuit_length: 4.259,
    lap_record: {
      time: '1:08.662',
      driver: 'Oscar Piastri',
      year: 2025,
    },
  },
  {
    circuit_key: 39,
    circuit_short_name: 'Monza',
    country_code: 'ITA',
    country_name: 'Italy',
    circuit_img: italyMonza,
    laps: 53,
    first_grand_prix: 1950,
    circuit_length: 5.793,
    lap_record: {
      time: 'IM',
      driver: 'Max Verstappen',
      year: 2025,
    },
  },
  {
    circuit_key: 144,
    circuit_short_name: 'Baku',
    country_code: 'AZE',
    country_name: 'Azerbaijan',
    circuit_img: azerbaijanBaku,
    laps: 51,
    first_grand_prix: 2016,
    circuit_length: 6.003,
    lap_record: {
      time: '1:43.009',
      driver: 'Charles Leclerc',
      year: 2019,
    },
  },
  {
    circuit_key: 61,
    circuit_short_name: 'Singapore',
    country_code: 'SGP',
    country_name: 'Singapore',
    circuit_img: singaporeMarinaBay,
    laps: 62,
    first_grand_prix: 2008,
    circuit_length: 4.94,
    lap_record: {
      time: '1:35.867',
      driver: 'Lewis Hamilton',
      year: 2023,
    },
  },
  {
    circuit_key: 9,
    circuit_short_name: 'Austin',
    country_code: 'USA',
    country_name: 'United States',
    circuit_img: usaCota,
    laps: 56,
    first_grand_prix: 2012,
    circuit_length: 5.513,
    lap_record: {
      time: '1:36.169',
      driver: 'Charles Leclerc',
      year: 2019,
    },
  },
  {
    circuit_key: 65,
    circuit_short_name: 'Mexico City',
    country_code: 'MEX',
    country_name: 'Mexico',
    circuit_img: mexicoHermanosRodriguez,
    laps: 71,
    first_grand_prix: 1963,
    circuit_length: 4.304,
    lap_record: {
      time: '1:17.774',
      driver: 'Valtteri Bottas',
      year: 2021,
    },
  },
  {
    circuit_key: 14,
    circuit_short_name: 'Interlagos',
    country_code: 'BRA',
    country_name: 'Brazil',
    circuit_img: brazilInterlagos,
    laps: 71,
    first_grand_prix: 1973,
    circuit_length: 4.309,
    lap_record: {
      time: '1:10.540',
      driver: 'Valrreri Bottas',
      year: 2018,
    },
  },
  {
    circuit_key: 152,
    circuit_short_name: 'Las Vegas',
    country_code: 'USA',
    country_name: 'United States',
    circuit_img: usaLasVegas,
    laps: 50,
    first_grand_prix: 2023,
    circuit_length: 6.201,
    lap_record: {
      time: '1:34.876',
      driver: 'Lando Norris',
      year: 2024,
    },
  },
  {
    circuit_key: 150,
    circuit_short_name: 'Lusail',
    country_code: 'QAT',
    country_name: 'Qatar',
    circuit_img: qatarLusail,
    laps: 57,
    first_grand_prix: 2021,
    circuit_length: 5.419,
    lap_record: {
      time: '1:22.384',
      driver: 'Lando Norris',
      year: 2024,
    },
  },
  {
    circuit_key: 70,
    circuit_short_name: 'Yas Marina Circuit',
    country_code: 'UAE',
    country_name: 'United Arab Emirates',
    circuit_img: abuDhabiYasMarina,
    laps: 58,
    first_grand_prix: 2009,
    circuit_length: 5.281,
    lap_record: {
      time: '1:26.103',
      driver: 'Kevin Magnussen',
      year: 2024,
    },
  },
  {
    circuit_key: 100,
    circuit_short_name: 'Circuito Ifema Madrid',
    country_code: 'ESP',
    country_name: 'Spain',
    circuit_img: spainMadrid,
    laps: 57,
    first_grand_prix: 2026,
    circuit_length: 5.474,
    lap_record: {
      time: null,
      driver: null,
      year: null,
    },
  },
];
