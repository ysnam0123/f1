// import { Team as TeamType } from '@/types/team';
import { teams } from '@/data/teams';
import Image from 'next/image';

export default function TeamBox({
  className,
  onMouseLeave,
}: {
  className?: string;

  onMouseLeave: () => void;
}) {
  return (
    <div
      className="absolute left-0 top-[100px] w-screen min-h-[600px] px-[50px] py-10 bg-[#1a1a1a] z-100 flex justify-center select-none"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-5 gap-5">
        {/* className={`flex flex-col justify-between items-center w-[520px] h-[300px] bg-gradient-to-b py-5 px-[27px] rounded-[8px] transition-all duration-300 hover:scale-105 cursor-pointer`} */}
        {teams.map((team) => (
          <div
            key={team.name}
            className="flex flex-col items-center py-5 px-3  w-[180px] h-[220px] bg-gray-300 rounded-[10px] cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
            }}
          >
            <h1 className="font-medium text-[24px] mb-3">{team.name}</h1>
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
