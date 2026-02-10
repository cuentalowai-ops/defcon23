# 🚀 Configuración Rápida de Workflows

## ✅ Archivos Creados

### Workflows de GitHub Actions
- ✅ `.github/workflows/vercel-deploy.yml` - Despliegue automático a Vercel
- ✅ `.github/workflows/cursor-compliance.yml` - Verificación de cumplimiento Cursor
- ✅ `.github/workflows/ci.yml` - Integración continua (build & lint)
- ✅ `.github/workflows/legal-audit.yml` - Auditoría legal (ya existía)

### Archivos de Configuración
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `.vercelignore` - Archivos excluidos del deploy

### Documentación
- ✅ `INTEGRATION_SETUP.md` - Guía completa de configuración
- ✅ `README.md` - Actualizado con información de workflows

## 🔑 Pasos para Activar (IMPORTANTE)

### 1. Configurar Secretos de Vercel en GitHub

Para que los deployments funcionen, necesitas agregar estos secretos:

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions → New repository secret

Agrega los siguientes secretos:

| Nombre | Descripción | Cómo obtenerlo |
|--------|-------------|----------------|
| `VERCEL_TOKEN` | Token de acceso de Vercel | [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | ID de tu organización | Ejecuta `vercel link` localmente |
| `VERCEL_PROJECT_ID` | ID del proyecto | Ejecuta `vercel link` localmente |

### 2. Obtener los IDs de Vercel

```bash
# Instala Vercel CLI si no la tienes
npm install -g vercel

# Inicia sesión
vercel login

# Vincula el proyecto (esto creará .vercel/project.json)
vercel link

# Los IDs estarán en .vercel/project.json
cat .vercel/project.json
```

El archivo `.vercel/project.json` tendrá algo como:
```json
{
  "orgId": "team_xxxxxxxxxxxx",
  "projectId": "prj_xxxxxxxxxxxx"
}
```

⚠️ **IMPORTANTE**: No commitees el archivo `.vercel/project.json` (ya está en `.gitignore`)

### 3. Crear Token de Vercel

1. Ve a https://vercel.com/account/tokens
2. Haz clic en "Create Token"
3. Dale un nombre descriptivo (ej: "GitHub Actions - DEFCON23")
4. Selecciona el scope apropiado
5. Copia el token (solo se muestra una vez)

### 4. Probar los Workflows

Una vez configurados los secretos:

1. **Crear un Pull Request**: Disparará todos los workflows
   - CI build
   - Cursor compliance check
   - Vercel preview deployment

2. **Merge a main**: Disparará deployment a producción

## 📊 Qué Hace Cada Workflow

### 🚀 Vercel Deployment (`vercel-deploy.yml`)
**Se ejecuta en:**
- Push a `main` → Deploy a producción
- Pull Request a `main` → Deploy de preview

**Resultado:**
- Deployments automáticos
- Comentarios en PRs con URL de preview
- URLs de producción en merge a main

### ✅ Cursor Compliance (`cursor-compliance.yml`)
**Se ejecuta en:**
- Push a `main`, `legal-*`, `cursor-*`
- PRs a `main`
- Solo cuando cambian archivos relevantes (.md, .mdx, .tsx, .ts, .json)

**Resultado:**
- Ejecuta sanitización de terminología
- Reescribe casos de estudio
- Inyecta disclaimers
- Genera reporte de compliance
- Falla si detecta términos prohibidos
- Score mínimo recomendado: 90/100

### 🔨 CI Build (`ci.yml`)
**Se ejecuta en:**
- Push a `main`
- Pull Requests a `main`

**Resultado:**
- Instala dependencias
- Ejecuta linter
- Construye el proyecto
- Sube artifacts del build

### ⚖️ Legal Audit (`legal-audit.yml`)
**Se ejecuta en:**
- Push a `main`, `legal-*`
- Pull Requests a `main`

**Resultado:**
- Auditoría de cumplimiento legal
- Genera reportes en `reports/`
- Warnings si score < 90

## 🔒 Seguridad

Los workflows incluyen:
- ✅ Headers de seguridad en Vercel
- ✅ Verificación de términos prohibidos
- ✅ Auditoría de compliance automática
- ✅ No se exponen secretos en logs

## 📝 Próximos Pasos

1. [ ] Configurar secretos de Vercel en GitHub
2. [ ] Hacer un PR de prueba para validar workflows
3. [ ] Verificar que el deployment preview funciona
4. [ ] Hacer merge a main para deployment a producción
5. [ ] Revisar logs de GitHub Actions
6. [ ] Verificar el sitio en Vercel

## 🆘 Troubleshooting

### "VERCEL_TOKEN not set"
→ Configura los secretos en GitHub Settings → Secrets

### "Compliance score below 90"
→ Revisa los reportes en GitHub Actions artifacts
→ Ejecuta localmente: `npm run mitigation`

### Build fallido
→ Ejecuta localmente: `npm run build`
→ El build puede fallar en CI por falta de acceso a Google Fonts (temporal)

## 📚 Documentación Completa

Para más detalles, consulta [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md)
