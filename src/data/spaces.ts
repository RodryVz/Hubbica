import { Space } from '@/components/SpaceCard';

// Re-exportamos la interfaz Space para que esté disponible desde este módulo
// Agregas ACA los espacios que no estan en pagina principal "destacados".


export type { Space };

export const ALL_SPACES: Space[] = [
   {
    id: '1',
    name: 'Salon de fiesta',
    description: 'Un salón acogedor y versátil, pensado para que disfrutes de tus celebraciones en un ambiente relajado y bien ambientado. Ideal para cumpleaños, reuniones familiares, eventos con amigos o encuentros corporativos informales.',
    images: [
      'https://images.unsplash.com/photo-1679205691593-bd4a01e2108b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1679205691779-4683ed620470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1679205691613-624b243d1ac4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    city: 'Resistencia',
    neighborhood: 'Chaco',
    pricePerHour: 12,
    revenueShare: 0,
    capacity: 15,
    tags: ['cumpleaños', 'eventos', 'fiestas'],
    rating: 4.7,
    whatsappNumber: '3624999789', // Número del propietario
  },
  {
    id: '2',
    name: 'Estudio Industrial para Talleres',
    description: 'Un espacio amplio y de estética industrial, diseñado para inspirar creatividad y dar vida a tus ideas. Ideal para sesiones fotográficas, grabaciones, presentaciones de producto, entrevistas o cualquier proyecto visual que necesite un entorno moderno y auténtico.',
    images: [
      'https://images.pexels.com/photos/6045326/pexels-photo-6045326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/889996/pexels-photo-889996.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/6378156/pexels-photo-6378156.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    ],
    city: 'Resistencia',
    neighborhood: 'Chaco',
    pricePerHour: 11,
    revenueShare: 0,
    capacity: 30,
    tags: ['Industrial', 'Taller', 'Creativo', 'estudio', 'sesiones fotograficas'],
    rating: 4.6,
    whatsappNumber: '+543624633224', // Número del propietario
  },
  {
    id: '3',
    name: 'Cocina para creacion de contenidos o fotografias',
    description: 'Un espacio diseñado para destacar la experiencia gastronómica. Esta cocina de nivel profesional cuenta con equipamiento completo y está pensada tanto para chefs como para creadores de contenido culinario. Ideal para eventos privados, workshops, clases de cocina, catas, grabaciones o creación de contenido UGC (User Generated Content) de alto nivel.',
    images: [
      'https://images.pexels.com/photos/7045939/pexels-photo-7045939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'https://images.pexels.com/photos/8089077/pexels-photo-8089077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    city: 'Corrientes',
    neighborhood: 'Capital',
    pricePerHour: 8,
    revenueShare: 10,
    capacity: 20,
    tags: ['Cocina', 'Loft', 'Cenas', 'eventos'],
    rating: 4.9,
    whatsappNumber: '3624777456', // Número del propietario
  },
  {
    id: '4',
    name: 'Salon para eventos corporativos',
    description: 'Un ambiente elegante y reservado, ideal para reuniones empresariales, cenas privadas, presentaciones o encuentros de networking. Diseñado para brindar una experiencia sofisticada y confortable, este espacio cuenta con mobiliario de alta calidad, iluminación cálida y detalles que marcan la diferencia.',
    images: [
      'https://images.pexels.com/photos/17057017/pexels-photo-17057017/free-photo-of-restaurante-arbol-ventanas-mesas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/16120249/pexels-photo-16120249/free-photo-of-mesas-pantalla-recepcion-de-la-boda-salon-de-banquetes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'https://images.pexels.com/photos/17294764/pexels-photo-17294764/free-photo-of-restaurante-flores-plantas-decoracion.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    ],
    city: 'Corrientes',
    neighborhood: 'Capital',
    pricePerHour: 20,
    revenueShare: 0,
    capacity: 15,
    tags: ['Cena', 'Eventos', 'Presentaciones'],
    rating: 4.7,
    whatsappNumber: '3624999789', // Número del propietario
  },
  
];