# Guía: Configurar Google Ads para claumiseimbett.com

## Paso 1: Crear cuenta de Google Ads

1. **Accede a Google Ads:**
   - Ve a: https://ads.google.com
   - Inicia sesión con tu cuenta: **claumiseimbett@gmail.com**

2. **Crear nueva cuenta:**
   - Si es tu primera vez, Google te guiará para crear tu cuenta
   - Selecciona tu país: **Colombia**
   - Selecciona tu zona horaria
   - Acepta los términos y condiciones

## Paso 2: Obtener tu ID de seguimiento (Tag ID)

### Opción A: Desde el menú lateral (Más común)

1. **En Google Ads:**
   - En el menú lateral izquierdo, busca y haz clic en **"Conversiones"**
   - O ve directamente a: https://ads.google.com/aw/conversions
   - Si no ves "Conversiones", busca **"Medición"** o **"Measurement"** en el menú

2. **Crear nueva conversión:**
   - Haz clic en el botón **"+"** o **"Nueva acción de conversión"**
   - Selecciona **"Sitio web"** como fuente
   - Elige **"Instalar la etiqueta tú mismo"** o **"Instalar manualmente"**
   - Google te mostrará tu **ID de etiqueta** (formato: `AW-XXXXXXXXX`)
   - **¡IMPORTANTE!** Copia este ID, lo necesitarás para reemplazar en el código

### Opción B: Desde el menú superior

1. **Busca el ícono de herramientas:**
   - En la parte superior derecha, busca un ícono de **llave inglesa** 🔧 o **herramientas**
   - Haz clic en él
   - Busca **"Conversiones"** o **"Etiquetas de Google"** en el menú desplegable

### Opción C: URL directa

1. **Acceso directo:**
   - Ve a: https://ads.google.com/aw/conversions
   - Si te pide iniciar sesión, usa: **claumiseimbett@gmail.com**
   - Si es tu primera vez, Google te guiará para crear tu primera conversión

### Opción D: Si aún no tienes cuenta creada

1. **Primero completa la creación de cuenta:**
   - Ve a: https://ads.google.com
   - Inicia sesión con: **claumiseimbett@gmail.com**
   - Completa el proceso de creación de cuenta (puede pedir información de facturación, pero puedes omitirla por ahora)
   - Una vez dentro, sigue las Opciones A, B o C de arriba

### ¿Qué hacer si no encuentras nada?

1. **Verifica que estés en la cuenta correcta:**
   - Asegúrate de estar usando: **claumiseimbett@gmail.com**
   - Si tienes múltiples cuentas de Google, verifica que estés en la correcta

2. **Intenta crear una campaña primero:**
   - A veces Google Ads requiere que crees una campaña antes de mostrar todas las opciones
   - Ve a: https://ads.google.com
   - Haz clic en **"Crear campaña"** o **"Nueva campaña"**
   - Puedes cancelar después, pero esto activará todas las opciones del menú

3. **Usa Google Tag Manager (Alternativa más fácil):**
   - Ve a: https://tagmanager.google.com
   - Inicia sesión con: **claumiseimbett@gmail.com**
   - Crea un nuevo contenedor para tu sitio web
   - Obtén el ID del contenedor (formato: `GTM-XXXXXXX`)
   - Este método es más flexible y fácil de usar

3. **Alternativa - Google Tag Manager (Recomendado):**
   - Si prefieres usar Google Tag Manager (más flexible):
     - Ve a: https://tagmanager.google.com
     - Crea un contenedor para tu sitio web
     - Obtén el ID del contenedor (formato: `GTM-XXXXXXX`)

## Paso 3: Agregar código de seguimiento a tu sitio

**El código ya ha sido agregado a `index.html`** con un placeholder. Necesitas:

1. **Reemplazar el ID de etiqueta:**
   - Busca en `index.html`: `AW-XXXXXXXXX` o `GTM-XXXXXXX`
   - Reemplázalo con tu ID real de Google Ads

2. **Ubicación del código:**
   - El código está en la sección `<head>` del HTML
   - Debe estar antes del cierre de `</head>`

## Paso 4: Configurar conversiones

### Conversiones importantes para tu sitio:

1. **Suscripción al Newsletter:**
   - Ya está configurada en el código
   - Evento: `newsletter_subscription`

2. **Clics en botones importantes:**
   - Clics en "Conoce AgTech Program"
   - Clics en "Capacitaciones"
   - Clics en "Docencia"
   - Clics en "Applets"

3. **Descargas:**
   - Descarga de recursos
   - Acceso a HYPERSATELLITE

### Cómo configurar conversiones en Google Ads:

1. **En Google Ads:**
   - Ve al menú lateral → **"Conversiones"** (o usa: https://ads.google.com/aw/conversions)
   - Haz clic en **"+"** o **"Nueva acción de conversión"** para crear nueva conversión

2. **Configuración:**
   - **Categoría:** Selecciona según el tipo (ej: "Registro", "Descarga")
   - **Nombre:** Ej: "Suscripción Newsletter"
   - **Valor:** Opcional (puedes asignar un valor monetario)
   - **Contar:** "Una" o "Cada una" según prefieras

3. **Etiqueta de conversión:**
   - Selecciona **"Usar etiqueta de Google"**
   - Copia el código de evento que te proporciona
   - Este código ya está integrado en tu sitio para suscripciones

## Paso 5: Verificar instalación

1. **Google Tag Assistant:**
   - Instala la extensión de Chrome: "Tag Assistant Legacy"
   - Visita tu sitio web
   - Verifica que la etiqueta de Google Ads se cargue correctamente

2. **Google Ads - Vista previa:**
   - En Google Ads, ve a **Conversiones** (menú lateral o https://ads.google.com/aw/conversions)
   - Haz clic en tu conversión creada
   - Usa la herramienta de **"Vista previa"** o **"Tag Assistant"** para verificar

3. **Prueba de conversión:**
   - Realiza una acción (ej: suscribirte al newsletter)
   - Espera 24-48 horas
   - Verifica en Google Ads → **Conversiones** que se registre

## Paso 6: Configurar remarketing (Opcional pero recomendado)

1. **Crear audiencia de remarketing:**
   - Ve al menú lateral → **"Audiencias"** o **"Públicos"** (o: https://ads.google.com/aw/audiences)
   - Haz clic en **"+"** para crear nueva audiencia
   - Selecciona **"Lista de remarketing"** o **"Website visitors"**
   - Configura para visitantes de tu sitio web

2. **Código adicional:**
   - El código de remarketing ya está incluido en el código base
   - Solo necesitas activar las audiencias en Google Ads

## Paso 7: Crear tu primera campaña

1. **En Google Ads:**
   - Haz clic en **"+"** → **Nueva campaña**
   - Selecciona tu objetivo (ej: "Tráfico web", "Leads")

2. **Configuración básica:**
   - **Tipo de campaña:** Búsqueda, Display, o Video
   - **Nombre:** Ej: "Cursos AgTech - Búsqueda"
   - **Presupuesto:** Establece tu presupuesto diario

3. **Grupos de anuncios:**
   - Crea grupos con palabras clave relevantes
   - Ej: "curso google earth engine", "curso python agricultura"

4. **Anuncios:**
   - Crea anuncios atractivos
   - Incluye tu URL: https://www.claumiseimbett.com

## Paso 8: Monitoreo y optimización

1. **Panel de Google Ads:**
   - Revisa métricas: impresiones, clics, conversiones
   - Analiza qué palabras clave funcionan mejor

2. **Google Analytics (Recomendado):**
   - Conecta Google Analytics con Google Ads
   - Obtén insights más detallados sobre el comportamiento

3. **Ajustes:**
   - Optimiza palabras clave negativas
   - Ajusta ofertas según rendimiento
   - Mejora anuncios con mejor CTR

## Notas importantes:

- **Tiempo de procesamiento:** Las conversiones pueden tardar 24-48 horas en aparecer
- **Privacidad:** Asegúrate de que tu política de privacidad mencione Google Ads (ya está incluida)
- **GDPR/CCPA:** Si tienes visitantes de la UE, asegúrate de cumplir con las regulaciones
- **Presupuesto:** Comienza con un presupuesto pequeño para probar

## Soporte:

- **Ayuda de Google Ads:** https://support.google.com/google-ads
- **Centro de aprendizaje:** https://skillshop.exceedlms.com/student/path/50841-google-ads

---

**Próximo paso:** Una vez que tengas tu ID de etiqueta de Google Ads, reemplázalo en `index.html` donde dice `AW-XXXXXXXXX` o `GTM-XXXXXXX`.

