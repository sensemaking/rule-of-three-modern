import './global.css'
import type { ReactNode } from 'react'

import { Header } from '../components/header'
import { Footer } from '../components/footer'

type RootLayoutProps = { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData()

  return (
    <div id="root">
      <meta name="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      {children}     
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
