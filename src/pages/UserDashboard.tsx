
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Space } from '@/components/SpaceCard';

// Mock data for bookings
const MOCK_BOOKINGS = [
  {
    id: '1',
    space: {
      id: '1',
      name: 'Terraza con Vista Panorámica',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      neighborhood: 'Gracia',
      city: 'Barcelona',
    },
    date: '15/06/2025',
    timeStart: '18:00',
    timeEnd: '22:00',
    status: 'confirmed',
    monetizationMethod: 'hourly',
    amount: 480,
  },
  {
    id: '2',
    space: {
      id: '3',
      name: 'Loft con Cocina para Events',
      image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      neighborhood: 'Ruzafa',
      city: 'Valencia',
    },
    date: '20/06/2025',
    timeStart: '20:00',
    timeEnd: '02:00',
    status: 'pending',
    monetizationMethod: 'revenue_share',
    estimated: {
      attendees: 50,
      ticketPrice: 20,
      totalRevenue: 1000,
      share: 10,
      amount: 100,
    },
  },
];

// Mock data for favorites
const MOCK_FAVORITES: Space[] = [
  {
    id: '1',
    name: 'Terraza con Vista Panorámica',
    description: 'Terraza con vista panorámica al centro histórico...',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Barcelona',
    neighborhood: 'Gracia',
    pricePerHour: 120,
    revenueShare: 15,
    capacity: 50,
    tags: ['Terraza', 'Vistas', 'Exterior', 'Bar'],
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Loft con Cocina para Events',
    description: 'Acogedor loft con cocina profesional integrada...',
    images: [
      'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Valencia',
    neighborhood: 'Ruzafa',
    pricePerHour: 100,
    revenueShare: 10,
    capacity: 20,
    tags: ['Cocina', 'Loft', 'Cenas'],
    rating: 4.9,
  },
];

// Mock user data
const MOCK_USER = {
  name: 'Ana García',
  email: 'ana.garcia@example.com',
  phone: '+34 123 456 789',
  createdAt: 'marzo 2025',
  profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
};

// Booking card component
const UserBookingCard = ({ booking }: { booking: typeof MOCK_BOOKINGS[0] }) => {
  return (
    <Card>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-full">
          <img 
            src={booking.space.image} 
            alt={booking.space.name}
            className="h-full w-full object-cover rounded-l-lg"
          />
        </div>
        <div className="col-span-2 p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-base">{booking.space.name}</h3>
              <p className="text-sm text-gray-500">
                {booking.space.neighborhood}, {booking.space.city}
              </p>
            </div>
            <Badge variant={booking.status === 'confirmed' ? "default" : "outline"}>
              {booking.status === 'confirmed' ? 'Confirmado' : 'Pendiente'}
            </Badge>
          </div>
          
          <div className="space-y-1 mb-3">
            <div className="flex gap-2 text-sm">
              <span className="text-gray-500">Fecha:</span>
              <span>{booking.date}</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="text-gray-500">Horario:</span>
              <span>{booking.timeStart} - {booking.timeEnd}</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="text-gray-500">Monetización:</span>
              <span>
                {booking.monetizationMethod === 'hourly' 
                  ? `${booking.amount}€ (fijo)`
                  : `${booking.estimated?.share}% de ingresos (est. ${booking.estimated?.amount}€)`}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/spaces/${booking.space.id}`}>
                Ver espacio
              </Link>
            </Button>
            <Button size="sm" className="flex-1">
              Detalles
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Favorite card component
const FavoriteCard = ({ space }: { space: Space }) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3]">
        <img 
          src={space.images[0]} 
          alt={space.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium truncate pr-2">{space.name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <span>★</span>
            <span>{space.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mb-3">
          {space.neighborhood}, {space.city}
        </p>
        
        <div className="flex justify-between items-center mb-3">
          <p className="font-medium">
            ${space.pricePerHour}/hora
          </p>
          {space.revenueShare > 0 && (
            <p className="text-xs text-brand-purple">
              o {space.revenueShare}% de ingresos
            </p>
          )}
        </div>
        
        <Button className="w-full" asChild>
          <Link to={`/spaces/${space.id}`}>
            Ver detalles
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-display font-bold mb-8">Mi Cuenta</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                      <img 
                        src={MOCK_USER.profileImage} 
                        alt={MOCK_USER.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-medium">{MOCK_USER.name}</h3>
                    <p className="text-sm text-gray-500">
                      Miembro desde {MOCK_USER.createdAt}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Editar perfil
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/host">
                        Conviértete en anfitrión
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Métodos de pago
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600">
                      Cerrar sesión
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="bookings">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="bookings">Mis Reservas</TabsTrigger>
                  <TabsTrigger value="favorites">Favoritos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bookings" className="py-6">
                  {MOCK_BOOKINGS.length === 0 ? (
                    <div className="text-center py-12">
                      <h3 className="font-medium mb-2">No tienes reservas</h3>
                      <p className="text-gray-500 mb-4">
                        Explora espacios y crea experiencias únicas
                      </p>
                      <Button asChild>
                        <Link to="/spaces">
                          Explorar espacios
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {MOCK_BOOKINGS.map(booking => (
                        <UserBookingCard key={booking.id} booking={booking} />
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="favorites" className="py-6">
                  {MOCK_FAVORITES.length === 0 ? (
                    <div className="text-center py-12">
                      <h3 className="font-medium mb-2">No tienes favoritos</h3>
                      <p className="text-gray-500 mb-4">
                        Guarda espacios que te interesen para verlos después
                      </p>
                      <Button asChild>
                        <Link to="/spaces">
                          Explorar espacios
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {MOCK_FAVORITES.map(space => (
                        <FavoriteCard key={space.id} space={space} />
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;
