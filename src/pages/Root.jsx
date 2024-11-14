import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-lg flex-col sm:w-full">
      <MainNavigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
