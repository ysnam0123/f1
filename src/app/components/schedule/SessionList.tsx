import SessionItem from './SessionItem';

export default function SessionList() {
  return (
    <>
      <div className="absolute right-0 flex h-full items-center justify-center bg-[#1A1A1A]">
        <div className="relative flex w-[532px] flex-col justify-center gap-[10px] px-[25px]">
          <SessionItem date="08.29" title="프랙티스 1" time="19:30 - 20:30" />
          <SessionItem date="08.29" title="프랙티스 2" time="19:30 - 20:30" />
          <SessionItem date="08.29" title="프랙티스 3" time="19:30 - 20:30" />
          <SessionItem date="08.29" title="퀄리파잉" time="19:30 - 20:30" />
          <SessionItem date="08.29" title="레이스" time="19:30 - 20:30" />
          <p className="absolute top-[-25px] right-5 text-[10px]">
            * 시간은 한국시간 기준입니다
          </p>
        </div>
      </div>
    </>
  );
}
