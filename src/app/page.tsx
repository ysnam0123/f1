import HighLights from './components/common/home/HighLights';
import News from './components/common/home/News';
import Ranks from './components/common/home/Ranks';
import Schedule from './components/common/home/Schedule';

export default function page() {
  return (
    <>
      <div className=" px-[70px] py-10">
        <div className="flex gap-21 mb-8">
          <div className="flex flex-col justify-between max-w-[820px] min-h-[585px] gap-[30px]">
            {/* schedule */}
            <Schedule />
            {/* highlights */}
            <HighLights />
          </div>
          <Ranks />
        </div>
        {/* news */}
        <News />
      </div>
    </>
  );
}
