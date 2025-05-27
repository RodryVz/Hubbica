
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

/**
 * SECCIÓN CONFIGURABLE: Mapeo de Búsqueda por Tags
 * 
 * Modifica este objeto para agregar más términos de búsqueda y tags asociados.
 * Formato: 'término de búsqueda': ['Tag1', 'Tag2', 'Tag3']
 * 
 * Cuando los usuarios busquen estos términos, el sistema encontrará espacios con tags coincidentes.
 * Puedes agregar variaciones del mismo término (con/sin acentos) para mejor coincidencia.
 */
const SEARCH_TAG_MAPPING: { [key: string]: string[] } = {
  // Eventos y celebraciones
  'cumpleaños': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'cumpleanos': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'fiesta': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'celebración': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'celebracion': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'evento': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  
  // Talleres y trabajo
  'taller': ['Industrial', 'Taller', 'Creativo'],
  'talleres': ['Industrial', 'Taller', 'Creativo'],
  'workshop': ['Industrial', 'Taller', 'Creativo'],
  'workshops': ['Industrial', 'Taller', 'Creativo'],
  'coworking': ['Industrial', 'Taller', 'Creativo'],
  'trabajo': ['Industrial', 'Taller', 'Creativo'],
  'presentación': ['Industrial', 'Taller', 'Creativo'],
  'presentacion': ['Industrial', 'Taller', 'Creativo'],
  
  // Gastronomía
  'cena': ['Cocina', 'Loft', 'Cenas'],
  'cenas': ['Cocina', 'Loft', 'Cenas'],
  'cocina': ['Cocina', 'Loft', 'Cenas'],
  'gastronomía': ['Cocina', 'Loft', 'Cenas'],
  'gastronomia': ['Cocina', 'Loft', 'Cenas'],
  'evento gastronómico': ['Cocina', 'Loft', 'Cenas'],
  'evento gastronomico': ['Cocina', 'Loft', 'Cenas'],
  
  // Bienestar
  'yoga': ['Yoga', 'Jardín', 'Wellness'],
  'meditación': ['Yoga', 'Jardín', 'Wellness'],
  'meditacion': ['Yoga', 'Jardín', 'Wellness'],
  'wellness': ['Yoga', 'Jardín', 'Wellness'],
  'bienestar': ['Yoga', 'Jardín', 'Wellness'],
  'relajación': ['Yoga', 'Jardín', 'Wellness'],
  'relajacion': ['Yoga', 'Jardín', 'Wellness'],
  
  // Arte y cultura
  'galería': ['Galería', 'Arte', 'Eventos'],
  'galeria': ['Galería', 'Arte', 'Eventos'],
  'arte': ['Galería', 'Arte', 'Eventos'],
  'exposición': ['Galería', 'Arte', 'Eventos'],
  'exposicion': ['Galería', 'Arte', 'Eventos'],
  
  // Música
  'música': ['Música', 'Acústica', 'Estudio'],
  'musica': ['Música', 'Acústica', 'Estudio'],
  'concierto': ['Música', 'Acústica', 'Estudio'],
  'ensayo': ['Música', 'Acústica', 'Estudio'],
  'grabación': ['Música', 'Acústica', 'Estudio'],
  'grabacion': ['Música', 'Acústica', 'Estudio']
};

/**
 * Componente IntentSearch - Entrada de búsqueda basada en intención con mapeo de tags
 * 
 * Este componente maneja la funcionalidad de búsqueda que mapea las intenciones del usuario
 * a tags específicos, que luego se usan para filtrar espacios.
 * 
 * PARA MODIFICAR:
 * - Para agregar más términos de búsqueda: Actualizar el objeto SEARCH_TAG_MAPPING arriba
 * - Para cambiar el comportamiento de búsqueda: Modificar la función handleSearch
 * - Para cambiar la apariencia UI: Actualizar las clases JSX/Tailwind abajo
 */
const IntentSearch = () => {
  const [searchIntent, setSearchIntent] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  /**
   * Maneja el envío del formulario de búsqueda
   * Mapea los términos de búsqueda del usuario a tags relevantes y navega a los resultados
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchIntent) {
      setIsSearching(true);
      
      // Buscar tags relacionados basados en la intención
      const searchLower = searchIntent.toLowerCase();
      let matchedTags: string[] = [];
      
      // Buscar coincidencias exactas primero
      for (const [key, tags] of Object.entries(SEARCH_TAG_MAPPING)) {
        if (searchLower.includes(key)) {
          matchedTags = [...matchedTags, ...tags];
        }
      }
      
      // Remover duplicados
      matchedTags = [...new Set(matchedTags)];
      
      // Simular retraso de búsqueda para mejor UX
      setTimeout(() => {
        setIsSearching(false);
        
        // Navegar a resultados de búsqueda con parámetros apropiados
        if (matchedTags.length > 0) {
          navigate(`/spaces?intent=${encodeURIComponent(searchIntent)}&tags=${encodeURIComponent(matchedTags.join(','))}`);
        } else {
          navigate(`/spaces?intent=${encodeURIComponent(searchIntent)}`);
        }
        
        toast({
          title: "Búsqueda iniciada",
          description: "Encontrando espacios que coincidan con tu intención...",
        });
      }, 600);
    } else {
      toast({
        title: "Campo vacío",
        description: "Por favor, describe lo que estás buscando",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex gap-2 p-2 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative flex-grow">
          <Input
            type="text"
            className="pl-6 pr-4 py-4 h-auto rounded-full border-0 shadow-none text-base focus:outline-none placeholder:text-gray-400"
            placeholder="¿Qué experiencia quieres vivir?"
            value={searchIntent}
            onChange={(e) => setSearchIntent(e.target.value)}
            aria-label="Buscar espacios"
          />
        </div>
        <Button 
          type="submit" 
          size="icon"
          className="rounded-full w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-deep-purple hover:from-brand-deep-purple hover:to-brand-purple transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center flex-shrink-0"
          disabled={isSearching}
          aria-label="Buscar"
        >
          {isSearching ? (
            <span className="animate-pulse">
              <Search className="h-5 w-5" />
            </span>
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </div>
    </form>
  );
};

export default IntentSearch;
