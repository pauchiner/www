import {Footer} from './_components/footer';
import {Header} from './_components/header';
import {DataTable} from './_components/table';

export default function Projects() {
  return (
    <main className="flex flex-col container h-screen flex flex-col px-4 md:px-8 pt-20 md:pt-20 gap-8">
      <Header />
      <DataTable />
      <Footer />
    </main>
  );
}
