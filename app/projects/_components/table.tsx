import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';
import {ExternalLink} from 'lucide-react';
import Link from 'next/link';

const Content = (props: {projects: any[]}) =>
  props.projects.map((project: any) => (
    <TableRow key={project.id}>
      <TableCell className="font-medium">
        {new Date(project.created_at).getFullYear()}
      </TableCell>
      <TableCell>
        <Link
          href={project?.homepage ?? project?.svn_url}
          target="_blank"
          className="flex items-center hover:underline underline-offset-2 flex gap-2"
        >
          <span>{project.name}</span>
          <ExternalLink strokeWidth={2} size={12} />
        </Link>
      </TableCell>
      <TableCell className="hidden md:table-cell max-w-[300px] truncate">
        {project.description}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <LanguageLabel>{project.language}</LanguageLabel>
      </TableCell>
    </TableRow>
  ));

const LanguageLabel = (props: {children: React.ReactNode}) => {
  const languageColorMap: Record<string, string> = {
    TypeScript: 'bg-sky-700 dark:bg-sky-600 text-background opacity-80',
    JavaScript: 'bg-yellow-500 dark:bg-yellow-400 text-background opacity-80',
    Lua: 'bg-blue-800 dark:bg-blue-700 text-background opacity-80',
    Shell: 'bg-lime-600 dark:bg-lime-500 text-background opacity-80',
    Rust: 'bg-orange-700 dark:bg-orange-600 text-background opacity-80',
    C: 'bg-gray-500 dark:bg-gray-400 text-background opacity-80',
    Python: 'bg-blue-400 dark:bg-blue-300 text-background opacity-80',
    Go: 'bg-cyan-500 dark:bg-cyan-400 text-background opacity-80',
    Astro: 'bg-violet-500 dark:bg-violet-400 text-background opacity-80',
    'C#': 'bg-purple-700 dark:bg-purple-600 text-background opacity-80'
  };

  const currentColor = languageColorMap[props.children as string];

  return (
    <Badge className={currentColor} variant="secondary">
      {props.children ?? 'Other'}
    </Badge>
  );
};

const ErrorBoundary = (props: {
  status: number | undefined;
  message: string | undefined;
}) => {
  return (
    <div className="container w-full h-full flex flex-col items-center gap-4 justify-center">
      <h3 className="text-lg font-medium text-red-500 dark:text-red-400">
        ERROR {props.status}
      </h3>
      <pre className="text-wrap text-center ">
        {props?.message ??
          'Something was wrong when fetching the projects data.'}
      </pre>
    </div>
  );
};

export const DataTable = async () => {
  let error: any = {};
  let data = [];

  try {
    const response = await fetch(
      `https://api.github.com/users/pauchiner/repos?per_page=100`
    );
    data = await response.json();
  } catch (err) {
    error = {
      status: 500,
      message: 'Something was wrong when fetching the projects data.'
    };
  }

  const projects = data
    .filter((repo: any) => !repo?.fork)
    .filter((repo: any) => repo?.description)
    .sort(
      (a: any, b: any) =>
        new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime()
    );

  return (
    <div className="flex flex-col flex-3">
      {projects.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">DATE</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead className="hidden md:table-cell max-w-[300px]">
                DESCRIPTION
              </TableHead>
              <TableHead className="hidden md:table-cell">LANGUAGE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Content projects={projects} />
          </TableBody>
        </Table>
      ) : (
        <ErrorBoundary status={error?.status} message={error?.message} />
      )}
    </div>
  );
};
