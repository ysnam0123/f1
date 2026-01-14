import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface HistoricalStat {
  label: string;
  value: string | number;
}

interface TeamHistory {
  team: string;
  years: string;
}

interface HistoricalStatsProps {
  careerStats: HistoricalStat[];
  teamHistory: TeamHistory[];
}

export function HistoricalStats({
  careerStats,
  teamHistory,
}: HistoricalStatsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section className="mx-auto max-w-7xl px-6 py-6 select-none">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex w-full items-center justify-between text-left"
      >
        <h2 className="text-muted-foreground cursor-pointer text-[20px] tracking-wider uppercase hover:text-[#a3a3a3]">
          Historical Statistics
        </h2>
        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="mt-8 space-y-12">
          {/* Career Statistics */}
          <div className="space-y-6">
            <h3 className="text-muted-foreground text-sm">Career Statistics</h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {careerStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team History */}
          <div className="space-y-6">
            <h3 className="text-muted-foreground text-sm">Team History</h3>
            <div className="space-y-3">
              {teamHistory.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-baseline gap-4 text-[18px]"
                >
                  <span className="min-w-25 font-medium">{entry.years}</span>
                  <span className="text-muted-foreground">{entry.team}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
