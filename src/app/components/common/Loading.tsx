'use client';
import Lottie from 'lottie-react';
import f1Loading from '../../../../public/f1Loading.json';

interface LoadingLottieProps {
  className?: string;
  loadingText?: string;
}

export default function Loading({
  className = '',
  loadingText = '로딩 중...',
}: LoadingLottieProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <Lottie animationData={f1Loading} loop className={`${className}`} />
        <p className="text-2xl">{loadingText}</p>
      </div>
    </>
  );
}
