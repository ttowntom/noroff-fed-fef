import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="mx-auto flex w-full max-w-screen-lg flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
