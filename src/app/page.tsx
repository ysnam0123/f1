import DriverCards from './components/home/DriverCards';
import HighLights from './components/home/HighLights';
import News from './components/home/News';
import Ranks from './components/home/Ranks';
import Results from './components/home/Results';
import Schedule from './components/home/Schedule';

export default function page() {
  return (
    <>
      <div className="mb-[30px]">
        <Schedule />
      </div>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10 items-center ">
        <Results />
        <div>
          <HighLights />
        </div>
        <div className="">
          <Ranks />
        </div>
        <DriverCards />
      </div>
    </>
  );
}
