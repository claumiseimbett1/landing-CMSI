# 🌾 Landing Page - Claudia Milena Serpa Imbett, PhD

Landing page profesional para cursos especializados en AgTech, Google Earth Engine, Python, Machine Learning, Excel y Escritura Científica.

**URL**: [https://www.claumiseimbett.com](https://www.claumiseimbett.com)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Optimización SEO](#-optimización-seo)
- [Integraciones](#-integraciones)
- [Configuración](#-configuración)
- [Despliegue](#-despliegue)
- [Mantenimiento](#-mantenimiento)

---

## 🎯 Descripción

Sitio web profesional desarrollado para la Dra. Claudia Milena Serpa Imbett, PhD, especialista en agricultura digital, sensores remotos y machine learning. El sitio incluye:

- **Landing page principal** con información sobre cursos y servicios
- **Blog** con artículos sobre AgTech, IA y tecnologías emergentes
- **Newsletter** integrado con Brevo
- **Páginas de cursos** especializados
- **Recursos descargables** para estudiantes
- **Sistema de FAQ** para preguntas frecuentes

---

## ✨ Características

### 🎨 Diseño y UX
- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves y transiciones
- ✅ Efectos hover interactivos
- ✅ Paleta de colores profesional (verde, beige, amarillo)
- ✅ Tipografía optimizada para legibilidad
- ✅ Imágenes optimizadas con lazy loading

### 📱 Responsive Design
- ✅ Compatible con dispositivos móviles, tablets y desktop
- ✅ Menú hamburguesa para móviles
- ✅ Imágenes adaptativas
- ✅ Grid layouts flexibles

### 🔍 SEO Optimizado
- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph y Twitter Cards
- ✅ Schema.org markup (Course, Person, Organization, Blog, Article)
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Geo-localización (Colombia)
- ✅ Imágenes con alt text descriptivo

### 📧 Newsletter
- ✅ Integración con Brevo (anteriormente Sendinblue)
- ✅ Formulario de suscripción con reCAPTCHA
- ✅ Tracking de eventos (Facebook Pixel, Google Analytics)
- ✅ Confirmación por email (doble opt-in)
- ✅ Blog y newsletter sincronizados

### 📊 Analytics y Tracking
- ✅ Facebook Pixel integrado
- ✅ Google Analytics (configurable)
- ✅ LinkedIn Insight Tag
- ✅ Eventos personalizados para conversiones

---

## 📁 Estructura del Proyecto

```
Landing_CMSI/
│
├── index.html              # Página principal
├── blog.html               # Blog completo con artículos
├── newsletter.html         # Último artículo del newsletter
├── agtech-program.html     # Página del programa AgTech
├── curso-gee-ml-python.html  # Curso GEE, ML y Python
├── curso-excel-python.html   # Curso Excel y Python
├── certificacion.html      # Página de certificación
├── docencia.html           # Información sobre docencia
├── recursos.html           # Recursos descargables
├── faq.html               # Preguntas frecuentes
├── faq40.html              # FAQ específico AgTech
├── applets.html            # Applets interactivos
├── thanks.html             # Página de agradecimiento
├── politica-privacidad.html # Política de Privacidad (Google Ads compliant)
│
├── robots.txt              # Configuración para crawlers
├── sitemap.xml             # Mapa del sitio
├── sw.js                   # Service Worker para Brevo
│
├── img/                    # Imágenes del sitio
│   ├── agtech-program.jpeg
│   ├── baner-curso-excel.png
│   ├── banner-curso-agtech.png
│   ├── Claudia-Escritorio.JPG
│   └── ...
│
├── logos/                  # Logos y marcas
│   ├── logo-CLAU.svg
│   ├── AGTECH_PROGRAM_LOGO.webp
│   └── ...
│
├── recursos/              # PDFs y recursos descargables
│   ├── Brochure AgTech-Hotmart-Course.pdf
│   ├── Curso_Agtech-Program_GEE_ML-Python_Ag40.pdf
│   └── ...
│
├── videos/                # Videos del sitio
│   ├── APPLET.mp4
│   └── Video Hover -Pagina.mp4
│
└── backup/                # Backups de archivos
    ├── index.html.backup
    └── ...
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript (Vanilla)** - Interactividad y animaciones
- **Responsive Design** - Media queries y flexbox/grid

### Integraciones
- **Brevo** (Sendinblue) - Newsletter y email marketing
- **Facebook Pixel** - Tracking de conversiones
- **Google Analytics** - Analytics (configurable)
- **LinkedIn Insight Tag** - Tracking de LinkedIn
- **Google Search Console** - Verificación y monitoreo SEO

### SEO y Metadatos
- **Schema.org** - Datos estructurados
- **Open Graph** - Previews en redes sociales
- **Twitter Cards** - Previews en Twitter
- **Sitemap.xml** - Mapa del sitio para buscadores
- **Robots.txt** - Control de crawlers

---

## 🔍 Optimización SEO

### Meta Tags
- ✅ Title tags optimizados por página
- ✅ Meta descriptions únicas y descriptivas
- ✅ Keywords relevantes
- ✅ Canonical URLs
- ✅ Geo-localización (Colombia)

### Schema Markup
- ✅ **Course** - Para cursos ofrecidos
- ✅ **Person** - Información de la autora
- ✅ **Organization** - DR-Innova
- ✅ **Blog** - Para el blog
- ✅ **BlogPosting** - Para cada artículo

### Técnico
- ✅ Sitemap.xml actualizado
- ✅ Robots.txt configurado
- ✅ Imágenes con alt text
- ✅ Lazy loading de imágenes
- ✅ URLs amigables

---

## 🔗 Integraciones

### Brevo (Newsletter)
```javascript
// Configuración en index.html
client_key: "kqq726uscep89abxw9oaqp0n"
```

**Características**:
- Formulario de suscripción con iframe
- Doble opt-in configurado
- Tracking de eventos
- Service Worker para notificaciones push

### Facebook Pixel
```javascript
// ID del Pixel
'1746350276009338'
```

**Eventos rastreados**:
- PageView
- Lead (suscripciones al newsletter)

### Google Search Console
```html
<!-- Meta tag de verificación -->
<meta name="google-site-verification" content="b8V0ptu-FYRjLjTkmc9RApkdDUJgqfOUzxp6lc2NC50" />
```

---

## ⚙️ Configuración

### Variables de Configuración

#### Brevo
- **Client Key**: `kqq726uscep89abxw9oaqp0n`
- **Formulario**: Configurado vía iframe
- **Remitente**: Configurar en panel de Brevo

#### Facebook Pixel
- **Pixel ID**: `1746350276009338`
- Ubicación: `<head>` de `index.html`

#### Google Search Console
- **Verification Code**: `b8V0ptu-FYRjLjTkmc9RApkdDUJgqfOUzxp6lc2NC50`
- Ubicación: Meta tag en `<head>`

### URLs Canónicas
Todas las páginas tienen su URL canónica configurada:
```html
<link rel="canonical" href="https://www.claumiseimbett.com/[página].html">
```

---

## 🚀 Despliegue

### Requisitos
- Servidor web (Apache, Nginx, etc.)
- Dominio configurado: `claumiseimbett.com`
- Certificado SSL (HTTPS)

### Pasos de Despliegue

1. **Subir archivos al servidor**
   ```bash
   # Subir todos los archivos a la raíz del dominio
   scp -r * usuario@servidor:/ruta/del/sitio/
   ```

2. **Verificar configuración**
   - ✅ Todos los archivos están en la raíz
   - ✅ `robots.txt` accesible
   - ✅ `sitemap.xml` accesible
   - ✅ Imágenes cargando correctamente

3. **Verificar SSL**
   - ✅ HTTPS activo
   - ✅ Certificado válido

4. **Enviar sitemap a Google**
   - Google Search Console → Sitemaps
   - Enviar: `https://www.claumiseimbett.com/sitemap.xml`

---

## 📝 Mantenimiento

### Agregar Nuevo Artículo al Blog

1. Abre `blog.html`
2. Busca el comentario: `<!-- Artículo 1 - Más Reciente -->`
3. Copia el bloque completo de un artículo existente
4. Pégalo **ANTES** del artículo más reciente
5. Actualiza:
   - `article-date`: Fecha del artículo
   - `article-category`: Categoría
   - `article-title`: Título
   - `article-content`: Contenido completo
6. Actualiza el header del blog con el nuevo artículo más reciente

### Actualizar Newsletter

1. **En `newsletter.html`**:
   - Actualiza el contenido con el último artículo
   - Actualiza la fecha: `Última Edición • [Mes] [Año]`

2. **En `blog.html`**:
   - Agrega el nuevo artículo como el más reciente
   - Actualiza el header del blog

3. **En Brevo**:
   - Crea una nueva campaña de email
   - Usa el contenido del artículo
   - Incluye enlace a `newsletter.html`

### Actualizar Sitemap

1. Abre `sitemap.xml`
2. Agrega nueva entrada si creas una nueva página:
   ```xml
   <url>
       <loc>https://www.claumiseimbett.com/nueva-pagina.html</loc>
       <lastmod>2025-01-15</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
   </url>
   ```
3. Actualiza `lastmod` de la página principal

### Verificar Suscripciones

1. Accede a [Brevo](https://app.brevo.com)
2. Ve a **Contactos** → **Contactos**
3. Filtra por estado de suscripción
4. Exporta lista si es necesario

---

## 🎨 Paleta de Colores

```css
--green: #2d8659;        /* Verde principal */
--yellow: #f4d03f;       /* Amarillo acento */
--beige: #f3ede0;        /* Beige fondo */
--black: #1a1a1a;        /* Negro texto */
--white: #ffffff;        /* Blanco */
```

---

## 📊 Performance

### Optimizaciones Implementadas
- ✅ Lazy loading de imágenes
- ✅ CSS inline crítico
- ✅ JavaScript asíncrono donde es posible
- ✅ Imágenes optimizadas (formato WebP donde aplica)
- ✅ Service Worker para caché

### Métricas Objetivo
- **Lighthouse Score**: >90
- **First Contentful Paint**: <2s
- **Time to Interactive**: <3s

---

## 🔒 Seguridad

- ✅ HTTPS obligatorio
- ✅ Enlaces externos con `rel="noopener noreferrer"`
- ✅ reCAPTCHA en formularios
- ✅ Validación de formularios
- ✅ Service Worker con scope limitado

---

## 🔐 Política de Privacidad

El sitio incluye una **Política de Privacidad completa** que cumple con:
- ✅ **Google Ads**: Requisitos para publicidad personalizada
- ✅ **RGPD**: Reglamento General de Protección de Datos (UE)
- ✅ **LOPDGDD**: Ley Orgánica de Protección de Datos (España)
- ✅ **Ley 1581 de 2012**: Protección de datos personales (Colombia)

### Ubicación
- **URL**: `https://www.claumiseimbett.com/politica-privacidad.html`
- **Archivo**: `politica-privacidad.html`

### Enlaces de la Política
La política de privacidad está enlazada en:
- ✅ **Footer de todas las páginas HTML**
- ✅ **Formularios de suscripción** (newsletter)
- ✅ **Página de agradecimiento** (thanks.html)

### Contenido de la Política
Incluye información sobre:
- Responsable del tratamiento de datos
- Información recopilada (datos personales, cookies, tracking)
- Uso de cookies y tecnologías de seguimiento
- Servicios de terceros (Brevo, Google Ads, Facebook Pixel, LinkedIn)
- Derechos del usuario (acceso, rectificación, supresión, portabilidad)
- Gestión de cookies y opciones de exclusión
- Consentimiento para anuncios personalizados de Google Ads
- Transferencias internacionales de datos
- Medidas de seguridad

### Cumplimiento Google Ads
La política incluye específicamente:
- Descripción del uso de Google Ads
- Información sobre cookies de publicidad
- Enlaces para optar por no recibir anuncios personalizados
- Transparencia sobre seguimiento y personalización

---

## 📞 Soporte y Contacto

**Autora**: Claudia Milena Serpa Imbett, PhD  
**Organización**: DR-Innova  
**Sitio Web**: [https://www.claumiseimbett.com](https://www.claumiseimbett.com)  
**LinkedIn**: [Claudia Milena Serpa Imbett](https://www.linkedin.com/in/claudia-milena-serpa-imbett-a69520136/)

---

## 📄 Licencia

Todos los derechos reservados © 2025 Claudia Milena Serpa Imbett, PhD

---

## 🔄 Changelog

### Enero 2025
- ✅ Optimización SEO completa
- ✅ Integración con Brevo
- ✅ Blog y newsletter implementados
- ✅ Schema markup agregado
- ✅ Tracking de eventos configurado
- ✅ Sitemap y robots.txt creados
- ✅ Política de Privacidad implementada (Google Ads compliant)
- ✅ Enlaces a política de privacidad en todos los footers y formularios

---

## 📚 Recursos Adicionales

- [Documentación Brevo](https://help.brevo.com)
- [Schema.org Documentation](https://schema.org)
- [Google Search Console](https://search.google.com/search-console)
- [Facebook Business Help](https://www.facebook.com/business/help)

---

**Última actualización**: Enero 2025

