
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

// Mock data for platform statistics
const PLATFORM_STATS = {
  totalUsers: 1250,
  totalSpaces: 145,
  totalBookings: 375,
  totalRevenue: 45650,
  platformFee: 4565,
  activeUsers: 520,
  topCities: [
    { name: 'Barcelona', spaces: 58, bookings: 180 },
    { name: 'Madrid', spaces: 45, bookings: 120 },
    { name: 'Valencia', spaces: 25, bookings: 45 },
    { name: 'Sevilla', spaces: 17, bookings: 30 },
  ],
  monthlyRevenue: [
    { month: 'Ene', revenue: 2500 },
    { month: 'Feb', revenue: 3800 },
    { month: 'Mar', revenue: 5200 },
    { month: 'Abr', revenue: 9500 },
    { month: 'May', revenue: 12500 },
    { month: 'Jun', revenue: 12150 },
  ],
};

// Mock data for users
const MOCK_USERS = [
  {
    id: '1',
    name: 'Ana García',
    email: 'ana.garcia@example.com',
    role: 'user',
    createdAt: '15/01/2025',
    status: 'active',
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@example.com',
    role: 'host',
    createdAt: '10/02/2025',
    status: 'active',
  },
  {
    id: '3',
    name: 'Laura Sánchez',
    email: 'laura.sanchez@example.com',
    role: 'user',
    createdAt: '05/03/2025',
    status: 'active',
  },
  {
    id: '4',
    name: 'Miguel López',
    email: 'miguel.lopez@example.com',
    role: 'host',
    createdAt: '20/03/2025',
    status: 'inactive',
  },
  {
    id: '5',
    name: 'Elena Martín',
    email: 'elena.martin@example.com',
    role: 'admin',
    createdAt: '01/01/2025',
    status: 'active',
  },
];

// Mock data for spaces
const MOCK_SPACES = [
  {
    id: '1',
    name: 'Terraza con Vista Panorámica',
    host: 'Alex Torres',
    city: 'Barcelona',
    pricePerHour: 120,
    revenueShare: 15,
    status: 'approved',
    bookings: 15,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Estudio Industrial para Talleres',
    host: 'Carlos Rodríguez',
    city: 'Madrid',
    pricePerHour: 80,
    revenueShare: 0,
    status: 'approved',
    bookings: 8,
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Loft con Cocina para Events',
    host: 'Marta López',
    city: 'Valencia',
    pricePerHour: 100,
    revenueShare: 10,
    status: 'pending',
    bookings: 3,
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Sala de Yoga con Jardín',
    host: 'Paula Sánchez',
    city: 'Sevilla',
    pricePerHour: 45,
    revenueShare: 0,
    status: 'approved',
    bookings: 12,
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Galería de Arte para Eventos',
    host: 'Eduardo Pérez',
    city: 'Madrid',
    pricePerHour: 150,
    revenueShare: 20,
    status: 'pending',
    bookings: 0,
    rating: 0,
  },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-display font-bold">Panel de Administrador</h1>
            <div className="flex gap-2">
              <Button variant="outline">
                Exportar Datos
              </Button>
              <Button variant="outline">
                Configuración
              </Button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">
                  {PLATFORM_STATS.totalUsers}
                </p>
                <p className="text-xs text-gray-500">
                  {PLATFORM_STATS.activeUsers} activos
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Espacios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">
                  {PLATFORM_STATS.totalSpaces}
                </p>
                <p className="text-xs text-gray-500">
                  En {PLATFORM_STATS.topCities.length} ciudades
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Reservas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">
                  {PLATFORM_STATS.totalBookings}
                </p>
                <p className="text-xs text-gray-500">
                  Promedio: 2.6 por espacio
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Ingresos Plataforma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-display font-bold">
                  {PLATFORM_STATS.platformFee.toLocaleString()}€
                </p>
                <p className="text-xs text-gray-500">
                  De {PLATFORM_STATS.totalRevenue.toLocaleString()}€ totales
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Revenue Chart */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Ingresos Mensuales</CardTitle>
                <CardDescription>
                  Los ingresos de la plataforma en los últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex items-end justify-between px-6">
                  {PLATFORM_STATS.monthlyRevenue.map((month, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-12 bg-brand-purple rounded-t"
                        style={{
                          height: `${(month.revenue / 15000) * 200}px`,
                        }}
                      />
                      <div className="mt-2 text-sm">{month.month}</div>
                      <div className="text-xs text-gray-500">{month.revenue}€</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="users">
            <TabsList className="w-full grid grid-cols-3 md:w-auto md:inline-flex">
              <TabsTrigger value="users">Usuarios</TabsTrigger>
              <TabsTrigger value="spaces">Espacios</TabsTrigger>
              <TabsTrigger value="analytics">Analíticas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="users" className="py-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Usuarios</CardTitle>
                    <CardDescription>
                      Gestiona los usuarios de la plataforma
                    </CardDescription>
                  </div>
                  <Button>Añadir usuario</Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Rol</TableHead>
                        <TableHead>Creado</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {MOCK_USERS.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-mono text-xs">{user.id}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant={
                              user.role === 'admin' ? "default" :
                              user.role === 'host' ? "outline" : "secondary"
                            }>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.createdAt}</TableCell>
                          <TableCell>
                            <Badge variant={
                              user.status === 'active' ? "outline" : "destructive"
                            }>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              Ver
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="spaces" className="py-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Espacios</CardTitle>
                    <CardDescription>
                      Gestiona los espacios de la plataforma
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Pendientes (2)</Button>
                    <Button>Añadir espacio</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Anfitrión</TableHead>
                        <TableHead>Ciudad</TableHead>
                        <TableHead>Precio/h</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Reservas</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {MOCK_SPACES.map((space) => (
                        <TableRow key={space.id}>
                          <TableCell className="font-mono text-xs">{space.id}</TableCell>
                          <TableCell>{space.name}</TableCell>
                          <TableCell>{space.host}</TableCell>
                          <TableCell>{space.city}</TableCell>
                          <TableCell>{space.pricePerHour}€</TableCell>
                          <TableCell>{space.revenueShare}%</TableCell>
                          <TableCell>
                            <Badge variant={
                              space.status === 'approved' ? "outline" : "secondary"
                            }>
                              {space.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{space.bookings}</TableCell>
                          <TableCell>
                            {space.rating > 0 ? space.rating : '-'}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              Ver
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Ciudad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Ciudad</TableHead>
                          <TableHead>Espacios</TableHead>
                          <TableHead>Reservas</TableHead>
                          <TableHead>% del Total</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {PLATFORM_STATS.topCities.map((city, index) => (
                          <TableRow key={index}>
                            <TableCell>{city.name}</TableCell>
                            <TableCell>{city.spaces}</TableCell>
                            <TableCell>{city.bookings}</TableCell>
                            <TableCell>
                              {Math.round((city.bookings / PLATFORM_STATS.totalBookings) * 100)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Métricas Clave</CardTitle>
                    <CardDescription>
                      Indicadores de rendimiento de la plataforma
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-500">Tasa de conversión (visitas/reservas)</span>
                          <span className="font-medium">3.2%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-brand-purple rounded-full" style={{ width: '3.2%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-500">Espacios con revenue share</span>
                          <span className="font-medium">62%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-brand-purple rounded-full" style={{ width: '62%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-500">Satisfacción de usuarios</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-brand-purple rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-500">Tasa de retención mensual</span>
                          <span className="font-medium">78%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-brand-purple rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
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

export default AdminDashboard;
