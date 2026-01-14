interface Milestone {
  year: number;
  event: string;
}

interface CareerOverviewProps {
  summary: string;
  milestones: Milestone[];
}

export function CareerOverview({ summary, milestones }: CareerOverviewProps) {
  return (
    <section className="border-border mx-auto max-w-7xl border-b px-6 py-12 select-none">
      <div className="max-w-3xl">
        <div className="mb-6 space-y-4">
          <h2 className="text-muted-foreground mb-3 text-[18px] tracking-wider uppercase">
            Career Overview
          </h2>
          {/* Summary Paragraph */}
          <p className="text-[18px] text-[#ffffff]">{summary}</p>
        </div>

        {/* Key Milestones */}
        <div className="space-y-4">
          <h3 className="text-muted-foreground text-[18px]">Key Milestones</h3>
          <div className="space-y-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-baseline gap-4">
                <span className="text-muted-foreground min-w-15 text-sm font-medium">
                  {milestone.year}
                </span>
                <span className="text-sm">{milestone.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
