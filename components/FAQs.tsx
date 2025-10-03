'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { faqItems } from '@/constants/faq';

const FAQs = () => {
  return (
    <Wrapper as="section" color="white">
      <Container>
        <Typography variant="h2">Frequently Asked Questions</Typography>
        <Accordion className="mt-2 w-full" collapsible defaultValue="item-1" type="single">
          {faqItems.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Wrapper>
  );
};

export default FAQs;
