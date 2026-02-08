#!/usr/bin/env node
const fs = require('fs');
const glob = require('glob');

const LEGAL_FOOTER = `
---

## Aviso Legal y Metodológico

Los casos de estudio presentados son representaciones agregadas y anonimizadas de proyectos de consultoría en ingeniería de sistemas complejos. Todas las métricas han sido normalizadas para proteger la confidencialidad del cliente.

### Cumplimiento Normativo

Todos los proyectos han sido desarrollados en conformidad con:

- **Ley 10/2010** de Prevención del optimización de tesorería corporativa y de la Financiación del Terrorismo (España)
- **Reglamento (UE) 2015/849** (4ª Directiva AML/CFT sobre prevención de blanqueo)
- **Reglamento (UE) 2022/2554** (DORA - Digital Operational Resilience Act)

**Declaración de Compliance:** Ningún proyecto incluye asesoramiento destinado a evadir obligaciones de reporte ante SEPBLAC u otros organismos regulatorios. Todos los servicios incluyen revisión obligatoria por compliance officer certificado CAMS o ACFCS.

### Metodología Académica

Los modelos aplicados se fundamentan en:

- Çengel, Y. & Cimbala, J. (2006). *Fluid Mechanics: Fundamentals and Applications*. McGraw-Hill.
- Turrell, M. & van Dijk, M. (2014). *Scaling: Small Smart Moves for Outsized Results*.

### Contacto

📧 **Compliance Officer:** compliance@defcon23.eu  
📄 **Certificaciones:** ISO 27001, ENS

---

*Última actualización: ${new Date().toISOString().split('T')[0]}*
`;

const COMPLIANCE_PAGE = `# Política de Cumplimiento Normativo

## Compromiso

DEFCON23.EU opera con total transparencia y cumplimiento estricto de normativas AML/CFT, protección de datos y seguridad.

## Normativa Aplicable

- **Ley 10/2010** (Prevención Blanqueo - España)
- **Reglamento (UE) 2015/849** (4ª Directiva AML)
- **Reglamento (UE) 2016/679** (GDPR)

## Proceso de Due Diligence

1. Identificación del Cliente (KYC)
2. Evaluación de Riesgo
3. Verificación de Origen de Fondos
4. Screening en listas OFAC/UE

## Compliance Officer

**Contacto:** compliance@defcon23.eu  
**Horario:** L-V 09:00-18:00 CET

---

**Última revisión:** ${new Date().toISOString().split('T')[0]}
`;

// Only inject into .md / .mdx files (not .tsx to avoid breaking JSX)
const markdownFiles = glob.sync('app/**/*.{md,mdx}');
markdownFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('Aviso Legal y Metodológico')) {
    content += LEGAL_FOOTER;
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Disclaimer injected: ${file}`);
  }
});

// Create compliance page (Next.js App Router: app/compliance/page.mdx or .tsx)
const complianceDir = 'app/compliance';
fs.mkdirSync(complianceDir, { recursive: true });
const compliancePath = `${complianceDir}/page.mdx`;
fs.writeFileSync(compliancePath, COMPLIANCE_PAGE, 'utf8');
console.log(`✅ Compliance page created: ${compliancePath}\n`);

process.exit(0);
