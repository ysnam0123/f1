import AboutCircuit from './AboutCircuit';
import AboutBeforePoint from './AboutBeforePoint';
import { Circuit } from '@/types/circuit';

interface PageProps {
  circuitData: Circuit;
}

export default function About({ circuitData }: PageProps) {
  return (
    <>
      <div className="flex flex-col gap-5 select-none">
        <p
          style={{ fontFamily: 'Paperlolgy', fontWeight: 900 }}
          className="text-[22px]"
        >
          경기 전 둘러보기
        </p>
        <div className="flex items-stretch gap-10">
          <AboutCircuit circuitData={circuitData} />
          <AboutBeforePoint circuitData={circuitData} />
        </div>
      </div>
    </>
  );
}
