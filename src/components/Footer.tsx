
import { Link } from 'react-router-dom';

/**
 * Footer component - Site-wide footer with navigation links
 * 
 * Features:
 * - Responsive grid layout
 * - Section-based link organization
 * - Darker background for better visual distinction
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 border-t border-gray-700 text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="font-display text-lg mb-4">Hubbica</h3>
            <p className="text-gray-300 text-sm">
              Conectamos personas con espacios únicos para experiencias memorables.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Explora</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/spaces" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Espacios
                </Link>
              </li>
              <li>
                <Link to="/inspiration" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Inspiración
                </Link>
              </li>
              <li>
                <Link to="/how-to-host" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Conviértete en anfitrión
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-brand-purple transition-colors text-sm">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2025 Hubbica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
