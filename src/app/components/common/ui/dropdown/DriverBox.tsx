// import { Team as TeamType } from '@/types/team';
import { teams } from '@/data/teams';
import { useRouter } from 'next/navigation';

export default function TeamBox({
  className,
  onMouseLeave,
  onClick,
}: {
  className?: string;
  onClick: () => void;
  onMouseLeave: () => void;
}) {
  const router = useRouter();
  return (
    <>
      <div
        className="absolute top-22 left-0 z-100 min-h-100 w-screen bg-[#1a1a1a] px-12.5 py-10 select-none"
        onMouseLeave={onMouseLeave}
      >
        <div className="mx-auto grid max-w-360 grid-cols-4 gap-x-4 gap-y-6">
          {teams.map((team) =>
            team.drivers.map((driver) => (
              <div
                onClick={() => {
                  onClick();
                  router.push(`/driver/${driver.driverSlug}`);
                }}
                key={driver.name}
                className="flex min-h-8 cursor-pointer items-center gap-5 rounded-xl px-1 py-2"
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
                  className="h-10 w-10 cursor-pointer rounded-full"
                  style={{
                    backgroundColor: `${team.logoBg}`,
                    backgroundImage: `url(${driver.image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <h1 className="text-[18px] font-semibold text-white">
                  {driver.name}
                </h1>
              </div>
            )),
          )}
        </div>
      </div>
    </>
  );
}
