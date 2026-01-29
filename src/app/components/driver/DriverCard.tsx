import Image, { StaticImageData } from 'next/image';
import defaultDriver from '/public/drivers/defaultDriver.svg';

export default function DriverCard({
  headshot,
  teamColor,
}: {
  headshot: StaticImageData;
  teamColor?: string;
}) {
  return (
    <div className="flex items-center justify-center rounded-2xl sm:h-80 sm:w-80">
      <Image
        src={headshot ? headshot : defaultDriver}
        alt="driver"
        width={260}
        height={260}
        className="desktop z-30"
      />
      <Image
        src={headshot ? headshot : defaultDriver}
        alt="driver"
        width={150}
        height={150}
        className="mobile z-30"
      />
    </div>
  );
}
