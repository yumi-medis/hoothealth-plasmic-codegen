"use client";

import CTAButton from "@/components/button/CTA";
import { Container } from "@/components/ui/container";
import { Wrapper } from "@/components/ui/wrapper";
import { Typography } from "@/components/ui/typography";

const FinalCTAConversion = () => {
  return (
    <Wrapper as="section" color="reef-800">
      <Container>
        <Typography variant="h2">Professional Care, Fast Results</Typography>
        <Typography className="text-center">
          Access medical certificates and referrals online with full privacy and
          24/7 support from trusted Australian doctors.
        </Typography>
        <CTAButton />
      </Container>
    </Wrapper>
  );
};

export default FinalCTAConversion;
