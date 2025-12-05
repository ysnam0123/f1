import { Meeting } from '@/types/meeting';
import { axiosInstance } from './axiosInstance';
import { useQuery } from '@tanstack/react-query';

// 메모
// meeting: 한 덩어리
// session: 한 meeting 안에 여러 session -> Race, Practice 등등 이 있음

// 전체 그랑프리 불러오기
export const meetingData = async (): Promise<Meeting[]> => {
  const response = await axiosInstance.get('/meetings', {
    params: { year: 2025 },
  });
  return response.data;
};

// 세션 불러오기
export const sessionData = async (meeting: number) => {
  const response = await axiosInstance.get('/sessions', {
    params: { meeting_key: meeting },
  });
  return response.data;
};

export function useMeetingData() {
  return useQuery({
    queryKey: ['meeting_key'],
    queryFn: meetingData,
  });
}

export interface Session {
  meeting_key: number;
  session_key: number;
  location: string;
  date_start: string;
  date_end: string;
  session_type: string; // "Race" | "Practice" | "Qualifying" | "Sprint" 등
  session_name: string;
  country_key: number;
  country_code: string;
  country_name: string;
  circuit_key: number;
  circuit_short_name: string;
  gmt_offset: string;
  year: number;
}
export type Sessions = Session[];

// 최신 레이스 session_key 찾아오기
export const latestRaceSession = async (
  meetingKey: string | number = 'latest',
): Promise<number | undefined> => {
  const res = await axiosInstance.get('/sessions', {
    params: { meeting_key: meetingKey },
  });
  const sessions: Session[] = res.data;

  const race = sessions.find(
    (session: Session) =>
      session.session_name === 'Race' && session.session_type === 'Race',
  );

  if (race) {
    return race.session_key;
  } else {
    const previousMeetingKey = Number(sessions[0].meeting_key) - 1;
    return latestRaceSession(previousMeetingKey);
  }
};

// 최신 레이스 결과 호출
export const latestRaceResult = async () => {
  const sessionKey = await latestRaceSession();
  if (!sessionKey) {
    console.log('레이스 결과가 아직 없음');
    return;
  }

  const res = await axiosInstance.get('/session_result', {
    params: { session_key: sessionKey },
  });

  console.log('latestRace:', res.data);
  return res.data;
};
