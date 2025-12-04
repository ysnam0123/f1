import DriverCards from './components/home/DriverCards';
import HighLights from './components/home/HighLights';
import LatestResult from './components/home/LatestResult';
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
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-10">
        {/* <Results /> */}
        <div className="flex min-h-[670px] gap-[50px]">
          <Ranks />
          <LatestResult />
        </div>
        <div>
          <HighLights />
        </div>

        <DriverCards />
      </div>
    </>
  );
}
