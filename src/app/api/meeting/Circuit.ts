import { supabase } from '@/supabase/client';
import { Circuit, CircuitView } from '@/types/circuit';
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

// ==== view ====
export const fetchCircuits = async (): Promise<CircuitView[]> => {
  const { data, error } = await supabase
    .from('v_circuit')
    .select('*')
    .order('first_grand_prix', { ascending: true });

  if (error) {
    console.error('Circuit fetch error:', error);
    throw new Error('Failed to fetch circuits');
  }

  return data as CircuitView[];
};

// ==== view react query ====
export const useCircuitViewData = () => {
  return useQuery<CircuitView[]>({
    queryKey: ['circuits'],
    queryFn: fetchCircuits,
    staleTime: 1000 * 60 * 60 * 24, // 24시간 (서킷은 거의 안 바뀜)
    gcTime: 1000 * 60 * 60 * 24,
  });
};
