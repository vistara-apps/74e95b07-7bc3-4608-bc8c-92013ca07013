import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'OriginStamp - Prove your ideas, own your content\'s future',
  description: 'A tool for creators to timestamp and mint their ideas as ZK-verified, remixable tokens on Base, earning royalties from remixed content.',
  keywords: ['blockchain', 'nft', 'ideas', 'timestamp', 'base', 'zk-proof'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
