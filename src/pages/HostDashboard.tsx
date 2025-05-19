
import { useState } from 'react';
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
import { Space } from '@/components/SpaceCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

// Mock data for spaces
const HOST_SPACES: Space[] = [
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
    id: '2',
    name: 'Estudio Industrial para Talleres',
    description: 'Espacioso estudio de estilo industrial ideal para workshops...',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Madrid',
    neighborhood: 'Malasaña',
    pricePerHour: 80,
    revenueShare: 0,
    capacity: 30,
    tags: ['Industrial', 'Taller', 'Creativo'],
    rating: 4.6,
  },
];

// Mock data for bookings
const MOCK_BOOKINGS = [
  {
    id: '1',
    spaceId: '1',
    spaceName: 'Terraza con Vista Panorámica',
    date: '15/06/2025',
    timeStart: '18:00',
    timeEnd: '22:00',
    status: 'confirmed',
    user: 'María López',
    monetizationMethod: 'hourly',
    amount: 480,
    revenue: null,
  },
  {
    id: '2',
    spaceId: '1',
    spaceName: 'Terraza con Vista Panorámica',
    date: '20/06/2025',
    timeStart: '20:00',
    timeEnd: '02:00',
    status: 'pending',
    user: 'Carlos Rodríguez',
    monetizationMethod: 'revenue_share',
    amount: null,
    revenue: {
      estimatedTotal: 3000,
      share: 15,
      estimatedAmount: 450,
    },
  },
  {
    id: '3',
    spaceId: '2',
    spaceName: 'Estudio Industrial para Talleres',
    date: '22/06/2025',
    timeStart: '10:00',
    timeEnd: '16:00',
    status: 'confirmed',
    user: 'Laura Sánchez',
    monetizationMethod: 'hourly',
    amount: 480,
    revenue: null,
  },
];

// Mock data for earnings
const MOCK_EARNINGS = {
  totalEarned: 2650,
  pendingPayment: 450,
  monthlyRevenue: [
    { month: 'Ene', revenue: 0 },
    { month: 'Feb', revenue: 0 },
    { month: 'Mar', revenue: 350 },
    { month: 'Abr', revenue: 780 },
    { month: 'May', revenue: 1520 },
    { month: 'Jun', revenue: 0 },
  ],
  spaces: [
    { name: 'Terraza con Vista Panorámica', revenue: 1850 },
    { name: 'Estudio Industrial para Talleres', revenue: 800 },
  ],
};

// Space card component for the host dashboard
const HostSpaceCard = ({ space }: { space: Space }) => {
  return (
    <Card>
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img 
            src={space.images[0]} 
            alt={space.name}
            className="object-cover w-full h-full rounded-t-lg"
          />
        </AspectRatio>
        <Badge className="absolute top-2 right-2">
          {space.pricePerHour}€/h
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{space.name}</CardTitle>
        <CardDescription>{space.neighborhood}, {space.city}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">
            <div className="flex items-center gap-1">
              <span>★</span>
              <span>{space.rating}</span>
            </div>
            <div>Hasta {space.capacity} personas</div>
          </div>
          <div className="text-right text-sm">
            {space.revenueShare > 0 ? (
              <div>Revenue share: {space.revenueShare}%</div>
            ) : (
              <div>Sin revenue share</div>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Editar
          </Button>
          <Button size="sm" className="flex-1">
            Ver reservas
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Booking card component
const BookingCard = ({ booking }: { booking: typeof MOCK_BOOKINGS[0] }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base">{booking.spaceName}</CardTitle>
            <CardDescription>{booking.date} • {booking.timeStart}-{booking.timeEnd}</CardDescription>
          </div>
          <Badge variant={booking.status === 'confirmed' ? "default" : "outline"}>
            {booking.status === 'confirmed' ? 'Confirmado' : 'Pendiente'}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span>Reservado por:</span>
            <span className="font-medium">{booking.user}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Monetización:</span>
            <span className="font-medium">
              {booking.monetizationMethod === 'hourly' 
                ? 'Por hora' 
                : 'Revenue share'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Ingresos:</span>
            <span className="font-medium">
              {booking.monetizationMethod === 'hourly' 
                ? `${booking.amount}€` 
                : booking.revenue 
                  ? `Est. ${booking.revenue.estimatedAmount}€ (${booking.revenue.share}% de ${booking.revenue.estimatedTotal}€)` 
                  : 'Pendiente'}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm" className="flex-1">
            Ver detalles
          </Button>
          {booking.status === 'pending' && (
            <Button size="sm" className="flex-1">
              Confirmar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const HostDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-display font-bold">Panel de Anfitrión</h1>
            <Button>Añadir nuevo espacio</Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Espacios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">{HOST_SPACES.length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Reservas Activas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">{MOCK_BOOKINGS.filter(b => b.status === 'confirmed').length}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Ganancias Totales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">{MOCK_EARNINGS.totalEarned}€</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pendiente de Cobro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">{MOCK_EARNINGS.pendingPayment}€</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="spaces" className="mb-8">
            <TabsList className="w-full md:w-auto grid grid-cols-3 md:inline-flex">
              <TabsTrigger value="spaces">Mis Espacios</TabsTrigger>
              <TabsTrigger value="bookings">Reservas</TabsTrigger>
              <TabsTrigger value="earnings">Ganancias</TabsTrigger>
            </TabsList>
            
            <TabsContent value="spaces" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOST_SPACES.map(space => (
                  <HostSpaceCard key={space.id} space={space} />
                ))}
                
                {/* Add new space card */}
                <Card className="flex flex-col items-center justify-center p-6 h-full border-dashed">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-brand-purple text-2xl">+</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Añadir nuevo espacio</h3>
                  <p className="text-sm text-gray-500 text-center mb-4">
                    Comparte tu espacio único y genera ingresos extra
                  </p>
                  <Button>Crear anuncio</Button>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="bookings" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_BOOKINGS.map(booking => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="earnings" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumen de Ganancias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Ganancias totales</span>
                        <span className="font-medium">{MOCK_EARNINGS.totalEarned}€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pendiente de cobro</span>
                        <span className="font-medium">{MOCK_EARNINGS.pendingPayment}€</span>
                      </div>
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-3">Ganancias por espacio</h4>
                        {MOCK_EARNINGS.spaces.map((space, index) => (
                          <div key={index} className="flex justify-between mb-2">
                            <span className="text-sm">{space.name}</span>
                            <span className="text-sm font-medium">{space.revenue}€</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Ingresos Mensuales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-end justify-between">
                      {MOCK_EARNINGS.monthlyRevenue.map((month, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="w-8 bg-brand-purple rounded-t"
                            style={{
                              height: `${(month.revenue / 2000) * 180}px`,
                            }}
                          />
                          <div className="mt-2 text-xs">{month.month}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HostDashboard;
