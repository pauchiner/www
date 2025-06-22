import {Projects} from './_components/projects';
import {Header} from './_components/header';
import {Footer} from './_components/footer';
import {About} from './_components/about';
import {Jobs} from './_components/jobs';

export default function Home() {
  return (
    <main className="container max-w-2xl border-x-none md:border-x border-dashed border-x-muted-foreground flex flex-col px-8 pt-32 gap-8">
      <Header />
      <About />
      <Jobs />
      <Projects />
      <Footer />
    </main>
  );
}
