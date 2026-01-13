import { WeatherSessionSummary } from '@/app/api/f1/race/weather';
import Image from 'next/image';

export default function WeatherSummary({
  weather,
}: {
  weather: WeatherSessionSummary;
}) {
  return (
    <>
      <div className="flex max-w-125 flex-col gap-3 rounded-4xl border border-[#262626] bg-[#161616] py-5 pl-5">
        <h1 className="flex items-center gap-1 text-gray-400">
          <Image src="/icons/weather.svg" alt="icon" width={28} height={28} />
          <p
            className="text-[20px]"
            style={{ fontFamily: 'paperlogy', fontWeight: 500 }}
          >
            날씨
          </p>
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-xl font-semibold text-white">
              {weather.weather_summary}
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-col">
                <span className="text-gray-500">트랙 온도</span>
                <div className="text-[18px]">
                  {weather.track_temp_level}
                  <span className="ml-1 text-gray-200">
                    ({weather.avg_track_temp.toFixed(1)}°C)
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-500">바람</div>
                <div className="text-white">{weather.wind_level}</div>
              </div>
            </div>
          </div>
          <Image
            src={'/icons/weathers/intermittent.svg'}
            alt="weather"
            width={160}
            height={160}
          />
        </div>
      </div>
    </>
  );
}
