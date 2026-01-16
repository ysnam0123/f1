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
      <section className="mx-auto grid max-w-300 gap-7.5 sm:grid-cols-3">
        {circuitData?.map((c) => (
          <CircuitCard key={c.circuit_key} data={c} />
        ))}
      </section>
    </>
  );
}
