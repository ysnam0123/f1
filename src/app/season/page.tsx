'use client';
import GrandPrixCard from '../components/season/GrandPrixCard';
import SeasonHeroBox from '../components/season/SeasonHeroBox';

export default function page() {
  return (
    <>
      <main className="min-h-screen">
        <SeasonHeroBox />
        <section className="mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-3 gap-10">
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
            <GrandPrixCard />
          </div>
        </section>
      </main>
    </>
  );
}
