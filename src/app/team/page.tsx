import Image from 'next/image';
import mcLaren from '/public/team/McLaren.png';
import oscar from '/public/drivers/OscarPiastri.png';
import mcLarenCar from '/public/cars/mclaren.png';
export default function page() {
  return (
    <>
      <div className="px-[70px] py-10">
        <h1 className="text-[30px] font-bold mb-[50px]">2025 시즌</h1>
        <div className="flex flex-col gap-[50px]">
          <div className="flex gap-[74px]">
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
                      <p>Oscar</p>
                      <p>Piastri</p>
                      <div className="flex items-center gap-1">
                        <div className="bg-gray-300 rounded-full w-[14px] h-[14px]"></div>
                        <p className="text-[16px] font-bold">81</p>
                      </div>
                    </div>
                    <Image src={oscar} alt="driver" className="w-16 h-16" />
                  </div>
                  <div className="flex gap-2">
                    {/* name box */}
                    <div className="flex flex-col">
                      <p>Oscar</p>
                      <p>Piastri</p>
                      <div className="flex items-center gap-1">
                        <div className="bg-gray-300 rounded-full w-[14px] h-[14px]"></div>
                        <p className="text-[16px] font-bold">81</p>
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
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
          </div>
          <div className="flex gap-[74px]">
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
          </div>
          <div className="flex gap-[74px]">
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
          </div>
          <div className="flex gap-[74px]">
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
          </div>
          <div className="flex gap-[74px]">
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
            <div className="w-[520px] h-[300px] bg-linear-to-b from-[#ff8700] to-[#995100]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
