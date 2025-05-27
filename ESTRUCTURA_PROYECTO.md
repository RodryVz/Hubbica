
# Estructura del Proyecto Hubbica

## 📁 Organización de Archivos

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz base (shadcn/ui)
│   ├── Layout.tsx      # Layout principal con navbar y footer
│   ├── SpaceCard.tsx   # Tarjeta de espacio individual
│   ├── Hero.tsx        # Sección hero de la página principal
│   ├── IntentSearch.tsx # Barra de búsqueda inteligente
│   └── WhatsAppButton.tsx # Botón de contacto WhatsApp
├── data/               # 📊 DATOS DEL PROYECTO
│   ├── promotions.ts   # Promociones y ofertas
│   ├── spaces.ts       # Espacios disponibles
│   ├── espacios/       # Datos de espacios organizados
│   │   ├── featured.ts # Espacios destacados
│   │   ├── categories.ts # Categorías de experiencias
│   │   └── README.md   # Guía de gestión de espacios
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

### 3. Espacios Destacados (`src/data/espacios/featured.ts`)
- Seleccionar qué espacios aparecen en la página principal
- Mantener exactamente 4 espacios para diseño óptimo

### 4. Categorías (`src/data/espacios/categories.ts`)
- Agregar nuevos tipos de experiencias
- Modificar imágenes y nombres de categorías

### 5. Configuración de WhatsApp
- `src/components/WhatsAppButton.tsx`: Número de teléfono
- Mensajes predeterminados en cada página

## 🔧 Componentes Clave

### Layout.tsx
- Estructura principal del sitio
- Navbar y Footer
- Configuración responsive

### Hero.tsx
- Sección principal de la página de inicio
- Búsqueda inteligente integrada
- Botones de llamada a la acción

### IntentSearch.tsx
- Búsqueda basada en intención del usuario
- Mapeo automático de términos a tags
- Navegación inteligente a resultados

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
- Sección hero con búsqueda inteligente
- Espacios destacados
- Categorías de experiencias
- Llamada a la acción para anfitriones

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
  - `brand-purple`: #9b87f5
  - `brand-deep-purple`: #7E69AB
  - `brand-orange`: #F97316
- **Tipografía**: Inter (sistema), Playfair Display (títulos)

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

## 📊 Optimizaciones UI/UX Aplicadas

### Jerarquía Visual Mejorada
- **Título principal**: Tamaño 4xl-7xl (responsive)
- **Descripción**: Tamaño base-xl, proporcionado al título
- **Barra de búsqueda**: Ancho máximo de 24rem (384px)

### Espaciado y Proporción
- Espaciado vertical optimizado entre elementos
- Padding interno de la barra de búsqueda mejorado
- Botones con tamaños consistentes y proporcionados

### Interacciones Mejoradas
- Animaciones suaves en hover y focus
- Feedback visual inmediato en búsquedas
- Transiciones fluidas entre estados

### Responsive Design
- Breakpoints optimizados para todos los dispositivos
- Texto y elementos escalables según pantalla
- Navegación táctil mejorada para móviles
