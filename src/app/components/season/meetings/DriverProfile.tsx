import Image from 'next/image';

export default function DriverProfile({
  headshot,
  teamColor,
  className,
}: {
  headshot: string;
  teamColor: string;
  className: string;
}) {
  return (
    <>
      <div
        style={{ backgroundColor: teamColor }}
        className={`flex h-10 w-10 items-center justify-center rounded-full ${className}`}
      >
        <Image src={headshot} alt="logo" width={30} height={30} />
      </div>
    </>
  );
}
