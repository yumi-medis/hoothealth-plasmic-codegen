'use client';

import { cn } from '@/lib/utils';

interface HamburgerButtonProps {
  onClick: () => void;
  open: boolean;
}

const HamburgerButton = ({ open, onClick }: HamburgerButtonProps) => {
  return (
    <button
      aria-controls="mobile-menu"
      aria-expanded={open}
      aria-label="Toggle mobile menu"
      className="group relative block lg:hidden"
      onClick={onClick}
    >
      <div className={cn('relative flex items-center justify-center overflow-hidden')}>
        <div className="flex h-5 w-6 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          {/* Original 3 bars */}
          <div
            className={cn(
              'h-1 w-6 origin-left transform rounded-xl bg-foreground transition-all duration-300',
              open && 'translate-x-10',
            )}
          />
          <div
            className={cn(
              'duration-30 h-1 w-6 transform rounded-xl bg-foreground transition-all delay-75',
              open && 'translate-x-10',
            )}
          />
          <div
            className={cn(
              'h-1 w-6 origin-left transform rounded-xl bg-foreground transition-all delay-150 duration-300',
              open && 'translate-x-10',
            )}
          />

          {/* Cross / close icon */}
          <div
            className={cn(
              'absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between rounded-xl transition-all duration-500',
              open && 'w-12 translate-x-0',
            )}
          >
            <div
              className={cn(
                'absolute h-1 w-5 rotate-0 transform rounded-xl bg-foreground transition-all delay-300 duration-500',
                open && 'rotate-45',
              )}
            />
            <div
              className={cn(
                'absolute h-1 w-5 -rotate-0 transform rounded-xl bg-foreground transition-all delay-300 duration-500',
                open && '-rotate-45',
              )}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default HamburgerButton;
