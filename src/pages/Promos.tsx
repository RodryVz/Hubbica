
import { MessageCircle, Sparkles, Star, Clock, MapPin, Users, Camera, Utensils, Check, Shield, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const PROMO_DETAILS = [
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
    ]
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
    ]
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
    ]
  }
];

const Promos = () => {
  const handleWhatsAppContact = (promoTitle?: string) => {
    const baseMessage = "¡Hola! Me interesa conocer más sobre las promociones exclusivas de hubbica.";
    const specificMessage = promoTitle 
      ? `${baseMessage} Específicamente me interesa la promoción: "${promoTitle}". ¿Podrían brindarme más información y ayudarme con la reserva?`
      : `${baseMessage} ¿Podrían brindarme más información?`;
    
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(specificMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-brand-purple/5 to-white">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-orange/10"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles size={32} className="text-brand-purple" />
                <span className="text-brand-purple font-medium text-lg">Promociones Exclusivas</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-deep-purple bg-clip-text text-transparent">
                Ofertas únicas solo en hubbica
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Descubrí promociones exclusivas que no encontrarás en ningún otro lugar. 
                Espacios únicos con descuentos especiales para hacer de tu evento algo inolvidable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => handleWhatsAppContact()}
                  size="lg" 
                  className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar por WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar ahora
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Detailed Grid */}
        <section className="py-16">
          <div className="container">
            <div className="space-y-16">
              {PROMO_DETAILS.map((promo, index) => {
                const IconComponent = promo.icon;
                
                return (
                  <div 
                    key={promo.id} 
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col lg:grid-cols-2' : ''
                    }`}
                  >
                    {/* Image Section */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
                        <img 
                          src={promo.image} 
                          alt={promo.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-brand-purple text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                          {promo.discount}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <IconComponent size={32} className="mb-2" />
                          <h3 className="font-bold text-xl">{promo.venue}</h3>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h2 className="font-display font-bold text-3xl mb-4 text-gray-900">
                          {promo.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                          {promo.longDescription}
                        </p>
                        
                        {/* Detalles básicos */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users size={16} className="text-brand-purple" />
                            <span className="font-medium">{promo.capacity}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock size={16} className="text-brand-purple" />
                            <span className="font-medium">{promo.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin size={16} className="text-brand-purple" />
                            <span className="font-medium">{promo.location}</span>
                          </div>
                        </div>
                        
                        {/* Características incluidas */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Star className="h-5 w-5 text-brand-purple" />
                            Incluye en la promoción:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {promo.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check size={14} className="text-green-600 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Beneficios adicionales */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-brand-purple" />
                            Beneficios exclusivos:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {promo.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Check size={14} className="text-brand-purple flex-shrink-0" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Condiciones */}
                        <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-200">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Condiciones importantes:</h4>
                          <ul className="space-y-1">
                            {promo.restrictions.map((restriction, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                <span className="text-orange-500 mt-0.5">•</span>
                                {restriction}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          onClick={() => handleWhatsAppContact(promo.title)}
                          size="lg" 
                          className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Consultar esta promoción
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-600">
                Resolvé todas tus dudas sobre nuestras promociones exclusivas
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">¿Cómo reservo con estas promociones?</h3>
                <p className="text-gray-600 text-sm">Contactanos por WhatsApp mencionando la promoción que te interesa. Te guiaremos en todo el proceso de reserva.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">¿Puedo combinar promociones?</h3>
                <p className="text-gray-600 text-sm">Las promociones no son acumulables entre sí, pero sí incluyen todos los beneficios detallados en cada oferta.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">¿Hay fechas de vencimiento?</h3>
                <p className="text-gray-600 text-sm">Las promociones están sujetas a disponibilidad. Te recomendamos reservar con anticipación para asegurar tu fecha.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">¿Qué formas de pago aceptan?</h3>
                <p className="text-gray-600 text-sm">Aceptamos transferencias, tarjetas de crédito y débito. También financiación en cuotas sin interés.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-deep-purple text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                ¿Listo para aprovechar estas promociones?
              </h2>
              
              <p className="text-xl mb-8 text-white/90">
                Nuestro equipo te ayuda a encontrar el espacio perfecto y aprovechar al máximo 
                estas ofertas exclusivas. ¡No dejes pasar esta oportunidad!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => handleWhatsAppContact()}
                  size="lg" 
                  className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Escribinos por WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="rounded-full border-white text-white hover:bg-white hover:text-brand-purple"
                >
                  <Phone className="mr-2 h-6 w-6" />
                  Llamar ahora: +54 11 2345-6789
                </Button>
              </div>
              
              <p className="mt-6 text-white/70 text-sm">
                📞 Atención inmediata • 📱 WhatsApp 24/7 • ✅ Reservas confirmadas al instante
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Promos;
