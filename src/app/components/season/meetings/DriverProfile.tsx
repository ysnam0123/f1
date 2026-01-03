import Image from 'next/image';

export default function DriverProfile({
  headshot,
  teamColor,
}: {
  headshot: string;
  teamColor: string;
}) {
  return (
    <>
      <div
        style={{ backgroundColor: teamColor }}
        className="juce flex h-10 w-10 items-center justify-center rounded-full"
      >
        <Image src={headshot} alt="logo" width={30} height={30} />
      </div>
    </>
  );
}
