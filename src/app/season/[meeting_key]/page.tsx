'use client';
import SeasonHeroBox from '@/app/components/season/SeasonHeroBox';
import { Circuit, circuit } from '@/data/circuit';
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
import SessionNav from '@/app/components/season/meetings/SessionNav';

export default function Page() {
  const params = useParams<{ meeting_key: string }>();
  const meetingKey = Number(params.meeting_key);
  type SessionType =
    | 'Practice 1'
    | 'Practice 2'
    | 'Practice 3'
    | 'Qualifying'
    | 'Race';

  const sessionTabs: { label: string; value: SessionType }[] = [
    { label: '프랙티스 1', value: 'Practice 1' },
    { label: '프랙티스 2', value: 'Practice 2' },
    { label: '프랙티스 3', value: 'Practice 3' },
    { label: '퀄리파잉', value: 'Qualifying' },
    { label: '레이스', value: 'Race' },
  ];
  const [isSelected, setIsSelected] = useState<SessionType>('Practice 1');

  const [selectedSessionKey, setSelectedSessionKey] = useState<number | null>(
    null,
  );

  const { data: meetingInfo, isLoading: meetingLoading } =
    useMeetingData(meetingKey);

  const { data: sessions = [], isPending: sessionLoading } =
    useSessionData(meetingKey);

  const { data: sessionResults = [], isLoading } = useSessionResultData(
    selectedSessionKey!,
  );

  const [circuitInfo, setCircuitInfo] = useState<Circuit | null>(null);

  // 관련 서킷 불러오기
  useEffect(() => {
    if (!meetingInfo) return;

    const circuitData =
      circuit.find((c) => c.circuit_key === meetingInfo.circuit_key) ?? null;

    setCircuitInfo(circuitData);
  }, [meetingInfo]);

  useEffect(() => {
    const findSession = sessions.find(
      (session) => session.session_name === isSelected,
    );
    if (findSession) {
      setSelectedSessionKey(findSession.session_key);
    }
    console.log(findSession);
  }, [isSelected, sessions]);
  return (
    <>
      {meetingLoading && <></>}
      {meetingInfo && (
        <>
          {/* <Loading /> */}
          <SeasonHeroBox meetingInfo={meetingInfo} circuitInfo={circuitInfo} />
          <section className="mx-auto max-w-285">
            <SessionNav
              sessionTabs={sessionTabs}
              isSelected={isSelected}
              setIsSelectedAction={setIsSelected}
            />
            {isSelected === 'Race' ? (
              <RaceResultSection />
            ) : (
              <SessionResultSection />
            )}
          </section>
        </>
      )}
    </>
  );
}
