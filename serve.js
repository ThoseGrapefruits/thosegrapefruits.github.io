const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const EXTENSIONS_TO_MEDIA_TYPES = new Map([
  [ '.css',         'text/css;charset=utf-8' ],
  [ '.gif',         'image/gif' ],
  [ '.html',        'text/html;charset=utf-8' ],
  [ '.ico',         'image/x-icon' ],
  [ '.jpg',         'image/jpeg' ],
  [ '.js',          'text/javascript;charset=utf-8;goal=script' ],
  [ '.json',        'application/json' ],
  [ '.map',         'application/json' ],
  [ '.mjs',         'text/javascript;charset=utf-8;goal=module' ],
  [ '.pdf',         'application/pdf' ],
  [ '.png',         'image/png' ],
  [ '.svg',         'image/svg+xml;charset=utf-8' ],
  [ '.txt',         'text/plain;charset=utf-8' ],
  [ '.webmanifest', 'application/manifest+json' ],
  [ '.woff2',       'font/woff2' ]
]);

const server = http.createServer(function(request, response) {
  const { url = '/index.html' } = request;

  let path;
  if (url.startsWith('/')) {
    path = url.substr(1);
  }

  path = path || 'index.html';

  const [ extension ] = path.split('.').splice(-1);
  const contentType = EXTENSIONS_TO_MEDIA_TYPES.get('.' + extension);
  if (contentType) {
    response.setHeader('Content-Type', contentType);
  }

  // This isn't secure, it's just for local testing.
  fs.createReadStream(path)
    .on('error', () => {
      response.statusCode = 404;
      response.setHeader('X-Content-Type-Options', 'nosniff');
      response.end();
    })
    .pipe(response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});