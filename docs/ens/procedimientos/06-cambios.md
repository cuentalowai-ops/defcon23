# PROCEDIMIENTO 06: GESTIÓN DE CAMBIOS
**Código:** ENS-PROC-06 | **Versión:** 1.0 | **Responsable:** CTO

## TIPOS DE CAMBIOS

| Tipo | Impacto | Aprobación | Ejemplo |
|------|---------|------------|---------|
| **ESTÁNDAR** | Bajo | CTO | Fix bug menor, actualizar texto |
| **NORMAL** | Medio | CTO + code review | Nueva feature, refactor componente |
| **MAYOR** | Alto | CEO + CTO | Cambio arquitectura, migrar DB |
| **EMERGENCIA** | Crítico | CEO (post-aprobación) | Hotfix vulnerabilidad crítica |

## PROCESO PULL REQUEST (GitHub)

### 1. Crear Feature Branch
```bash
git checkout -b feature/nueva-funcionalidad
# Develop...
git commit -m "feat: descripción cambio"
git push origin feature/nueva-funcionalidad
```

### 2. Abrir PR en GitHub
- **Título:** `feat: [descripción breve]`
- **Descripción:**
  - ¿Qué cambia?
  - ¿Por qué?
  - ¿Cómo testar?
  - Screenshots (si UI)
- **Reviewers:** Asignar CTO (o par)
- **Labels:** `enhancement`, `bug`, `security`

### 3. Vercel Preview Deployment
Automático al abrir PR → URL staging: `https://defcon23-git-feature-xxx.vercel.app`

### 4. Code Review
**Checklist reviewer:**
- [ ] Código sigue estándares (TypeScript strict, ESLint)
- [ ] No introduce vulnerabilidades (secrets hardcoded?)
- [ ] Tests pasan (si aplica)
- [ ] Performance OK (no queries N+1)
- [ ] Documentación actualizada

### 5. Merge a Main
```bash
# Squash commits (GitHub UI)
# Vercel auto-deploy a producción
```

### 6. Verificación Post-Deploy
- Smoke tests producción (15 min después)
- Monitorizar Vercel Analytics (error rate, latency)
- Si error crítico → Rollback inmediato

## ROLLBACK PROCEDURE
```bash
# Vercel Dashboard → Deployments → [Previous deployment] → Promote to Production
# O vía CLI:
vercel rollback [DEPLOYMENT_URL]
```
**Tiempo rollback:** < 5 minutos

## REGISTRO DE CAMBIOS
GitHub commits = audit trail completo:
```bash
git log --oneline --since="1 month ago"
```

---

**ESTADO:** ✅ APROBADO
