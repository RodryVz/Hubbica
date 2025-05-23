
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from './ThemeToggle';
import WhatsAppButton from './WhatsAppButton';

/**
 * Navbar component - Provides site-wide navigation with responsive design
 * 
 * Features:
 * - Responsive desktop and mobile navigation
 * - Active link highlighting
 * - Theme toggle integration
 * - WhatsApp contact button for CEO communication
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if the current path matches the link path
  const isActive = (path: string) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Handle mobile menu close
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-display font-bold">H</div>
          <span className="font-display text-xl tracking-tight">hub<span className="text-brand-purple">bica</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/spaces" 
            className={`transition-colors ${isActive('/spaces') ? 'text-brand-purple' : 'text-gray-600 hover:text-brand-purple'}`}
          >
            Explorar espacios
          </Link>
          <Link 
            to="/how-to-host" 
            className={`transition-colors ${isActive('/how-to-host') ? 'text-brand-purple' : 'text-gray-600 hover:text-brand-purple'}`}
          >
            Cómo funciona
          </Link>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* WhatsApp contact button for CEO */}
          <div className="hidden sm:inline-flex">
            <WhatsAppButton 
              phoneNumber="5491234567890"
              message="Hola! Me gustaría obtener más información sobre Hubbica."
              variant="outline"
              size="icon"
              className="rounded-full"
              trackingSource="navbar"
            />
          </div>
          
          <Link to="/how-to-host" className="hidden sm:inline-flex">
            <Button className="rounded-full">Publica tu espacio</Button>
          </Link>
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] pt-12">
              <div className="flex flex-col gap-6">
                <Link 
                  to="/spaces" 
                  className={`p-2 rounded-md text-lg font-medium transition-colors ${
                    isActive('/spaces') ? 'bg-gray-100 text-brand-purple' : 'hover:bg-gray-100'
                  }`}
                  onClick={handleLinkClick}
                >
                  Explorar espacios
                </Link>
                <Link 
                  to="/how-to-host" 
                  className={`p-2 rounded-md text-lg font-medium transition-colors ${
                    isActive('/how-to-host') ? 'bg-gray-100 text-brand-purple' : 'hover:bg-gray-100'
                  }`}
                  onClick={handleLinkClick}
                >
                  Cómo funciona
                </Link>
                <Link 
                  to="/how-to-host" 
                  className={`p-2 rounded-md text-lg font-medium transition-colors ${
                    isActive('/publish') ? 'bg-gray-100 text-brand-purple' : 'hover:bg-gray-100'
                  }`}
                  onClick={handleLinkClick}
                >
                  Publica tu espacio
                </Link>
                
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <WhatsAppButton 
                    phoneNumber="5491234567890"
                    message="Hola! Me gustaría obtener más información sobre Hubbica."
                    variant="ghost"
                    className="p-2 rounded-md flex items-center gap-2 hover:bg-gray-100 w-full justify-start"
                    trackingSource="navbar-mobile"
                    onClick={handleLinkClick}
                  >
                    Contactar CEO
                  </WhatsAppButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
