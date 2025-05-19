
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const IntentSearch = () => {
  const [searchIntent, setSearchIntent] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchIntent) {
      // In a real implementation, we would send this to our AI service
      // For now, just navigate to the spaces page with the query
      navigate(`/spaces?intent=${encodeURIComponent(searchIntent)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="flex gap-2 p-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
        <div className="relative flex-grow">
          <Input
            type="text"
            className="pl-4 pr-4 py-4 h-auto rounded-full border-0 shadow-none text-base"
            placeholder="Describe lo que quieres vivir..."
            value={searchIntent}
            onChange={(e) => setSearchIntent(e.target.value)}
          />
        </div>
        <Button type="submit" size="lg" className="rounded-full px-6">
          <Search className="h-4 w-4 mr-2" />
          <span>Buscar</span>
        </Button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        <span className="text-xs text-gray-500">Inspiración:</span>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          className="text-xs h-auto py-1"
          onClick={() => setSearchIntent('Una terraza con luces para un after con amigos')}
        >
          Una terraza con luces para un after con amigos
        </Button>
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          className="text-xs h-auto py-1"
          onClick={() => setSearchIntent('Estudio amplio para workshop de cerámica')}
        >
          Estudio amplio para workshop de cerámica
        </Button>
      </div>
    </form>
  );
};

export default IntentSearch;
