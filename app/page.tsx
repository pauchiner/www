import { Projects } from './_components/projects';
import { Contact } from './_components/contact';
import { Header } from './_components/header';
import { Footer } from './_components/footer';
import { About } from './_components/about';
import { Jobs } from './_components/jobs';

export default function Home() {
  return (
    <main className="container flex flex-col max-w-2xl px-4 pt-5 md:px-8 md:pt-32 gap-8 border-dashed border-x-muted border-x-none md:border-x">
      <Header />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
