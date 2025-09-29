export const driverNameMapping: Record<string, string> = {
  'Max VERSTAPPEN': '막스 베르스타펜',
  'Yuki TSUNODA': '유키 츠노다',
  'Lando NORRIS': '랜도 노리스',
  'Oscar PIASTRI': '오스카 피아스트리',
  'Charles LECLERC': '샤를 르클레르',
  'Lewis HAMILTON': '루이스 해밀턴',
  'Kimi ANTONELLI': '키미 안토넬리',
  'George RUSSELL': '조지 러셀',
  'Fernando ALONSO': '페르난도 알론소',
  'Lance STROLL': '랜스 스트롤',
  'Pierre GASLY': '피에르 가슬리',
  'Franco COLAPINTO': '프랑코 콜라핀토',
  'Esteban OCON': '에스테반 오콘',
  'Oliver BEARMAN': '올리버 베어만',
  'Gabriel BORTOLETO': '가브리엘 보르톨레토',
  'Nico HULKENBERG': '니코 훌켄버그',
  'Isack HADJAR': '아이삭 하자르',
  'Liam LAWSON': '리암 로슨',
  'Alexander ALBON': '알렉산더 알본',
  'Carlos SAINZ': '카를로스 사인즈',
};
export const driveImgMapping: Record<string, string> = {
  'Max VERSTAPPEN': '/drivers/MaxVerstappen.png',
  'Yuki TSUNODA': '/drivers/YukiTsunoda.png',
  'Lando NORRIS': '/drivers/LandoNorris.png',
  'Oscar PIASTRI': '/drivers/OscarPiastri.png',
  'Charles LECLERC': '/drivers/CharlesLeclerc.png',
  'Lewis HAMILTON': '/drivers/LewisHamilton.png',
  'Kimi ANTONELLI': '/drivers/KimiAntonelli.png',
  'George RUSSELL': '/drivers/GeorgeRussell.png',
  'Fernando ALONSO': '/drivers/FernandoAlonso.png',
  'Lance STROLL': '/drivers/LanceStroll.png',
  'Pierre GASLY': '/drivers/PierreGasly.png',
  'Franco COLAPINTO': '/drivers/Colapinto.png',
  'Esteban OCON': '/drivers/EstebanOcon.png',
  'Oliver BEARMAN': '/drivers/OliverBearman.png',
  'Gabriel BORTOLETO': '/drivers/GabrielBortoleto.png',
  'Nico HULKENBERG': '/drivers/NicoHulkenberg.png',
  'Isack HADJAR': '/drivers/IsackHadjar.png',
  'Liam LAWSON': '/drivers/LiamLawson.png',
  'Alexander ALBON': '/drivers/AlexAlbon.png',
  'Carlos SAINZ': '/drivers/CarlosSainz.png',
};

export const teamLogoMapping: Record<string, string> = {
  Alpine: '/teamLogo/alpinelogo.png',
  'Aston Martin': '/teamLogo/astonmartinlogo.png',
  Ferrari: '/teamLogo/ferrarilogo.png',
  'Haas F1 Team': '/teamLogo/haaslogo.png',
  'Kick Sauber': '/teamLogo/kicksauberlogo.png',
  McLaren: '/teamLogo/mclarenLogo.png',
  Mercedes: '/teamLogo/mercedeslogo.png',
  'Racing Bulls': '/teamLogo/racingbullslogo.png',
  'Red Bull Racing': '/teamLogo/redbullracinglogo.png',
  Williams: '/teamLogo/williamslogo.png',
};

interface Driver {
  name: string;
  driverNumber: number;
  team: Team;
  teamLogo: string;
  img: string;
  country: string;
  acronym: string;
  first_name: string;
  last_name: string;
}
interface Team {
  name: string;
  color: string;
  color2: string;
  logo: string;
  bigLogo: string;
}
