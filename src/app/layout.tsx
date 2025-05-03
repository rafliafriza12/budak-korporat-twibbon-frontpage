import { metadata, siteConfig } from './metadata';
import '@/styles/globals.css';
import Providers from './providers';
import { ThemeProvider } from '@/core/providers/theme.provider';

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body className="scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#FF0000] scrollbar-track-[#000000]">
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
