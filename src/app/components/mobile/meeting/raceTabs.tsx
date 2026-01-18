import { RaceStatsticsTab } from '@/types/meeting';

export default function RaceTabs({
  tabs,
  mobileTabs,
  selectedTab,
  setSelectedTabAction,
}: {
  tabs: RaceStatsticsTab[];
  mobileTabs: RaceStatsticsTab[];
  selectedTab: string;
  setSelectedTabAction: (tab: string) => void;
}) {
  return (
    <>
      <div className="hide-scrollbar flex items-center gap-2.5 overflow-x-scroll">
        <div className="mobile">
          <ul className="mb-4 flex gap-2.5 sm:mb-7.5 sm:gap-2.5">
            {mobileTabs.map((tab) => (
              <li
                key={tab.label}
                onClick={() => setSelectedTabAction(tab.label)}
                className={`${selectedTab === tab.label ? 'border-b-2 border-[#D80003] sm:border-0 sm:bg-[#4B4B4B]' : 'bg-[#212121]'} flex h-10 cursor-pointer items-center justify-center truncate rounded-[5px] px-4 text-[13px] font-semibold hover:bg-[#4B4B4B] sm:rounded-[10px] sm:text-[18px]`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
        <ul className="mb-4 flex gap-2.5 sm:mb-7.5 sm:gap-2.5">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              onClick={() => setSelectedTabAction(tab.label)}
              className={`${selectedTab === tab.label ? 'border-b-2 border-[#D80003] sm:border-0 sm:bg-[#4B4B4B]' : 'bg-[#212121]'} flex h-10 cursor-pointer items-center justify-center truncate rounded-[5px] px-4 text-[13px] font-semibold hover:bg-[#4B4B4B] sm:rounded-[10px] sm:text-[18px]`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
