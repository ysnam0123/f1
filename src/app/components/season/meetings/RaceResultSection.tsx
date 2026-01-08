'use client';
import Image from 'next/image';
import StatsticsCard from './StatsticsCard';
import PodiumCard from './PodiumCard';
import { RaceResults } from '@/types/meeting';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DnsDnfDsqInfo from './DnsDnfDsqInfo';
import RaceResultTable from './table/RaceResultTable';
import StartingGridTable from './table/StartingGridTable';
import ResultStatstics from './statstics/ResultStatstics';
import { useStintsData } from '@/app/api/f1/race/stints';
import { useRaceControlData } from '@/app/api/f1/race/raceControl';
import { usePitData } from '@/app/api/f1/race/pit';
import { useStartingGridWithDriver } from '@/app/api/f1/race/starting_grid';
import { useWeatherSummary } from '@/app/api/f1/race/weather';
import F1Loading from '../../common/F1Loading';

export default function RaceResultSection({
  sessionKey,
  sessionResults,
  isPending,
  startingGrid,
}: RaceResults) {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const podiumResults = sessionResults.slice(0, 3);
  const first = podiumResults.find((r) => r.position === 1);
  const second = podiumResults.find((r) => r.position === 2);
  const third = podiumResults.find((r) => r.position === 3);
  // 레이스 결과 분석
  const { data: sessionStints, isLoading: stintsLoading } =
    useStintsData(sessionKey);
  const { data: sessionRaceControl, isLoading: raceControlLoading } =
    useRaceControlData(sessionKey);
  const {
    data: pitData,
    isLoading: pitLoading,
    isError: pitError,
  } = usePitData(sessionKey);

  const { data: weatherSummary, isLoading: weatherLoading } =
    useWeatherSummary(sessionKey);

  const summaryLoading =
    stintsLoading || raceControlLoading || pitLoading || weatherLoading;

  // 테스트
  if (sessionStints) {
    console.log('sessionStints 불러옴:', sessionStints);
  }
  if (sessionRaceControl) {
    console.log('sessionRaceControl 불러옴:', sessionRaceControl);
  }
  if (pitData) {
    console.log('pitData 불러옴:', pitData);
  }
  if (weatherSummary) {
    console.log('weatherSummary 불러옴:', weatherSummary);
  }
  return (
    <>
      {isPending && <></>}
      <div className="my-5 flex items-end justify-center gap-7.5">
        {second && <PodiumCard result={second} rank={2} />}
        {first && <PodiumCard result={first} rank={1} />}
        {third && <PodiumCard result={third} rank={3} />}
      </div>
      <button
        onClick={() => setIsShow(!isShow)}
        className={`${isShow ? 'bg-[#4B4B4B]' : 'bg-[#212121]'} mb-5 flex h-10 cursor-pointer items-center justify-center rounded-[10px] px-3.25 font-semibold hover:bg-[#4B4B4B] active:bg-[#2b2b2b]`}
      >
        스타팅 그리드
      </button>
      <div className="mb-12.5 min-h-50 max-w-285 rounded-[10px] bg-[#1A1A1A] px-17.5 py-5">
        {!isShow ? (
          <>
            <RaceResultTable results={sessionResults} />
            <DnsDnfDsqInfo />
          </>
        ) : (
          <StartingGridTable results={startingGrid} />
        )}
      </div>
      {summaryLoading ? (
        <div className="flex h-100 items-center justify-center">
          <F1Loading loadingText="레이스 분석 중..." />
        </div>
      ) : (
        <ResultStatstics
          weather={weatherSummary!}
          pit={pitData!}
          stints={sessionStints!}
          raceControl={sessionRaceControl!}
        />
      )}
    </>
  );
}
