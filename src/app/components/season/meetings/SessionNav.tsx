'use client';

export type SessionType =
  | 'Practice 1'
  | 'Practice 2'
  | 'Practice 3'
  | 'Qualifying'
  | 'Race';

interface SessionTab {
  label: string;
  value: SessionType;
}
export default function SessionNav({
  sessionTabs,
  isSelected,
  setIsSelectedAction,
}: {
  sessionTabs: SessionTab[];
  isSelected: string;
  setIsSelectedAction: React.Dispatch<React.SetStateAction<SessionType>>;
}) {
  return (
    <>
      <ul className="mb-7.5 flex gap-2.5">
        {sessionTabs.map((session) => (
          <li
            key={session.value}
            onClick={() => setIsSelectedAction(session.value)}
            className={`${isSelected === session.value ? 'bg-[#4B4B4B]' : 'bg-[#212121]'} h-12.5 cursor-pointer rounded-[10px] px-3.25 py-3.75 font-semibold hover:bg-[#4B4B4B]`}
          >
            {session.label}
          </li>
        ))}
      </ul>
    </>
  );
}
