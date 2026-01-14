import { flags } from '@/images/flags';
import { Team } from '@/types/team';
import Image from 'next/image';

interface Props {
  driver: Team['drivers'][number];
  team: Team;
}

export default function DriverHero({ driver, team }: Props) {
  const nationality = flags[driver.nationality];
  return (
    <>
      <div className="mb-10 flex flex-col gap-5 select-none">
        <p
          className="text-[50px]"
          style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
        >
          {driver.name}
        </p>

        <div className="flex text-[20px]">
          <div className="flex gap-2 border-r border-white pr-2.5">
            <Image src={nationality} alt="flag" width={36} height={26} />
            <p>{driver.nationality}</p>
          </div>
          <p className="border-r border-white px-2.5">{driver.number}</p>
          <p className="px-2.5">{team.krName}</p>
        </div>
        <div className="h-1 w-30 bg-[#DC0000]" />
        <div className="flex items-center justify-between px-10">
          <Image src={driver.image} alt="driver" width={240} height={240} />
          <Image
            src={team.logoImg}
            alt="driver"
            width={180}
            height={150}
            className="mb-3"
          />
        </div>
      </div>
    </>
  );
}
