
import { MessageCircle, Sparkles, Star, Clock, MapPin, Users, Camera, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const PROMO_DETAILS = [
  {
    id: "promo1",
    title: "Descuentos exclusivos en salones premium",
    description: "Obtené hasta 20% de descuento en los mejores salones de eventos de la ciudad. Perfectos para cumpleaños, aniversarios, reuniones corporativas y celebraciones especiales.",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Salones Premium",
    features: ["Equipamiento completo", "Servicio de catering", "Decoración incluida", "Estacionamiento"],
    capacity: "50-200 personas",
    duration: "Mínimo 4 horas",
    location: "Buenos Aires, Córdoba, Rosario",
    icon: Users
  },
  {
    id: "promo2",
    title: "Espacios para workshops con precios especiales",
    description: "15% de descuento en espacios ideales para talleres, cursos, presentaciones y eventos formativos. Ambientes profesionales y completamente equipados.",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    venue: "Co-works y estudios",
    features: ["Proyector y pantalla", "WiFi de alta velocidad", "Aire acondicionado", "Café incluido"],
    capacity: "10-50 personas",
    duration: "Por horas",
    location: "Microcentro, Palermo, Belgrano",
    icon: Camera
  },
  {
    id: "promo3",
    title: "Happy hour extendido exclusivo",
    description: "Disfrutá de promociones 2x1 y happy hours extendidos en los mejores bares de la ciudad. Una experiencia única solo disponible para usuarios de hubbica.",
    discount: "2x1",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    venue: "Bares seleccionados",
    features: ["Tragos premium", "Música en vivo", "Terraza disponible", "Menú gourmet"],
    capacity: "20-80 personas",
    duration: "3-6 horas",
    location: "San Telmo, Puerto Madero, Recoleta",
    icon: Utensils
  }
];

const Promos = () => {
  const handleWhatsAppContact = () => {
    const message = "¡Hola! Me interesa conocer más sobre las promociones exclusivas de hubbica. ¿Podrían brindarme más información?";
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
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
              
              <Button 
                onClick={handleWhatsAppContact}
                size="lg" 
                className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Promotions Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {PROMO_DETAILS.map((promo, index) => {
                const IconComponent = promo.icon;
                
                return (
                  <div 
                    key={promo.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={promo.image} 
                        alt={promo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-brand-purple text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        {promo.discount}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <IconComponent size={24} className="mb-2" />
                        <h3 className="font-bold text-lg">{promo.venue}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-display font-bold text-xl mb-3 text-gray-900">
                        {promo.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {promo.description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Users size={16} />
                          <span>{promo.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={16} />
                          <span>{promo.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin size={16} />
                          <span>{promo.location}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-2">Incluye:</h5>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                          {promo.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <Star size={12} className="text-brand-purple" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                Contactanos por WhatsApp y te ayudamos a encontrar el espacio perfecto 
                con las mejores promociones exclusivas de hubbica.
              </p>
              
              <Button 
                onClick={handleWhatsAppContact}
                size="lg" 
                className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Escribinos por WhatsApp
              </Button>
              
              <p className="mt-4 text-white/70 text-sm">
                Respondemos inmediatamente • Lunes a Viernes 9-21hs
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Promos;
