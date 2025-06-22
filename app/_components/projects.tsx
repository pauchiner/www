import { Badge, Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { ExternalLink, Package } from "lucide-react";
import Link from 'next/link';

export const Projects = () => (
  <section id="projects">
    <h3 className="text-lg scroll-m-20 underline underline-offset-4 leading-7 [&:not(:first-child)]:mt-2">
      <a href="/#projects">PROJECTS</a>
    </h3>
    <div className="flex flex-col gap-4 mt-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <Link href="https://formizee.com" target="_blank" className="flex items-center hover:underline underline-offset-2 flex gap-2">
              <span>Formizee</span>
              <ExternalLink strokeWidth={2} size={12}/>
            </Link>
            <span className="font-normal text-muted-foreground text-sm">2024</span>
          </CardTitle>
          <CardDescription>An Open Source Forms Platform. Alt to formspree.io, formcarry.com, formester.com </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-4">
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">Turso</Badge>
          <Badge variant="outline">Cloudflare Workers</Badge>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <Link href="https://github.com/pauchiner/pastelnight.nvim" target="_blank" className="flex items-center hover:underline underline-offset-2 flex gap-2">
              <span>pastelnight.nvim</span>
              <ExternalLink strokeWidth={2} size={12}/>
            </Link>
            <span className="font-normal text-muted-foreground text-sm">2024</span>
          </CardTitle>
          <CardDescription>
            Neovim theme inspired in Palenight, support a lot of plugins out-of-the-box.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-4">
          <Badge variant="outline">Lua</Badge>
          <Badge variant="outline">HSL</Badge>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <Link href="https://github.com/pauchiner/astro-command-palette" target="_blank" className="flex items-center hover:underline underline-offset-2 flex gap-2">
              <span>Astro Command Palette</span>
              <ExternalLink strokeWidth={2} size={12}/>
            </Link>
            <span className="font-normal text-muted-foreground text-sm">2024</span>
          </CardTitle>
          <CardDescription>
            A lightweight, extensible and fast command palette for astro. 
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-4">
          <Badge variant="outline">Astro</Badge>
          <Badge variant="outline">Typescript</Badge>
          <Badge variant="outline">Web Components</Badge>
        </CardFooter>
      </Card>
    </div>
    <Button asChild className="mt-4">
      <Link href="/projects">
        <Package />
        Project Archive
      </Link>
    </Button>
  </section>
)
