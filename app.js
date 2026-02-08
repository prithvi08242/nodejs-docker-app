const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Deployment Success</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #ffffff;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
        .card {
          background: rgba(0, 0, 0, 0.3);
          padding: 40px 50px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        h1 {
          margin-bottom: 15px;
          font-size: 32px;
        }
        p {
          font-size: 18px;
          margin: 8px 0;
        }
        .author {
          margin-top: 20px;
          font-size: 16px;
          opacity: 0.85;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🎉 Welcome!</h1>
        <p>Successfully deployed a sample <strong>Node.js</strong> application</p>
        <p>using <strong>Docker</strong> with a custom <strong>Dockerfile</strong>.</p>
        <div class="author">
          — Authored by <strong>Prudhvee</strong> 🚀
        </div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
