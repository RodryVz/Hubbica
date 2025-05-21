
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/**
 * Layout component - Main application layout wrapper
 * 
 * Features:
 * - Consistent layout structure across all pages
 * - Includes Navbar, main content area, Footer and ScrollToTop
 * - Responsive design for all screen sizes
 * - Supports theme transitions with smooth animations
 */
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
