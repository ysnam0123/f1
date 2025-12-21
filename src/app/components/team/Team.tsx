'use client';
import { Team as TeamType } from '@/types/team';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface TeamProps {
  team: TeamType;
}

export default function Team({ team }: TeamProps) {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push(`/team/${team.slug}`)}
        className="flex w-full flex-col gap-3 select-none"
      >
        <div className="flex items-center gap-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full p-[4px]"
            style={{ backgroundColor: `${team.logoBg}` }}
          >
            <Image src={team.logo} alt="logo" />
          </div>
          <h1 className="text-[24px] font-bold">{team.name}</h1>
        </div>

        <div
          className={`flex h-[300px] w-full cursor-pointer flex-col items-center justify-between rounded-[8px] bg-gradient-to-b px-[27px] py-5 transition-all duration-300 hover:scale-105`}
          style={{
            backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
          }}
        >
          <div className="flex items-center">
            {/* <div className="flex items-center">
            <h1 className="font-bold text-[28px] mr-3">{team.name}</h1>
            <div className="flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full p-1">
              <Image src={team.logo} alt="logo" />
            </div>
          </div> */}
            {/* <Image
            src={team.logo}
            alt="logo"
            className="w-[154px] h-[47px] mr-10"
          /> */}

            <div className="flex gap-5">
              <div className="flex gap-10">
                {team.drivers.map((driver) => (
                  <div key={driver.number} className="flex items-center gap-1">
                    <div className="flex flex-col">
                      <p>{driver.name}</p>
                      <div className="flex items-center gap-1">
                        <div className="h-[20px] w-[20px] rounded-full bg-gray-300"></div>
                        <p className="text-[16px] font-bold">{driver.number}</p>
                      </div>
                    </div>
                    <Image
                      src={driver.image}
                      alt={driver.name}
                      className="h-16 w-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image
            src={team.car}
            alt="mcLarenCar"
            className="h-[139px] w-[465px]"
          />
        </div>
      </div>
    </>
  );
}
