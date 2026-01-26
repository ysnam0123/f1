import { DriverDetailData } from '@/hooks/detailPage/DriverDetail';
import defaultDriver from '/public/drivers/defaultDriver.svg';
import Image from 'next/image';
import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';
import SeasonChangeButton from '../common/SeasonChangeButton';

interface Props {
  data: DriverDetailData;
  opened: boolean;
  setOpened: (state: boolean) => void;
  years: number[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

export default function DriverHero({
  data,
  opened,
  setOpened,
  years,
  selectedYear,
  setSelectedYear,
}: Props) {
  const seasonData = data.seasons.find(
    (season) => season.year === selectedYear,
  );
  const findHeadshot = seasonData?.headshot_url
    ? seasonData?.headshot_url
    : data.seasons.find((season) => season.headshot_url != null);
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
        <div
          className="h-1 w-30"
          style={{ backgroundColor: data.seasons[0].team.team_colour }}
        />
        <div className="flex items-end justify-between px-10">
          <Image
            src={
              seasonData?.headshot_url
                ? upgradeHeadshotQuality(seasonData.headshot_url)
                : defaultDriver
            }
            alt="driver"
            width={350}
            height={350}
          />
          <div className="flex flex-col items-end">
            <Image
              src={data.seasons[0].team.main_logo}
              alt="driver"
              width={180}
              height={150}
              className="mb-3"
            />
            <Image
              src={data.seasons[0].team.car_img}
              alt="driver"
              width={500}
              height={150}
              className="mb-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
