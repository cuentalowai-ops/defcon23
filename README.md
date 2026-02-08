# DEFCON 23

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

## 🔄 CI/CD Integration

This repository includes automated workflows for:

### ✅ Cursor Compliance Check
Automatically validates legal compliance using `.cursorrules`:
- Sanitizes terminology
- Rewrites case studies
- Injects disclaimers
- Generates compliance reports

### 🚀 Vercel Deployment
Automatic deployments:
- **Production**: Deploys to Vercel on push to `main`
- **Preview**: Creates preview deployments for pull requests

### 🔨 CI Build & Test
Validates code quality:
- Runs linter
- Builds project
- Uploads build artifacts

**📖 For detailed setup instructions, see [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md)**

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linter
- `npm run mitigation` - Run full legal mitigation process
- `npm run sanitize` - Sanitize terminology
- `npm run rewrite` - Rewrite case studies
- `npm run disclaimers` - Inject disclaimers
- `npm run audit` - Run compliance audit

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🌐 Deploy on Vercel

This project is configured for automatic deployment to Vercel. See [INTEGRATION_SETUP.md](./INTEGRATION_SETUP.md) for configuration details.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
