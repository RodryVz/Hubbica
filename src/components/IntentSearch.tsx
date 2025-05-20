
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

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
      <div className="flex gap-2 p-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full shadow-md">
        <div className="relative flex-grow">
          <Input
            type="text"
            className="pl-4 pr-4 py-4 h-auto rounded-full border-0 shadow-none text-base dark:bg-slate-800 dark:text-slate-100"
            placeholder="Describe lo que quieres vivir..."
            value={searchIntent}
            onChange={(e) => setSearchIntent(e.target.value)}
          />
        </div>
        <Button 
          type="submit" 
          size="lg" 
          className="rounded-full px-6"
          disabled={isSearching}
        >
          {isSearching ? (
            <span className="animate-pulse flex items-center">
              <Search className="h-4 w-4 mr-2" />
              <span>Buscando...</span>
            </span>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              <span>Buscar</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default IntentSearch;
