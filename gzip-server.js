#!/usr/bin/env node
const express = require('express')
const compression = require('compression')
const { resolve } = require('path')
if (process.argv[2] != null) {
    console.log('USAGE:')
    console.log('DIR=./wherever/public PORT=3000 LEVEL=9 gzip-server')
    process.exit(1)
}

const staticDir = resolve(process.env.DIR ?? '.')
const port = process.env.PORT ?? 3000
const compressionLevel =
    process.env.LEVEL == null ? 9 : Number.parseInt(process.env.LEVEL)
console.log({ staticDir, port, compressionLevel })
const app = express()
app.use(compression({ level: compressionLevel }))
app.use(express.static(staticDir))
app.listen(port)
console.log(`Listening on http://localhost:${port}`)
