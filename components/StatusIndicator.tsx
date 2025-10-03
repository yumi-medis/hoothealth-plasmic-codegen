'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { Wrapper } from '@/components/ui/wrapper';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status?: 'online' | 'offline' | 'busy';
}

const StatusIndicator = ({ status = 'online' }: StatusIndicatorProps) => {
  const statusColors: Record<string, string> = {
    online: 'bg-reef-300',
    offline: 'bg-gray-400',
    busy: 'bg-yellow-500',
  };

  return (
    <Wrapper className="z-50" color="reef-700">
      <Container className="flex items-center justify-center gap-3" variant="note">
        <div className={cn('h-3 w-3 animate-pulse rounded-full', statusColors[status])} />
        <Typography variant="span">
          {status === 'online' ? 'Doctors Online Now' : 'Doctors Are Busy'}
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default StatusIndicator;
