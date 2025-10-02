'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Work_Sans } from 'next/font/google';

const work = Work_Sans({
  subsets: ['latin'],
  weight: ['600', '800'],
});

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo = ({ variant = 'light' }: LogoProps) => {
  return (
    <Button className={work.className} href="/" size="fit" variant="logo">
      <span
        className={cn(
          'font-semibold',
          variant === 'light' && 'text-black/60',
          variant === 'dark' && 'text-white/80',
        )}
      >
        HOOT
      </span>
      <span
        className={cn(
          'font-extrabold',
          variant === 'light' && 'text-reef-700',
          variant === 'dark' && 'text-reef-200',
        )}
      >
        HEALTH
      </span>
    </Button>
  );
};

export default Logo;
