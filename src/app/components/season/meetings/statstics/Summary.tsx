import { WeatherSessionSummary } from '@/app/api/f1/race/weather';

export default function Summary({
  weather,
}: {
  weather: WeatherSessionSummary;
}) {
  return (
    <>
      <div className="space-y-3 rounded-xl bg-[#1A1A1A] p-4">
        {/* 타이틀 */}
        <div className="text-sm text-gray-400">날씨 요약</div>

        {/* 한 줄 요약 */}
        <div className="text-lg font-semibold text-white">
          {weather.weather_summary}
        </div>

        {/* 지표들 */}
        <div className="flex justify-between text-sm text-gray-300">
          <div>
            <div className="text-gray-500">트랙 온도</div>
            <div className="text-white">
              {weather.track_temp_level}
              <span className="ml-1 text-gray-500">
                ({weather.avg_track_temp.toFixed(1)}°C)
              </span>
            </div>
          </div>

          <div>
            <div className="text-gray-500">바람</div>
            <div className="text-white">{weather.wind_level}</div>
          </div>
        </div>
      </div>
    </>
  );
}
