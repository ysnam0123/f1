import { Circuit } from '@/types/circuit';
import Image from 'next/image';
interface PageProps {
  circuitData: Circuit;
}

export default function AboutBeforePoint({ circuitData }: PageProps) {
  return (
    <>
      <div className="w-full rounded-4xl bg-[#212121] px-5 py-7">
        <h1 className="border-b border-[#474747] pb-3 text-[18px] text-[#c4c4c4]">
          경기 관전 포인트
        </h1>
        <div className="flex items-center justify-between gap-10 pt-2">
          <ul className="flex flex-col gap-3">
            {circuitData.watch_points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FED010]" />
                <p
                  style={{ fontFamily: 'Paperlolgy', fontWeight: 600 }}
                  className="text-[19px]"
                >
                  {point}
                </p>
              </li>
            ))}
          </ul>
          <Image
            src={circuitData.circuit_img}
            alt="circuit"
            width={130}
            height={130}
          />
        </div>
      </div>
    </>
  );
}
