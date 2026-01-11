'use client';
import { Session } from '@/types/meeting';

export default function SessionNav({
  sessionTabs,
  isSelected,
  setIsSelectedAction,
}: {
  sessionTabs: Session[];
  isSelected: string;
  setIsSelectedAction: (sessionName: string) => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <ul className="mb-7.5 flex gap-2.5">
          {sessionTabs.map((session) => (
            <li
              key={session.session_name}
              onClick={() => setIsSelectedAction(session.session_name)}
              className={`${isSelected === session.session_name ? 'bg-[#4B4B4B]' : 'bg-[#212121]'} flex h-10 cursor-pointer items-center justify-center rounded-[10px] px-3.25 font-semibold hover:bg-[#4B4B4B]`}
            >
              {session.session_name}
            </li>
          ))}
        </ul>
        <div className="relative">
          <p className="absolute -top-8 -left-1/2 w-46 text-[16px] font-semibold">
            데이터가 불러와지지 않나요?
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex h-10 cursor-pointer items-center justify-center rounded-[10px] bg-[#212121] px-3.25 font-semibold hover:bg-[#4B4B4B]"
          >
            새로고침
          </button>
        </div>
      </div>
    </>
  );
}
