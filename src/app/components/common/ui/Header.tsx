'use client';

import Image from 'next/image';
import f1 from '/public/f1.png';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TeamBox from './dropdown/TeamBox';
import DriverBox from './dropdown/DriverBox';
export default function Header() {
  const [openTeam, setOpenTeam] = useState(false);
  const [openDriver, setOpenDriver] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="px-[70px] flex gap-[70px] py-[35px] select-none ">
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
          <li className="cursor-pointer hover:border-b-2 hover:border-[#ffffff]">
            2025 시즌
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#ffffff]">
            순위
          </li>
          <li
            className="cursor-pointer hover:border-b-2 hover:border-[#ffffff]"
            onClick={() => router.push('/team')}
            onMouseEnter={() => {
              setOpenDriver(false);
              setOpenTeam(true);
            }}
          >
            팀
          </li>
          <li
            className="cursor-pointer hover:border-b-2 hover:border-[#ffffff]"
            onMouseEnter={() => {
              setOpenDriver(true);
              setOpenTeam(false);
            }}
          >
            드라이버
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#ffffff]">
            서킷
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-[#ffffff]">
            f1 알아보기
          </li>
        </ul>
        {openTeam && <TeamBox onMouseLeave={() => setOpenTeam(false)} />}
        {openDriver && <DriverBox onMouseLeave={() => setOpenDriver(false)} />}
      </div>
    </>
  );
}
