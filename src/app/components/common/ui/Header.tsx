'use client';

import Image from 'next/image';
import f1 from '/public/f1.png';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TeamBox from './dropdown/TeamBox';
import DriverBox from './dropdown/DriverBox';
import { ChevronDown } from 'lucide-react';
export default function Header() {
  const [openTeam, setOpenTeam] = useState(false);
  const [openDriver, setOpenDriver] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="px-[70px] flex gap-[70px] items-center py-[10px]  select-none ">
        <Image
          src={f1}
          alt="f1"
          className="h-[26px] w-[102px] cursor-pointer"
          onClick={() => router.push('/')}
          onMouseEnter={() => {
            setOpenDriver(false);
            setOpenTeam(false);
          }}
        />
        <ul className="flex gap-14 ">
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#ffffff] py-[25px]">
            2025 시즌
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#ffffff] py-[25px]">
            순위
          </li>
          <li
            className="flex gap-0 cursor-pointer border-b-2 border-transparent hover:border-[#ffffff] py-[25px]"
            onClick={() => router.push('/team')}
            onMouseEnter={() => {
              setOpenDriver(false);
              setOpenTeam(true);
            }}
          >
            <span>팀</span>
            <ChevronDown />
          </li>
          <li
            className="flex gap-0 cursor-pointer border-b-2 border-transparent hover:border-[#ffffff] py-[25px]"
            onMouseEnter={() => {
              setOpenDriver(true);
              setOpenTeam(false);
            }}
          >
            <span>드라이버</span>
            <ChevronDown />
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#ffffff] py-[25px]">
            서킷
          </li>
          <li className="cursor-pointer border-b-2 border-transparent hover:border-[#ffffff] py-[25px]">
            f1 알아보기
          </li>
        </ul>
        {openTeam && <TeamBox onMouseLeave={() => setOpenTeam(false)} />}
        {openDriver && <DriverBox onMouseLeave={() => setOpenDriver(false)} />}
      </div>
    </>
  );
}
