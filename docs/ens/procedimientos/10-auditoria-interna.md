# PROCEDIMIENTO 10: AUDITORÍA INTERNA
**Código:** ENS-PROC-10 | **Versión:** 1.0 | **Responsable:** CTO

## FRECUENCIA
**Anual** (enero cada año)  
**Próxima auditoría:** Enero 2027

## ALCANCE
Verificar implementación de:
- 75 medidas ENS (Nivel MEDIO)
- Procedimientos operativos (12 documentados)
- GDPR compliance (Privacy Policy, ROPA, DPAs, ARCO)
- ISO 27001 controles (si certificación en progreso)

## PROCESO AUDITORÍA INTERNA

### 1. PREPARACIÓN (Semana 1)
**CTO prepara:**
- Checklist 75 medidas ENS (docs/ens/statement_applicability_ens.md)
- Selección muestra logs (trimestre anterior)
- Lista documentos a revisar

### 2. EJECUCIÓN (Semana 2-3)

#### Revisión Documental
- [ ] Plan de Seguridad ENS actualizado
- [ ] Procedimientos operativos completos (12)
- [ ] ROPA actualizado (GDPR Art. 30)
- [ ] DPAs firmados con todos los procesadores
- [ ] Análisis de riesgos vigente (< 1 año)
- [ ] Certificados formación equipo

#### Testing Técnico
```bash
# Verificar MFA habilitado
gh api /orgs/cuentalowai-ops/members
# Columna 2FA = ✅ para todos

# Verificar backups funcionan
vercel postgres backup list
# Último backup < 24h

# Verificar security headers
curl -I https://defcon23.eu
# Expect: HSTS, CSP, X-Frame-Options

# Scan vulnerabilidades
npm audit --audit-level=high
# Expect: 0 high/critical
```

#### Entrevistas
- CEO: ¿Conoce política seguridad? ¿Aprobó Plan ENS?
- CTO: ¿Procedimiento incidentes claro? ¿Contacto CCN-CERT?
- Desarrollador: ¿Formación GDPR recibida? ¿MFA configurado?

### 3. INFORME (Semana 4)

**Estructura Informe Auditoría:**
1. **Executive Summary**
   - Compliance score: X% (target 93%)
   - No conformidades mayores: X
   - No conformidades menores: X
   - Observaciones: X

2. **Hallazgos Detallados**
   | ID | Medida ENS | Hallazgo | Severidad | Evidencia |
   |----|-----------|----------|-----------|-----------|
   | NC01 | op.exp.8 | Audit logging NO implementado | MAYOR | No existe tabla audit_log |
   | NC02 | op.acc.4 | Revisión accesos NO realizada | MENOR | Última revisión: nunca |

3. **Plan de Acción Correctiva**
   | ID | Acción | Responsable | Plazo |
   |----|--------|-------------|-------|
   | NC01 | Implementar audit logging (Prisma middleware) | CTO | 2 semanas |
   | NC02 | Realizar revisión accesos trimestral | CTO | Inmediato |

4. **Conclusión**
   - **Apto para auditoría externa?** SÍ / NO / CON RESERVAS
   - Fecha recomendada auditoría externa: [Fecha]

### 4. APROBACIÓN
**CEO revisa informe** → Firma → Implementar acciones correctivas.

## NO CONFORMIDADES

### Clasificación
- **MAYOR:** Incumplimiento que compromete gravemente la seguridad (ej. no backups, no MFA)
- **MENOR:** Incumplimiento que no compromete seguridad inmediata (ej. documentación incompleta)
- **OBSERVACIÓN:** Oportunidad de mejora (no obligatoria)

### SLA Corrección
- **MAYOR:** 30 días
- **MENOR:** 90 días

---

**ESTADO:** ✅ APROBADO
