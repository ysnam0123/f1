import { axiosInstance } from '../f1/axiosInstance';

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

export const fetchResult = async (meetingKey: number) => {
  const response = await axiosInstance.get('/session_result', {
    params: { meeting_key: meetingKey },
  });
  console.log(response.data);
  return response.data;
};

// 최신 레이스 session_key 찾아오기
export const sessionResult = async (
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
    return sessionResult(previousMeetingKey);
  }
};

// 최신 레이스 결과 호출
export const latestRaceResult = async () => {
  const sessionKey = await sessionResult();
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
