import { MessageCircle, Sparkles, Star, Clock, MapPin, Users, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';
import { PROMO_DETAILS } from '@/data/promotions';

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
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-brand-orange/5"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles size={32} className="text-brand-purple" />
                <span className="text-brand-purple font-medium text-lg">Promociones Exclusivas</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-deep-purple bg-clip-text text-transparent">
                Ofertas únicas solo en hubbica
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
                Descubrí promociones exclusivas que no encontrarás en ningún otro lugar. 
                Espacios únicos con descuentos especiales para hacer de tu evento algo inolvidable.
              </p>
              
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
                        
                        <WhatsAppButton 
                          phoneNumber={promo.whatsappNumber}
                          message={`¡Hola! Me interesa la promoción "${promo.title}". ¿Podrían brindarme más información y ayudarme con la reserva?`}
                          size="lg" 
                          className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                          trackingSource={`promo-${promo.id}`}
                        >
                          
                          Consultar esta promoción
                        </WhatsAppButton>
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
      </div>
    </Layout>
  );
};

export default Promos;