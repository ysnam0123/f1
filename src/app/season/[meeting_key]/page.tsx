'use client';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';
import { Circuit } from '@/data/circuit';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import RaceResultSection from '@/app/components/season/meetings/RaceResultSection';
import SessionResultSection from '@/app/components/season/meetings/SessionResultSection';
import SessionNav from '@/app/components/season/meetings/SessionNav';
import { fetchCircuitByKey } from '@/app/api/meeting/Circuit';
import { Session } from '@/types/meeting';
import F1Loading from '@/app/components/common/F1Loading';
import { useStartingGridData } from '@/app/api/f1/race/starting_grid';
import { useSortedResults } from '@/app/api/meeting/sessionResult';
import { useMeetingData } from '@/app/api/meeting/Meetings';
import { useSessionData } from '@/app/api/meeting/Sessions';
import { useDriverData } from '@/app/api/f1/Drivers';

export default function Page() {
  function useCircuit(circuitKey?: number) {
    const [circuit, setCircuit] = useState<Circuit | null>(null);
    useEffect(() => {
      if (!circuitKey) return;
      fetchCircuitByKey(circuitKey).then(setCircuit);
    }, [circuitKey]);
    return circuit;
  }
  const params = useParams<{ meeting_key: string }>();
  const meetingKey = Number(params.meeting_key);
  const [selectedSessionKey, setSelectedSessionKey] = useState<number | null>(
    null,
  );
  const [isSelected, setIsSelected] = useState<string | null>(null);
  // 미팅 정보
  const { data: meetingInfo, isLoading: meetingLoading } =
    useMeetingData(meetingKey);

  // 세션 정보
  const { data: sessions = [], isPending: sessionLoading } =
    useSessionData(meetingKey);

  // 레이스세션, 퀄리파잉 세션키 찾기
  const getSessionKeyByName = (
    sessions: Session[],
    name: string,
  ): number | null =>
    sessions.find((s) => s.session_name === name)?.session_key ?? null;
  const raceSessionKey = useMemo(
    () => getSessionKeyByName(sessions, 'Race'),
    [sessions],
  );
  const qualifyingSessionKey = useMemo(
    () => getSessionKeyByName(sessions, 'Qualifying'),
    [sessions],
  );
  // 서킷 정보 찾기
  const circuitInfo = useCircuit(meetingInfo?.circuit_key);
  const { data: sessionResults = [], isLoading: sessionResultLoading } =
    useSortedResults(selectedSessionKey);

  // 드라이버 호출
  const { data: driverData, isPending } = useDriverData(selectedSessionKey);
  if (driverData) {
    console.log('드라이버 호출', driverData);
  }

  // 스타팅 그리드 정보 불러오기
  const {
    data: startingGridData,
    isLoading: startingGridLoading,
    isError: startingGridError,
  } = useStartingGridData(qualifyingSessionKey);

  if (startingGridData) {
    console.log('startingGridData 불러옴:', startingGridData);
  }
  useEffect(() => {
    if (!sessions.length || isSelected) return;
    setIsSelected(sessions[0].session_name);
  }, [sessions, isSelected]);

  useEffect(() => {
    if (!isSelected) return;
    const sessionKey = getSessionKeyByName(sessions, isSelected);
    if (!sessionKey) return;
    setSelectedSessionKey(sessionKey);
  }, [isSelected, sessions]);

  return (
    <>
      <>
        <SeasonHeroBox meetingInfo={meetingInfo} circuitInfo={circuitInfo} />
        <section className="mx-auto max-w-285">
          {meetingLoading || sessionLoading ? (
            <div className="flex h-200 items-center justify-center">
              <F1Loading />
            </div>
          ) : (
            <>
              {isSelected && (
                <SessionNav
                  sessionTabs={sessions}
                  isSelected={isSelected}
                  setIsSelectedAction={setIsSelected}
                />
              )}
              {isSelected === 'Race' && startingGridData ? (
                <RaceResultSection
                  sessionKey={raceSessionKey}
                  isPending={sessionResultLoading || startingGridLoading}
                  sessionResults={sessionResults}
                  startingGrid={startingGridData}
                />
              ) : (
                selectedSessionKey && (
                  <SessionResultSection
                    isPending={sessionResultLoading}
                    sessionResults={sessionResults}
                  />
                )
              )}
            </>
          )}
        </section>
      </>
    </>
  );
}

// 드라이버 데이터 저장
// useEffect(() => {
//   if (!meetingKey) return;
//   const upsertDriverData = async () => {
//     const drivers = await fetchDriversWithMeetingKey(meetingKey);
//     const uniqueDrivers = Array.from(
//       new Map(drivers.map((d) => [d.driver_number, d])).values(),
//     );

//     const { error } = await supabase.from('drivers').upsert(uniqueDrivers, {
//       onConflict: 'meeting_key,driver_number',
//     });
//     if (error) {
//       console.error('드라이버 저장 실패:', error);
//     }
//   };
//   upsertDriverData();
// }, [meetingKey]);
