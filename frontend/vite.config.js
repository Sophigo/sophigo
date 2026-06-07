import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// VitePress 构建产物直接由前端 Vite 在 /docs/* 路径下提供，
// 默认开发预览与线上部署保持同一个 5173 入口。
const docsDistDir = path.resolve(__dirname, '../docs/.vitepress/dist')
const docsPublicDir = path.resolve(__dirname, '../docs/public')

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const mimes = {
    '.html': 'text/html; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif':  'image/gif',
    '.svg':  'image/svg+xml',
    '.ico':  'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2':'font/woff2',
    '.ttf':  'font/ttf',
    '.pdf':  'application/pdf',
    '.md':   'text/markdown; charset=utf-8',
  }
  return mimes[ext] || 'application/octet-stream'
}

function serveStaticFile(baseDir, urlPath, res) {
  const filePath = path.join(baseDir, urlPath)

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.setHeader('Content-Type', getMimeType(filePath))
    res.setHeader('Cache-Control', 'no-cache')
    fs.createReadStream(filePath).pipe(res)
    return true
  }

  const indexPath = path.join(filePath, 'index.html')
  if (fs.existsSync(indexPath)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache')
    fs.createReadStream(indexPath).pipe(res)
    return true
  }

  return false
}

// 自定义插件：将 /docs/* 请求优先映射到 docs/.vitepress/dist/* 静态文件，
// 如果某些独立静态资源尚未进入 VitePress dist，再回退到 docs/public/*。
function docsStaticPlugin() {
  return {
    name: 'docs-static-middleware',
    configureServer(server) {
      server.middlewares.use('/docs', (req, res, next) => {
        // req.url 是 /docs 之后的部分，例如 /courses/ai-basics/
        const urlPath = req.url === '/' ? '/index.html' : req.url.split('?')[0]

        try {
          if (
            serveStaticFile(docsDistDir, urlPath, res) ||
            serveStaticFile(docsPublicDir, urlPath, res)
          ) {
            return
          }
        } catch (e) {
          // 忽略文件系统错误，交给下一个中间件
        }
        next()
      })
    }
  }
}

export default defineConfig({
  base: '/',
  plugins: [react(), docsStaticPlugin()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      // 只保留后端 API 代理，/docs 已由插件直接处理
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
