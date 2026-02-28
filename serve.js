const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let decodedUrl = decodeURI(req.url).split('?')[0];
    let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(8080, '0.0.0.0', () => {
    console.log('Static server running at http://0.0.0.0:8080/');
    // Auto-kill server after 600 seconds to prevent hanging the terminal
    setTimeout(() => {
        server.close();
        console.log('Server auto-closed after 600s');
        process.exit(0);
    }, 600000);
});
