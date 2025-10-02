'use client';

import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { cn } from '@/lib/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, CircleChevronRight, MessageCircleQuestion } from 'lucide-react';
import * as React from 'react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between gap-2 py-4 text-left text-reef-700 transition-all hover:underline lg:gap-4 lg:py-5 [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      <Typography className="flex flex-row items-center gap-2 font-medium lg:gap-4">
        <MessageCircleQuestion className="size-4 lg:size-5" />
        {children}
      </Typography>
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-left"
    {...props}
  >
    <Wrapper className={cn('flex flex-row items-start gap-2 pb-4 pt-0 lg:gap-4', className)}>
      <CircleChevronRight className="mt-1 size-4 flex-none lg:size-5" />
      <Typography className={cn('font-medium', className)}>{children}</Typography>
    </Wrapper>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
