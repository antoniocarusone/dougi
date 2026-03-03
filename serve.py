#!/usr/bin/env python3
import http.server, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4321
DIR  = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIR)

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(fmt % args, flush=True)

with http.server.HTTPServer(('', PORT), Handler) as httpd:
    print(f'Serving {DIR} on http://localhost:{PORT}', flush=True)
    httpd.serve_forever()
