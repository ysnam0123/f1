'use client';

import Image from 'next/image';
import f1 from '/public/f1.png';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Header() {
  const [openTeam, setOpenTeam] = useState(false);
  const [openDriver, setOpenDriver] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="px-[70px] flex gap-[70px] py-[35px] select-none ">
        <Image src={f1} alt="f1" className="h-[26px] w-[102px]" />
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
        {openTeam && (
          <div
            className="absolute left-0 top-[100px] w-screen min-h-[574px] bg-[#1a1a1a] z-100"
            onMouseLeave={() => setOpenTeam(false)}
          >
            team
          </div>
        )}
        {openDriver && (
          <div
            className="absolute left-0 top-[100px] w-screen min-h-[574px] bg-[#1a1a1a] z-100"
            onMouseLeave={() => setOpenDriver(false)}
          >
            driver
          </div>
        )}
      </div>
    </>
  );
}
