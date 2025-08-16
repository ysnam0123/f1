import Image from 'next/image';
import mcLaren from '/public/team/McLaren.png';
import oscar from '/public/drivers/OscarPiastri.png';
import mcLarenCar from '/public/cars/mclaren.png';

interface TeamProps {
  teamName: string;
  driver1: string;
  driver1Num: number;
  driver2: string;
  driver2Num: number;
}
export default function Team({
  teamName,
  driver1,
  driver1Num,
  driver2,
  driver2Num,
}: TeamProps) {
  return (
    <>
      <div className="flex flex-col justify-between w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100] px-[27px] py-5">
        <div className="flex items-center">
          <Image
            src={mcLaren}
            alt="logo"
            className="w-[154px] h-[47px] mr-10"
          />
          <div className="flex gap-5">
            <div className="flex gap-2">
              {/* name box */}
              <div className="flex flex-col">
                <p>{driver1}</p>
                <div className="flex items-center gap-1">
                  <div className="bg-gray-300 rounded-full w-[14px] h-[14px]"></div>
                  <p className="text-[16px] font-bold">{driver1Num}</p>
                </div>
              </div>
              <Image src={oscar} alt="driver" className="w-16 h-16" />
            </div>
            <div className="flex gap-2">
              {/* name box */}
              <div className="flex flex-col">
                <p>{driver2}</p>
                <div className="flex items-center gap-1">
                  <div className="bg-gray-300 rounded-full w-[14px] h-[14px]"></div>
                  <p className="text-[16px] font-bold">{driver2Num}</p>
                </div>
              </div>
              <Image src={oscar} alt="driver" className="w-16 h-16" />
            </div>
          </div>
        </div>
        <Image
          src={mcLarenCar}
          alt="mcLarenCar"
          className="w-[465px] h-[139px]"
        />
      </div>
    </>
  );
}
