'use client';

import { Trophy, User, Flag, House, UserRound } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function MobileFooter() {
  const router = useRouter();
  const pathname = usePathname();

  // 메뉴 배열
  const menus = [
    { label: '홈', icon: House, path: '/' },
    { label: '순위', icon: Trophy, path: '/ranking' },
    { label: '그랑프리', icon: Flag, path: '/season' },
    { label: '팀', icon: UserRound, path: '/team' },
    { label: '드라이버', icon: User, path: '/driver' },
  ];

  return (
    <footer className="fixed right-0 bottom-0 left-0 z-50 flex h-12 items-center justify-center gap-5 border-t border-[#4A4A4A] bg-(--color-bg-primary) sm:gap-10 lg:hidden">
      {menus.map(({ label, icon: Icon, path }) => {
        const isActive =
          path === '/' ? pathname === '/' : pathname.startsWith(path);

        return (
          <button
            key={label}
            onClick={() => router.push(path)}
            className="flex h-9.5 w-11 flex-col items-center justify-center text-[10px] font-medium"
          >
            <Icon
              size={20}
              className={isActive ? 'text-white' : 'text-[#4A4A4A]'}
            />
            <p className={isActive ? 'text-white' : 'text-[#4A4A4A]'}>
              {label}
            </p>
          </button>
        );
      })}
    </footer>
  );
}
