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
    <div className="flex items-center justify-center rounded-2xl md:h-50 md:w-50 lg:h-70 lg:w-70">
      <Image
        src={headshot ? headshot : defaultDriver}
        alt="driver"
        width={260}
        height={260}
        className="z-30"
      />
    </div>
  );
}
