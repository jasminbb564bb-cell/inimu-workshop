"""Minimal standard-library server for local submission checks.

Endpoints: GET /api/health and GET /api/products[/:key].
Static files are served from this project directory.
"""
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
PRODUCTS = json.loads((ROOT / "api" / "products.json").read_text(encoding="utf-8"))


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urlparse(self.path).path.rstrip("/") or "/"
        if path == "/api/health":
            return self.send_json({"ok": True, "service": "inimu"})
        if path == "/api/products":
            return self.send_json(PRODUCTS)
        if path.startswith("/api/products/"):
            key = path.rsplit("/", 1)[-1]
            product = PRODUCTS.get(key)
            if product is None:
                return self.send_json({"error": "product_not_found"}, 404)
            return self.send_json(product)
        return super().do_GET()

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    port = 8000
    host = "0.0.0.0"
    print(f"inimu server: http://127.0.0.1:{port}/")
    ThreadingHTTPServer((host, port), Handler).serve_forever()
