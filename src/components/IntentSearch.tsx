
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

// Mapeo de términos de búsqueda a tags
const SEARCH_TAG_MAPPING: { [key: string]: string[] } = {
  'cumpleaños': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'cumpleanos': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'fiesta': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'celebración': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'celebracion': ['Terraza', 'Vistas', 'Bar', 'Eventos'],
  'taller': ['Industrial', 'Taller', 'Creativo'],
  'talleres': ['Industrial', 'Taller', 'Creativo'],
  'workshop': ['Industrial', 'Taller', 'Creativo'],
  'workshops': ['Industrial', 'Taller', 'Creativo'],
  'coworking': ['Industrial', 'Taller', 'Creativo'],
  'trabajo': ['Industrial', 'Taller', 'Creativo'],
  'presentación': ['Industrial', 'Taller', 'Creativo'],
  'presentacion': ['Industrial', 'Taller', 'Creativo'],
  'cena': ['Cocina', 'Loft', 'Cenas'],
  'cenas': ['Cocina', 'Loft', 'Cenas'],
  'cocina': ['Cocina', 'Loft', 'Cenas'],
  'gastronomía': ['Cocina', 'Loft', 'Cenas'],
  'gastronomia': ['Cocina', 'Loft', 'Cenas'],
  'evento gastronómico': ['Cocina', 'Loft', 'Cenas'],
  'evento gastronomico': ['Cocina', 'Loft', 'Cenas'],
  'yoga': ['Yoga', 'Jardín', 'Wellness'],
  'meditación': ['Yoga', 'Jardín', 'Wellness'],
  'meditacion': ['Yoga', 'Jardín', 'Wellness'],
  'wellness': ['Yoga', 'Jardín', 'Wellness'],
  'bienestar': ['Yoga', 'Jardín', 'Wellness'],
  'relajación': ['Yoga', 'Jardín', 'Wellness'],
  'relajacion': ['Yoga', 'Jardín', 'Wellness'],
  'galería': ['Galería', 'Arte', 'Eventos'],
  'galeria': ['Galería', 'Arte', 'Eventos'],
  'arte': ['Galería', 'Arte', 'Eventos'],
  'exposición': ['Galería', 'Arte', 'Eventos'],
  'exposicion': ['Galería', 'Arte', 'Eventos'],
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
 * Features:
 * - Clean, minimal search interface
 * - Maps search terms to relevant tags
 * - Visual feedback during search
 * - Error handling for empty searches
 * - Navigates to results page on submission
 */
const IntentSearch = () => {
  const [searchIntent, setSearchIntent] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchIntent) {
      setIsSearching(true);
      
      // Buscar tags relacionados con la intención
      const searchLower = searchIntent.toLowerCase();
      let matchedTags: string[] = [];
      
      // Buscar coincidencias exactas primero
      for (const [key, tags] of Object.entries(SEARCH_TAG_MAPPING)) {
        if (searchLower.includes(key)) {
          matchedTags = [...matchedTags, ...tags];
        }
      }
      
      // Eliminar duplicados
      matchedTags = [...new Set(matchedTags)];
      
      setTimeout(() => {
        setIsSearching(false);
        
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
            className="pl-4 pr-4 py-4 h-auto rounded-full border-0 shadow-none text-base"
            placeholder="Describe lo que quieres vivir..."
            value={searchIntent}
            onChange={(e) => setSearchIntent(e.target.value)}
          />
        </div>
        <Button 
          type="submit" 
          size="icon"
          className="rounded-full w-12 h-12 flex items-center justify-center"
          disabled={isSearching}
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
