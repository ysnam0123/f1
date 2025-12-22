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
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, ${team.colorFrom} , ${team.colorTo})`,
        }}
        className="mb-[40px] flex h-90 w-full items-center justify-between rounded-[20px] bg-red-300 px-[120px] select-none"
      >
        <div className="flex flex-col items-center">
          <Image
            src={team.logoImg}
            alt="driver"
            width={120}
            height={80}
            className="mb-5"
          />
          <p
            className="mb-5 text-[50px]"
            style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
          >
            {driver.name}
          </p>
          <div className="flex text-[20px]">
            <div className="flex gap-2 border-r-1 border-white pr-2.5">
              <Image src={nationality} alt="flag" width={43} height={26} />
              <p>{driver.nationality}</p>
            </div>
            <p className="pl-2.5">{driver.number}</p>
          </div>
        </div>
        <Image src={driver.image} alt="driver" width={300} height={300} />
      </div>
    </>
  );
}
