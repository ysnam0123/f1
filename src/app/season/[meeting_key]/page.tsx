'use client';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';
import { Circuit } from '@/data/circuit';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RaceResultSection from '@/app/components/season/meetings/RaceResultSection';
import SessionResultSection from '@/app/components/season/meetings/SessionResultSection';
import Loading from '@/app/components/common/Loading';
import {
  useMeetingData,
  useSessionData,
  useSessionResultData,
} from '@/hooks/Session';
import SessionNav from '@/app/components/season/meetings/SessionNav'; // SessionType,
import { supabase } from '@/supabase/client';
import { fetchDriversWithMeetingKey } from '@/app/api/f1/Drivers';
import { fetchSession } from '@/app/api/meeting/Sessions';
import { fetchResult } from '@/app/api/meeting/sessionResult';

export default function Page() {
  const params = useParams<{ meeting_key: string }>();
  const meetingKey = Number(params.meeting_key);

  // 1차 완료
  const { data: meetingInfo, isLoading: meetingLoading } =
    useMeetingData(meetingKey);
  const { data: sessions = [], isPending: sessionLoading } =
    useSessionData(meetingKey);

  const [circuitInfo, setCircuitInfo] = useState<Circuit | null>(null);
  useEffect(() => {
    if (!meetingInfo?.circuit_key) return;
    const fetchCurcuitInfo = async () => {
      const { data, error } = await supabase
        .from('circuits')
        .select('*')
        .eq('circuit_key', meetingInfo?.circuit_key)
        .single();

      if (error) {
        console.error('서킷 정보 불러오기 실패:', error);
        return;
      }
      console.log('서킷 불러오기:', data);
      setCircuitInfo(data);
    };
    fetchCurcuitInfo();
  }, [meetingInfo]);

  // 아직 완료안됨
  const [isSelected, setIsSelected] = useState<string | null>(null);
  useEffect(() => {
    if (!sessions.length) return;
    if (isSelected) return;

    setIsSelected(sessions[0].session_name);
    setSelectedSessionKey(sessions[0].session_key);
  }, [sessions, isSelected]);

  const [selectedSessionKey, setSelectedSessionKey] = useState<number | null>(
    null,
  );

  const { data: sessionResults = [], isLoading: sessionResultLoading } =
    useSessionResultData(selectedSessionKey);

  // 현재 선택된 세션 찾기
  useEffect(() => {
    const findSession = sessions.find(
      (session) => session.session_name === isSelected,
    );
    if (findSession) {
      setSelectedSessionKey(findSession.session_key);
      const sr = async () => {
        const { data: sessionRanks, error } = await supabase
          .from('v_meeting_results')
          .select('*')
          .eq('session_key', findSession?.session_key)
          .order('position');
        if (error) {
          console.error('순위 불러오기 실패:', error);
        }
        console.log('정제된 순위정보:', sessionRanks);
      };
      sr();
    }
  }, [isSelected, sessions]);

  // 테스트용
  if (sessions) {
    console.log(sessions);
    const raceSession = sessions.find(
      (session) => session.session_name === 'Race',
    );
    console.log('raceSession:', raceSession?.session_key);
  }

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

          {isSelected === 'Race' ? (
            <RaceResultSection
              isPending={sessionResultLoading}
              sessionResults={sessionResults}
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
