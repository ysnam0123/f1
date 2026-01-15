'use client';
import { CircuitView } from '@/types/circuit';
import { CircuitCard } from './CircuitCard';
import { useRouter } from 'next/navigation';

interface CircuitProps {
  data: CircuitView[];
}
export default function CircuitGrid({ data }: CircuitProps) {
  const router = useRouter();
  return (
    <section className="w-full">
      <div className="mb-5 flex items-center justify-between pr-3">
        <h2 className="text-[18px] font-semibold text-(--color-title)">
          서킷 둘러보기
        </h2>
        <button
          onClick={() => router.push('/circuit')}
          className="cursor-pointer text-[16px] text-(--color-title) hover:text-[#F8F8F8]"
        >
          전체보기
        </button>
      </div>

      <div className="grid-colse-1 grid gap-5 sm:grid-cols-2">
        {data.map((c, idx) => (
          <CircuitCard key={c.circuit_key} data={c} idx={idx} />
        ))}
      </div>
    </section>
  );
}
