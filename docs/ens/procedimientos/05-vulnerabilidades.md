# PROCEDIMIENTO 05: GESTIÓN DE VULNERABILIDADES
**Código:** ENS-PROC-05 | **Versión:** 1.0 | **Responsable:** CTO

## FUENTES DE ALERTAS
1. **Dependabot (GitHub):** Vulnerabilidades npm packages
2. **npm audit:** Scan local dependencias
3. **CCN-CERT:** Boletines seguridad (suscripción: https://www.ccn-cert.cni.es/gestion-de-incidentes.html)
4. **CVE databases:** NIST NVD, MITRE

## CLASIFICACIÓN VULNERABILIDADES

| Severidad | CVSS Score | SLA Patch | Acción |
|-----------|------------|-----------|--------|
| **CRITICAL** | 9.0-10.0 | 24 horas | Patch inmediato, comunicar CEO |
| **HIGH** | 7.0-8.9 | 7 días | Patch prioritario, code review |
| **MEDIUM** | 4.0-6.9 | 30 días | Batch update mensual |
| **LOW** | 0.1-3.9 | 90 días | Batch update trimestral |

## PROCESO PATCHING

### 1. Recepción Alerta
Dependabot crea PR automático en GitHub.

### 2. Evaluación CTO
- ¿Afecta a defcon23.eu? (verificar dependencia usada)
- ¿Hay exploit público? (búsqueda ExploitDB, GitHub Issues)
- Clasificar severidad (CVSS score)

### 3. Testing
```bash
git checkout dependabot/npm_and_yarn/[PACKAGE]-[VERSION]
npm install
npm run build
npm run test
# Verificar no hay breaking changes
```

### 4. Deploy
```bash
git merge dependabot/npm_and_yarn/[PACKAGE]-[VERSION]
git push origin main
# Vercel auto-deploy
```

### 5. Verificación
- Smoke tests producción
- Monitorizar error rate 24h
- Documentar en `vulnerability_log`

## SCANNING PROACTIVO

### npm audit (semanal)
```bash
npm audit --audit-level=moderate
npm audit fix
```

### Penetration Testing (anual)
**Próximo:** Q2 2026  
**Proveedor:** [TBD - BSI, Tarlogic, S21sec]  
**Coste estimado:** €3,000-€5,000

---

**ESTADO:** ✅ APROBADO
