import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist");
const port = Number(process.env.PORT || 8080);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const target = urlPath === "/" ? "/index.html" : urlPath;
  let file = path.normalize(path.join(root, target));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, "index.html");
  }
  fs.readFile(file, (error, data) => {
    const fallback = path.join(root, "index.html");
    if (error && path.extname(file)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    if (error) {
      fs.readFile(fallback, (fallbackError, fallbackData) => {
        if (fallbackError) {
          res.writeHead(500);
          res.end("Build missing");
          return;
        }
        res.writeHead(200, { "Content-Type": types[".html"] });
        res.end(fallbackData);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, "0.0.0.0", () => {
  console.log(`Noel's Game Hub running on ${port}`);
});
