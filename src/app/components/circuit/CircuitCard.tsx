'use client';
import { CircuitView } from '@/types/circuit';
import { Crown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface PageProps {
  data: CircuitView;
}
export default function CircuitCard({ data }: PageProps) {
  const router = useRouter();
  return (
    <>
      <article
        onClick={() => router.push(`/circuit/${data.circuit_key}`)}
        className="flex cursor-pointer flex-col select-none"
      >
        <Image
          src={data.circuit_bg}
          alt="bg"
          width={360}
          height={200}
          className="w-full rounded-t-xl"
        />
        <div className="flex h-40 w-full items-center justify-between rounded-b-xl border border-(--color-box-border) bg-(--color-main-black) px-5 py-3.75">
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col gap-2 border-b border-(--color-box-border) pb-5">
              <h1 className="">{data.circuit_short_name}</h1>
              <div className="flex items-center gap-2">
                <Image src={data.flag} alt="flag" width={25} height={15} />
                <p className="text-[14px]">{data.country_kr_name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-5 pt-2.5">
                <div className="flex items-center gap-2">
                  <h2 className="text-[14px] text-[#5E5E5E]">랩 수</h2>
                  <p className="text-[16px]">{data.laps}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-[14px] text-[#5E5E5E]">서킷 길이</h2>
                  <p className="text-[16px]">{data.circuit_length}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Crown className="h-4.25 w-4.25 text-[#D6B706]" />
                <p className="border-r-2 border-(--color-border) pr-1 text-[16px]">
                  {data.lap_record.driver}
                </p>
                <p className="text-[16px]">{data.lap_record.year}년</p>
              </div>
            </div>
          </div>

          <Image
            src={data.circuit_img}
            width={106}
            height={106}
            alt="circuit"
          />
        </div>
      </article>
    </>
  );
}
