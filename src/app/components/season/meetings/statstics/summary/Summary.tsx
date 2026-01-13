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
}: {
  pit: PitView[];
  weather: WeatherSessionSummary;
  SafetyCarNumber: number;
  raceControl: RaceControl[];
  totalLaps: number;
  setSelectedTab: (tab: string) => void;
  positionGain: DriverPositionGain[];
}) {
  return (
    <>
      <div className="grid gap-10 rounded-xl bg-[#1A1A1A] pt-4 sm:grid-cols-2 sm:px-10">
        <WeatherSummary weather={weather} />
        <Top3Position
          setSelectedTab={setSelectedTab}
          positionGain={positionGain}
        />
        <FastestPitStop pit={pit} setSelectedTab={setSelectedTab} />
        <SafetyCarSummary
          SafetyCarNumber={SafetyCarNumber}
          raceControl={raceControl}
          totalLaps={totalLaps}
          setSelectedTab={setSelectedTab}
        />
      </div>
    </>
  );
}
