'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import CTAButton from '@/components/CTAButton';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const GooeyBlob = () => (
  <div
    className={cn(
      'absolute animate-gooey',
      'h-[152px] w-[180px] md:h-[218px] md:w-[260px] lg:h-[318px] lg:w-[380px] xl:h-[420px] xl:w-[500px]',
      'rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%]',
      'bg-[linear-gradient(120deg,#317159_0%,#89C2B6_100%)]',
      'outline outline-1 outline-transparent',
      'will-change-[border-radius] [transform-style:preserve-3d]',
      'shadow-[5px_5px_89px_rgba(0,102,255,0.21)]',
    )}
  />
);

interface HeroProps {
  imageAlt?: string;
  imageSrc?: string;
  secondCtaHref?: string;
  secondCtaText?: string;
  subtitle: string;
  title: string;
}

const Hero = ({ imageAlt, imageSrc, secondCtaHref, secondCtaText, subtitle, title }: HeroProps) => {
  const hasImage = imageAlt && imageSrc;
  const hasSecondCta = secondCtaHref && secondCtaText;

  return (
    <Wrapper as="section" color="reef-700">
      <Container
        className={cn(
          'flex flex-col-reverse items-center justify-center gap-10 text-center lg:flex-row lg:gap-16 xl:gap-20',
          hasImage ? 'lg:justify-start lg:text-start' : 'justify-center text-center',
        )}
        variant={hasImage ? 'hero' : 'section'}
      >
        <Wrapper className={cn('flex flex-1 flex-col items-center gap-3 lg:items-start lg:gap-4')}>
          <Typography variant="h1">{title}</Typography>
          <Typography variant="p">{subtitle}</Typography>
          {hasImage && <CTAButton className="mt-2" variant="cta" />}
          {hasSecondCta && (
            <Button
              className="rounded-md border border-solid border-reef-200/50 px-4 py-2 text-sm md:px-5 md:py-3 lg:px-6"
              href={secondCtaHref}
              size="fit"
              target="_blank"
              variant="outline"
            >
              {secondCtaText}
            </Button>
          )}
        </Wrapper>
        {hasImage && (
          <Wrapper
            className={cn(
              'relative flex shrink-0',
              'h-[152px] w-[180px] md:h-[218px] md:w-[260px] lg:h-[318px] lg:w-[380px] xl:h-[420px] xl:w-[500px]',
            )}
          >
            <GooeyBlob />
            <Image
              alt={imageAlt}
              className={cn(
                'z-10 animate-morph overflow-hidden object-cover',
                'h-full w-full',
                'rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]',
              )}
              height={420}
              priority
              src={imageSrc}
              width={500}
            />
          </Wrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default Hero;
