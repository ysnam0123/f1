'use client';
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
  return (
    <>
      <h1>page Component</h1>
    </>
  );
}
