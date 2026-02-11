# PROCEDIMIENTO 01: GESTIÓN DE ACCESOS
**Código:** ENS-PROC-01  
**Versión:** 1.0  
**Fecha:** 11 febrero 2026  
**Responsable:** CTO (Responsable de Seguridad)

## 1. OBJETIVO
Establecer el proceso de gestión de accesos a sistemas de defcon23.eu, garantizando el principio de privilegio mínimo y trazabilidad completa (ENS op.acc.1 a op.acc.7).

## 2. ALCANCE
- Accesos a GitHub (código fuente)
- Accesos a Vercel (infraestructura cloud)
- Accesos a Resend, Cal.com, Notion (servicios externos)
- Accesos a base de datos Vercel Postgres

## 3. ROLES Y RESPONSABILIDADES
| Rol | Responsabilidad |
|-----|-----------------|
| **CEO** | Aprueba solicitudes de acceso nivel Admin |
| **CTO** | Gestiona accesos, revisa permisos trimestralmente |
| **Solicitante** | Completa formulario justificando necesidad acceso |

## 4. PROCESO DE ALTA DE ACCESO

### 4.1 Solicitud
1. Solicitante completa **Formulario de Solicitud de Acceso** (docs/ens/forms/solicitud_acceso.md):
   - Nombre completo
   - Email corporativo
   - Sistema/servicio solicitado (GitHub, Vercel, etc.)
   - Nivel de acceso (Read, Write, Admin)
   - Justificación (proyecto, función, duración)
   - Fecha inicio y fin (si temporal)

2. Enviar formulario a cto@defcon23.eu

### 4.2 Aprobación
| Nivel acceso | Aprobador | SLA |
|--------------|-----------|-----|
| **Read** (solo lectura) | CTO | 24h |
| **Write** (desarrollo) | CTO | 24h |
| **Admin** (producción) | CEO + CTO | 48h |

### 4.3 Configuración
**CTO ejecuta:**

1. **GitHub:**
   ```bash
   # Invitar usuario a organización
   https://github.com/orgs/cuentalowai-ops/people
   # Asignar rol: Member (Write) o Owner (Admin)
   # Habilitar 2FA obligatorio
   ```

2. **Vercel:**
   ```bash
   # Team Settings → Members → Invite Member
   # Rol: Developer (no acceso prod) o Owner (acceso total)
   # Habilitar MFA obligatorio
   ```

3. **Resend:**
   ```bash
   # Team → Members → Add Member
   # Rol: Member (enviar emails) o Admin (gestión cuenta)
   ```

4. **Base de datos:**
   ```sql
   -- Crear usuario solo lectura (ejemplo)
   CREATE ROLE readonly_user WITH LOGIN PASSWORD 'strong_password';
   GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
   ```

### 4.4 Registro
CTO documenta en **Registro de Accesos** (tabla `access_log`):
| Campo | Ejemplo |
|-------|---------|
| user_id | john.doe@defcon23.eu |
| system | GitHub |
| access_level | Write |
| approved_by | ceo@defcon23.eu |
| approved_date | 2026-02-11 |
| start_date | 2026-02-11 |
| end_date | NULL (permanente) |
| status | ACTIVE |

### 4.5 Onboarding
CTO envía **Email de Bienvenida** con:
- Credenciales de acceso (si aplica)
- Instrucciones configuración MFA
- Política de seguridad (link: docs/ens/plan_seguridad_ens.md)
- Contacto soporte: cto@defcon23.eu

## 5. PROCESO DE BAJA DE ACCESO

### 5.1 Triggers de baja
- **Fin de contrato:** Último día laboral
- **Cambio de rol:** Ya no requiere acceso
- **Solicitud propia:** Usuario solicita baja
- **Incidente de seguridad:** Acceso comprometido

### 5.2 Ejecución (mismo día)
**CTO ejecuta checklist:**
- [ ] Revocar acceso GitHub (remove from organization)
- [ ] Revocar acceso Vercel (remove from team)
- [ ] Revocar acceso Resend (remove member)
- [ ] Revocar acceso Cal.com (remove user)
- [ ] Eliminar usuario base de datos (DROP ROLE)
- [ ] Rotar API keys si usuario tenía acceso (Vercel env vars)
- [ ] Documentar baja en `access_log` (status = REVOKED)

### 5.3 Verificación
CTO verifica 24h después:
```bash
# GitHub
gh api /orgs/cuentalowai-ops/members | grep user_email
# Vercel
vercel teams members
```

## 6. REVISIÓN PERIÓDICA DE ACCESOS

### 6.1 Frecuencia
**Trimestral** (enero, abril, julio, octubre)

### 6.2 Proceso
1. **CTO genera reporte:**
   ```sql
   SELECT user_id, system, access_level, approved_date
   FROM access_log
   WHERE status = 'ACTIVE'
   ORDER BY system, access_level DESC;
   ```

2. **CTO valida con CEO:**
   - ¿Usuario aún requiere este acceso?
   - ¿Nivel de acceso correcto (no sobre-privilegiado)?

3. **CTO ejecuta cambios:**
   - Revocar accesos innecesarios
   - Degradar nivel (ej. Admin → Write)
   - Documentar decisiones en `access_review_log`

### 6.3 Registro
Tabla `access_review_log`:
| review_date | reviewer | total_users | revoked | downgraded | unchanged |
|-------------|----------|-------------|---------|------------|-----------|
| 2026-02-15 | cto@defcon23.eu | 3 | 0 | 1 (john.doe: Admin→Write) | 2 |

## 7. CONTROL DE ACCESO MFA

### 7.1 Política MFA
**Obligatorio** para TODOS los accesos (ENS op.acc.5).

### 7.2 Métodos aceptados
- **TOTP** (Google Authenticator, Authy) — RECOMENDADO
- **SMS** (solo si TOTP no disponible)
- **Security keys** (YubiKey, Titan) — ÓPTIMO

### 7.3 Verificación
CTO verifica mensualmente que todos los usuarios tienen MFA habilitado:
```bash
# GitHub
https://github.com/orgs/cuentalowai-ops/people
# Columna "2FA" debe ser ✅ para todos

# Vercel
Team Settings → Security
# Verificar "Enforce MFA" enabled
```

## 8. GESTIÓN DE CONTRASEÑAS

### 8.1 Requisitos
- **Longitud mínima:** 16 caracteres
- **Complejidad:** Mayúsculas, minúsculas, números, símbolos
- **No reutilizar:** Contraseña única por sistema
- **Rotación:** Cada 90 días (si no hay MFA)

### 8.2 Almacenamiento
- **1Password Teams** (futuro, Semana 2)
- **Compartir:** Vía 1Password Shared Vaults (NUNCA email/Slack)

### 8.3 Contraseñas prohibidas
- `Password123`, `Defcon2026`, `Admin123`
- Palabras diccionario
- Datos personales (fecha nacimiento, nombre mascota)

## 9. ACCESO DE EMERGENCIA

### 9.1 Scenario
Sistema crítico caído, CTO no disponible, CEO necesita acceso urgente.

### 9.2 Proceso
1. **CEO contacta CTO** (teléfono +34 XXX XXX XXX)
2. Si CTO no responde en 1 hora:
   - CEO accede con credenciales de emergencia (sobre sellado en caja fuerte)
   - CEO documenta acceso en `emergency_access_log`
3. **Post-incidente (24h):**
   - CTO revisa logs de acceso
   - Rotar credenciales de emergencia
   - Actualizar procedimiento si necesario

## 10. ACCESO REMOTO

### 10.1 Requisitos
- Conexión HTTPS (TLS 1.3)
- MFA habilitado
- Laptop con disco cifrado (FileVault)
- Red segura (no WiFi públicas sin VPN)

### 10.2 VPN (futuro)
**Acción (Semana 4):** Evaluar VPN corporativa (Tailscale, WireGuard) para acceso remoto seguro.

## 11. SEGREGACIÓN DE FUNCIONES

### 11.1 Principio
Separar desarrollo, staging y producción.

### 11.2 Implementación actual
- **Desarrollo:** Branch `feature/*` en GitHub
- **Staging:** Vercel Preview Deployments (automático en PR)
- **Producción:** Branch `main` (solo merge tras code review)

### 11.3 GAP
**Acción (Semana 2):** Implementar Vercel RBAC:
- Rol "Developer": Acceso solo a Previews, NO a producción
- Rol "Admin": Acceso completo (solo CEO/CTO)

## 12. AUDITORÍA DE ACCESOS

### 12.1 Logs a revisar
- **GitHub:** `Settings → Audit log` (retención 90 días)
- **Vercel:** `Team Settings → Audit Log` (retención 30 días)
- **Base de datos:** `audit_log` table (retención 2 años)

### 12.2 Eventos críticos
- Login fallido (>5 intentos = posible brute force)
- Acceso desde IP inusual (geolocalización)
- Cambio de permisos (ej. user → admin)
- Eliminación de datos

### 12.3 Alertas
**Configurar (Semana 4):** Slack integration para alertas en tiempo real.

## 13. INCIDENTES DE ACCESO

### 13.1 Escenarios
- Credenciales comprometidas (phishing)
- Acceso no autorizado detectado (intrusion)
- Usuario reporta actividad sospechosa

### 13.2 Respuesta
1. **Inmediato (0-1h):**
   - CTO revoca acceso afectado
   - Rotar API keys/passwords relacionados
   - Revisar logs para identificar alcance

2. **Investigación (1-24h):**
   - Determinar vector de ataque
   - Evaluar datos accedidos
   - Contactar DPO si datos personales (GDPR breach?)

3. **Remediación (24-72h):**
   - Aplicar controles para prevenir recurrencia
   - Documentar en `incident_log`
   - Comunicar a CEO

## 14. ANEXOS

### Anexo A: Formulario Solicitud de Acceso
```markdown
## FORMULARIO DE SOLICITUD DE ACCESO

**Solicitante:**
- Nombre completo:
- Email corporativo:
- Fecha solicitud:

**Acceso solicitado:**
- Sistema/servicio: [ ] GitHub [ ] Vercel [ ] Resend [ ] Cal.com [ ] Postgres
- Nivel acceso: [ ] Read [ ] Write [ ] Admin
- Justificación (proyecto, función):
- Duración: [ ] Permanente [ ] Temporal (hasta: _____)

**Aprobación:**
- Aprobador: _______________ Fecha: _______
- Firma: _______________
```

### Anexo B: Checklist Offboarding
```markdown
## CHECKLIST OFFBOARDING (Baja de Acceso)

**Usuario:** _______________ **Fecha último día:** _______

**Accesos a revocar:**
- [ ] GitHub (remove from org)
- [ ] Vercel (remove from team)
- [ ] Resend (remove member)
- [ ] Cal.com (remove user)
- [ ] Postgres (DROP ROLE)
- [ ] 1Password (remove from team)
- [ ] Slack (desactivar cuenta)

**Datos a transferir:**
- [ ] Repositorios asignados (reasignar owner)
- [ ] Tickets pendientes (reasignar)
- [ ] Documentación (backup)

**Seguridad:**
- [ ] Rotar API keys si usuario tenía acceso
- [ ] Revisar logs últimos 30 días (actividad anómala?)
- [ ] Recuperar equipos físicos (laptop, llaves)

**Verificación (24h después):**
- [ ] Confirmar usuario NO aparece en listados
- [ ] Verificar login fallido (credenciales revocadas)

**Responsable ejecución:** CTO
**Fecha ejecución:** _______
**Firma:** _______________
```

---

**PRÓXIMA REVISIÓN:** Febrero 2027  
**ESTADO:** ✅ APROBADO
