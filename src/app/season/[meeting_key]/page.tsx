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
import SessionNav, {
  SessionType,
} from '@/app/components/season/meetings/SessionNav';
import { driverData, fetchDriversWithMeetingKey } from '@/app/api/f1/Drivers';
import { supabase } from '@/supabase/client';

export default function Page() {
  const params = useParams<{ meeting_key: string }>();
  const meetingKey = Number(params.meeting_key);
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
  const { data: sessionResults = [], isLoading: sessionResultLoading } =
    useSessionResultData(selectedSessionKey!);

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

  useEffect(() => {
    if (!meetingKey) return;
    const upsertDriverData = async () => {
      const drivers = await fetchDriversWithMeetingKey(meetingKey);
      const uniqueDrivers = Array.from(
        new Map(drivers.map((d) => [d.driver_number, d])).values(),
      );

      const { error } = await supabase.from('drivers').upsert(uniqueDrivers, {
        onConflict: 'driver_number',
      });
      if (error) {
        console.error('드라이버 저장 실패:', error);
      }
    };
    upsertDriverData();
  }, [meetingKey]);

  return (
    <>
      {meetingInfo && (
        <>
          <SeasonHeroBox meetingInfo={meetingInfo} circuitInfo={circuitInfo} />
          <section className="mx-auto max-w-285">
            <SessionNav
              sessionTabs={sessionTabs}
              isSelected={isSelected}
              setIsSelectedAction={setIsSelected}
            />

            {meetingLoading ||
              (sessionLoading && (
                <>
                  <div className="flex h-100 items-center justify-center">
                    <Loading className="h-100 w-100" />
                  </div>
                </>
              ))}
            {isSelected === 'Race' ? (
              <RaceResultSection />
            ) : (
              <SessionResultSection sessionResults={sessionResults} />
            )}
          </section>
        </>
      )}
    </>
  );
}
