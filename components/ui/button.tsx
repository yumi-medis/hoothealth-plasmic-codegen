'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import Link, { type LinkProps } from 'next/link';
import * as React from 'react';

const buttonVariants = cva(
  'relative inline-flex w-fit items-center justify-center whitespace-normal transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        cta: 'bg-shad-secondary uppercase text-shad-secondary-foreground',
        primary: 'bg-shad-primary text-shad-primary-foreground',
        outline: '',
        menu: 'flex-col overflow-visible font-medium text-reef-900 hover:text-reef-700 max-lg:gap-0.5 lg:py-8 [&:hover_span]:opacity-100 [&_span]:relative [&_span]:bottom-0 [&_span]:block [&_span]:h-1 [&_span]:w-full [&_span]:bg-reef-700 [&_span]:opacity-0 [&_span]:transition-all [&_span]:duration-300 lg:[&_span]:absolute lg:[&_span]:h-1.5',
        icon: 'h-6 w-6 rounded-full bg-shad-accent opacity-90 hover:opacity-100 lg:h-10 lg:w-10 [&_svg]:size-4 [&_svg]:text-shad-accent-foreground [&_svg]:hover:translate-x-0 lg:[&_svg]:size-6',
        logo: 'text-lg tracking-tight md:text-xl lg:text-2xl',
        link: 'inline-flex flex-col items-start gap-0.5 text-sm font-medium after:block after:h-0.5 after:w-full after:bg-reef-800 after:transition-all after:content-[""] hover:after:-translate-y-1 lg:text-base',
        social: '',
      },
      size: {
        default:
          'gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow-sm md:px-5 md:py-3 lg:px-6 lg:text-base [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:transition-all [&_svg]:hover:translate-x-[4px] lg:[&_svg]:size-6',
        fit: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type ButtonProps = VariantProps<typeof buttonVariants> &
  (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    if ('href' in props && props.href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={(props as React.ButtonHTMLAttributes<HTMLButtonElement>).type || 'button'}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
