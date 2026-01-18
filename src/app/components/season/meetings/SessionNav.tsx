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
      <div className="relative">
        <div className="hide-scrollbar flex items-center justify-normal overflow-x-scroll sm:justify-between">
          <ul className="flex gap-1.5 sm:mb-7.5 sm:gap-2.5">
            {sessionTabs.map((session) => (
              <li
                key={session.session_name}
                onClick={() => setIsSelectedAction(session.session_name)}
                className={`${isSelected === session.session_name ? 'border-b-2 border-[#D80003] sm:border-0 sm:bg-[#4B4B4B]' : 'bg-[#212121]'} flex h-10 cursor-pointer items-center justify-center truncate rounded-[5px] px-4 text-[13px] font-semibold hover:bg-[#4B4B4B] sm:rounded-[10px] sm:text-[18px]`}
              >
                {session.session_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-10 bg-linear-to-l from-[#212121]/80 to-transparent sm:hidden" />
      </div>
    </>
  );
}
