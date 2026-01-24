'use client';
import { Session } from '@/types/meeting';
import Image from 'next/image';

interface PageProps {
  data: Session;
}
export default function SessionBox({ data }: PageProps) {
  const date = data.date_start.split('T')[0];
  const time = data.date_start.split('T')[1].split('+')[0];
  const isFinished = () => {
    return new Date(data.date_end) < new Date();
  };
  return (
    <>
      <div className="flex h-full w-full flex-col items-center gap-3 rounded-[10px] border border-(--color-box-border) bg-(--color-box-bg) px-5 py-3">
        <div className="flex items-center gap-1">
          <Image
            src={'/icons/checker.svg'}
            alt="checker"
            width={40}
            height={40}
          />
          <h1
            style={{ fontFamily: 'RiaSans', fontWeight: 900 }}
            className="text-[16px]"
          >
            {data.session_name}
          </h1>
        </div>
        <span
          style={{ fontFamily: 'RiaSans', fontWeight: 500 }}
          className="text-[14px]"
        >
          {date} / {time}
        </span>
        <button className="h-10 cursor-pointer rounded-[5px] bg-[#212121] px-4 py-2 text-[16px]">
          {isFinished() ? '결과보기' : '일정보기'}
        </button>
      </div>
    </>
  );
}
