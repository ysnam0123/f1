import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './axiosInstance';

interface Driver {
  meeting_key: number;
  session_key: number;
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  first_name: string;
  last_name: string;
  headshot_url: string;
  country_code: string;
}
export const driversData = async (): Promise<Driver[]> => {
  const response = await axiosInstance.get('/drivers', {
    params: { session_key: 'latest' },
  });
  return response.data;
};

export const driverData = async (driverNumber: number): Promise<Driver> => {
  const response = await axiosInstance.get('/drivers', {
    params: { driver_number: driverNumber },
  });
  return response.data;
};

export function useDriverData() {
  return useQuery({
    queryKey: ['drivers'],
    queryFn: driversData,
  });
}

export function useDriverNumber(driverNumber: number) {
  return useQuery({
    queryKey: ['driver', driverNumber],
    queryFn: () => driverData(driverNumber),
  });
}
