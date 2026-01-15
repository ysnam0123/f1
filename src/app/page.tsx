'use client';
import HighLights from './components/home/HighLights';
import { useLiveSession } from '@/hooks/LiveSession';
import { useNextMeeting } from '@/hooks/NextMeeting';
import { useMeetingsWithStatusAndPodium } from '@/hooks/SeasonRacePodium';
import ConstructorStandings from './components/home/ConstructorStandings';
import DriverStandings from './components/home/DriverStandings';
import CircuitGrid from './components/home/CircuitGrid';
import HomeDriver from './components/home/HomeDriver';
import HomeLogo from './components/home/HomeLogo';
import NextSession from './components/home/NextSession';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/supabase/client';
import { useDriverRankingData } from './api/f1/ranking/driverRanking';
import { useCircuitData, useCircuitViewData } from './api/meeting/Circuit';
import F1Loading from './components/common/F1Loading';
import {
  groupTeamSeasonRanking,
  useTeamSeasonRanking,
} from './api/f1/ranking/TeamRanking';

export default function Page() {
  const { data, isPending, isError } = useLiveSession();
  if (data) {
    console.log('라이브 세션:', data);
  }
  const { data: nextMeeting, isLoading } = useNextMeeting();
  if (nextMeeting) {
    console.log('다음 미팅:', nextMeeting);
  }

  // 시즌 화면으로 넘어가기 위한 로딩
  const {
    data: meetings,
    isPending: load2025,
    error: meetingError,
  } = useMeetingsWithStatusAndPodium(2025);

  // 드라이버 랭킹
  const { data: DriverRanking, isPending: DriverRankingLoading } =
    useDriverRankingData(2025);
  const DRData = DriverRanking?.slice(0, 5);

  const { data: teamRanking, isPending: teamRankingLoading } =
    useTeamSeasonRanking(2025);

  const TData = useMemo(() => {
    if (!teamRanking) return [];
    return groupTeamSeasonRanking(teamRanking).slice(0, 5);
  }, [teamRanking]);

  // 서킷
  const { data: circuitData, isPending: circuitLoading } = useCircuitViewData();

  const CData = useMemo(() => {
    if (!circuitData) return [];
    return [...circuitData].sort(() => Math.random() - 0.5).slice(0, 6);
  }, [circuitData]);

  if (TData) {
    console.log('TData:', TData);
  }
  if (circuitData) {
    console.log(circuitData);
  }

  if (DriverRanking) {
    console.log('드라이버랭킹:', DriverRanking);
  }

  if (meetings) {
    console.log('레이스와 포디움:', meetings);
  }

  return (
    <>
      <section className="relative mx-auto flex max-w-300 flex-col gap-12.5 px-10 select-none">
        <div className="desktop">
          <Image
            src={'/homeImg.svg'}
            alt="homeImg"
            width={839}
            height={360}
            className="absolute right-10 -z-30"
          />
        </div>
        <HomeLogo />
        <NextSession />
        {DriverRankingLoading && (
          <div className="flex h-100 items-center justify-center">
            <F1Loading loadingText="레이스 분석 중..." />
          </div>
        )}
        {!DriverRankingLoading && DriverRanking && teamRanking && CData && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ConstructorStandings data={TData!} />
            <DriverStandings data={DRData!} />
            <HomeDriver />
            <CircuitGrid data={CData} />
          </div>
        )}
        <HighLights />
      </section>
    </>
  );
}
