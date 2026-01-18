'use client';

import { useParams } from 'next/navigation';

export default function CircuitDetailPage() {
  const params = useParams<{ circuit_key: string }>();
  return (
    <main className="mx-auto max-w-[1200px] px-8 py-10 text-white">
      {/* ===== Header ===== */}
      <header className="mb-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          {/* Flag placeholder */}
          <div className="h-8 w-12 rounded bg-neutral-700" />
          <h1 className="text-4xl font-bold">Monza</h1>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-white/70">
          <div>🇮🇹 이탈리아</div>
          <div>랩 수 53</div>
          <div>서킷 길이 5.793 km</div>
          <div>첫 개최 1950</div>
        </div>
      </header>

      {/* ===== Top Section ===== */}
      <section className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Track Map */}
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <div className="mb-4 text-sm text-white/60">트랙 맵</div>

          {/* Map Placeholder */}
          <div className="flex h-[320px] items-center justify-center rounded-lg bg-neutral-800 text-white/40">
            CIRCUIT MAP PLACEHOLDER
          </div>

          <button className="mt-4 inline-flex items-center gap-2 text-sm text-red-500 hover:underline">
            Google Maps에서 보기 →
          </button>
        </div>

        {/* Circuit Info */}
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <h3 className="mb-4 text-lg font-semibold">서킷 정보</h3>

          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex justify-between">
              <span>정식 명칭</span>
              <span className="text-white">Autodromo Nazionale Monza</span>
            </li>
            <li className="flex justify-between">
              <span>위치</span>
              <span className="text-white">Monza, Italy</span>
            </li>
            <li className="flex justify-between">
              <span>랩 레코드</span>
              <span className="text-white">1:20.235</span>
            </li>
            <li className="flex justify-between">
              <span>기록 보유</span>
              <span className="text-white">Sergio Pérez (2023)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== Records ===== */}
      <section className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <h3 className="mb-4 text-lg font-semibold">서킷 기록</h3>

          <div className="space-y-3 text-sm text-white/80">
            <div className="flex justify-between">
              <span>최다 우승</span>
              <span className="text-white">Michael Schumacher (5회)</span>
            </div>
            <div className="flex justify-between">
              <span>최다 폴 포지션</span>
              <span className="text-white">7회</span>
            </div>
            <div className="flex justify-between">
              <span>최단 랩</span>
              <span className="text-white">1:20.235</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-neutral-900 p-6">
          <h3 className="mb-4 text-lg font-semibold">최고 랩 타임</h3>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-4">
            <div>
              <p className="text-sm text-white/60">Sergio Pérez</p>
              <p className="text-xs text-white/40">2023</p>
            </div>
            <p className="text-2xl font-bold">1:20.235</p>
          </div>
        </div>
      </section>

      {/* ===== Description ===== */}
      <section className="mb-12">
        <h3 className="mb-4 text-lg font-semibold">서킷 소개</h3>
        <p className="max-w-4xl text-sm leading-relaxed text-white/70">
          몬자는 이탈리아 롬바르디아 지방에 위치한 세계에서 가장 유서 깊은 F1
          서킷 중 하나입니다. 긴 직선과 고속 코너가 특징이며, ‘속도의
          사원(Temple of Speed)’이라는 별명을 가지고 있습니다.
        </p>
      </section>

      {/* ===== Recent Results ===== */}
      <section>
        <h3 className="mb-4 text-lg font-semibold">최근 경기 결과</h3>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-neutral-900 text-white/60">
              <tr>
                <th className="px-4 py-3 text-left">연도</th>
                <th className="px-4 py-3 text-left">우승</th>
                <th className="px-4 py-3 text-left">팀</th>
                <th className="px-4 py-3 text-right">FASTEST LAP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-neutral-950">
              {[
                {
                  year: 2023,
                  winner: 'Sergio Pérez',
                  team: 'Red Bull',
                  lap: '1:21.257',
                },
                {
                  year: 2022,
                  winner: 'Max Verstappen',
                  team: 'Red Bull',
                  lap: '1:24.030',
                },
                {
                  year: 2021,
                  winner: 'Max Verstappen',
                  team: 'Red Bull',
                  lap: '1:21.046',
                },
              ].map((row) => (
                <tr key={row.year} className="hover:bg-white/5">
                  <td className="px-4 py-3">{row.year}</td>
                  <td className="px-4 py-3">{row.winner}</td>
                  <td className="px-4 py-3">{row.team}</td>
                  <td className="px-4 py-3 text-right">{row.lap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
