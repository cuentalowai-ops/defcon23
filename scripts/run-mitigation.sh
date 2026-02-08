#!/bin/bash
set -e

echo "🚀 Starting Legal Mitigation Pipeline..."
echo "================================================"

echo ""
echo "📝 STEP 1/4: Sanitizing terminology..."
node scripts/legal-mitigation/01-sanitize-terminology.js

echo ""
echo "📝 STEP 2/4: Rewriting case studies..."
node scripts/legal-mitigation/02-rewrite-cases.js

echo ""
echo "📝 STEP 3/4: Injecting legal disclaimers..."
node scripts/legal-mitigation/03-inject-disclaimers.js

echo ""
echo "📝 STEP 4/4: Running compliance audit..."
node scripts/legal-mitigation/04-audit-compliance.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ================================================"
    echo "✅ LEGAL MITIGATION COMPLETE - ALL CHECKS PASSED"
    echo "✅ ================================================"
else
    echo ""
    echo "❌ AUDIT FAILED - CHECK REPORTS"
    exit 1
fi
