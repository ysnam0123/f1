import { WeatherSessionSummary } from '@/app/api/f1/race/weather';
import Top3Position from './Top3Position';
import WeatherSummary from '../WeatherSummary';
import FastestPitStop from './FastestPS';
import SafetyCarSummary from './SafetyCarSum';
import { RaceControl } from '@/app/api/f1/race/raceControl';

export default function Summary({
  weather,
  SafetyCarNumber,
  raceControl,
  totalLaps,
}: {
  weather: WeatherSessionSummary;
  SafetyCarNumber: number;
  raceControl: RaceControl[];
  totalLaps: number;
}) {
  return (
    <>
      <div className="grid gap-10 rounded-xl bg-[#1A1A1A] p-4 sm:grid-cols-2 sm:px-10">
        <WeatherSummary weather={weather} />
        <Top3Position />
        <FastestPitStop />
        <SafetyCarSummary
          SafetyCarNumber={SafetyCarNumber}
          raceControl={raceControl}
          totalLaps={totalLaps}
        />
      </div>
    </>
  );
}
