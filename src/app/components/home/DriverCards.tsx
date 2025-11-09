'use client';

import { useDriverData } from '@/app/api/f1/Drivers';
import {
  driveImgMapping,
  driverNameMapping,
  teamLogoMapping,
} from '@/data/mapping';
import { teamOrder } from '@/data/teamOrder';
import Image from 'next/image';
import { useEffect } from 'react';

export default function DriverCards() {
  const nothing = true;
  const { data, isPending, isError } = useDriverData();
  const customTeamOrder = data
    ? [...data].sort((a, b) => {
        const ai = teamOrder.indexOf(a.team_name);
        const bi = teamOrder.indexOf(b.team_name);

        if (ai === -1 && bi === -1)
          return a.team_name.localeCompare(b.team_name);
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      })
    : [];
  // for test
  useEffect(() => {
    if (data) {
      const sorted = [...data].sort((a, b) =>
        a.team_name.localeCompare(b.team_name),
      );
      console.log(sorted);
    }
  }, [data]);

  return (
    <>
      <div className="select-none">
        <div className="flex items-center justify-between">
          <h1 className="mb-3 text-[25px] font-bold">드라이버</h1>
          <h1 className="cursor-pointer border-b border-white hover:font-bold">
            전체 보기
          </h1>
        </div>
        <div className="hide-scrollbar flex min-h-[250px] w-[1300px] gap-[20px] overflow-x-scroll py-[52px] pl-3">
          {!isPending &&
            customTeamOrder.map((driver) => {
              const displayName =
                driverNameMapping[driver.full_name] || driver.full_name;
              const displayImg =
                driveImgMapping[driver.full_name] || driver.headshot_url;
              const displayTeamLogo = teamLogoMapping[driver.team_name];

              return (
                <div
                  key={driver.driver_number}
                  className="h-[300px] w-[220px] flex-none cursor-pointer rounded-[10px] transition-all duration-150 hover:scale-105"
                  style={{
                    background: `linear-gradient(165deg, #${driver.team_colour} 40%, #000000 100%)`,
                  }}
                  // style={{ backgroundColor: `#${driver.team_colour}` }}
                >
                  <div className="flex flex-col items-center gap-4 p-5">
                    <div className="flex items-center gap-30">
                      <div
                        className="relative flex h-10 w-10 items-center justify-center rounded-full p-[4px]"
                        style={{ backgroundColor: `${driver.team_colour}` }}
                      >
                        <Image
                          src={displayTeamLogo}
                          className="z-1000"
                          alt="logo"
                          width={32}
                          height={32}
                        />
                        <div className="absolute h-10 w-10 rounded-[100%] bg-black opacity-30"></div>
                      </div>
                      <p className="text-[20px] font-semibold">
                        {driver.driver_number}
                      </p>
                    </div>
                    <div className="">
                      <Image
                        src={displayImg}
                        alt={displayName}
                        width={160}
                        height={160}
                      />
                    </div>
                    <p className="text-[20px] font-semibold">{displayName}</p>
                  </div>
                </div>
              );
            })}
          {isError && <div>드라이버를 불러올 수 없음</div>}
        </div>
      </div>
    </>
  );
}
