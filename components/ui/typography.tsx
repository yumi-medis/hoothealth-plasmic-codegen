'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const typographyVariants = cva('font-lexend', {
  variants: {
    variant: {
      h1: 'text-2xl font-bold lg:text-3xl',
      h2: 'text-center text-xl font-semibold text-reef-800 lg:text-2xl text-inherit',
      h3: 'text-lg font-semibold lg:text-xl',
      p: 'text-base lg:text-lg',
      large: 'text-xl font-semibold lg:text-2xl',
      small: 'text-sm text-center',
      span: 'text-sm font-medium uppercase',
      icon: 'flex h-10 w-10 items-center justify-center rounded-md',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

// Mapping of variants to default HTML tags
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p' | 'large' | 'small' | 'span' | 'icon';

const defaultTagMap: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  large: 'span',
  small: 'small',
  span: 'span',
  icon: 'span',
};

export interface TypographyProps<T extends React.ElementType = 'p' | 'h3'>
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: T;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, asChild = false, as, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : as || defaultTagMap[variant ?? 'p'];

    return <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props} />;
  },
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
