import Lottie from 'lottie-react';
import { twMerge } from 'tailwind-merge';
import loading from '../../../../public/loading.json';

export default function SimpleLoading({ className }: { className?: string }) {
  return (
    <>
      <div
        className={twMerge(
          'flex h-100 w-100 flex-col items-center justify-center gap-5',
          className,
        )}
      >
        <Lottie animationData={loading} loop className="w-full" />
      </div>
    </>
  );
}
