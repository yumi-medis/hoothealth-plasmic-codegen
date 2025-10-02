'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const containerVariants = cva('bg-inherit text-inherit', {
  variants: {
    variant: {
      note: 'py-4',
      header: 'py-6',
      hero: 'py-12 md:py-[72px] lg:py-24',
      section: 'flex flex-col items-center gap-4 lg:gap-5 py-12 md:py-16 lg:py-20',
      subsection: 'py-6 md:py-8 lg:py-10',
      footer: 'py-8 md:py-12 lg:py-16',
    },
    scope: {
      default: 'container mx-auto px-5 md:px-8 lg:px-12',
      untilMobile: 'max-md:container max-md:mx-auto max-md:px-5 md:p-0',
      untilTablet: 'max-lg:container max-lg:mx-auto max-lg:px-5 max-lg:md:px-8 lg:p-0',
      fromTablet: 'max-sm:p-0 md:container md:mx-auto md:px-8 lg:px-12',
      fromDesktop: 'max-md:p-0 lg:container lg:mx-auto lg:px-12',
    },
  },
  defaultVariants: {
    variant: 'section',
    scope: 'default',
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'note' | 'header' | 'hero' | 'section' | 'subsection' | 'footer';
  scope?: 'default' | 'untilMobile' | 'untilTablet' | 'fromTablet' | 'fromDesktop';
}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, variant, scope, asChild = false, as: Comp = 'div', children, ...props }, ref) => {
    const CompOrSlot: React.ElementType = asChild ? Slot : Comp;

    return (
      <CompOrSlot
        className={cn(containerVariants({ variant, scope, className }))}
        ref={ref as React.Ref<HTMLElement>}
        {...props}
      >
        {children}
      </CompOrSlot>
    );
  },
);

Container.displayName = 'Container';

export { Container, containerVariants };
