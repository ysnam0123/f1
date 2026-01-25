// import { Team as TeamType } from '@/types/team';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TeamBox({
  // className,
  onMouseLeave,
}: {
  className?: string;
  onMouseLeave: () => void;
}) {
  const router = useRouter();
  return (
    <div
      className="absolute top-22 left-0 z-100 flex min-h-120 w-screen justify-center bg-[#1a1a1a] px-12.5 py-12.5 select-none"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-5 gap-8">
        {/* {teams.map((team) => (
          <div
            key={team.name}
            onClick={() => router.push(`/team/${team.slug}`)}
            className="flex h-40 w-65 cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] bg-gray-300 px-9 py-px"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
            }}
          >
            <Image
              src={team.logoImg}
              alt="logo"
              className="h-20 object-contain"
            />
            <h1 className="mb-3 text-[24px] font-medium">{team.krName}</h1>
          </div>
        ))} */}
      </div>
    </div>
  );
}
