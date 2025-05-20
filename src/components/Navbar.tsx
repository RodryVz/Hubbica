
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-brand-purple text-white flex items-center justify-center font-display font-bold">E</div>
          <span className="font-display text-xl tracking-tight">experiencias<span className="text-brand-purple">.space</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/spaces" className="text-gray-600 hover:text-brand-purple transition-colors">
            Explorar espacios
          </Link>
          <Link to="/how-to-host" className="text-gray-600 hover:text-brand-purple transition-colors">
            Cómo funciona
          </Link>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/search">
            <Button variant="outline" size="icon" className="rounded-full">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          
          <Link to="/how-to-host">
            <Button className="rounded-full">Publica tu espacio</Button>
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="rounded-full">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 pt-10">
              <Link to="/spaces" className="p-2 hover:bg-gray-100 rounded-md">
                Explorar espacios
              </Link>
              <Link to="/how-to-host" className="p-2 hover:bg-gray-100 rounded-md">
                Cómo funciona
              </Link>
              <Link to="/how-to-host" className="p-2 hover:bg-gray-100 rounded-md">
                Publica tu espacio
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
