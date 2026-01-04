'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SeasonDriver } from '@/hooks/SeasonDrivers';
import { Drivers } from '@/images/drivers';
import { upgradeHeadshotQuality } from '@/hooks/UpgradeHeadShotQuality';

export default function SeasonDriverCard({ driver }: { driver: SeasonDriver }) {
  const router = useRouter();
  const [firstName, lastName] = driver.kr_name.split(' ');
  const headshotSrc =
    upgradeHeadshotQuality(driver.headshot_url) ?? Drivers.Kimi;

  return (
    <div
      onClick={() => router.push(`/driver/${driver.driver_profile_id}`)}
      style={{ borderColor: driver.team_colour }}
      className={`group relative h-55 w-75 cursor-pointer overflow-hidden rounded-[10px] border px-5 py-7.5 select-none`}
    >
      <Image
        src="/cardBg.png"
        alt="bg"
        fill
        className="absolute inset-0 z-0 object-cover"
      />
      <div className="pointer-events-none absolute inset-0 z-1 bg-black/0 transition-all duration-100 group-hover:bg-white/10" />

      <div className="z-10 flex justify-between">
        <div className="z-10 flex flex-col">
          <p className="text-[20px]">{firstName}</p>
          <p className="text-[20px]">{lastName}</p>
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center gap-1">
              <Image src={driver.flag} alt="국기" width={20} height={20} />
              <p>{driver.driver_number}</p>
            </div>
            {/* <p className="text-[10px]">{team.name}</p> */}
            <Image src={driver.main_logo} alt="logo" width={50} height={50} />
          </div>
        </div>
        <Image
          src={headshotSrc}
          alt="driver"
          width={160}
          height={160}
          className="z-10"
        />
      </div>
    </div>
  );
}
