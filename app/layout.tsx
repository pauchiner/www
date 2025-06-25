import {IBM_Plex_Mono} from 'next/font/google';
import type {Metadata} from 'next';
import {cn} from '@/lib/ui';
import './globals.css';

import {ThemeProvider, ThemeToggle} from '@/components/themes';
import {Analytics} from '@vercel/analytics/next';
import {GoToTop} from '@/components/top';

const font = IBM_Plex_Mono({
  weight: ['400', '500', '700'],
  variable: '--font-mono',
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
          font.variable,
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
          <Analytics />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
