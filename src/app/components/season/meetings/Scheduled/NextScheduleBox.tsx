import { Session } from '@/types/meeting';
import { Timer } from 'lucide-react';

interface PageProps {
  data: Session;
}

export default function NextScheduleBox({ data }: PageProps) {
  const date = data.date_start.split('T')[0];
  const time = data.date_start.split('T')[1].split('+')[0];
  return (
    <>
      <div className="flex items-center gap-3 rounded-4xl border-2 border-[#FED010] bg-[#212121] px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FED010]">
          <Timer className="h-8 w-8 text-white" />
        </div>
        <p
          style={{ fontFamily: 'Paperlolgy', fontWeight: 900 }}
          className="text-[24px]"
        >
          Session Not Started
        </p>
        <p
          style={{ fontFamily: 'Paperlolgy', fontWeight: 500 }}
          className="text-[20px]"
        >
          아직 시작되지 않은 세션입니다
        </p>
        <p
          style={{ fontFamily: 'Paperlolgy', fontWeight: 500 }}
          className="ml-3 text-[20px]"
        >
          <span>
            {date} {time}
          </span>
          <span className="pl-1 text-[#FED010]">시작 예정</span>
        </p>
      </div>
    </>
  );
}
