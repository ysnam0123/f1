import { supabase } from '@/supabase/client';
import { Circuit } from '@/types/circuit';
import { useQuery } from '@tanstack/react-query';

export const fetchCircuitByKey = async (circuitKey: number) => {
  const { data, error } = await supabase
    .from('circuits')
    .select('*')
    .eq('circuit_key', circuitKey)
    .single();

  if (error) {
    console.error('서킷 정보 불러오기 실패:', error);
    return null;
  }

  return data;
};

export const fetchAllCircuits = async (): Promise<Circuit[]> => {
  const { data, error } = await supabase.from('circuits').select('*');

  if (error) {
    console.error('서킷 정보 불러오기 실패:', error);
    throw error; // 🔥 중요
  }

  return data ?? [];
};

export function useCircuitData() {
  return useQuery<Circuit[]>({
    queryKey: ['circuits'],
    staleTime: 1000 * 60 * 60,

    queryFn: fetchAllCircuits,
  });
}
