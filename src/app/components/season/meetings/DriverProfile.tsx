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
  const upgradeHeadshotQuality = (url: string) => {
    if (url.includes('.transform/')) {
      return url.replace(
        /\.transform\/\d+col\/image\.png$/,
        '.transform/4col/image.png',
      );
    }
    return url;
  };
  const headshotSrc = upgradeHeadshotQuality(headshot);
  return (
    <>
      <div
        style={{ backgroundColor: teamColor }}
        className={`flex h-10 w-10 items-center justify-center rounded-full ${className}`}
      >
        <Image src={headshotSrc} alt="logo" width={30} height={30} />
      </div>
    </>
  );
}
