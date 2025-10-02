'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import * as React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'none' | 'light' | 'dark' | 'accent';
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'light', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col items-start gap-2 rounded-lg border border-none p-6 md:p-8 lg:gap-3 lg:p-10',
        variant === 'light' && 'bg-card text-card-foreground shadow shadow-reef-200',
        variant === 'dark' && 'bg-reef-700/40 text-inherit',
        variant === 'accent' && 'text-accent-foreground bg-reef-500/10',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Typography
      variant="small"
      ref={ref}
      className={cn(
        'relative w-full translate-y-2 rounded-t-lg bg-reef-200 pb-4 pt-2.5 text-center uppercase',
        className,
      )}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Typography variant="h3" ref={ref} className={cn('', className)} {...props} />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Typography ref={ref} className={cn('leading-snug lg:leading-snug', className)} {...props} />
  ),
);
CardDescription.displayName = 'CardDescription';

const CardPrice = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      className={cn('inline-flex items-end gap-1.5 lg:gap-2', className)}
      {...props}
    />
  ),
);
CardPrice.displayName = 'CardPrice';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('mt-3', className)} {...props} />,
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardPrice };
