
# 📊 Guía de Gestión de Datos - Hubbica

## 🎯 Descripción General

Esta carpeta contiene todos los datos del proyecto organizados para facilitar el mantenimiento y escalabilidad. Cada archivo tiene una responsabilidad específica y está documentado en español.

## 📁 Estructura de Archivos

### Archivos Principales de Datos
- `promotions.ts` - Todas las promociones y ofertas
- `spaces.ts` - Catálogo completo de espacios
- `espacios/` - Datos organizados por categorías

### Subcarpeta Espacios (`espacios/`)
- `featured.ts` - Espacios destacados en página principal
- `categories.ts` - Categorías de experiencias disponibles
- `README.md` - Guía específica de gestión de espacios

## 🔧 Cómo Modificar Contenido

### ✨ Agregar Nueva Promoción

Editar `promotions.ts`:
```typescript
{
  id: 6, // Número único secuencial
  title: "Nombre de tu Promoción",
  description: "Descripción detallada de la oferta",
  discount: "50% OFF", // Texto del descuento
  validUntil: "31 de Marzo", // Fecha límite
  terms: "Términos y condiciones específicos",
  image: "URL_DE_LA_IMAGEN",
  whatsappMessage: "Mensaje personalizado para WhatsApp"
}
```

### 🏢 Agregar Nuevo Espacio

Editar `spaces.ts` en el array `ALL_SPACES`:
```typescript
{
  id: 'identificador-unico',
  name: 'Nombre del Espacio',
  description: 'Descripción completa del espacio',
  images: ['URL_IMAGEN_1', 'URL_IMAGEN_2'],
  city: 'Ciudad',
  neighborhood: 'Barrio',
  pricePerHour: 100, // Precio por hora
  revenueShare: 15, // Porcentaje de comisión (0 si no aplica)
  capacity: 30, // Capacidad máxima
  tags: ['Tag1', 'Tag2', 'Tag3'], // Para filtros
  rating: 4.8 // Calificación sobre 5
}
```

### 🎨 Modificar Espacios Destacados

Editar `espacios/featured.ts`:
```typescript
// Mantener exactamente 4 espacios para diseño óptimo
export const FEATURED_SPACES: Space[] = [
  ALL_SPACES.find(space => space.id === '1')!,
  ALL_SPACES.find(space => space.id === '2')!,
  ALL_SPACES.find(space => space.id === '3')!,
  ALL_SPACES.find(space => space.id === '4')!,
];
```

### 📂 Agregar Nueva Categoría

Editar `espacios/categories.ts`:
```typescript
// En el array CATEGORIES:
{
  id: 'identificador-categoria',
  name: 'Nombre de la Categoría',
  image: 'URL_IMAGEN_CATEGORIA'
}

// En CATEGORY_TAG_MAPPING:
'identificador-categoria': ['Tag1', 'Tag2', 'Tag3']
```

## 🔍 Sistema de Tags

### Tags Disponibles Actuales
- **Eventos**: `Terraza`, `Vistas`, `Bar`, `Eventos`
- **Trabajo**: `Industrial`, `Taller`, `Creativo`
- **Gastronomía**: `Cocina`, `Loft`, `Cenas`
- **Bienestar**: `Yoga`, `Jardín`, `Wellness`
- **Arte**: `Galería`, `Arte`
- **Música**: `Música`, `Acústica`, `Estudio`

### Agregar Nuevos Tags
1. Agregar el tag a espacios en `spaces.ts`
2. Actualizar mapeo en `components/IntentSearch.tsx`
3. Incluir en filtros de `categories.ts` si corresponde

## 🔄 Flujo de Sincronización

### Archivos que se Importan Entre Sí:
1. `spaces.ts` → Exporta todos los espacios y tipos
2. `featured.ts` → Importa de `spaces.ts` para destacados
3. `categories.ts` → Define categorías independientes
4. `promotions.ts` → Archivo independiente para promociones

### Páginas que Usan Estos Datos:
- `Index.tsx` → featured.ts, categories.ts
- `Spaces.tsx` → spaces.ts, categories.ts
- `Promos.tsx` → promotions.ts

## ⚠️ Importante: Reglas de Mantenimiento

### ✅ Hacer Siempre:
- Usar IDs únicos para espacios y promociones
- Mantener exactamente 4 espacios destacados
- Incluir tags relevantes para filtros
- Usar imágenes de alta calidad (mínimo 1170x780)
- Documentar cambios importantes

### ❌ Evitar:
- Cambiar IDs existentes (rompería enlaces)
- Dejar arrays de imágenes vacíos
- Usar tags inconsistentes
- Modificar estructura de objetos sin verificar dependencias

## 🚀 Verificación Después de Cambios

1. **Verificar en navegador**: Que las páginas cargan correctamente
2. **Revisar consola**: No debe haber errores de JavaScript
3. **Probar filtros**: Que funcionan en página de espacios
4. **Verificar enlaces**: Que botones y navegación funcionan
5. **Revisar responsive**: En móvil y desktop

## 📞 WhatsApp Configuration

### Números de Teléfono
- Actualizar en `components/WhatsAppButton.tsx`
- Formato: `"5491234567890"` (código país + número)

### Mensajes Predeterminados
- Promociones: En `promotions.ts`
- Espacios: En `SpaceCard.tsx`
- General: En `WhatsAppButton.tsx`

## 🎨 Optimizaciones UI/UX Implementadas

### Jerarquía Visual
- Títulos: Tamaños escalonados y consistentes
- Descripciones: Proporcionadas al contenido principal
- Elementos interactivos: Tamaños táctiles optimizados

### Componentes Optimizados
- **Hero**: Barra de búsqueda con ancho máximo apropiado
- **IntentSearch**: Padding y espaciado mejorados
- **Botones**: Consistencia en tamaños y estados hover

### Performance
- Imágenes optimizadas y lazy loading
- Animaciones suaves sin impacto en rendimiento
- Búsqueda eficiente con debounce integrado

---

**📝 Nota**: Después de cualquier modificación, verificar que el proyecto compila sin errores ejecutando `npm run dev` en la terminal.
