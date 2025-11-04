# Vue PoC Monorepo (pnpm)

This repository is a pnpm monorepo configured with workspaces for apps and packages.

- Workspaces:
  - `apps/*`
  - `packages/*`

Currently included:
- `apps/vue-app` — Minimal Vue 3 application using TypeScript and Vite.

## Prerequisites
- Node.js >= 18
- pnpm >= 8

## Install dependencies
From the repository root:

```bash
pnpm install
```

This will install dependencies for all workspaces.

## Develop
Start the development server for the Vue app:

```bash
pnpm --filter vue-app dev
```

Alternatively, run all dev scripts in parallel across workspaces:

```bash
pnpm dev
```

## Build
Build the Vue app (type-check + bundle):

```bash
pnpm --filter vue-app build
```

Build all workspaces:

```bash
pnpm build
```

## Preview
After building the Vue app, you can preview it locally:

```bash
pnpm --filter vue-app preview
```

## Structure
```
.
├─ apps/
│  └─ vue-app/
│     ├─ index.html
│     ├─ vite.config.ts
│     ├─ tsconfig.json
│     ├─ tsconfig.app.json
│     ├─ tsconfig.config.json
│     └─ src/
│        ├─ main.ts
│        ├─ App.vue
│        └─ style.css
├─ packages/
│  └─ .gitkeep
├─ package.json
├─ pnpm-workspace.yaml
└─ README.md
```
