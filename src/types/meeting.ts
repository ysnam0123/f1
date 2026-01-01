export interface CardProps {
  meetingInfo: Meeting;
}
export interface Meeting {
  meeting_key: number;
  circuit_key: number;
  circuit_short_name: string;
  meeting_code: string;
  location: string;
  country_key: number;
  country_code: string;
  country_name: string;
  meeting_name: string;
  meeting_official_name: string;
  gmt_offset: string;
  date_start: string;
  year: number;
  round: number;
}

export interface Sessions {
  relatedSession: Session[];
}
export interface Session {
  circuit_key: number;
  circuit_short_name: string;
  country_code: string;
  country_key: number;
  country_name: string;
  created_at: string;
  date_start: string;
  date_end: string;
  gmt_offset: string;
  id: string;
  location: string;
  meeting_key: number;
  session_key: number;
  session_name: string;
  sesstion_type: string;
  year: number;
}

export interface SessionResult {
  position: number;
  driver_number: number;
  number_of_laps: number;
  dnf: boolean;
  dns: boolean;
  dsq: boolean;
  duration: number;
  gap_to_leader: number;
  meeting_key: number;
  session_key: number;
}
