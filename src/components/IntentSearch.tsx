
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

/**
 * CONFIGURABLE SECTION: Search Tag Mapping
 * 
 * Modify this object to add more search terms and associated tags.
 * Format: 'search term': ['Tag1', 'Tag2', 'Tag3']
 * 
 * When users search for these terms, the system will find spaces with matching tags.
 * You can add variations of the same term (with/without accents) for better matching.
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
 * IntentSearch component - Intent-based search input with tag mapping
 * 
 * This component handles the search functionality that maps user intentions
 * to specific tags, which are then used to filter spaces.
 * 
 * TO MODIFY:
 * - To add more search terms: Update the SEARCH_TAG_MAPPING object above
 * - To change search behavior: Modify the handleSearch function
 * - To change UI appearance: Update the JSX/Tailwind classes below
 */
const IntentSearch = () => {
  const [searchIntent, setSearchIntent] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  /**
   * Handles the search form submission
   * Maps user search terms to relevant tags and navigates to results
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchIntent) {
      setIsSearching(true);
      
      // Search for related tags based on intent
      const searchLower = searchIntent.toLowerCase();
      let matchedTags: string[] = [];
      
      // Look for exact matches first
      for (const [key, tags] of Object.entries(SEARCH_TAG_MAPPING)) {
        if (searchLower.includes(key)) {
          matchedTags = [...matchedTags, ...tags];
        }
      }
      
      // Remove duplicates
      matchedTags = [...new Set(matchedTags)];
      
      // Simulate search delay for better UX
      setTimeout(() => {
        setIsSearching(false);
        
        // Navigate to search results with appropriate parameters
        if (matchedTags.length > 0) {
          navigate(`/spaces?intent=${encodeURIComponent(searchIntent)}&tags=${encodeURIComponent(matchedTags.join(','))}`);
        } else {
          navigate(`/spaces?intent=${encodeURIComponent(searchIntent)}`);
        }
        
        toast({
          title: "Búsqueda iniciada",
          description: "Encontrando espacios que coincidan con tu intención...",
        });
      }, 800);
    } else {
      toast({
        title: "Campo vacío",
        description: "Por favor, describe lo que estás buscando",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="flex gap-2 p-1.5 bg-white border border-gray-200 rounded-full shadow-md">
        <div className="relative flex-grow">
          <Input
            type="text"
            className="pl-4 pr-4 py-4 h-auto rounded-full border-0 shadow-none text-base md:text-lg"
            placeholder="Describe lo que quieres vivir..."
            value={searchIntent}
            onChange={(e) => setSearchIntent(e.target.value)}
            aria-label="Buscar espacios"
          />
        </div>
        <Button 
          type="submit" 
          size="icon"
          className="rounded-full w-12 h-12 flex items-center justify-center"
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
