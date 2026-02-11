# PROCEDIMIENTO 04: COPIAS DE SEGURIDAD (BACKUP)
**Código:** ENS-PROC-04 | **Versión:** 1.0 | **Responsable:** CTO

## ESTRATEGIA 3-2-1
- **3 copias:** Producción + Vercel backup + export CSV local
- **2 medios:** Vercel Postgres + archivo CSV cifrado
- **1 offsite:** Export local en laptop CEO (cifrado FileVault)

## TABLA DE BACKUPS

| Activo | Frecuencia | Retención | Ubicación | Cifrado | Responsable |
|--------|------------|-----------|-----------|---------|-------------|
| **Base de datos Postgres** | Diario (automático 3 AM UTC) | 30 días | Vercel Postgres | AES-256 | CTO |
| **Código fuente GitHub** | Cada commit (continuo) | Indefinido | GitHub + mirrors | TLS 1.3 | CTO |
| **Environment variables** | Cada cambio (manual) | Indefinido | Vercel + 1Password | Encrypted | CTO |
| **Logs Vercel** | Continuo (streaming) | 30 días | Vercel (Plan Pro) | TLS 1.3 | CTO |
| **Export CSV leads** | Semanal (domingo 2 AM) | 90 días | Laptop CEO (local) | FileVault | CEO |

## RESTORE PROCEDURES

### Base de Datos
```bash
vercel postgres backup list
vercel postgres restore --backup-id=backup_xxx
```
**Tiempo estimado:** 5-15 minutos (según tamaño)

### Código Fuente
```bash
git clone https://github.com/cuentalowai-ops/defcon23
vercel --prod
```

## TESTING RESTORE
**Frecuencia:** Trimestral  
**Última prueba:** [Pendiente - Mayo 2026]  
**Resultado esperado:** Restore completo < 30 minutos

---

**ESTADO:** ✅ APROBADO
