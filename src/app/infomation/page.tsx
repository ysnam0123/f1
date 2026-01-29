'use client';

import { useEffect, useMemo, useState } from 'react';
import { Session } from '@/types/meeting';
import { useSessionData } from '../api/meeting/Sessions';
import { useMeetingData } from '../api/meeting/Meetings';
import { useStartingGridData } from '../api/f1/race/starting_grid';
import SessionNav from '../components/season/meetings/SessionNav';
import { useSortedResults } from '../api/meeting/sessionResult';

export default function Page() {
  const meetingKey = 1229;
  const [selectedSessionKey, setSelectedSessionKey] = useState<number | null>(
    null,
  );
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const getSessionKeyByName = (
    sessions: Session[],
    name: string,
  ): number | null =>
    sessions.find((s) => s.session_name === name)?.session_key ?? null;
  // 미팅 정보
  const { data: meetingInfo, isLoading: meetingLoading } =
    useMeetingData(meetingKey);

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
  // const { data: sessionResults = [], isLoading: sessionResultLoading } =
  //   useSortedResults(selectedSessionKey);
  const {
    data: startingGridData,
    isLoading: startingGridLoading,
    isError: startingGridError,
  } = useStartingGridData(qualifyingSessionKey!, !sessionLoading);
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
      <h1>page Component</h1>
      {/* {isSelected && (
        <SessionNav
          sessionTabs={sessions}
          isSelected={isSelected}
          setIsSelectedAction={setIsSelected}
        />
      )} */}
    </>
  );
}
