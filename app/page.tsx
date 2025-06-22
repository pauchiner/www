import {Projects} from './_components/projects';
import {Contact} from './_components/contact';
import {Header} from './_components/header';
import {Footer} from './_components/footer';
import {About} from './_components/about';
import {Jobs} from './_components/jobs';

export default function Home() {
  return (
    <main className="container max-w-2xl border-x-none md:border-x border-dashed border-x-muted flex flex-col px-4 md:px-8 pt-20 md:pt-32 gap-8">
      <Header />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
