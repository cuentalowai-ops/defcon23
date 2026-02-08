# Legal Mitigation System

## Quick Start

```bash
npm install
npm run mitigation
```

## What It Does

1. **Sanitize** — Replaces high-risk terminology in app/ and components/
2. **Rewrite** — Generates compliant case study templates in `content/cases-rewritten/`
3. **Disclaimers** — Injects legal footer into markdown files and creates `/compliance` page
4. **Audit** — Scans for forbidden terms and generates compliance score

## Scripts

| Command | Description |
|---------|-------------|
| `npm run mitigation` | Full pipeline (all 4 steps) |
| `npm run sanitize` | Step 1: terminology replacement |
| `npm run rewrite` | Step 2: case study templates |
| `npm run disclaimers` | Step 3: inject disclaimers + compliance page |
| `npm run audit` | Step 4: compliance scan |

## Compliance Score

- **90–100:** ✅ Production ready
- **&lt;90:** ❌ Fix CRITICAL findings and re-run audit

Reports are saved to `reports/` (gitignored).

## Cursor Integration

- **Rules:** `.cursorrules` defines forbidden terms and replacements
- **Trigger:** `@workspace run legal mitigation` runs full pipeline
- **Verify:** `@workspace verify compliance` runs audit only

## Support

compliance@defcon23.eu

---

## Último Deploy con Compliance 100/100

- **Fecha:** 2026-02-08 (UTC)
- **Commit:** f23fe1f
- **Compliance Score:** 100/100
- **Status:** Código sanitizado; redeploy en Vercel pendiente para reflejar en producción (sin caché).
