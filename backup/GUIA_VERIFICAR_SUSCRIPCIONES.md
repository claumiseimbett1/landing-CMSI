# 📧 Guía: Cómo Verificar Suscripciones al Newsletter

> 💡 **¿Quieres enviar desde tu dominio personalizado?** Consulta: [GUIA_CONFIGURAR_DOMINIO_BREVO.md](./GUIA_CONFIGURAR_DOMINIO_BREVO.md)

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

### ⚠️ PROBLEMA: Se suscriben pero NO reciben email de confirmación

Este es un problema común. Sigue estos pasos para solucionarlo:

#### **Paso 1: Verificar Configuración del Formulario en Brevo**

1. **Accede a Brevo** → [https://app.brevo.com](https://app.brevo.com)
2. Ve a **"Formularios"** → **"Formularios"**
3. Selecciona tu formulario de newsletter
4. Haz clic en **"Configuración"** o **"Settings"**

#### **Paso 2: Verificar Configuración de Doble Opt-in**

1. Busca la sección **"Confirmación por email"** o **"Double opt-in"**
2. Verifica que esté **ACTIVADA** (debe estar habilitada)
3. Si está desactivada, **ACTÍVALA** y guarda los cambios

#### **Paso 3: Verificar Plantilla de Email de Confirmación**

1. En la configuración del formulario, busca **"Plantilla de confirmación"** o **"Confirmation email template"**
2. Verifica que haya una plantilla configurada
3. Si no hay plantilla:
   - Haz clic en **"Crear plantilla"** o **"Create template"**
   - Usa una plantilla predeterminada o crea una personalizada
   - Asegúrate de incluir el enlace de confirmación
4. **Guarda** la plantilla

#### **Paso 4: Verificar Configuración del Dominio (CRÍTICO)**

Los emails pueden no enviarse si el dominio no está verificado:

1. Ve a **"Configuración"** → **"Dominios"** o **"Settings"** → **"Domains"**
2. Verifica que tu dominio esté:
   - ✅ **Verificado** (debe aparecer un check verde)
   - ✅ **Autenticado** (SPF, DKIM, DMARC configurados)
3. Si no está verificado:
   - Sigue las instrucciones de Brevo para verificar tu dominio
   - Agrega los registros DNS que Brevo te proporciona
   - Espera 24-48 horas para la propagación DNS

#### **Paso 5: Verificar que los Emails no vayan a Spam**

1. **Pide a un suscriptor que revise:**
   - Carpeta de **Spam/Correo no deseado**
   - Carpeta de **Promociones** (Gmail)
   - Filtros de email personalizados

2. **Agrega el remitente a contactos:**
   - Pide que agreguen el email de Brevo a sus contactos
   - Esto mejora la entrega futura

#### **Paso 6: Verificar Límites de Envío**

1. Ve a **"Configuración"** → **"Límites"** o **"Settings"** → **"Limits"**
2. Verifica que no hayas alcanzado:
   - Límite diario de emails
   - Límite mensual de emails
   - Límite de contactos (plan gratuito: 300 contactos)

#### **Paso 7: Probar el Formulario**

1. **Suscríbete tú mismo** con un email de prueba
2. Revisa:
   - ✅ Si recibes el email de confirmación
   - ✅ Si aparece en la lista de contactos de Brevo
   - ✅ Si el estado es "Pendiente de confirmación" o "Suscrito"

#### **Paso 8: Verificar Logs de Envío**

1. Ve a **"Email"** → **"Estadísticas"** o **"Email"** → **"Statistics"**
2. Busca los emails de confirmación enviados
3. Verifica:
   - Si se están enviando (estado: "Enviado")
   - Si hay errores (estado: "Error" o "Rebotado")
   - Razón del error si hay alguno

#### **Solución Rápida: Desactivar Doble Opt-in Temporalmente**

Si necesitas una solución inmediata mientras verificas el problema:

1. Ve a **"Formularios"** → Tu formulario → **"Configuración"**
2. **Desactiva** temporalmente el doble opt-in
3. Los usuarios se suscribirán directamente sin confirmación
4. **⚠️ IMPORTANTE**: Vuelve a activarlo después de solucionar el problema

**Nota**: Esto no es recomendable a largo plazo porque puede afectar la calidad de tu lista.

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

