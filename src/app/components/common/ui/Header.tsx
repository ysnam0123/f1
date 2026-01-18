'use client';

import Image from 'next/image';
import f1 from '/public/f1.png';
import logo from '/public/AfterLapLogo.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TeamBox from './dropdown/TeamBox';
import DriverBox from './dropdown/DriverBox';
import { ChevronDown } from 'lucide-react';
import LogoLoop from '@/components/LogoLoop';
import { loopLogos } from '@/components/TeamLogoLoop';
export default function Header() {
  const [openTeam, setOpenTeam] = useState(false);
  const [openDriver, setOpenDriver] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="mb-4 flex h-12.5 flex-col px-2.5 py-2.5 sm:h-23.5">
        <LogoLoop
          logos={loopLogos}
          speed={20}
          direction="left"
          logoHeight={28}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="team logos"
          className="desktop"
        />
        <div className="flex items-center gap-17.5 select-none sm:px-17.5">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer"
            width={125}
            height={30}
            onClick={() => router.push('/')}
            onMouseEnter={() => {
              setOpenDriver(false);
              setOpenTeam(false);
            }}
          />
          <div className="desktop">
            <ul className="flex gap-14">
              <li
                onClick={() => router.push('/season')}
                className="cursor-pointer border-b-2 border-transparent py-6.25 hover:border-[#ffffff]"
              >
                시즌
              </li>
              <li
                onClick={() => router.push('/ranking')}
                className="cursor-pointer border-b-2 border-transparent py-6.25 hover:border-[#ffffff]"
              >
                순위
              </li>
              <li
                className="flex cursor-pointer gap-0 border-b-2 border-transparent py-6.25 hover:border-[#ffffff]"
                onClick={() => {
                  router.push('/team');
                  setOpenTeam(false);
                }}
                onMouseEnter={() => {
                  setOpenDriver(false);
                  setOpenTeam(true);
                }}
              >
                <span>팀</span>
                <ChevronDown />
              </li>
              <li
                className="flex cursor-pointer gap-0 border-b-2 border-transparent py-6.25 hover:border-[#ffffff]"
                onClick={() => {
                  router.push('/driver');
                  setOpenDriver(false);
                }}
                onMouseEnter={() => {
                  setOpenDriver(true);
                  setOpenTeam(false);
                }}
              >
                <span>드라이버</span>
                <ChevronDown />
              </li>
              <li
                onClick={() => router.push('/circuit')}
                className="cursor-pointer border-b-2 border-transparent py-6.25 hover:border-[#ffffff]"
              >
                서킷
              </li>
              <li
                onClick={() => router.push('/infomation')}
                className="cursor-pointer border-b-2 border-transparent py-6.25 hover:border-[#ffffff]"
              >
                f1 알아보기
              </li>
            </ul>
          </div>
          {openTeam && <TeamBox onMouseLeave={() => setOpenTeam(false)} />}
          {openDriver && (
            <DriverBox
              onMouseLeave={() => setOpenDriver(false)}
              onClick={() => setOpenDriver(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}
