import {Button} from '@/components/ui';
import Link from 'next/link';

export const Header = () => (
  <header>
    <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-balance">
      Projects Archive
    </h1>
    <p className="leading-7 text-sm md:text-md text-muted-foreground text-balance [&:not(:first-child)]:mt-2">
      Here rest the projects of the last years.
    </p>
    <Button size="sm" variant="outline" className="mt-4" asChild>
      <Link href="/">GO BACK</Link>
    </Button>
  </header>
);
