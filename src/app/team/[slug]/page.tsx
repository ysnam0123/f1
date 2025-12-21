'use client';

import { teams } from '@/data/teams';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams<{ slug: string }>();
  const team = teams.find((t) => t.slug === params.slug);
  return (
    <>
      {team && (
        <div className="mx-auto max-w-[1140px]">
          {/* <h1 className="mb-[50px] text-[30px] font-bold">2025 시즌</h1> */}
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
            }}
            className="mb-[50px] flex h-[304px] w-full justify-between rounded-[20px] px-15 py-10"
          >
            <Image
              src={`/cars/${team.slug}.png`}
              alt="car"
              width={750}
              height={224}
            />
            <div className="flex shrink-0 flex-col items-center justify-center">
              <Image src={team.logo} alt={'logo'} width={150} height={150} />
              <p
                className="text-center text-[30px] text-[#f1f1f1]"
                style={{ fontFamily: 'PartialSans' }}
              >
                {team.name}
              </p>
            </div>
          </div>
          <h1 className="mb-[30px] text-[30px] font-bold">드라이버</h1>
          <section className="mb-20 flex justify-between">
            {team.drivers.map((driver) => (
              <div
                key={driver.number}
                className="flex h-[252px] w-[550px] items-center justify-center gap-20 rounded-[20px] py-5"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${team.colorFrom}, ${team.colorTo})`,
                }}
              >
                <div className="flex h-full justify-between">
                  <div className="flex flex-col">
                    <div className="mb-auto">
                      <p className="mb-2 text-[22px] font-bold">
                        {driver.name}
                      </p>
                      <p
                        className="text-[22px]"
                        style={{ fontFamily: 'RiaSans', fontWeight: 700 }}
                      >
                        {driver.number}
                      </p>
                    </div>
                    <div>flag</div>
                  </div>
                </div>
                <Image
                  src={driver.image}
                  alt={driver.name}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </section>
          <section className="min-h-300 w-full rounded-[30px] bg-[#1C1C25] px-10 py-[30px]">
            <h1
              className="mb-[50px] text-[40px]"
              style={{ fontFamily: 'PartialSans' }}
            >
              2025 시즌
            </h1>
          </section>
        </div>
      )}
    </>
  );
}
