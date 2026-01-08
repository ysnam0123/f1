'use client';
import Lottie from 'lottie-react';
import f1Loading from '../../../../public/f1Loading.json';
import { twMerge } from 'tailwind-merge';

interface LoadingLottieProps {
  className?: string;
  loadingText?: string;
}

export default function F1Loading({
  className = '',
  loadingText = '로딩 중...',
}: LoadingLottieProps) {
  return (
    <>
      <div
        className={twMerge(
          'flex h-100 w-100 flex-col items-center justify-center gap-5',
          className,
        )}
      >
        <Lottie animationData={f1Loading} loop className="w-full" />
        <p className="text-2xl">{loadingText}</p>
      </div>
    </>
  );
}
