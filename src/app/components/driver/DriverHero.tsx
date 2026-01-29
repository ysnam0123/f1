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
import DriverCard from './DriverCard';
import defaultCar from '/public/cars/car.svg';

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
  const fullName = data.first_name + ' ' + data.last_name;
  const data2026 = teams2026.find((team) =>
    team.drivers.find((driver) => driver.full_name === fullName),
  );
  return (
    <>
      <div className="flex flex-col gap-5 select-none">
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
            {data2026?.team_kr_name}
          </p>
          <p className="px-2.5">{seasonData?.driver_number}</p>
        </div>
        <section className="mx-auto flex w-full items-center justify-between rounded-xl border border-[#4C4C4C] bg-[#111111] px-6 select-none">
          <div className="flex flex-col items-start gap-5">
            {seasonData?.team.main_logo ? (
              <div
                style={{ backgroundColor: seasonData.team.team_colour }}
                className="flex items-center justify-center rounded-2xl px-2 py-2"
              >
                <Image
                  src={seasonData.team.main_logo}
                  alt="logoImg"
                  width={120}
                  height={90}
                />
              </div>
            ) : (
              <div
                style={{ backgroundColor: data2026?.team_colour }}
                className="flex items-center justify-center rounded-2xl px-2 py-2"
              >
                <Image
                  src={data2026?.main_logo}
                  alt="logoImg"
                  width={120}
                  height={90}
                />
              </div>
            )}
            {seasonData?.team.car_img ? (
              <Image
                src={seasonData.team.car_img}
                alt="carImg"
                width={500}
                height={150}
                className="z-30"
              />
            ) : (
              <Image
                src={data2026?.car_img ? data2026.car_img : defaultCar}
                alt="carImg"
                width={500}
                height={150}
                className="z-30"
              />
            )}
          </div>
          <DriverCard
            teamColor={seasonData?.team.team_colour}
            headshot={findHeadshot(fullName, selectedYear)}
          />
        </section>
      </div>
    </>
  );
}
