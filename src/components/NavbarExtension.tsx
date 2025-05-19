
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavbarExtension = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />

      <div className="hidden md:flex items-center gap-4">
        <Link to="/spaces">
          <Button variant="ghost">Explorar espacios</Button>
        </Link>
        <Link to="/host">
          <Button variant="outline">Conviértete en anfitrión</Button>
        </Link>
        <Link to="/dashboard">
          <Button>Mi cuenta</Button>
        </Link>
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden" 
        onClick={toggleMenu}
        aria-label="Menú"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-background dark:bg-slate-800 border border-border rounded-lg shadow-lg min-w-[200px] z-50">
          <div className="flex flex-col gap-2">
            <Link to="/spaces" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start">Explorar espacios</Button>
            </Link>
            <Link to="/host" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start">Conviértete en anfitrión</Button>
            </Link>
            <Link to="/dashboard" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start">Mi cuenta</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarExtension;
