
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

/**
 * CONFIGURABLE SECTION: Layout Configuration
 * 
 * This component defines the main layout structure used across all pages.
 * It includes the Navbar, main content area, Footer and ScrollToTop components.
 * 
 * TO MODIFY:
 * - To change global layout: Update the structure below
 * - To add global elements: Add components inside the main layout
 * - To modify responsive behavior: Update the container classes
 */
type LayoutProps = {
  children: React.ReactNode;
  /**
   * Optional className to apply to the main content area
   * Useful for specific page layouts that need custom styling
   */
  mainClassName?: string;
  /**
   * Optional flag to disable standard padding on the main content
   * Useful for pages that need full-width content sections
   */
  noPadding?: boolean;
};

/**
 * Main Layout component
 * 
 * Provides consistent structure across all pages with Navbar and Footer
 */
const Layout = ({ children, mainClassName = '', noPadding = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className={`flex-grow ${!noPadding ? 'pt-4 pb-8 md:pt-6 md:pb-12' : ''} ${mainClassName}`}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
