app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps CI/CD Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .card {
          text-align: center;
          padding: 40px;
          border-radius: 12px;
          background: #1e293b;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        h1 {
          color: #22c55e;
        }

        p {
          color: #cbd5e1;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 CI/CD Pipeline Working</h1>
        <p>Application deployed successfully via GitHub Actions</p>
        <p>AWS EC2 + Docker + Terraform</p>
      </div>
    </body>
    </html>
  `);
});
