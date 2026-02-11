# PROCEDIMIENTO 09: FORMACIÓN Y CONCIENCIACIÓN
**Código:** ENS-PROC-09 | **Versión:** 1.0 | **Responsable:** CEO

## PLAN DE FORMACIÓN ANUAL

| Curso | Duración | Frecuencia | Target | Proveedor | Coste |
|-------|----------|------------|--------|-----------|-------|
| **ENS Nivel Medio** | 4h | Anual | CEO, CTO, desarrollador | e-learning CCN-CERT | €300 (total) |
| **GDPR básico** | 2h | Anual | Todos | AEPD (gratuito online) | €0 |
| **Anti-phishing** | 1h | Trimestral | Todos | KnowBe4 / Simulacro interno | €0 (simulacro) |
| **Incident Response** | 3h | Anual | CTO | SANS Institute (opcional) | €500 |

## CALENDARIO 2026

| Mes | Formación | Participantes |
|-----|-----------|---------------|
| **Marzo** | ENS Nivel Medio (4h) | CEO, CTO, dev |
| **Abril** | Anti-phishing simulacro | Todos |
| **Julio** | GDPR refresher (1h) | Todos |
| **Octubre** | Anti-phishing simulacro | Todos |

## SIMULACROS PHISHING

### Frecuencia
Trimestral (enero, abril, julio, octubre)

### Procedimiento
1. **CTO prepara email phishing simulado:**
   - Falso email "Vercel urgent action required"
   - Link a página fake (defcon23-phishing-test.vercel.app)
   
2. **Enviar a equipo** (sin avisar)

3. **Resultados esperados:**
   - **Target:** < 10% usuarios hacen click
   - Si > 20% click → Training obligatorio adicional

4. **Comunicar resultados:**
   - Email equipo con estadísticas (anónimo)
   - Tips anti-phishing (verificar sender, no click links urgentes)

## ONBOARDING SEGURIDAD

### Checklist nuevo empleado (Día 1)
- [ ] Leer Plan de Seguridad ENS (docs/ens/plan_seguridad_ens.md)
- [ ] Firmar NDA (confidencialidad)
- [ ] Configurar MFA en GitHub, Vercel
- [ ] Instalar 1Password
- [ ] Habilitar FileVault (cifrado disco laptop)
- [ ] Curso GDPR básico (2h online AEPD)
- [ ] Contact emergencia: cto@defcon23.eu

## CERTIFICADOS DE FORMACIÓN

**Archivo:** docs/rrhh/training_certificates/

**Conservar:** 2 años (evidencia auditoría ENS)

---

**ESTADO:** ✅ APROBADO
