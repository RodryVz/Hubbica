import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Layout from '@/components/Layout';
import { toast } from "sonner";

// Esquema de validación para el formulario
const hostFormSchema = z.object({
  spaceName: z.string().min(3, {
    message: "El nombre del espacio debe tener al menos 3 caracteres.",
  }),
  description: z.string().min(30, {
    message: "La descripción debe tener al menos 30 caracteres.",
  }),
  city: z.string().min(2, {
    message: "Por favor, indica la ciudad.",
  }),
  neighborhood: z.string().min(2, {
    message: "Por favor, indica el barrio.",
  }),
  pricePerHour: z.coerce.number().positive({
    message: "El precio debe ser un número positivo.",
  }),
  capacity: z.coerce.number().int().positive({
    message: "La capacidad debe ser un número entero positivo.",
  }),
});

const HostDashboard = () => {
  const form = useForm<z.infer<typeof hostFormSchema>>({
    resolver: zodResolver(hostFormSchema),
    defaultValues: {
      spaceName: "",
      description: "",
      city: "",
      neighborhood: "",
      pricePerHour: 0,
      capacity: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof hostFormSchema>) => {
    // Aquí iría la lógica para enviar los datos
    console.log(values);
    
    // Mostrar toast de éxito
    toast.success("¡Formulario enviado con éxito! Revisaremos tu espacio pronto.", {
      duration: 5000,
    });
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-6">Publica tu espacio</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="spaceName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del espacio</FormLabel>
                      <FormControl>
                        <Input placeholder="Terraza con vista panorámica" {...field} />
                      </FormControl>
                      <FormDescription>
                        Un nombre atractivo que destaque lo mejor de tu espacio.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe tu espacio detalladamente..."
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Incluye detalles sobre el ambiente, comodidades y qué lo hace especial.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ciudad</FormLabel>
                        <FormControl>
                          <Input placeholder="Barcelona" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="neighborhood"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Barrio</FormLabel>
                        <FormControl>
                          <Input placeholder="Gracia" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="pricePerHour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Precio por hora (€)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Capacidad (personas)</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Aquí se podrían añadir más campos como subida de imágenes, etc. */}
                
                <div className="pt-4">
                  <Button type="submit" size="lg">
                    Publicar espacio
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HostDashboard;
