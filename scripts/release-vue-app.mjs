#!/usr/bin/env node
import { $ } from 'zx'
import fs from 'node:fs'
import path from 'node:path'

const app = 'vue-app'
const version = process.env.VERSION ?? '1.0.0' // pass VERSION=1.0.0
const repoRoot = process.cwd()
const dist = path.join(repoRoot, 'apps', app, 'dist')
const target = path.join(repoRoot, 'cdn', app, version)

console.log(`Building ${app} ${version}...`)
await $`pnpm vue-app:build`
await $`rimraf ${target}`
fs.mkdirSync(target, { recursive: true })
// // copy dist/* -> cdn/module-x/<version>/
await $`cp -R ${dist}/. ${target}`

// await $`git add ${target}`
// await $`git commit -m "release(${app}): ${version}"`
// await $`git push origin HEAD`

// await $`git tag ${app}-${version}`
// await $`git push origin HEAD --tags`


console.log(`Done. CDN base will be:
https://cdn.jsdelivr.net/gh/Envoutvikling-ext/vue-poc@${app}-${version}/cdn/${app}/${version}`)
