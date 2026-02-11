# PROCEDIMIENTO 03: CONTINUIDAD DEL NEGOCIO Y DRP
**Código:** ENS-PROC-03 | **Versión:** 1.0 | **Responsable:** CTO

## OBJETIVOS
- **RTO:** 4 horas (Recovery Time Objective)
- **RPO:** 24 horas (Recovery Point Objective = último backup)

## ESCENARIOS DISASTER

| Scenario | Probabilidad | Impacto | Solución |
|----------|--------------|---------|----------|
| Vercel datacenter down (fra1) | BAJA | ALTO | Failover automático región secundaria |
| Base de datos corrupta | BAJA | CRÍTICO | Restore desde backup (30 días retención) |
| Cuenta Vercel comprometida | MEDIA | CRÍTICO | Restore GitHub + redeploy cuenta nueva |
| Dominio hijacking | MUY BAJA | ALTO | Contactar registrar + ICANN, usar defcon23.es backup |
| Ransomware laptop CTO | MEDIA | MEDIO | Restore desde Time Machine, redeploy GitHub |

## PLAN DE RECUPERACIÓN

### 1. Restore Base de Datos
```bash
# Listar backups disponibles
vercel postgres backup list

# Restore punto específico
vercel postgres restore --backup-id=BACKUP_ID

# Verificar integridad
psql -h [HOST] -U [USER] -c "SELECT COUNT(*) FROM leads;"
```

### 2. Redeploy desde GitHub
```bash
git clone https://github.com/cuentalowai-ops/defcon23
cd defcon23
vercel --prod
# Tiempo estimado: 5 minutos
```

### 3. Dominio Backup
Si defcon23.eu no disponible:
- Activar defcon23.es (registrado, DNS configurado)
- Comunicar cambio vía email clientes

## TESTING CONTINUIDAD
**Frecuencia:** Trimestral  
**Próximo simulacro:** Mayo 2026  
**Duración:** 2 horas

**Checklist simulacro:**
- [ ] Restore DB desde backup (validar integridad)
- [ ] Redeploy completo desde GitHub
- [ ] Verificar smoke tests (calculadora Reynolds funciona)
- [ ] Medir tiempo recuperación (< 4h target)
- [ ] Documentar lecciones aprendidas

---

**ESTADO:** ✅ APROBADO
