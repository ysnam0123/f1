import { motion } from 'framer-motion';
export default function MovingTab({
  tabs,
  selectedTab,
  setSelectedTab,
}: {
  tabs: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}) {
  return (
    <>
      <ul className="relative flex rounded-[10px]">
        {tabs.map((tab, idx) => (
          <li
            key={idx}
            className={`flex h-[45px] w-[163px] flex-1 cursor-pointer items-center justify-center rounded-[3px] text-center hover:bg-[#2a2a2a]`}
            onClick={() => setSelectedTab(tab)}
          >
            <p className="relative z-10">{tab}</p>
          </li>
        ))}
        <motion.div
          className="absolute left-0 h-[45px] w-[163px] rounded-[5px] bg-[#787878]"
          animate={{
            x: tabs.indexOf(selectedTab) * 163, // li width와 동일
          }}
          transition={{
            type: 'spring',
            stiffness: 200, // 강하게 튕김
            damping: 30, // 마찰
          }}
        />
      </ul>
    </>
  );
}
