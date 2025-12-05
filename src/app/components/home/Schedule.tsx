import ScheduleHero from '../schedule/ScheduleHero';
import SessionList from '../schedule/SessionList';

export default function Schedule() {
  return (
    <>
      <div className="relative mb-[30px] flex min-w-[820px] bg-[#1a1a1a] select-none">
        <ScheduleHero />
        <SessionList />
      </div>
    </>
  );
}
