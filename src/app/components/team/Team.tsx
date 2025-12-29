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
        className="flex w-full flex-col gap-5 select-none"
      >
        <div className="flex items-center gap-2">
          <h1 className="font-partial text-[30px] font-bold">{team.name}</h1>
        </div>
        <div className="group relative flex min-h-82.5 w-full cursor-pointer flex-col items-center justify-between rounded-xl border border-[#F4F4F4] bg-none px-6.75 py-4.5 transition-transform duration-300 hover:scale-105">
          <div
            className="absolute inset-0 z-10 cursor-pointer rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
            }}
          />
          <div className="z-20 flex items-center">
            <div className="flex gap-20">
              <Image src={team.logoImg} alt="logo" width={120} height={120} />
              <div className="flex gap-12.5">
                {team.drivers.map((driver) => (
                  <div key={driver.number} className="flex items-center gap-1">
                    <div className="flex flex-col items-center gap-3.75">
                      <Image
                        src={driver.image}
                        alt={driver.name}
                        className="h-25 w-25"
                      />
                      <p className="text-[16px] font-bold">{driver.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image
            src={team.car}
            alt="mcLarenCar"
            className="z-20 h-34.75 w-116.25"
          />
        </div>
      </div>
    </>
  );
}
