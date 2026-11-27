import Navbar from './../Nav/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './../Footer/Footer';
import { useEffect } from 'react';

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return (
    <>
      <Navbar />
      <main className="pt-0"><Outlet /></main>
      <Footer />
    </>
  );
};

export default Layout;
