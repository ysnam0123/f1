'use client';
import Image from 'next/image';
import { Team } from '@/types/team';
import { useRouter } from 'next/navigation';

interface Props {
  driver: Team['drivers'][number];
  team: Team;
}
export default function DriverListCard({ driver, team }: Props) {
  const router = useRouter();
  const [firstName, lastName] = driver.krName.split(' ');
  return (
    <div
      onClick={() => router.push(`/driver/${driver.driverSlug}`)}
      style={{ borderColor: team.logoBg }}
      className={`group relative h-[220px] w-[300px] cursor-pointer overflow-hidden rounded-[10px] border-1 px-5 py-[30px] select-none`}
    >
      <Image
        src="/cardBg.png"
        alt="bg"
        fill
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/0 transition-all duration-100 group-hover:bg-white/10" />

      <div className="z-10 flex justify-between">
        <div className="z-10 flex flex-col">
          <p className="text-[20px]">{firstName}</p>
          <p className="text-[20px]">{lastName}</p>
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center gap-1">
              <div className="h-5 w-5 rounded-full bg-gray-400"></div>
              <p>{driver.number}</p>
            </div>
            <p className="text-[10px]">{team.name}</p>
          </div>
        </div>
        <Image
          src={driver.image}
          alt="driver"
          width={160}
          height={160}
          className="z-10"
        />
      </div>
    </div>
  );
}
