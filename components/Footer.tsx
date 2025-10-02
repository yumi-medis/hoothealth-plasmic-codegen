'use client';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { footerLinks, socialLinks } from '@/constants/footer';
import { Mail } from 'lucide-react';

const FinalCTA = () => {
  return (
    <Wrapper as="section" color="reef-900">
      <Container className="flex flex-col items-start gap-6 xl:gap-10" variant="footer">
        <div className="flex w-full flex-col items-start gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-5">
          <ul className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-5">
            <li>
              <Logo variant="dark" />
            </li>
            <li className="flex flex-row items-center gap-2">
              <Mail />
              <Button href="mailto:admin@hoothealth.com.au" size="fit" variant="link">
                admin@hoothealth.com.au
              </Button>
            </li>
          </ul>
          <ul className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-5">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Button href={link.href} size="fit" variant="link">
                  {link.name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col items-start gap-4 xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-5">
          <ul className="flex flex-row items-start gap-4 lg:items-center lg:gap-5">
            {socialLinks.map((social, index) => (
              <li className="flex" key={index}>
                <Button href={social.href} size="fit" variant="social">
                  <social.icon />
                  <span className="sr-only">{social.sr}</span>
                </Button>
              </li>
            ))}
          </ul>
          <Typography variant="small">Copyright © 2024 HootHealth</Typography>
        </div>
      </Container>
    </Wrapper>
  );
};

export default FinalCTA;
