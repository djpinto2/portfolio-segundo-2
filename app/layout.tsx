import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-segundo.vercel.app'),
  title: 'Segundo Pinto | Full-Stack Developer Portfolio',
  description:
    'Portfolio of Segundo Pinto, developer specialized in React, Next.js and TypeScript. Featured projects, tech stack and contact.',
  openGraph: {
    type: 'website',
    siteName: 'Segundo Pinto',
    title: 'Segundo Pinto | Full-Stack Developer Portfolio',
    description:
      'Portfolio of Segundo Pinto, developer specialized in React, Next.js and TypeScript. Featured projects, tech stack and contact.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
