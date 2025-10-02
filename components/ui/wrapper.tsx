'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const wrapperVariants = cva('', {
  variants: {
    color: {
      'reef-900': 'bg-reef-900 text-reef-50',
      'reef-800': 'bg-reef-800 text-reef-25',
      'reef-700': 'bg-reef-700 text-white',
      'reef-200': 'bg-reef-200 text-900',
      'reef-100': 'bg-reef-100 text-reef-900',
      'reef-50': 'bg-reef-50 text-reef-900',
      'reef-25': 'bg-reef-25 text-reef-900',
      white: 'bg-white text-reef-900',
      inherit: 'bg-inherit text-inherit',
    },
    scope: {
      default: 'relative block w-full',
      untilMobile: 'max-sm:relative max-sm:block max-sm:w-full',
      untilTablet: 'max-md:relative max-md:block max-md:w-full',
      fromTablet: 'md:relative md:block md:w-full',
      fromDesktop: 'lg:relative lg:block lg:w-full',
    },
  },
  defaultVariants: {
    color: 'inherit',
    scope: 'default',
  },
});

export interface WrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof wrapperVariants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  color?:
    | 'reef-900'
    | 'reef-800'
    | 'reef-700'
    | 'reef-200'
    | 'reef-100'
    | 'reef-50'
    | 'reef-25'
    | 'white'
    | 'inherit';
  scope?: 'default' | 'untilMobile' | 'untilTablet' | 'fromTablet' | 'fromDesktop';
}

const Wrapper = React.forwardRef<HTMLElement, WrapperProps>(
  ({ className, color, scope, asChild = false, as: Comp = 'div', children, ...props }, ref) => {
    const CompOrSlot: React.ElementType = asChild ? Slot : Comp;

    return (
      <CompOrSlot
        className={cn(wrapperVariants({ color, scope }), className)}
        ref={ref as React.Ref<HTMLElement>}
        {...props}
      >
        {children}
      </CompOrSlot>
    );
  },
);

Wrapper.displayName = 'Wrapper';

export { Wrapper, wrapperVariants };
