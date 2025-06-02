
/**
 * CATEGORÍAS DE ESPACIOS
 * 
 * Define los tipos de experiencias disponibles en la plataforma.
 * Se muestran en la página principal como tarjetas clicables.
 * 
 * INSTRUCCIONES PARA MODIFICAR:
 * 1. Agregar nuevas categorías con ID único
 * 2. Usar imágenes de alta calidad (1170x780 mínimo)
 * 3. Mantener nombres cortos y descriptivos
 * 4. Verificar que el ID coincida con filtros en Spaces.tsx
 */

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'parties',
    name: 'Fiestas',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'workshops',
    name: 'Talleres',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'photoshoots',
    name: 'Fotografía',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 'meetings',
    name: 'Reuniones',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

/**
 * MAPEO DE CATEGORÍAS A TAGS
 * 
 * Define qué tags de espacios corresponden a cada categoría
 * para el filtrado automático en la página de espacios.
 */
export const CATEGORY_TAG_MAPPING: Record<string, string[]> = {
  parties: ['Terraza', 'Bar', 'Exterior', 'Celebraciones', 'cumpleaños'],
  workshops: ['Taller', 'Industrial', 'Creativo', 'Presentaciones'],
  photoshoots: ['Fotografía', 'Estudio', 'Industrial', 'Loft', 'creacion contenido'],
  meetings: ['Reuniones', 'Corporativo', 'Presentaciones', 'Oficina'],
};
