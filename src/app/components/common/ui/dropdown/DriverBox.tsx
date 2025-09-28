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
    <>
      <div
        className="absolute left-0 top-[90px] w-screen min-h-[400px] px-[50px] py-10 bg-[#1a1a1a] z-100  select-none"
        onMouseLeave={onMouseLeave}
      >
        <div className="grid grid-cols-4 gap-x-4 gap-y-6 mx-auto max-w-[1440px] ">
          {teams.map((team) =>
            team.drivers.map((driver) => (
              <div
                key={driver.name}
                className="px-1 py-2 min-h-8 flex items-center gap-5 rounded-[8px] cursor-pointer"
                style={{
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = team.logoBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                }}
              >
                <div
                  className=" w-10 h-10 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: `${team.logoBg}`,
                    backgroundImage: `url(${driver.image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <h1 className="text-white text-[18px] font-semibold">
                  {driver.name}
                </h1>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
