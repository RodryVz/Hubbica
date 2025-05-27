
# 📁 Gestión de Espacios

## 🎯 Estructura de Datos

Esta carpeta contiene la configuración de espacios por categorías para mejor organización.

### Archivos Principales
- `featured.ts` - Espacios destacados en página principal
- `categories.ts` - Categorías de espacios disponibles
- `locations.ts` - Ubicaciones y ciudades

### ¿Cómo usar?

#### Espacios Destacados
Modificar `featured.ts` para cambiar qué espacios aparecen en la página principal.
Mantener exactamente 4 espacios para el diseño óptimo.

#### Categorías
Agregar nuevas categorías en `categories.ts`:
```typescript
{
  id: 'nueva-categoria',
  name: 'Nombre de Categoría',
  image: 'URL_IMAGEN'
}
```

#### Ubicaciones
Actualizar `locations.ts` cuando agregues nuevas ciudades o barrios.

## 🔄 Sincronización

Estos archivos se importan en:
- `src/pages/Index.tsx` (espacios destacados y categorías)
- `src/pages/Spaces.tsx` (filtros de ubicación)
- `src/data/spaces.ts` (datos principales)

**⚠️ Importante**: Después de modificar estos archivos, verificar que las páginas cargan correctamente.
