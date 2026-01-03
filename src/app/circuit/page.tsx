'use client';

import { findDriverInfo } from '@/finder/driverInfoFinder';
import { useEffect } from 'react';

export default function Page() {
  // useEffect(() => {
  //   const updateCircuitTable = async () => {
  //     const { error } = await supabase
  //       .from('circuits')
  //       .upsert(circuit, { onConflict: 'circuit_key' });

  //     if (error) {
  //       console.error('error:', error);
  //     }
  //   };
  //   updateCircuitTable();
  // }, []);

  useEffect(() => {
    findDriverInfo(1141, 55);
  }, []);
  return (
    <>
      <h1>page Component</h1>
    </>
  );
}
