# PROCEDIMIENTO 11: CRIPTOGRAFÍA Y CLAVES
**Código:** ENS-PROC-11 | **Versión:** 1.0 | **Responsable:** CTO

## ALGORITMOS APROBADOS

### Cifrado Simétrico
- **AES-256-GCM** (at-rest, Vercel Postgres)
- **AES-256-CBC** (FileVault, discos laptops)

### Cifrado Asimétrico
- **RSA-4096** (SSH keys GitHub)
- **ECDSA P-256** (alternativa RSA, más eficiente)

### Hashing
- **SHA-256** (checksums, audit logs)
- **bcrypt** (passwords, cost factor 12)

### Transporte
- **TLS 1.3** (HTTPS, 100% tráfico)
- **Cipher suites permitidos:** AES-256-GCM, AES-128-GCM
- **Cipher suites prohibidos:** RC4, 3DES, MD5

## GESTIÓN DE CLAVES

### API Keys (Vercel Environment Variables)
**Actual:**
- Almacenamiento: Vercel Dashboard (cifrado at-rest)
- Acceso: Solo CTO + CEO
- Rotación: Manual (cuando necesario)

**Futuro (Semana 2 - 1Password Teams):**
- Centralizar en 1Password Secrets Automation
- Rotación automática cada 90 días
- Audit trail de accesos

### SSH Keys (GitHub)
**Generación:**
```bash
ssh-keygen -t rsa -b 4096 -C "cto@defcon23.eu"
# Guardar en ~/.ssh/id_rsa_defcon23
# Añadir a GitHub: Settings → SSH keys
```

**Protección:**
- Passphrase obligatoria (≥ 16 caracteres)
- Almacenar en 1Password (futuro)
- NO compartir claves privadas (cada usuario su propia clave)

### Certificados TLS (Let's Encrypt)
**Gestión:** Automática por Vercel  
**Renovación:** Automática cada 90 días  
**Verificación:** SSL Labs scan mensual (target: A+)

## ROTACIÓN DE CLAVES

### Triggers Rotación Inmediata
- Empleado con acceso sale de empresa (offboarding)
- Sospecha de compromiso (phishing, laptop perdido)
- Incidente de seguridad P0-P1
- API key expuesta en GitHub (accidentalmente committed)

### Rotación Periódica
| Clave | Frecuencia | Responsable |
|-------|------------|-------------|
| **API keys** (Resend, Cal.com) | 90 días | CTO |
| **SSH keys** | 1 año | CTO |
| **Passwords** (sin MFA) | 90 días | Usuario |
| **Certificados TLS** | Automático 90 días | Vercel |

## PROCEDIMIENTO ROTACIÓN API KEY

### Ejemplo: Resend API Key
```bash
# 1. Generar nueva key en Resend Dashboard
# Settings → API Keys → Create API Key
# Copiar nueva key

# 2. Actualizar en Vercel
vercel env rm RESEND_API_KEY
vercel env add RESEND_API_KEY
# Pegar nueva key

# 3. Redeploy
vercel --prod

# 4. Verificar funciona (enviar email test)
# app/api/test-email/route.ts

# 5. Revocar key antigua en Resend
# Settings → API Keys → [Old key] → Revoke

# 6. Documentar en audit_log
```

## ALMACENAMIENTO SEGURO

### Prohibido
- ❌ Hardcoded en código fuente
- ❌ Committed a Git (aunque repo privado)
- ❌ Email / Slack
- ❌ Google Docs / Notion sin cifrar
- ❌ Post-it en monitor

### Permitido
- ✅ Vercel Environment Variables (cifradas)
- ✅ 1Password Teams (cifrado E2E)
- ✅ GitHub Secrets (para CI/CD)
- ✅ AWS Secrets Manager / HashiCorp Vault (empresas grandes)

## VERIFICACIÓN CRIPTOGRAFÍA

### SSL Labs Scan (mensual)
```bash
# Manual: https://www.ssllabs.com/ssltest/analyze.html?d=defcon23.eu
# Expect: A+ rating

# CLI (opcional):
docker run --rm jumanjiman/ssllabs-scan --quiet defcon23.eu
```

### Verificar TLS 1.3
```bash
openssl s_client -connect defcon23.eu:443 -tls1_3
# Expect: TLSv1.3 (0x0304)
```

---

**ESTADO:** ✅ APROBADO
