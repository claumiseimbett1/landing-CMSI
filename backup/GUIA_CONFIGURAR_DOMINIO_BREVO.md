# 📧 Guía: Configurar Envío desde info@claumiseimbett.com en Brevo

## 🎯 Objetivo
Configurar Brevo para enviar emails desde tu dominio personalizado `info@claumiseimbett.com` en lugar del dominio por defecto de Brevo. Esto mejora la entregabilidad y profesionalismo de tus emails.

---

## 📋 Paso 1: Acceder a la Configuración de Dominios

1. **Inicia sesión en Brevo**: [https://app.brevo.com](https://app.brevo.com)
2. Ve a **"Configuración"** (⚙️) en el menú lateral
3. Selecciona **"Dominios"** o **"Domains"**
4. Haz clic en **"Agregar un dominio"** o **"Add a domain"**

---

## 🔧 Paso 2: Agregar tu Dominio

1. **Ingresa tu dominio**: `claumiseimbett.com`
   - ⚠️ **IMPORTANTE**: Ingresa solo el dominio, sin `www` ni `http://`
   - ✅ Correcto: `claumiseimbett.com`
   - ❌ Incorrecto: `www.claumiseimbett.com` o `https://claumiseimbett.com`

2. **Haz clic en "Agregar dominio"** o **"Add domain"**

3. Brevo te mostrará los registros DNS que necesitas agregar

---

## 🔐 Paso 3: Configurar Registros DNS

Brevo te mostrará **3 tipos de registros DNS** que debes agregar en tu proveedor de dominio:

### **A. Registro SPF (Sender Policy Framework)**
**Tipo**: `TXT`  
**Nombre/Host**: `@` o `claumiseimbett.com`  
**Valor**: `v=spf1 include:spf.brevo.com ~all`

**Ejemplo completo**:
```
Tipo: TXT
Nombre: @
Valor: v=spf1 include:spf.brevo.com ~all
TTL: 3600 (o el valor por defecto)
```

### **B. Registro DKIM (DomainKeys Identified Mail)**
**Tipo**: `TXT`  
**Nombre/Host**: `brevo._domainkey` o `brevo._domainkey.claumiseimbett.com`  
**Valor**: (Brevo te dará un valor único, algo como):
```
k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
```

**Ejemplo completo**:
```
Tipo: TXT
Nombre: brevo._domainkey
Valor: [El valor que te proporciona Brevo]
TTL: 3600
```

### **C. Registro DMARC (Opcional pero Recomendado)**
**Tipo**: `TXT`  
**Nombre/Host**: `_dmarc` o `_dmarc.claumiseimbett.com`  
**Valor**: `v=DMARC1; p=none; rua=mailto:info@claumiseimbett.com`

**Ejemplo completo**:
```
Tipo: TXT
Nombre: _dmarc
Valor: v=DMARC1; p=none; rua=mailto:info@claumiseimbett.com
TTL: 3600
```

---

## 🌐 Paso 4: Agregar Registros en tu Proveedor de Dominio

### **Si tu dominio está en:**

#### **GoDaddy:**
1. Inicia sesión en [GoDaddy](https://www.godaddy.com)
2. Ve a **"Mis Productos"** → **"DNS"**
3. Busca la sección **"Registros"** o **"Records"**
4. Haz clic en **"Agregar"** o **"Add"**
5. Agrega cada registro uno por uno:
   - Selecciona el tipo (TXT)
   - Ingresa el nombre/host
   - Ingresa el valor
   - Guarda

#### **Namecheap:**
1. Inicia sesión en [Namecheap](https://www.namecheap.com)
2. Ve a **"Domain List"** → Selecciona tu dominio
3. Haz clic en **"Advanced DNS"**
4. En **"Host Records"**, agrega cada registro
5. Guarda los cambios

#### **Cloudflare:**
1. Inicia sesión en [Cloudflare](https://dash.cloudflare.com)
2. Selecciona tu dominio
3. Ve a **"DNS"** → **"Records"**
4. Haz clic en **"Add record"**
5. Agrega cada registro
6. Guarda

#### **Otros proveedores:**
- Busca la sección de **"DNS"**, **"Zona DNS"**, **"DNS Records"** o **"Advanced DNS"**
- Agrega los registros TXT según las instrucciones de Brevo

---

## ⏱️ Paso 5: Esperar Propagación DNS

1. **Tiempo de propagación**: 24-48 horas (puede ser más rápido, 1-4 horas)
2. **Verificar propagación**: Puedes usar herramientas como:
   - [MXToolbox](https://mxtoolbox.com/spf.aspx) - Para verificar SPF
   - [DKIM Validator](https://dkimvalidator.com/) - Para verificar DKIM
   - [DMARC Analyzer](https://dmarcian.com/dmarc-xml/) - Para verificar DMARC

3. **En Brevo**: Ve a **"Configuración"** → **"Dominios"**
   - Verás el estado: "Verificando..." → "Verificado" ✅
   - Si hay errores, Brevo te indicará qué registro falta o está incorrecto

---

## ✅ Paso 6: Verificar el Dominio en Brevo

1. En Brevo, ve a **"Configuración"** → **"Dominios"**
2. Busca `claumiseimbett.com`
3. Deberías ver:
   - ✅ **SPF**: Verificado
   - ✅ **DKIM**: Verificado
   - ✅ **Estado general**: Verificado

4. Si algún registro no está verificado:
   - Revisa que hayas copiado el valor exacto
   - Verifica que el nombre/host sea correcto
   - Espera más tiempo para la propagación DNS

---

## 📧 Paso 7: Configurar el Remitente (Sender)

### **Opción A: Configurar Remitente en Formularios**

1. Ve a **"Formularios"** → **"Formularios"**
2. Selecciona tu formulario de newsletter
3. Ve a **"Configuración"** → **"Remitente"** o **"Sender"**
4. Configura:
   - **Email**: `info@claumiseimbett.com`
   - **Nombre**: `Claudia Milena Serpa Imbett` o `DR-Innova - AgTech Program`
5. Guarda los cambios

### **Opción B: Configurar Remitente en Plantillas de Email**

1. Ve a **"Email"** → **"Plantillas"** o **"Templates"**
2. Selecciona tu plantilla de confirmación
3. En **"Remitente"** o **"From"**, configura:
   - **Email**: `info@claumiseimbett.com`
   - **Nombre**: `Claudia Milena Serpa Imbett`
4. Guarda

### **Opción C: Configurar Remitente por Defecto**

1. Ve a **"Configuración"** → **"Remitentes"** o **"Senders"**
2. Haz clic en **"Agregar remitente"** o **"Add sender"**
3. Ingresa:
   - **Email**: `info@claumiseimbett.com`
   - **Nombre**: `Claudia Milena Serpa Imbett`
4. Brevo enviará un email de verificación a `info@claumiseimbett.com`
5. **IMPORTANTE**: Debes verificar este email haciendo clic en el enlace que Brevo envía
6. Una vez verificado, podrás usarlo como remitente

---

## 🧪 Paso 8: Probar el Envío

1. **Envía un email de prueba**:
   - Ve a **"Email"** → **"Enviar un email"** o **"Send an email"**
   - Usa la plantilla de confirmación
   - Envía a tu propio email
   - Verifica que el remitente sea `info@claumiseimbett.com`

2. **Verifica en el email recibido**:
   - El remitente debe ser `info@claumiseimbett.com`
   - El email no debe ir a spam
   - Revisa los headers del email (si es posible) para verificar SPF/DKIM

---

## 🔍 Verificación Adicional

### **Verificar Headers del Email**

En Gmail:
1. Abre el email recibido
2. Haz clic en los **3 puntos** (⋮) → **"Mostrar original"**
3. Busca:
   - `SPF: PASS`
   - `DKIM: PASS`
   - `DMARC: PASS`

En Outlook:
1. Abre el email
2. Clic derecho → **"Ver origen del mensaje"**
3. Busca los mismos valores

---

## ⚠️ Solución de Problemas

### **El dominio no se verifica después de 48 horas:**

1. **Verifica los registros DNS**:
   - Usa [MXToolbox](https://mxtoolbox.com) para verificar que los registros estén activos
   - Asegúrate de que los valores sean exactos (sin espacios extra)

2. **Verifica el nombre/host**:
   - Para SPF: debe ser `@` o `claumiseimbett.com`
   - Para DKIM: debe ser `brevo._domainkey`
   - Para DMARC: debe ser `_dmarc`

3. **Elimina registros duplicados**:
   - No debe haber múltiples registros SPF
   - Si hay uno existente, edítalo para incluir `include:spf.brevo.com`

### **El email de verificación del remitente no llega:**

1. Revisa la carpeta de spam
2. Verifica que `info@claumiseimbett.com` esté configurado como un buzón de correo activo
3. Si no tienes un buzón de correo configurado, puedes:
   - Crear un buzón en tu proveedor de hosting
   - O usar un servicio de email forwarding

### **Los emails siguen yendo a spam:**

1. **Verifica que el dominio esté completamente verificado** en Brevo
2. **Calienta tu dominio gradualmente**:
   - Empieza enviando a una lista pequeña
   - Aumenta gradualmente el volumen
3. **Solicita a los suscriptores que agreguen `info@claumiseimbett.com` a sus contactos**
4. **Verifica la reputación del dominio**:
   - [MXToolbox Blacklist Check](https://mxtoolbox.com/blacklists.aspx)
   - Si estás en alguna lista negra, contacta al proveedor para removerte

---

## 📝 Notas Importantes

- ✅ **Un dominio verificado mejora significativamente la entregabilidad**
- ✅ **Los registros DNS pueden tardar hasta 48 horas en propagarse**
- ✅ **Debes verificar el remitente (`info@claumiseimbett.com`) además del dominio**
- ✅ **Una vez configurado, todos los emails se enviarán desde tu dominio personalizado**

---

## 🆘 Soporte

Si tienes problemas:
- **Brevo Support**: [https://help.brevo.com](https://help.brevo.com)
- **Documentación Brevo**: [https://help.brevo.com/hc/en-us/articles/209467485](https://help.brevo.com/hc/en-us/articles/209467485)

---

**Última actualización**: Enero 2025

