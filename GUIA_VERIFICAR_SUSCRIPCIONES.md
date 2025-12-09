# 📧 Guía: Cómo Verificar Suscripciones al Newsletter

## 🔍 Método Principal: Panel de Brevo

### 1. Acceder al Panel de Brevo
1. Ve a [https://app.brevo.com](https://app.brevo.com)
2. Inicia sesión con tus credenciales

### 2. Ver Contactos Suscritos
**Opción A: Lista de Contactos**
- En el menú lateral, ve a **"Contactos"** → **"Contactos"**
- Aquí verás todos los contactos que se han suscrito
- Puedes filtrar por:
  - Estado de suscripción (Suscrito, No suscrito, Eliminado)
  - Lista específica (si tienes múltiples listas)
  - Fecha de suscripción
  - Origen (formulario web, importación, etc.)

**Opción B: Estadísticas del Formulario**
- Ve a **"Formularios"** → **"Formularios"**
- Selecciona tu formulario de newsletter
- Verás:
  - Número total de suscripciones
  - Suscripciones por día/semana/mes
  - Gráficos de crecimiento
  - Detalles de cada suscripción

### 3. Exportar Lista de Suscriptores
- En **"Contactos"**, selecciona los contactos que deseas exportar
- Haz clic en **"Exportar"**
- Elige el formato (CSV, Excel, etc.)
- Descarga el archivo con todos los datos

## 📊 Métricas Importantes

### En el Panel de Brevo puedes ver:
- ✅ **Total de suscriptores**: Número actual de personas suscritas
- ✅ **Nuevas suscripciones**: Cantidad de suscripciones en un período
- ✅ **Tasa de crecimiento**: Porcentaje de crecimiento mensual
- ✅ **Origen de suscripciones**: Desde dónde se suscribieron (formulario web, importación, etc.)
- ✅ **Estado de confirmación**: Si han confirmado su email (doble opt-in)

## 🔔 Configurar Notificaciones (Opcional)

### Webhooks de Brevo
Para recibir notificaciones automáticas cuando alguien se suscribe:

1. Ve a **"Configuración"** → **"Webhooks"**
2. Crea un nuevo webhook
3. Selecciona el evento: **"Contact Added"** o **"Contact Updated"**
4. Ingresa la URL de tu servidor que recibirá la notificación
5. Guarda la configuración

**Nota**: Esto requiere un servidor backend para recibir las notificaciones.

## 📈 Tracking en tu Sitio Web

### Eventos Automáticos
El código ya está configurado para rastrear suscripciones en:
- ✅ **Facebook Pixel**: Se registra un evento "Lead" cuando alguien se suscribe
- ✅ **Google Analytics** (si está configurado): Se registra un evento "newsletter_subscription"

### Verificar en Facebook Events Manager
1. Ve a [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Selecciona tu Pixel (ID: 1746350276009338)
3. Ve a **"Eventos"** → **"Eventos personalizados"**
4. Busca el evento **"Lead"** con categoría "Newsletter Subscription"

### Verificar en Google Analytics
1. Ve a tu cuenta de Google Analytics
2. Navega a **"Eventos"** → **"Eventos personalizados"**
3. Busca el evento **"newsletter_subscription"**

## 🎯 Verificación Manual Rápida

### Método Rápido:
1. **Suscríbete tú mismo** con un email de prueba
2. Verifica que recibas el email de confirmación de Brevo
3. Revisa en el panel de Brevo que aparezca en la lista de contactos
4. Verifica que el evento se registre en Facebook Pixel/Google Analytics

## ⚠️ Notas Importantes

- **Doble Opt-in**: Brevo puede estar configurado con doble opt-in, lo que significa que los usuarios deben confirmar su email antes de ser agregados a la lista
- **Spam/Correos no deseados**: Algunos emails pueden ir a spam. Verifica la configuración de dominio en Brevo
- **Límites**: Revisa los límites de tu plan de Brevo (número de contactos permitidos)

## 🆘 Solución de Problemas

### No veo nuevas suscripciones:
1. Verifica que el iframe del formulario esté cargando correctamente
2. Revisa la consola del navegador por errores
3. Verifica que el formulario de Brevo esté activo
4. Comprueba que no haya bloqueadores de anuncios interfiriendo

### Los eventos no se registran:
1. Verifica que Facebook Pixel esté cargando (consola del navegador)
2. Revisa que no haya errores de JavaScript
3. Verifica que el código de tracking esté presente en la página

## 📞 Soporte

Si tienes problemas:
- **Brevo**: [Soporte de Brevo](https://help.brevo.com)
- **Facebook Pixel**: [Centro de Ayuda de Meta](https://www.facebook.com/business/help)

---

**Última actualización**: Enero 2025

