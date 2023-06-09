import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dunpak Society Official Website',
  description: 'Dunpak Society ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <script src='./js/lib.js' async></script>
        <script src='./js/lib2.js' async></script>
      </Head>
      <body
        className={
          inter.className +
          ' bg-dp-black leading-normal tracking-normal text-white gradient'
        }
      >
        {children}
      </body>
    </html>
  );
}
