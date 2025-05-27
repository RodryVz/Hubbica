
# 📊 Guía para Modificar Datos del Proyecto

## 🎯 Archivos de Datos Principales

### 1. Promociones (`promotions.ts`)

#### ¿Qué contiene?
- Lista de promociones activas
- Descuentos y ofertas especiales
- Términos y condiciones
- Imágenes y descripciones

#### ¿Cómo agregar una nueva promoción?

```typescript
// Agregar al array PROMO_DETAILS:
{
  id: "promo4", // ID único
  title: "Nueva promoción especial",
  description: "Descripción corta para listados",
  longDescription: "Descripción detallada que aparece en la página",
  discount: "30% OFF", // Texto del descuento
  image: "URL_DE_IMAGEN", // URL de imagen de Unsplash o similar
  venue: "Tipo de venue",
  features: ["Característica 1", "Característica 2"], // Array de features
  capacity: "X-Y personas",
  duration: "Duración mínima",
  location: "Ubicaciones disponibles",
  icon: NombreIcono, // Importar de lucide-react
  benefits: ["Beneficio 1", "Beneficio 2"], // Array de beneficios
  restrictions: ["Restricción 1", "Restricción 2"] // Array de restricciones
}
```

#### ⚠️ Importante para promociones:
- **ID único**: Siempre usar un ID único (promo1, promo2, etc.)
- **Imágenes**: Usar URLs de Unsplash con buena calidad
- **Iconos**: Importar desde `lucide-react` en la parte superior del archivo
- **Textos**: Mantener consistencia en el tono de comunicación

### 2. Espacios (`spaces.ts`)

#### ¿Qué contiene?
- Catálogo completo de espacios
- Precios por hora y modelos de revenue share
- Ubicaciones y capacidades
- Categorías y tags

#### ¿Cómo agregar un nuevo espacio?

```typescript
// Agregar al array de espacios:
{
  id: 'nuevo-id', // ID único en formato kebab-case
  name: 'Nombre del Espacio',
  description: 'Descripción detallada del espacio y sus características',
  images: [
    'URL_IMAGEN_1', // Primera imagen (principal)
    'URL_IMAGEN_2'  // Imágenes adicionales
  ],
  city: 'Ciudad',
  neighborhood: 'Barrio',
  pricePerHour: 100, // Precio por hora en euros/pesos
  revenueShare: 15, // Porcentaje de revenue share (0 si no aplica)
  capacity: 50, // Capacidad máxima de personas
  tags: ['Tag1', 'Tag2'], // Array de tags para filtrado
  rating: 4.8 // Rating del 1 al 5 (con decimales)
}
```

#### ⚠️ Importante para espacios:
- **Imágenes**: Primera imagen es la principal que se muestra en cards
- **Precios**: Usar números enteros para facilidad de lectura
- **Tags**: Mantener consistencia con tags existentes
- **Rating**: Usar valores realistas entre 4.0 y 5.0

## 🔧 Configuración de WhatsApp

### Número de Teléfono
**Archivo**: `src/components/WhatsAppButton.tsx`
**Línea**: Buscar `phoneNumber` en las props del componente

### Mensajes Predeterminados
Cada página tiene mensajes específicos:

#### Página Principal (Index.tsx)
```typescript
// Buscar: WhatsAppButton con message=
message="Hola! Me interesa publicar mi espacio en Hubbica..."
```

#### Página de Promociones (Promos.tsx)
```typescript
// Los mensajes se generan automáticamente por promoción
// Se incluye el título de la promoción seleccionada
```

## 📝 Mejores Prácticas

### Para Imágenes
1. **Usar Unsplash**: Imágenes de alta calidad y libres de derechos
2. **Formato recomendado**: 1170x780 píxeles mínimo
3. **Temática coherente**: Espacios reales, bien iluminados
4. **URLs estables**: Verificar que las URLs no caduquen

### Para Textos
1. **Tono amigable**: Usar "vos" y lenguaje cercano
2. **Información completa**: Incluir todos los detalles relevantes
3. **Llamadas a la acción claras**: Usar verbos en imperativo
4. **Beneficios antes que características**: Enfocar en el valor

### Para Precios
1. **Transparencia**: Mostrar precios reales y actualizados
2. **Moneda consistente**: Usar la misma moneda en todo el sitio
3. **Revenue share**: Explicar claramente cómo funciona
4. **Promociones**: Incluir fechas de vigencia cuando aplique

## 🚨 Errores Comunes a Evitar

1. **IDs duplicados**: Cada promoción/espacio debe tener ID único
2. **Imágenes rotas**: Verificar URLs antes de publicar
3. **Iconos no importados**: Agregar imports de lucide-react
4. **Arrays vacíos**: Siempre incluir al menos un elemento en features/benefits
5. **Inconsistencia en datos**: Mantener formato similar entre elementos

## 📞 Contacto para Soporte Técnico

Si necesitas ayuda con modificaciones más complejas:
- Revisa primero esta documentación
- Verifica la consola del navegador para errores
- Mantén copias de seguridad antes de cambios grandes
