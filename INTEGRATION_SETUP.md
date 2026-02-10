# Configuración de Integración CI/CD

Este documento describe la configuración de integración continua y despliegue automático para el proyecto DEFCON 23.

## 📋 Resumen

El proyecto incluye tres flujos de trabajo principales de GitHub Actions:

1. **Vercel Deployment** - Despliegue automático a Vercel
2. **Cursor Compliance Check** - Verificación de cumplimiento legal
3. **CI - Build and Test** - Construcción y pruebas

## 🚀 Vercel Deployment

### Archivo: `.github/workflows/vercel-deploy.yml`

**Disparadores:**
- Push a `main` → Despliegue a producción
- Pull Request a `main` → Despliegue de preview

**Características:**
- Despliegue automático usando Vercel CLI
- Comentarios en PRs con URLs de preview
- Variables de entorno configurables

**Secretos requeridos:**
```
VERCEL_TOKEN         # Token de acceso de Vercel
VERCEL_ORG_ID        # ID de organización
VERCEL_PROJECT_ID    # ID del proyecto
```

### Configuración inicial de Vercel

1. **Instalar Vercel CLI localmente:**
   ```bash
   npm install -g vercel
   ```

2. **Iniciar sesión:**
   ```bash
   vercel login
   ```

3. **Vincular proyecto:**
   ```bash
   vercel link
   ```
   Esto creará un archivo `.vercel/project.json` con tus IDs.

4. **Obtener el token:**
   - Ve a https://vercel.com/account/tokens
   - Crea un nuevo token
   - Copia el token generado

5. **Configurar secretos en GitHub:**
   - Ve a Settings → Secrets and variables → Actions
   - Agrega los siguientes secretos:
     - `VERCEL_TOKEN`: El token que obtuviste
     - `VERCEL_ORG_ID`: Del archivo `.vercel/project.json`
     - `VERCEL_PROJECT_ID`: Del archivo `.vercel/project.json`

### Archivo de configuración: `vercel.json`

Configuración incluida:
- Framework: Next.js
- Región: US East (iad1)
- Headers de seguridad (CORS, XSS Protection, etc.)
- Integración con GitHub habilitada
- Auto-alias y cancelación de jobs

## ✅ Cursor Compliance Check

### Archivo: `.github/workflows/cursor-compliance.yml`

**Disparadores:**
- Push a branches: `main`, `legal-*`, `cursor-*`
- Pull Requests a `main`
- Solo cuando se modifican archivos relevantes (`.md`, `.mdx`, `.tsx`, `.ts`, `.json`, `.cursorrules`)

**Funcionalidad:**
1. Verifica existencia de `.cursorrules`
2. Ejecuta sanitización de terminología
3. Reescribe casos de estudio
4. Inyecta disclaimers
5. Ejecuta auditoría de cumplimiento
6. Sube reportes como artifacts
7. Verifica score de cumplimiento (mínimo 90/100)
8. Escanea términos prohibidos

**Scripts utilizados:**
- `npm run sanitize` - 01-sanitize-terminology.js
- `npm run rewrite` - 02-rewrite-cases.js
- `npm run disclaimers` - 03-inject-disclaimers.js
- `npm run audit` - 04-audit-compliance.js

**Reportes generados:**
Los reportes se guardan en `reports/` y están disponibles como artifacts de GitHub Actions por 30 días.

## 🔨 CI - Build and Test

### Archivo: `.github/workflows/ci.yml`

**Disparadores:**
- Push a `main`
- Pull Requests a `main`

**Pasos:**
1. Checkout del código
2. Setup de Node.js 18 con cache npm
3. Instalación de dependencias
4. Ejecución de linter
5. Build del proyecto
6. Verificación de output
7. Upload de artifacts (7 días de retención)

## 📝 Workflow existente: Legal Compliance Audit

### Archivo: `.github/workflows/legal-audit.yml`

Este workflow ya existía y se mantiene para auditorías legales específicas:
- Ejecuta en push a `main` y branches `legal-*`
- Ejecuta en PRs a `main`
- Score mínimo recomendado: 90/100

## 🔐 Seguridad

### Headers configurados en Vercel
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## 📊 Monitoreo

### Artifacts de GitHub Actions
- **Compliance Reports**: 30 días de retención
- **Build Artifacts**: 7 días de retención

### Notificaciones
- Warnings en caso de compliance score < 90
- Errors si se detectan términos prohibidos
- Comentarios automáticos en PRs con URLs de deployment

## 🛠️ Troubleshooting

### Error: "VERCEL_TOKEN not set"
Verifica que los secretos estén configurados en GitHub Settings → Secrets and variables → Actions.

### Error: "Compliance score below 90"
Revisa los reportes en los artifacts de GitHub Actions y ejecuta localmente:
```bash
npm run mitigation
```

### Build fallido
Ejecuta localmente para ver el error:
```bash
npm run build
```

## 📚 Referencias

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🔄 Actualización de workflows

Para modificar los workflows:
1. Edita los archivos en `.github/workflows/`
2. Haz commit y push
3. Los cambios se aplicarán automáticamente en el siguiente trigger

## ⚡ Performance

**Tiempos estimados de ejecución:**
- Vercel Deploy: 3-5 minutos
- Cursor Compliance: 2-3 minutos
- CI Build: 2-4 minutos

## 📞 Soporte

Para problemas con:
- Workflows: Revisa los logs en GitHub Actions
- Vercel: Consulta el dashboard de Vercel
- Compliance: Revisa `.cursorrules` y scripts en `scripts/legal-mitigation/`
