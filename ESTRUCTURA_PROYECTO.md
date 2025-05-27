
# Estructura del Proyecto Hubbica

## 📁 Organización de Archivos

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz base (shadcn/ui)
│   ├── Layout.tsx      # Layout principal con navbar y footer
│   ├── SpaceCard.tsx   # Tarjeta de espacio individual
│   └── WhatsAppButton.tsx # Botón de contacto WhatsApp
├── data/               # 📊 DATOS DEL PROYECTO
│   ├── promotions.ts   # Promociones y ofertas
│   ├── spaces.ts       # Espacios disponibles
│   └── README_DATOS.md # Guía para modificar datos
├── pages/              # Páginas principales
│   ├── Index.tsx       # Página de inicio
│   ├── Promos.tsx      # Página de promociones
│   └── Spaces.tsx      # Página de espacios
└── hooks/              # Hooks personalizados
```

## 🎯 Archivos Principales para Modificar Contenido

### 1. Promociones (`src/data/promotions.ts`)
- Agregar nuevas promociones
- Modificar descuentos y ofertas
- Actualizar términos y condiciones

### 2. Espacios (`src/data/spaces.ts`)
- Agregar nuevos espacios
- Actualizar precios y capacidades
- Modificar ubicaciones disponibles

### 3. Configuración de WhatsApp
- `src/components/WhatsAppButton.tsx`: Número de teléfono
- Mensajes predeterminados en cada página

## 🔧 Componentes Clave

### Layout.tsx
- Estructura principal del sitio
- Navbar y Footer
- Configuración responsive

### SpaceCard.tsx
- Visualización de espacios individuales
- Manejo de imágenes y precios
- Botones de contacto

### WhatsAppButton.tsx
- Integración con WhatsApp Business
- Tracking de conversiones
- Mensajes personalizados por contexto

## 📱 Páginas

### Index.tsx (Página Principal)
- Hero section con búsqueda
- Espacios destacados
- Categorías de experiencias
- Call-to-action para anfitriones

### Promos.tsx (Promociones)
- Lista de promociones activas
- Detalles de ofertas especiales
- Contacto directo por WhatsApp

### Spaces.tsx (Catálogo de Espacios)
- Filtrado por ubicación y tipo
- Grid de espacios disponibles
- Búsqueda y ordenamiento

## 🎨 Estilos y Diseño

- **Framework**: Tailwind CSS
- **Componentes**: shadcn/ui
- **Colores principales**: 
  - `brand-purple`: #8B5CF6
  - `brand-deep-purple`: #7C3AED
  - `brand-orange`: #F97316
- **Tipografía**: Inter (sistema), fuente display personalizada

## 📝 Convenciones de Código

1. **Componentes**: PascalCase (ej: `SpaceCard.tsx`)
2. **Archivos de datos**: camelCase (ej: `promotions.ts`)
3. **Props**: Interfaces TypeScript obligatorias
4. **Estilos**: Clases Tailwind únicamente
5. **Comentarios**: En español para fácil mantenimiento

## 🚀 Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** para desarrollo y build
- **React Router** para navegación
- **Tailwind CSS** para estilos
- **Lucide React** para iconos
- **shadcn/ui** para componentes base
