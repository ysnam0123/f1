import { supabase } from '@/supabase/client';

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
