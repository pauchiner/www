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
        <Badge variant="secondary">{project.language}</Badge>
      </TableCell>
    </TableRow>
  ));

const Error = (props: {status: number; message: string}) => {
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
  const response = await fetch(
    `https://api.github.com/users/pauchiner/repos?per_page=100`
  );
  let error: any = {};
  let data = [];

  if (response.ok) {
    data = await response.json();
  } else {
    error = await response.json();
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
        <Error status={response.status} message={error?.message} />
      )}
    </div>
  );
};
