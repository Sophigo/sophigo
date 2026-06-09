import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '.vitepress', 'dist');
const PORT = 8899;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

http.createServer((req, res) => {
  // Strip /docs/ prefix if present (VitePress base path)
  let url = req.url.split('?')[0];
  if (url.startsWith('/docs/')) url = url.slice(5);
  if (url.startsWith('/docs')) url = url.slice(4);
  if (url === '') url = '/index.html';

  // SPA redirect for VitePress - if path doesn't have extension, try .html
  let filePath = path.join(distDir, url);
  if (!path.extname(url)) {
    const htmlPath = path.join(distDir, url + '.html');
    if (fs.existsSync(htmlPath)) {
      filePath = htmlPath;
    } else {
      // Try index.html in directory
      const indexPath = path.join(filePath, 'index.html');
      if (fs.existsSync(indexPath)) {
        filePath = indexPath;
      }
    }
  }

  if (!fs.existsSync(filePath)) {
    // Try 404
    const notFound = path.join(distDir, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(notFound));
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
    return;
  }

  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': mime });
  res.end(fs.readFileSync(filePath));
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving: ${distDir}`);
});
