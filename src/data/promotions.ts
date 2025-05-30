import { Users, Camera, Utensils, LucideIcon } from 'lucide-react';

export interface PromoDetails {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  discount: string;
  image: string;
  venue: string;
  features: string[];
  capacity: string;
  duration: string;
  location: string;
  icon: LucideIcon;
  benefits: string[];
  restrictions: string[];
  whatsappNumber: string;
}

export const PROMO_DETAILS: PromoDetails[] = [
  {
    id: "promo1",
    title: "Descuentos exclusivos en salones premium",
    description: "Obtené hasta 20% de descuento en los mejores salones de eventos de la ciudad. Perfectos para cumpleaños, aniversarios, reuniones corporativas y celebraciones especiales.",
    longDescription: "Transformá tu celebración en una experiencia inolvidable con nuestros salones premium. Estos espacios han sido cuidadosamente seleccionados por su elegancia, equipamiento de primera calidad y ubicaciones estratégicas. Cada salón cuenta con decoración sofisticada, sistemas de sonido profesional, iluminación ambiente y personal especializado en eventos.",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Salones Premium",
    features: ["Equipamiento audiovisual completo", "Servicio de catering gourmet incluido", "Decoración temática personalizada", "Estacionamiento valet gratuito"],
    capacity: "50-200 personas",
    duration: "Mínimo 4 horas",
    location: "Buenos Aires, Córdoba, Rosario",
    icon: Users,
    benefits: [
      "Coordinador de eventos dedicado",
      "Setup y limpieza incluidos",
      "Flexibilidad en horarios",
      "Seguro de responsabilidad civil"
    ],
    restrictions: [
      "Reserva mínima de 4 horas",
      "Disponible de martes a domingo",
      "Pago del 50% al reservar"
    ],
    whatsappNumber: "543624111111"
  },
  {
    id: "promo2",
    title: "Espacios para workshops con precios especiales",
    description: "15% de descuento en espacios ideales para talleres, cursos, presentaciones y eventos formativos. Ambientes profesionales y completamente equipados.",
    longDescription: "Potenciá tu evento formativo en espacios diseñados específicamente para el aprendizaje y la colaboración. Nuestros co-works y estudios ofrecen el ambiente perfecto para workshops, seminarios, cursos y presentaciones. Con tecnología de punta y diseño funcional, garantizamos que tu audiencia se mantenga enfocada y comprometida.",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Co-works y estudios",
    features: ["Proyector 4K y pantalla gigante", "WiFi fibra óptica 1GB", "Aire acondicionado silencioso", "Coffee break premium incluido"],
    capacity: "10-50 personas",
    duration: "Por horas (mínimo 2hs)",
    location: "Microcentro, Palermo, Belgrano",
    icon: Camera,
    benefits: [
      "Soporte técnico en sitio",
      "Material de oficina incluido",
      "Salas de breakout disponibles",
      "Grabación del evento opcional"
    ],
    restrictions: [
      "Reserva mínima de 2 horas",
      "Disponible lunes a viernes",
      "Capacidad máxima estricta"
    ],
    whatsappNumber: "543624222222"
  },
  {
    id: "promo3",
    title: "Happy hour extendido exclusivo",
    description: "Disfrutá de promociones 2x1 y happy hours extendidos en los mejores bares de la ciudad. Una experiencia única solo disponible para usuarios de hubbica.",
    longDescription: "Viví la experiencia gastronómica más exclusiva de la ciudad con nuestros happy hours extendidos. Estos bares han sido seleccionados por su ambiente único, carta de tragos premium y propuesta gastronómica innovadora. Cada establecimiento ofrece una experiencia diferente, desde rooftops con vista panorámica hasta speakeasies escondidos con la mejor mixología.",
    discount: "2x1",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    venue: "Bares seleccionados",
    features: ["Tragos premium artesanales", "Música en vivo selecta", "Terraza con vista panorámica", "Menú gourmet de autor"],
    capacity: "20-80 personas",
    duration: "3-6 horas",
    location: "San Telmo, Puerto Madero, Recoleta",
    icon: Utensils,
    benefits: [
      "Mesa reservada garantizada",
      "Atención personalizada",
      "Carta de vinos premium",
      "Ambiente exclusivo"
    ],
    restrictions: [
      "Solo disponible de 18:00 a 22:00",
      "Reserva con 48hs de anticipación",
      "Consumo mínimo por persona"
    ],
    whatsappNumber: "543624333333"
  }
];