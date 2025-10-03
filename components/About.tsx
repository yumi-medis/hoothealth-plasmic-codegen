'use client';

import { Container } from '@/components/ui/container';
import { Wrapper } from '@/components/ui/wrapper';
import { Typography } from '@/components/ui/typography';

const About = () => {
  return (
    <Wrapper as="section" color="reef-100">
      <Container>
        <Typography variant="h2">Convenient Care Online</Typography>
        <Typography className="text-center">
          At HootHealth, we provide a simple way to access medical certificates and referrals
          online. Our service connects you with registered Australian doctors, offering professional
          care from the comfort of your home. We prioritise your privacy and security while
          delivering patient-focused support 24/7 to meet your medical needs quickly and
          effectively.
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default About;
