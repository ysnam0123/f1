import {
  DriverDetailData,
  DriverSeasonData,
} from '@/hooks/detailPage/DriverDetail';
import defaultDriver from '/public/drivers/defaultDriver.svg';
import Image from 'next/image';
import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';
import SeasonChangeButton from '../common/SeasonChangeButton';
import { findHeadshot } from '@/utils/findHeadShot';
import { teams2026 } from '@/images/team';

interface Props {
  data: DriverDetailData;
  opened: boolean;
  setOpened: (state: boolean) => void;
  years: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  seasonData?: DriverSeasonData;
}

export default function DriverHero({
  data,
  opened,
  setOpened,
  years,
  selectedYear,
  seasonData,
  setSelectedYear,
}: Props) {
  const fullName = data.first_name + data.last_name;
  const data2025 = data.seasons.find((season) => season.year === 2025);
  const data2026 = teams2026.find((team) => team);
  return (
    <>
      <div className="mb-10 flex flex-col gap-5 select-none">
        <div className="flex items-center justify-between">
          <p
            className="text-[50px]"
            style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
          >
            {data.kr_name}
          </p>
          <SeasonChangeButton
            opened={opened}
            setOpenedAction={setOpened}
            years={years}
            selectedYear={selectedYear}
            setSelectedYearAction={setSelectedYear}
            className="mb-0 sm:mb-0 sm:w-50"
          />
        </div>
        <div className="flex text-[20px]">
          <div className="flex gap-2 border-r border-white pr-2.5">
            <Image src={data.flag} alt="flag" width={36} height={26} />
            <p>{data.country_kr_name}</p>
          </div>
          <p className="border-r border-white px-2.5">
            {seasonData?.driver_number}
          </p>
          <p className="px-2.5">{data.kr_name}</p>
        </div>
        {seasonData && (
          <div
            className="h-1 w-50"
            style={{ backgroundColor: seasonData.team.team_colour }}
          />
        )}
        <div className="flex items-center justify-between px-10">
          <Image
            src={
              findHeadshot(fullName, selectedYear)
                ? findHeadshot(fullName, selectedYear)
                : defaultDriver
            }
            alt="driver"
            width={250}
            height={250}
            className="desktop"
          />
          <Image
            src={
              findHeadshot(fullName, selectedYear)
                ? findHeadshot(fullName, selectedYear)
                : defaultDriver
            }
            alt="driver"
            width={150}
            height={150}
            className="mobile"
          />
          <div className="flex flex-col items-end">
            {seasonData?.team.main_logo ? (
              <Image
                src={seasonData.team.main_logo}
                alt="logoImg"
                width={180}
                height={150}
                className="mb-3"
              />
            ) : (
              <div></div>
              // <Image
              //   src={data2025.team.main_logo}
              //   alt="logoImg"
              //   width={180}
              //   height={150}
              //   className="mb-3"
              // />
            )}
            {seasonData?.team.car_img ? (
              <Image
                src={seasonData.team.car_img}
                alt="carImg"
                width={500}
                height={150}
              />
            ) : (
              <Image
                src={'/cars/car.svg'}
                alt="carImg"
                width={500}
                height={150}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
