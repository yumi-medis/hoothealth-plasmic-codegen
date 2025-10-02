'use client';

import image_google from '@/public/google.png';
import image_quote from '@/public/quote.svg';
import { Card, CardDescription, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { testimonalItems } from '@/constants/testimonials';
import Image from 'next/image';

const StarRating = () => {
  return (
    <div>
      <div className="flex flex-row justify-start">
        {[...Array(5)].map((e, i) => (
          <span key={i}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <Wrapper as="section" color="reef-800">
      <Container>
        <Typography variant="h2">Hear From Our Customers</Typography>
        <Image
          alt="Google rating: 5 stars"
          className="h-auto w-24 md:w-28 lg:w-32 xl:w-36"
          height={64}
          src={image_google}
          width={144}
        />
        <Carousel className="mt-2 flex w-full flex-row items-center gap-2 lg:gap-4">
          <CarouselPrevious />
          <CarouselContent>
            {testimonalItems.map((testimonial, index) => (
              <CarouselItem
                className="flex-[0_0_80%] md:flex-[0_0_40%] xl:flex-[0_0_30%]"
                key={index}
              >
                <Card variant="dark">
                  <Typography className="bg-reef-600/80" variant="icon">
                    <Image
                      alt={`A quote image for ${testimonial.name}`}
                      aria-hidden="true"
                      className="brightness-0 invert-[1]"
                      height={24}
                      src={image_quote}
                      width={24}
                    />
                  </Typography>
                  <StarRating />
                  <CardDescription className="mb-auto">{testimonial.body}</CardDescription>
                  <CardFooter className="font-bold">{testimonial.name}</CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
