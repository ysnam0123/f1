import { WeatherSessionSummary } from '@/app/api/f1/race/weather';
import Top3Position from './Top3Position';
import WeatherSummary from '../WeatherSummary';
import FastestPitStop from './FastestPS';
import SafetyCarSummary from './SafetyCarSum';
import { RaceControl } from '@/app/api/f1/race/raceControl';
import { DriverPositionGain } from '@/app/api/f1/race/position';
import { PitView } from '@/app/api/f1/race/pit';

export default function Summary({
  weather,
  SafetyCarNumber,
  raceControl,
  totalLaps,
  setSelectedTab,
  positionGain,
  pit,
  year,
}: {
  pit: PitView[];
  weather: WeatherSessionSummary;
  SafetyCarNumber: number;
  raceControl: RaceControl[];
  totalLaps: number;
  setSelectedTab: (tab: string) => void;
  positionGain: DriverPositionGain[];
  year: number;
}) {
  console.log('3번 year :', year);
  return (
    <>
      <div className="px-5 md:px-0">
        <div className="grid w-full gap-5 rounded-xl bg-none py-4 sm:gap-5 sm:bg-[#1A1A1A] sm:px-10 lg:grid-cols-2">
          <WeatherSummary weather={weather} />
          <Top3Position
            setSelectedTab={setSelectedTab}
            positionGain={positionGain}
          />
          <FastestPitStop
            year={year}
            pit={pit}
            setSelectedTab={setSelectedTab}
          />
          <SafetyCarSummary
            SafetyCarNumber={SafetyCarNumber}
            raceControl={raceControl}
            totalLaps={totalLaps}
            setSelectedTab={setSelectedTab}
          />
        </div>
      </div>
    </>
  );
}
