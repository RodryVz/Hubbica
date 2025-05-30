
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";

interface HostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HostModal = ({ open, onOpenChange }: HostModalProps) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    onOpenChange(false);
    navigate('/host');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Publica tu espacio en Hubbica</DialogTitle>
          <DialogDescription className="pt-4 text-base">
            Estás a punto de comenzar el proceso de publicación de tu espacio. Solo necesitamos algunos datos para crear tu anuncio:
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-brand-purple/10 rounded-full p-1.5">
                <Check className="h-4 w-4 text-brand-purple" />
              </div>
              <div>
                <p className="font-medium">Información básica</p>
                <p className="text-sm text-gray-500">Nombre, dirección y tipo de espacio</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-brand-purple/10 rounded-full p-1.5">
                <Check className="h-4 w-4 text-brand-purple" />
              </div>
              <div>
                <p className="font-medium">Fotos y descripción</p>
                <p className="text-sm text-gray-500">Añade fotos de alta calidad y una descripción detallada</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-brand-purple/10 rounded-full p-1.5">
                <Check className="h-4 w-4 text-brand-purple" />
              </div>
              <div>
                <p className="font-medium">Precio y disponibilidad</p>
                <p className="text-sm text-gray-500">Define tu tarifa y cuándo está disponible el espacio</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-brand-purple/10 rounded-full p-1.5">
                <Check className="h-4 w-4 text-brand-purple" />
              </div>
              <div>
                <p className="font-medium">Método de pago</p>
                <p className="text-sm text-gray-500">Configura cómo quieres recibir tus ganancias</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          El formulario toma aproximadamente 5 minutos en completarse y puedes guardarlo para continuar después.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleContinue} className="gap-2">
            Continuar al formulario
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HostModal;
