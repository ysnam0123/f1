'use client';
// import { Team as TeamType } from '@/types/team';
import { teams } from '@/data/teams';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TeamBox({
  className,
  onMouseLeave,
}: {
  className?: string;
  onMouseLeave: () => void;
}) {
  const router = useRouter();
  return (
    <div
      className="absolute top-[130px] left-0 z-100 flex min-h-[600px] w-screen justify-center bg-[#1a1a1a] px-[50px] py-10 select-none"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-5 gap-5">
        {/* className={`flex flex-col justify-between items-center w-[520px] h-[300px] bg-gradient-to-b py-5 px-[27px] rounded-[8px] transition-all duration-300 hover:scale-105 cursor-pointer`} */}
        {teams.map((team) => (
          <div
            key={team.name}
            onClick={() => router.push(`/team/${team.slug}`)}
            className="flex h-[220px] w-[180px] cursor-pointer flex-col items-center rounded-[10px] bg-gray-300 px-3 py-5"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
            }}
          >
            <h1 className="mb-3 text-[24px] font-medium">{team.name}</h1>
            <Image
              src={team.logoImg}
              alt="logo"
              className="h-[80px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
