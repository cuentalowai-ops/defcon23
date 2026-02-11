# PROCEDIMIENTO 07: GESTIÓN DE CONFIGURACIÓN
**Código:** ENS-PROC-07 | **Versión:** 1.0 | **Responsable:** CTO

## INFRASTRUCTURE AS CODE (IaC)

### Archivos de Configuración (Git)
- `next.config.ts` — Next.js config (security headers)
- `vercel.json` — Vercel routing, redirects
- `tsconfig.json` — TypeScript compiler options
- `package.json` — Dependencias npm
- `.github/workflows/` — CI/CD pipelines (futuro)

**Principio:** Toda configuración en Git = versionada, auditable, revertible.

## ENVIRONMENT VARIABLES

### Gestión Actual
**Vercel Dashboard → Project → Settings → Environment Variables**

**Variables críticas:**
- `DATABASE_URL` (Postgres connection string)
- `RESEND_API_KEY` (email transaccional)
- `CAL_API_KEY` (booking system)

### Gestión Futura (Semana 2)
**1Password Teams:**
- Centralizar secrets en vaults
- Rotación automática cada 90 días
- Audit trail de accesos

## BASELINE CONFIGURATION

### Security Headers (next.config.ts)
```typescript
headers: [
  {
    source: '/(.*)',
    headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
    ]
  }
]
```

### TypeScript Strict Mode
```json
"compilerOptions": {
  "strict": true,
  "noUncheckedIndexedAccess": true
}
```

## CAMBIOS DE CONFIGURACIÓN

**Proceso:**
1. Modificar archivo (ej. `next.config.ts`)
2. Commit a feature branch
3. PR + code review
4. Merge → deploy automático

**Documentar en commit message:**
```bash
git commit -m "config: habilitar CSP frame-ancestors 'none'"
```

---

**ESTADO:** ✅ APROBADO
