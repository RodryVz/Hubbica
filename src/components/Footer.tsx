
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg mb-4">experiencias.space</h3>
            <p className="text-gray-500 text-sm">
              Conectamos personas con espacios únicos para experiencias memorables.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Explora</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/spaces" className="text-gray-500 hover:text-brand-purple text-sm">
                  Espacios
                </Link>
              </li>
              <li>
                <Link to="/inspiration" className="text-gray-500 hover:text-brand-purple text-sm">
                  Inspiración
                </Link>
              </li>
              <li>
                <Link to="/host" className="text-gray-500 hover:text-brand-purple text-sm">
                  Conviértete en anfitrión
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-500 hover:text-brand-purple text-sm">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-brand-purple text-sm">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-brand-purple text-sm">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-brand-purple text-sm">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-brand-purple text-sm">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-500 hover:text-brand-purple text-sm">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2025 experiencias.space. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
