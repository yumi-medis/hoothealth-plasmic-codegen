'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { Card, CardDescription } from '@/components/ui/card';
import { reasonItems } from '@/constants/why-choose-us';

const WhyChooseUs = () => {
  return (
    <Wrapper as="section" color="reef-800">
      <Container variant="section">
        <Typography variant="h2">Why Patients Trust Us</Typography>
        <ul className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-3 xl:grid-cols-3">
          {reasonItems.map((item, index) => (
            <li className="h-full w-full" key={index}>
              <Card variant="dark">
                <Typography className="bg-reef-600/80" variant="icon">
                  <item.icon />
                </Typography>
                <Typography as="h3" className="font-bold">
                  {item.title}
                </Typography>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default WhyChooseUs;
