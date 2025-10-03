'use client';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import CTAButton from '@/components/CTAButton';
import { steps } from '@/constants/how-it-works';

const HowItWorks = () => {
  return (
    <Wrapper as="section" color="reef-25">
      <Container variant="section">
        <Typography variant="h2">Care Made Simple with HootHealth</Typography>
        <Typography className="text-reef-900/60" variant="small">
          In Three Easy Steps
        </Typography>
        <ul className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-3">
          {steps.map((step, index) => (
            <li className="h-full w-full" key={index}>
              <Card className="items-center text-center font-bold" variant="accent">
                <Typography className="bg-reef-500/20" variant="icon">
                  {index + 1}
                </Typography>
                <Typography as="h3">{step}</Typography>
              </Card>
            </li>
          ))}
        </ul>
        <CTAButton className="w-full sm:w-fit" />
      </Container>
    </Wrapper>
  );
};

export default HowItWorks;
