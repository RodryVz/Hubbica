
import { Space } from '@/components/SpaceCard';

export const ALL_SPACES: Space[] = [
  {
    id: '1',
    name: 'Terraza con Vista Panorámica',
    description: 'Terraza con vista panorámica al centro histórico, perfecta para eventos sociales y afterworks.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1580541631971-c7f8f8a1f407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
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
    description: 'Espacioso estudio de estilo industrial ideal para workshops, sesiones fotográficas o presentaciones.',
    images: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Madrid',
    neighborhood: 'Malasaña',
    pricePerHour: 80,
    revenueShare: 0,
    capacity: 30,
    tags: ['Industrial', 'Taller', 'Creativo'],
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Loft con Cocina para Events',
    description: 'Acogedor loft con cocina profesional integrada, perfecto para eventos gastronómicos y cenas privadas.',
    images: [
      'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ],
    city: 'Valencia',
    neighborhood: 'Ruzafa',
    pricePerHour: 100,
    revenueShare: 10,
    capacity: 20,
    tags: ['Cocina', 'Loft', 'Cenas'],
    rating: 4.9,
  },
  {
    id: '4',
    name: 'Sala de Yoga con Jardín',
    description: 'Tranquilo espacio para prácticas de yoga, meditación o actividades de bienestar con acceso a jardín.',
    images: [
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    ],
    city: 'Sevilla',
    neighborhood: 'Triana',
    pricePerHour: 45,
    revenueShare: 0,
    capacity: 15,
    tags: ['Yoga', 'Jardín', 'Wellness'],
    rating: 4.7,
  },
];
