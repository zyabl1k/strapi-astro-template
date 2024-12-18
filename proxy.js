const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/admin')) {
    // Все запросы по /admin перенаправляются на Strapi
    proxy.web(req, res, { target: 'http://127.0.0.1:1337' });
  } else {
    // Все остальные запросы перенаправляются на Astro
    proxy.web(req, res, { target: 'http://127.0.0.1:4321' });
  }
});

server.listen(57164, '127.0.4.43', () => {
  console.log('Прокси-сервер запущен на http://127.0.4.43:57164/');
});
