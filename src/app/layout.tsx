'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import './css/style.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Buyside Bogey',
//   description: 'Real-time, intuitive dashboard for anonymous bogey predictions',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
