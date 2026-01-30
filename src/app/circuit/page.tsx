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
      <section className="mx-auto grid w-full gap-7.5 px-5 sm:px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-15">
        {circuitData?.map((c) => (
          <CircuitCard key={c.circuit_key} data={c} />
        ))}
      </section>
    </>
  );
}
