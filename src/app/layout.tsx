import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Buyside Bogey',
  description: 'Real-time, intuitive dashboard for anonymous bogey predictions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
