import Image, { StaticImageData } from 'next/image';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface DriverCardProps {
  name: string;
  number: number;
  imageUrl: StaticImageData;
  teamColor: string;
}

export function TeamDriverCard({
  name,
  number,
  imageUrl,
  teamColor,
}: DriverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="cursor-pointer overflow-hidden border border-neutral-800 bg-[#111] transition-all duration-300 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex h-80 items-center justify-center bg-neutral-900">
          <Image src={imageUrl} alt="driver" width={300} height={300} />
        </div>
        <div className="relative border-t border-neutral-800 p-6">
          <div
            className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
            style={{
              width: isHovered ? '100%' : '0%',
              backgroundColor: teamColor,
            }}
          />
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-semibold tracking-tight">
              {number}
            </span>
            <div>
              <p
                className="text-lg tracking-tight transition-colors duration-300"
                style={{ color: isHovered ? teamColor : 'white' }}
              >
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
