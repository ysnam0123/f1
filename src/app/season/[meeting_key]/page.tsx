'use client';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';
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
import { useDriverMeetingKeyData } from '@/app/api/f1/DriversMeetingKey';
import { useMeetingKeySortedResults } from '@/app/api/meeting/sessionResultMeetingKey';
import { Circuit } from '@/types/circuit';
import ScheduledGrandPrix from '@/app/components/season/meetings/Scheduled/ScheduledGrandPrix';

export default function Page() {
  const params = useParams<{ meeting_key: string }>();
  const meetingKey = Number(params.meeting_key);
  const [selectedSessionKey, setSelectedSessionKey] = useState<number | null>(
    null,
  );
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const getSessionKeyByName = (
    sessions: Session[],
    name: string,
  ): number | null =>
    sessions.find((s) => s.session_name === name)?.session_key ?? null;
  function useCircuit(circuitKey?: number) {
    const [circuit, setCircuit] = useState<Circuit | null>(null);
    useEffect(() => {
      if (!circuitKey) return;
      fetchCircuitByKey(circuitKey).then(setCircuit);
    }, [circuitKey]);
    return circuit;
  }

  // 미팅 정보
  const { data: meetingInfo, isLoading: meetingLoading } =
    useMeetingData(meetingKey);
  // 서킷 정보 찾기
  const circuitInfo = useCircuit(meetingInfo?.circuit_key);
  // 세션 정보
  const { data: sessions = [], isPending: sessionLoading } =
    useSessionData(meetingKey);

  // 레이스세션, 퀄리파잉 세션키 찾기
  const raceSessionKey = useMemo(
    () => getSessionKeyByName(sessions, 'Race'),
    [sessions],
  );
  const qualifyingSessionKey = useMemo(
    () => getSessionKeyByName(sessions, 'Qualifying'),
    [sessions],
  );
  const [qSessionKeyReady, setQSessionKeyReady] = useState(false);

  useEffect(() => {
    if (qualifyingSessionKey !== null) {
      setQSessionKeyReady(true);
    } else {
      setQSessionKeyReady(false);
    }
  }, [qualifyingSessionKey]);

  // 드라이버 호출
  const { data: driverData = [], isPending: driverLoading } =
    useDriverData(selectedSessionKey);

  // meeting_key로 드라이버 호출
  const {
    data: driverMeetingKeyData = [],
    isPending: driverMeetingKeyLoading,
  } = useDriverMeetingKeyData(meetingKey);

  if (driverMeetingKeyData) {
    console.log('미팅키로 드라이버 호출:', driverMeetingKeyData);
  }

  // 미팅키로 세션결과 호출
  const {
    data: sessionMeetingKeyResults = [],
    isLoading: sessionMeetingkeyResultLoading,
  } = useMeetingKeySortedResults(meetingKey, selectedSessionKey);
  if (sessionMeetingKeyResults) {
    console.log('sessionMeetingKeyResults:', sessionMeetingKeyResults);
  }

  const isSessionResultReady =
    !!selectedSessionKey && !!driverData && driverData.length >= 15;
  const { data: sessionResults = [], isLoading: sessionResultLoading } =
    useSortedResults(selectedSessionKey);

  // 스타팅 그리드 정보 불러오기
  const isStartingGridReady =
    qSessionKeyReady && driverData && driverData.length >= 15;

  const {
    data: startingGridData,
    isLoading: startingGridLoading,
    isError: startingGridError,
  } = useStartingGridData(qualifyingSessionKey!, isStartingGridReady);

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

  function isSessionFinished(session: Session) {
    return new Date(session.date_end) < new Date();
  }
  const selectedSession = useMemo(
    () => sessions.find((s) => s.session_name === isSelected),
    [sessions, isSelected],
  );
  const isSelectedSessionFinished = selectedSession
    ? isSessionFinished(selectedSession)
    : false;

  const sessionFinishMap = useMemo(() => {
    return sessions.reduce<Record<string, boolean>>((acc, session) => {
      acc[session.session_name] = isSessionFinished(session);
      return acc;
    }, {});
  }, [sessions]);
  console.log('선택된 세션:', selectedSession);
  console.log('세션 종료 상태:', isSelectedSessionFinished);
  console.log('세션피니쉬 맵:', sessionFinishMap);

  const isPageReady = !!meetingInfo && !!circuitInfo && sessions.length > 0;

  useEffect(() => {
    console.log('서킷 정보:', circuitInfo);
    console.log('미팅 정보:', meetingInfo);
    console.log('세션 정보:', sessions);
    console.log('레이스 세션키:', raceSessionKey);
    console.log('퀄리파잉 세션키:', qualifyingSessionKey);
  }, [
    circuitInfo,
    meetingInfo,
    sessions,
    raceSessionKey,
    qualifyingSessionKey,
  ]);

  // useEffect(() => {
  //   console.log('레이스 세션키:', raceSessionKey);
  //   console.log('퀄리파잉 세션키:', qualifyingSessionKey);
  //   console.log('세션 결과:', sessionResults);
  //   console.log('드라이버 정보:', driverData);
  //   console.log('스타팅 그리드 정보:', startingGridData);
  // }, [
  //   circuitInfo,
  //   meetingInfo,
  //   sessions,
  //   raceSessionKey,
  //   qualifyingSessionKey,
  //   sessionResults,
  //   driverData,
  //   startingGridData,
  // ]);

  return (
    <>
      <>
        <SeasonHeroBox meetingInfo={meetingInfo} circuitInfo={circuitInfo} />
        {!isPageReady && (
          <>
            {' '}
            <div className="flex h-100 items-center justify-center sm:h-100">
              <F1Loading loadingText="로딩 중..." />
            </div>
          </>
        )}
        {isPageReady && (
          <>
            <section className="mx-auto sm:max-w-285 sm:px-0">
              <>
                {isSelected && (
                  <SessionNav
                    sessionTabs={sessions}
                    isSelected={isSelected}
                    setIsSelectedAction={setIsSelected}
                    sessionFinishMap={sessionFinishMap}
                  />
                )}
                <div>
                  {!isSelectedSessionFinished && selectedSession && (
                    <ScheduledGrandPrix
                      data={selectedSession}
                      circuitData={circuitInfo}
                    />
                  )}
                  {isSelectedSessionFinished && (
                    <>
                      {isSelected === 'Race' && startingGridData ? (
                        <RaceResultSection
                          sessionKey={raceSessionKey}
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
                </div>
              </>
            </section>
          </>
        )}
      </>
    </>
  );
}
