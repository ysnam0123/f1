import { CircuitView } from '@/types/circuit';
import Image from 'next/image';

interface CircuitProps {
  data: CircuitView;
  idx: number;
}

export function CircuitCard({ data, idx }: CircuitProps) {
  return (
    <div className="flex h-25 cursor-pointer items-center justify-between rounded-xl bg-(--color-card-bg) px-5 py-2.5 transition hover:bg-(--color-card-hover)">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="flex h-10 w-11.25 shrink-0 items-center justify-center rounded-sm bg-[#303030] text-xs">
          <Image src={data.flag} alt="flag" width={37} height={22} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[16px] font-semibold">
            {data.circuit_short_name}
          </p>
          <p className="truncate text-[16px] text-[#909090]">
            {data.country_kr_name}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <Image src={data.circuit_img} alt="flag" width={80} height={80} />
      </div>
    </div>
  );
}
