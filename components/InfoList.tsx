'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardPrice, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { highlightItems } from '@/constants/info-list';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface InfoItem {
  title: string;
  description: string;
  pricePrefix?: string;
  price?: string;
  link?: {
    text: string;
    href: string;
  };
  isMostPopular?: boolean;
  className?: string;
}

interface InfoListProps {
  heading: string;
  items: InfoItem[];
}

const InfoList = ({ heading, items }: InfoListProps) => {
  return (
    <Wrapper as="section" color="reef-100">
      <Container variant="section">
        <Typography variant="h2">{heading}</Typography>
        <ul className="mx-auto flex flex-col items-start gap-2 min-[320px]:items-center lg:flex-row lg:gap-6">
          {highlightItems.map((item, index) => (
            <li
              className="inline-flex flex-row items-center gap-2 text-reef-800/40 [&_svg]:h-4 [&_svg]:w-4"
              key={index}
            >
              <item.icon />
              <Typography className="text-reef-900/60" variant="small">
                {item.text}
              </Typography>
            </li>
          ))}
        </ul>
        <ul
          className={cn(
            'mt-2 grid grid-cols-1 gap-4 lg:mt-3',
            items.length >= 2 && 'md:grid-cols-2',
            items.length === 3 && 'xl:grid-cols-3',
            items.length >= 4 && 'xl:grid-cols-4',
          )}
        >
          {items.map((item, index) => (
            <li
              className={cn(
                'flex-end flex h-full w-full flex-col items-center overflow-visible',
                item?.className ?? '',
              )}
              key={index}
            >
              {item.isMostPopular && <CardHeader>Most Popular</CardHeader>}
              <Card className="z-10">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardPrice className="mt-auto">
                  {item.pricePrefix ?? 'From'} <Typography variant="large">{item.price}</Typography>
                </CardPrice>
                {item?.link?.href && item?.link?.text && (
                  <Button className="mt-3 w-full" href={item.link.href}>
                    {item.link.text} <ArrowRight />
                  </Button>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default InfoList;
