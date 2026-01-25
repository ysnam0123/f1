import { Session } from '@/types/meeting';
import About from './About';
import NextScheduleBox from './NextScheduleBox';
import { Circuit } from '@/types/circuit';

interface PageProps {
  data: Session;
  circuitData: Circuit;
}

export default function ScheduledGrandPrix({ data, circuitData }: PageProps) {
  console.log('물려받은 데이터', data);
  return (
    <>
      <section className="flex flex-col gap-10">
        <NextScheduleBox data={data} />
        <About circuitData={circuitData} />
      </section>
    </>
  );
}
