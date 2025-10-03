'use client';

import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Wrapper } from '@/components/ui/wrapper';
import { menuItems } from '@/constants/menu';
import { cn } from '@/lib/utils';

interface HeaderMenuProps {
  menuOpen?: boolean;
}

const HeaderMenu = ({ menuOpen = false }: HeaderMenuProps) => {
  return (
    <Wrapper
      className={cn(
        'font-medium transition-all max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:-z-10',
        menuOpen ? 'max-lg:translate-y-0' : 'max-lg:-translate-y-full',
      )}
      color="reef-25"
    >
      <Container
        aria-label="Main menu"
        as="nav"
        className="flex flex-col items-start justify-start gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-end lg:gap-10"
        scope="untilTablet"
        variant="section"
      >
        {menuItems.slice(1).map((item) => (
          <Button key={item.href} href={item.href} size="fit" variant="menu">
            {item.label}
            <span />
          </Button>
        ))}
        <CTAButton isLast={false} />
      </Container>
    </Wrapper>
  );
};

export default HeaderMenu;
