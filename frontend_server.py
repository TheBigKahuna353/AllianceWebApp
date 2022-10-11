import http.server
import socketserver

PORT = 7000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at /http://localhost:%d/" %(PORT))
    httpd.serve_forever()