
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

/**
 * CONFIGURABLE SECTION: WhatsApp Contact Configuration
 * 
 * WhatsAppButton component with built-in conversion tracking
 * 
 * This component handles WhatsApp contact redirections and tracks conversions
 * for business validation purposes.
 * 
 * TO MODIFY:
 * - Update default phone number
 * - Modify tracking analytics
 * - Change default messages
 */

interface WhatsAppButtonProps extends Omit<ButtonProps, 'onClick'> {
  phoneNumber: string;
  message?: string;
  trackingSource?: string;
  spaceName?: string;
  onClick?: () => void;
}

/**
 * WhatsAppButton Component
 * 
 * Features:
 * - Automatic WhatsApp URL generation
 * - Conversion tracking for business validation
 * - Customizable messages with space context
 * - Analytics integration ready
 */
const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hola! Me contacto desde Hubbica.",
  trackingSource = "general",
  spaceName,
  children,
  onClick,
  ...buttonProps
}) => {
  const { toast } = useToast();

  /**
   * ANALYTICS INTEGRATION POINT
   * 
   * This function handles conversion tracking.
   * Replace with your analytics service (Google Analytics, Mixpanel, etc.)
   */
  const trackConversion = (source: string, spaceName?: string) => {
    // Log to console for validation (replace with actual analytics)
    console.log('🎯 CONVERSION TRACKED:', {
      timestamp: new Date().toISOString(),
      source: source,
      spaceName: spaceName,
      platform: 'Hubbica',
      action: 'whatsapp_contact'
    });

    // TODO: Replace with actual analytics tracking
    // Example: gtag('event', 'contact_via_whatsapp', { source, spaceName });
    // Example: mixpanel.track('WhatsApp Contact', { source, spaceName });
    
    // Show success toast
    toast({
      title: "Redirigiendo a WhatsApp",
      description: "Te conectamos con el anfitrión. ¡Gracias por usar Hubbica!",
    });
  };

  /**
   * Handle WhatsApp contact with tracking
   */
  const handleWhatsAppContact = () => {
    // Create enhanced message with Hubbica reference
    let enhancedMessage = message;
    
    if (spaceName) {
      enhancedMessage = `Hola! Me interesa el espacio "${spaceName}" que vi en Hubbica. ${message}`;
    } else if (!message.toLowerCase().includes('hubbica')) {
      enhancedMessage = `${message} (Encontré tu contacto a través de Hubbica)`;
    }

    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(enhancedMessage)}`;
    
    // Track the conversion before redirect
    trackConversion(trackingSource, spaceName);
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick();
    }
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      {...buttonProps}
      onClick={handleWhatsAppContact}
    >
      {/* WhatsApp Icon - Larger size */}
      <svg 
        className="w-5 h-5 mr-2" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
      </svg>
      {children}
    </Button>
  );
};

export default WhatsAppButton;
