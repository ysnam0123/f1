'use client';

import { useEffect } from 'react';
import { useCircuitViewData } from '../api/meeting/Circuit';
import CircuitCard from '../components/circuit/CircuitCard';

export default function Page() {
  // 서킷
  const { data: circuitData, isPending: circuitLoading } = useCircuitViewData();
  if (circuitData) {
    console.log(circuitData);
  }
  return (
    <>
      <CircuitCard />
      <div className="h-25 w-70 bg-[#111111]"></div>
    </>
  );
}
