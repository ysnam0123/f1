import Image from 'next/image';

export default function page() {
  return (
    <>
      <main className="min-h-screen">
        <div className="relative">
          <div className="absolute inset-0 z-0 h-[567px] w-screen">
            <Image
              src="/circuit/zandvoort2.svg"
              alt="bg"
              width={1440}
              height={567}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="absolute top-10 left-[70px] w-full">
            <h1 className="mb-10 text-[45px] font-bold">
              2025 FIA 포뮬러 1 월드 챔피언쉽™ 
            </h1>
            <div className="mr-[70px] flex w-full justify-between">
              <div className="mr-auto">
                <h3 className="text-[25px] font-semibold">
                  다음 일정 {'>'} 라운드 15
                </h3>
                <h2 className="text-[40px] font-bold">네덜란드</h2>
              </div>
              <div className="h-[380px] w-[868px] rounded-[10px] bg-[#0B0B0B]"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
