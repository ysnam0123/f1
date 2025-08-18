import { Team as TeamType } from '@/types/team';
import Image from 'next/image';

interface TeamProps {
  team: TeamType;
}

export default function Team({ team }: TeamProps) {
  return (
    <>
      <div className="flex flex-col gap-3 select-none">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center p-[4px] rounded-full w-10 h-10"
            style={{ backgroundColor: `${team.logoBg}` }}
          >
            <Image src={team.logo} alt="logo" />
          </div>
          <h1 className="font-bold text-[24px]">{team.name}</h1>
        </div>

        <div
          className={`flex flex-col justify-between items-center w-[520px] h-[300px] bg-gradient-to-b py-5 px-[27px] rounded-[8px] transition-all duration-300 hover:scale-105 cursor-pointer`}
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
                  <div key={driver.number} className="flex gap-1 items-center">
                    <div className="flex flex-col">
                      <p>{driver.name}</p>
                      <div className="flex items-center gap-1">
                        <div className="bg-gray-300 rounded-full w-[20px] h-[20px]"></div>
                        <p className="text-[16px] font-bold">{driver.number}</p>
                      </div>
                    </div>
                    <Image
                      src={driver.image}
                      alt={driver.name}
                      className="w-16 h-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Image
            src={team.car}
            alt="mcLarenCar"
            className="w-[465px] h-[139px]"
          />
        </div>
      </div>
    </>
  );
}
