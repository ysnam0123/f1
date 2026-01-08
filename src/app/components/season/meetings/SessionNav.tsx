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
    </>
  );
}
