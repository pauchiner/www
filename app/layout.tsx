import {Geist, Geist_Mono} from 'next/font/google';
import type {Metadata} from 'next';
import {cn} from '@/lib/ui';
import './globals.css';

import {ThemeProvider, ThemeToggle} from '@/components/themes';
import {GoToTop} from '@/components/top';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Pau Garcia Chiner',
  description:
    'Pau García Chiner is a full-stack software developer obsessed with minimal designs and the perfect user experience.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'flex relative w-full justify-center antialiased'
        )}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
          <GoToTop />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
