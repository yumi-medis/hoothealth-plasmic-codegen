'use client';

import { menuItems } from '@/constants/menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface CTAButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLast?: boolean;
  variant?: 'cta' | 'primary';
}

const CTAButton = ({ className, isLast = true, variant = 'primary', ...props }: CTAButtonProps) => {
  const pathname = usePathname();
  const activeItem = menuItems
    .filter((item) => pathname?.startsWith(item.href))
    .sort((a, b) => b.href.length - a.href.length)[0];
  const link = activeItem?.ctaHref ?? menuItems[0].ctaHref ?? '/welcome';
  const text = activeItem?.ctaText ?? menuItems[0].ctaText ?? 'Get Started';

  return (
    <Button
      aria-label={`${text} button`}
      className={cn(isLast && 'mt-3', className)}
      href={link}
      variant={variant}
      {...props}
    >
      {text} <ArrowRight />
    </Button>
  );
};

export default CTAButton;
