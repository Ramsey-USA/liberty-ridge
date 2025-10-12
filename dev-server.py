#!/usr/bin/env python3
"""
Optimized development server with compression support
"""

import gzip
import io
import mimetypes
import os
import posixpath
import http.server
import socketserver
from urllib.parse import unquote


class CompressedHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP request handler with gzip compression support"""
    
    # Files that should be compressed
    COMPRESSIBLE_TYPES = {
        'text/html',
        'text/css', 
        'text/javascript',
        'application/javascript',
        'application/json',
        'text/xml',
        'application/xml',
        'text/plain',
        'image/svg+xml'
    }
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory='src', **kwargs)
    
    def end_headers(self):
        # Add security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        # Cache headers for static assets
        if self.path.endswith(('.js', '.css', '.jpg', '.jpeg', '.png', '.webp', '.avif', '.woff', '.woff2')):
            self.send_header('Cache-Control', 'public, max-age=31536000')  # 1 year
        else:
            self.send_header('Cache-Control', 'public, max-age=3600')  # 1 hour
            
        super().end_headers()
    
    def guess_type(self, path):
        """Enhanced MIME type detection"""
        mimetype, encoding = mimetypes.guess_type(path)
        
        # Handle modern image formats
        if path.endswith('.webp'):
            mimetype = 'image/webp'
        elif path.endswith('.avif'):
            mimetype = 'image/avif'
        
        return mimetype, encoding
    
    def should_compress(self, content_type, content_length):
        """Determine if content should be compressed"""
        if not content_type:
            return False
            
        # Only compress text-based content
        if not any(ct in content_type for ct in self.COMPRESSIBLE_TYPES):
            return False
            
        # Don't compress small files (overhead not worth it)
        if content_length < 1024:
            return False
            
        return True
    
    def do_GET(self):
        """Handle GET requests with compression"""
        # Get the file path
        path = self.translate_path(self.path)
        
        try:
            with open(path, 'rb') as f:
                content = f.read()
                
            content_type, _ = self.guess_type(path)
            content_length = len(content)
            
            # Check if client accepts gzip
            accept_encoding = self.headers.get('Accept-Encoding', '')
            supports_gzip = 'gzip' in accept_encoding
            
            if supports_gzip and self.should_compress(content_type, content_length):
                # Compress the content
                compressed_content = gzip.compress(content)
                
                # Send compressed response
                self.send_response(200)
                self.send_header('Content-Type', content_type or 'application/octet-stream')
                self.send_header('Content-Encoding', 'gzip')
                self.send_header('Content-Length', str(len(compressed_content)))
                self.end_headers()
                self.wfile.write(compressed_content)
                
                print(f"📦 Compressed {path}: {content_length} → {len(compressed_content)} bytes "
                      f"({100 - (len(compressed_content) * 100 // content_length)}% reduction)")
            else:
                # Send uncompressed response
                self.send_response(200)
                self.send_header('Content-Type', content_type or 'application/octet-stream')
                self.send_header('Content-Length', str(content_length))
                self.end_headers()
                self.wfile.write(content)
                
        except (OSError, IOError) as e:
            # File not found or other error
            super().do_GET()


def run_server(port=8080):
    """Run the compressed development server"""
    handler = CompressedHTTPRequestHandler
    
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"🚀 Serving compressed content at http://localhost:{port}")
        print(f"📁 Document root: {os.path.abspath('src')}")
        print("✨ Features: gzip compression, security headers, optimized caching")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped")


if __name__ == "__main__":
    run_server()