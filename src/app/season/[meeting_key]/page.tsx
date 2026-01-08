'use client';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';
import { Circuit } from '@/data/circuit';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import RaceResultSection from '@/app/components/season/meetings/RaceResultSection';
import SessionResultSection from '@/app/components/season/meetings/SessionResultSection';
import {
  useMeetingData,
  useSessionData,
  useSessionResultData,
} from '@/hooks/Session';
import SessionNav from '@/app/components/season/meetings/SessionNav';
import { fetchSessionResults } from '@/app/api/meeting/Sessions';
import { fetchCircuitByKey } from '@/app/api/meeting/Circuit';
import { Session } from '@/types/meeting';
import { useStartingGridWithDriver } from '@/app/api/f1/race/starting_grid';

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
  const { data: meetingInfo, isLoading: meetingLoading } =
    useMeetingData(meetingKey);
  const { data: sessions = [], isPending: sessionLoading } =
    useSessionData(meetingKey);
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
  const circuitInfo = useCircuit(meetingInfo?.circuit_key);
  const { data: sessionResults = [], isLoading: sessionResultLoading } =
    useSessionResultData(selectedSessionKey);
  const {
    data: startingGridData,
    isLoading: startingGridLoading,
    isError: startingGridError,
  } = useStartingGridWithDriver(qualifyingSessionKey);

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
    fetchSessionResults(sessionKey).then((results) => {
      console.log('정제된 순위정보:', results);
    });
  }, [isSelected, sessions]);

  return (
    <>
      <>
        <SeasonHeroBox meetingInfo={meetingInfo} circuitInfo={circuitInfo} />
        <section className="mx-auto max-w-285">
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
              isPending={sessionResultLoading}
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
        </section>
      </>
    </>
  );
}

// 현재 선택된 세션 찾기
// useEffect(() => {
//   const findSession = sessions.find(
//     (session) => session.session_name === isSelected,
//   );
//   if (findSession) {
//     setSelectedSessionKey(findSession.session_key);
//   }
//   console.log('현재 선택된 세션 찾기:', findSession);
// }, [isSelected, sessions]);

// // 세션 정보 저장
// useEffect(() => {
//   const fetchSessions = async () => {
//     const results = await fetchSession(meetingKey);
//     const { data, error } = await supabase
//       .from('sessions')
//       .upsert(results, { onConflict: 'session_key' })
//       .select();
//     console.log('data:', data);
//     console.log('error:', error);
//   };
//   fetchSessions();
// }, []);

// 세션 결과 저장
// useEffect(() => {
//   const fetchSessionResult = async () => {
//     const results = await fetchResult(meetingKey);
//     const { data: serverData, error } = await supabase
//       .from('session_results')
//       .upsert(results, { onConflict: 'session_key,driver_number' })
//       .select();

//     console.log('data:', serverData);
//     console.log('error:', error);
//   };
//   fetchSessionResult();
// }, []);

// if (meetingLoading || sessionLoading) {
//   return (
//     <div className="flex h-100 items-center justify-center">
//       <Loading className="h-100 w-100" />
//     </div>
//   );
// }

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

// if (meetingLoading || sessionLoading) {
//   return (
//     <div className="flex h-100 items-center justify-center">
//       <Loading className="h-100 w-100" />
//     </div>
//   );
// }
