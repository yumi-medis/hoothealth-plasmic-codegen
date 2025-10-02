'use client';

import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-shad-primary/10 w-full animate-pulse', className)} {...props} />;
}

export { Skeleton };
