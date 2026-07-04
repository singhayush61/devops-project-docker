const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Track deploy time for the demo card
const startedAt = new Date();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DevOps CI/CD Demo</title>
      <style>
        * { box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: radial-gradient(circle at top, #1e293b, #0f172a);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          text-align: center;
          padding: 48px 56px;
          border-radius: 16px;
          background: #1e293b;
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          border: 1px solid rgba(34, 197, 94, 0.25);
          max-width: 420px;
        }
        .badge {
          display: inline-block;
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        h1 {
          color: #22c55e;
          margin: 0 0 8px;
          font-size: 26px;
        }
        p {
          color: #cbd5e1;
          margin: 6px 0;
          font-size: 14px;
        }
        .stack {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          color: #64748b;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">● LIVE</span>
        <h1>🚀 CI/CD Pipeline Working</h1>
        <p>Application deployed successfully via GitHub Actions</p>
        <p>AWS EC2 + Docker + Terraform</p>
        <div class="stack">
          Server started: ${startedAt.toLocaleString()}<br/>
          Uptime: <span id="uptime">0s</span>
        </div>
      </div>
      <script>
        const started = new Date("${startedAt.toISOString()}").getTime();
        setInterval(() => {
          const secs = Math.floor((Date.now() - started) / 1000);
          document.getElementById("uptime").textContent = secs + "s";
        }, 1000);
      </script>
    </body>
    </html>
  `);
});

// Health check endpoint — useful for load balancers, ECS/K8s probes, CI smoke tests
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Basic 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown — important for containers (Docker/ECS) that send SIGTERM
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});

module.exports = app;
