
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

/**
 * IntentSearch component - Intent-based search input with animated feedback
 * 
 * Features:
 * - Clean, minimal search interface
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
      
      // Simular un pequeño retraso para dar feedback al usuario
      setTimeout(() => {
        setIsSearching(false);
        // En una implementación real, enviaríamos esto a nuestro servicio AI
        navigate(`/spaces?intent=${encodeURIComponent(searchIntent)}`);
        
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
