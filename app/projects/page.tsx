import {DataTable} from './_components/table';
import {Header} from './_components/header';
import {Footer} from '@/components/footer';

export default function Projects() {
  return (
    <main className="flex flex-col container h-screen px-4 pt-5 md:px-8 md:pt-20 gap-8">
      <Header />
      <DataTable />
      <Footer />
    </main>
  );
}
