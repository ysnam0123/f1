import Image from 'next/image';
import zandvoort from '/public/circuit/zandvoort.jpg';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function page() {
  return (
    <>
      <div className=" px-[70px] py-10">
        <div className="flex gap-21 mb-8">
          <div className="flex flex-col justify-between max-w-[820px] min-h-[585px] gap-[30px]">
            {/* schedule */}
            <div className="flex min-h-[300px] bg-[#1a1a1a] rounded-[20px]">
              <div className="px-5 py-[30px]">
                <div className="relative w-[405px] h-[250px]">
                  <Image
                    src={zandvoort}
                    alt="zandvoort"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  <div className="absolute inset-0 bg-black opacity-60 rounded-[20px]"></div>
                  <div className="absolute top-10 gap-2 flex flex-col justify-center px-4 z-20 text-white">
                    <p className="text-[13px]  font-semibold">
                      다음 레이스 - 15라운드
                    </p>
                    <p className="text-[22px] font-bold">
                      네덜란드 - ZandVoort
                    </p>
                    <p className="text-[15px]">8/29~8/31</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col w-[432px] gap-[25px] px-[25px] justify-center">
                <div className="flex ">
                  <p className="mr-[33px]">08.29</p>
                  <p className="mr-auto">프랙티스 1</p>
                  <p>19:30 - 20:30</p>
                </div>
                <div className="flex">
                  <p className="mr-[33px]">08.29</p>
                  <p className="mr-auto">프랙티스 2</p>
                  <p>19:30 - 20:30</p>
                </div>
                <div className="flex">
                  <p className="mr-[33px]">08.29</p>
                  <p className="mr-auto">프랙티스 3</p>
                  <p>19:30 - 20:30</p>
                </div>
                <div className="flex">
                  <p className="mr-[33px]">08.29</p>
                  <p className="mr-auto">퀄리파잉</p>
                  <p>19:30 - 20:30</p>
                </div>
                <div className="flex">
                  <p className="mr-[33px]">08.29</p>
                  <p className="mr-auto">레이스</p>
                  <p>19:30 - 20:30</p>
                </div>
                <p className="absolute text-[10px] right-5 top-2">
                  * 시간은 한국시간 기준입니다
                </p>
              </div>
            </div>
            {/* highlights */}
            <div>
              <h1 className="mb-3 text-[25px] font-bold">공식 하이라이트</h1>
              <div className="min-h-[250px]  bg-[#1a1a1a] rounded-[20px]"></div>
            </div>
          </div>
          {/* 순위표 */}
          <div className="bg-[#1A1A1A] text-[12px] min-h-[585px] max-w-[400px] flex flex-col rounded-[15px] p-[22px]">
            <div className="flex justify-between mb-6">
              <h1 className="flex gap-[2px] items-center text-[22px] font-bold">
                순위 <ChevronRight className="w-6 h-6" />
              </h1>
              <button className="flex items-center cursor-pointer py-[10px] justify-center gap-[2px] border border-[#ffffff] rounded-[15px] px-[7px]">
                2025 시즌 <ChevronDown className="w-6 h-6" />
              </button>
            </div>

            <div className="text-[18px] pb-1 px-[10px] font-semibold grid grid-cols-4 text-center  border-b-2 border-[#FFD700] mb-3">
              <div>그랑프리</div>
              <div>우승</div>
              <div>팀</div>
              <div>Time</div>
            </div>

            <div className="grid grid-cols-4 text-center  mb-2">
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                네덜란드
              </div>
              <div>오스카 피아스트리</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                사우디
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
            <div className="grid grid-cols-4  text-center  mb-2">
              <div className="flex gap-1 justify-center  items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                헝가리
              </div>
              <div>막스 베르스타펜</div>
              <div className="flex gap-1 justify-center items-center">
                <div className="rounded-full w-[14px] h-[14px] bg-gray-300"></div>{' '}
                McLaren
              </div>
              <div>1:42:06:304</div>
            </div>
          </div>
        </div>
        {/* news */}
        <div className="flex flex-col">
          <h1 className="mb-3 text-[25px] font-bold">최신 뉴스</h1>
          <div className="flex justify-between gap-9">
            <div className="min-w-[300px] min-h-[300px] bg-[#1A1A1A] rounded-[15px]"></div>
            <div className="min-w-[300px] min-h-[300px] bg-[#1A1A1A] rounded-[15px]"></div>
            <div className="min-w-[300px] min-h-[300px] bg-[#1A1A1A] rounded-[15px]"></div>
            <div className="min-w-[300px] min-h-[300px] bg-[#1A1A1A] rounded-[15px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
