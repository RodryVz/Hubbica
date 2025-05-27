
# 🛠️ Guía de Mantenimiento - Hubbica

## 📋 Tareas de Mantenimiento Regulares

### Semanal
- [ ] Revisar promociones activas y vencidas
- [ ] Actualizar espacios destacados en página principal
- [ ] Verificar que todas las imágenes cargan correctamente
- [ ] Probar botones de WhatsApp en diferentes páginas

### Mensual
- [ ] Actualizar precios de espacios según mercado
- [ ] Revisar y actualizar testimonios/ratings
- [ ] Optimizar imágenes para mejor performance
- [ ] Actualizar información de contacto si es necesario

### Trimestral
- [ ] Revisar y actualizar toda la documentación
- [ ] Analizar métricas de conversión de WhatsApp
- [ ] Evaluar nuevas funcionalidades a implementar
- [ ] Backup completo del código y datos

## 🔧 Modificaciones Comunes

### 1. Cambiar Número de WhatsApp

**Archivos a modificar:**
- `src/components/WhatsAppButton.tsx` (configuración base)
- Buscar todas las instancias de `phoneNumber` en el proyecto

**Pasos:**
1. Abrir `src/components/WhatsAppButton.tsx`
2. Buscar la prop `phoneNumber` 
3. Reemplazar con el nuevo número (formato: 54911XXXXXXXX)
4. Probar en todas las páginas

### 2. Agregar Nueva Promoción

**Archivo:** `src/data/promotions.ts`

**Pasos:**
1. Importar nuevo icono si es necesario: `import { NuevoIcono } from 'lucide-react'`
2. Agregar objeto al array `PROMO_DETAILS`
3. Asignar ID único (ej: "promo5")
4. Completar todos los campos obligatorios
5. Probar en página `/promos`

### 3. Actualizar Espacios Destacados

**Archivo:** `src/pages/Index.tsx`

**Pasos:**
1. Buscar el array `FEATURED_SPACES`
2. Reemplazar espacios que ya no quieres destacar
3. Asegurar que tengas exactamente 4 espacios
4. Verificar que las imágenes cargan bien

### 4. Modificar Colores del Tema

**Archivo:** `tailwind.config.ts`

**Colores principales:**
```javascript
'brand-purple': '#8B5CF6',
'brand-deep-purple': '#7C3AED', 
'brand-orange': '#F97316'
```

**Para cambiar:**
1. Abrir `tailwind.config.ts`
2. Buscar la sección `colors`
3. Modificar valores hexadecimales
4. Los cambios se aplican automáticamente

## 🚨 Resolución de Problemas Comunes

### Problema: Imágenes no cargan
**Causa**: URL de imagen no válida o cambió
**Solución**: 
1. Verificar URL en navegador
2. Buscar imagen de reemplazo en Unsplash
3. Actualizar URL en archivo de datos correspondiente

### Problema: Botón de WhatsApp no funciona
**Causa**: Número mal formateado o mensaje con caracteres especiales
**Solución**:
1. Verificar formato del número: 54911XXXXXXXX (sin espacios ni símbolos)
2. Revisar mensaje por caracteres especiales
3. Probar URL generada manualmente

### Problema: Error de compilación
**Causa**: Sintaxis incorrecta o import faltante
**Solución**:
1. Revisar consola del navegador
2. Verificar que todos los imports estén presentes
3. Comprobar sintaxis de JavaScript/TypeScript
4. Verificar que no falten comas o llaves

### Problema: Layout roto en móvil
**Causa**: Clases de Tailwind no responsivas
**Solución**:
1. Agregar prefijos `sm:`, `md:`, `lg:` a clases CSS
2. Probar en diferentes tamaños de pantalla
3. Usar herramientas de desarrollador del navegador

## 📱 Testing y Verificación

### Lista de Verificación Pre-Publicación
- [ ] Todas las páginas cargan sin errores
- [ ] Botones de WhatsApp funcionan correctamente
- [ ] Imágenes se ven bien en diferentes dispositivos
- [ ] Texto es legible y sin errores ortográficos
- [ ] Navegación funciona entre todas las páginas
- [ ] Formularios y filtros funcionan correctamente

### Dispositivos de Prueba Recomendados
- **Desktop**: Chrome, Firefox, Safari
- **Móvil**: iPhone (Safari), Android (Chrome)
- **Tablet**: iPad, Android tablet

## 📊 Monitoreo y Análiticas

### Métricas Importantes a Seguir
1. **Clics en WhatsApp**: Conversiones por página
2. **Páginas más visitadas**: Analizar tráfico
3. **Tiempo en página**: Engagement del usuario
4. **Dispositivos**: Desktop vs móvil vs tablet

### Herramientas Recomendadas
- Google Analytics (configurar si no está activo)
- Google Search Console
- Herramientas de velocidad de página

## 🔐 Seguridad y Backups

### Backup de Código
- El código está conectado a GitHub (automático)
- Lovable mantiene historial de versiones
- Recomendado: backup local mensual

### Backup de Datos
- Exportar datos de `src/data/` regularmente
- Guardar imágenes importantes localmente
- Documentar cambios importantes

## 📞 Soporte y Ayuda

### Recursos Útiles
- **Documentación Tailwind**: https://tailwindcss.com/docs
- **Iconos Lucide**: https://lucide.dev/icons/
- **Imágenes Unsplash**: https://unsplash.com/
- **Guías React**: https://react.dev/

### ¿Cuándo Buscar Ayuda Técnica?
- Errores que no puedes resolver en 30 minutos
- Cambios que afectan múltiples archivos
- Problemas de performance o velocidad
- Necesidad de nuevas funcionalidades complejas
