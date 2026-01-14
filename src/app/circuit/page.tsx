'use client';

import { useEffect } from 'react';
import { fetchAllCircuits, useCircuitData } from '../api/meeting/Circuit';
import CircuitCard from '../components/circuit/CircuitCard';

export default function Page() {
  const { data: circuitData, isPending: circuitLoading } = useCircuitData();
  if (circuitData) {
    console.log(circuitData);
  }
  return (
    <>
      <CircuitCard />
    </>
  );
}
