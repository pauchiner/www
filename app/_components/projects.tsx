import {
  Badge,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui';
import {ExternalLink, GitFork, Package, Star} from 'lucide-react';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  href: string;
  date: string;
  repo: string;
  description: string;
  labels: string[];
}

const Project = async (props: ProjectProps) => {
  let stars = 0;
  let forks = 0;
  let error = null;
  try {
    const response = await fetch(`https://api.github.com/repos/${props.repo}`);
    const data = await response.json();
    stars = data?.stargazers_count;
    forks = data?.network_count;
  }
  catch (err) {
    error = true;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <Link
            href={props.href}
            target="_blank"
            className="flex items-center hover:underline underline-offset-2 flex gap-2"
          >
            <span>{props.title}</span>
            <ExternalLink strokeWidth={2} size={12} />
          </Link>
          <span className="font-normal text-muted-foreground text-sm">
            {props.date}
          </span>
        </CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row  gap-4">
          {props.labels.map(label => (
            <Badge key={label} variant="outline">
              {label}
            </Badge>
          ))}
        </div>
        {error ? (
          <></>
        ) : (
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="flex gap-2 items-center">
              <Star size={12} />
              {stars}
            </span>
            <span className="flex gap-2 items-center">
              <GitFork size={12} />
              {forks}
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

const PROJECTS: ProjectProps[] = [
  {
    title: 'Formizee',
    href: 'https://formizee.com?ref=pauchiner.es',
    date: '2024',
    repo: 'formizee/formizee',
    description:
      'An Open Source Forms Platform. Alt to formspree.io, formcarry.com, formester.com',
    labels: ['Next.js', 'Cloudflare Workers', 'Turso']
  },
  {
    title: 'pastelnight.nvim',
    href: 'https://github.com/pauchiner/pastelnight.nvim?ref=pauchiner.es',
    date: '2024',
    repo: 'pauchiner/pastelnight.nvim',
    description:
      'Neovim theme inspired in Palenight, support a lot of plugins out-of-the-box.',
    labels: ['Lua', 'HSL']
  },
  {
    title: 'Astro Command Palette',
    href: 'https://github.com/pauchiner/astro-command-palette?ref=pauchiner.es',
    date: '2024',
    repo: 'pauchiner/astro-command-palette',
    description:
      'A lightweight, extensible and fast command palette for astro.',
    labels: ['Astro', 'Typescript', 'Web Components']
  }
];

export const Projects = async () => {
  return (
    <section id="projects">
      <h3 className="text-lg scroll-m-20 underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-2">
        <a href="/#projects">PROJECTS</a>
      </h3>
      <div className="flex flex-col gap-4 mt-6">
        {PROJECTS.map(project => (
          <Project key={project.href} {...project} />
        ))}
      </div>
      <Button variant="outline" asChild className="mt-4">
        <Link href="/projects">
          <Package />
          PROJECTS ARCHIVE
        </Link>
      </Button>
    </section>
  );
};
