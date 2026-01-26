import { DriverDetailData } from '@/hooks/detailPage/DriverDetail';
import defaultDriver from '/public/drivers/defaultDriver.svg';
import Image from 'next/image';
import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';

interface Props {
  data: DriverDetailData;
}

export default function DriverHero({ data }: Props) {
  const headshot = upgradeHeadshotQuality(data.seasons[0].headshot_url);
  return (
    <>
      <div className="mb-10 flex flex-col gap-5 select-none">
        <p
          className="text-[50px]"
          style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
        >
          {data.kr_name}
        </p>

        <div className="flex text-[20px]">
          <div className="flex gap-2 border-r border-white pr-2.5">
            <Image src={data.flag} alt="flag" width={36} height={26} />
            <p>{data.country_kr_name}</p>
          </div>
          <p className="border-r border-white px-2.5">드라이버 넘버</p>
          <p className="px-2.5">{data.kr_name}</p>
        </div>
        <div
          className="h-1 w-30"
          style={{ backgroundColor: data.seasons[0].team.team_colour }}
        />
        <div className="flex items-end justify-between px-10">
          <Image
            src={data.seasons[0].headshot_url ? headshot : defaultDriver}
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
