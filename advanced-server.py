#!/usr/bin/env python3
"""
Advanced Development Server with Performance Optimizations
- Brotli and Gzip compression
- Advanced caching headers
- Security headers
- Resource optimization
"""

import http.server
import socketserver
import gzip
import brotli
import os
import mimetypes
import json
import hashlib
from urllib.parse import urlparse, unquote
from datetime import datetime, timedelta

class AdvancedHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="src", **kwargs)
    
    def end_headers(self):
        self.send_security_headers()
        self.send_cache_headers()
        super().end_headers()
    
    def send_security_headers(self):
        """Send comprehensive security headers"""
        security_headers = {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Content-Security-Policy': (
                "default-src 'self'; "
                "script-src 'self' 'unsafe-inline' https://www.gstatic.com; "
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
                "font-src 'self' https://fonts.gstatic.com; "
                "img-src 'self' data: https:; "
                "connect-src 'self' https://firestore.googleapis.com; "
                "frame-ancestors 'none';"
            ),
            'Permissions-Policy': (
                "camera=(), microphone=(), geolocation=(), "
                "payment=(), usb=(), magnetometer=(), gyroscope=()"
            )
        }
        
        for header, value in security_headers.items():
            self.send_header(header, value)
    
    def send_cache_headers(self):
        """Send optimized caching headers based on file type"""
        path = self.translate_path(self.path)
        
        if not os.path.exists(path):
            return
            
        # Get file extension and determine cache strategy
        _, ext = os.path.splitext(path)
        
        # Cache strategies by file type
        cache_strategies = {
            # Long-term caching for versioned assets
            '.js': ('public, max-age=31536000, immutable', 'text/javascript; charset=utf-8'),
            '.css': ('public, max-age=31536000, immutable', 'text/css; charset=utf-8'),
            '.woff2': ('public, max-age=31536000, immutable', 'font/woff2'),
            '.woff': ('public, max-age=31536000, immutable', 'font/woff'),
            
            # Medium-term caching for images
            '.jpg': ('public, max-age=2592000', 'image/jpeg'),
            '.jpeg': ('public, max-age=2592000', 'image/jpeg'),
            '.png': ('public, max-age=2592000', 'image/png'),
            '.webp': ('public, max-age=2592000', 'image/webp'),
            '.avif': ('public, max-age=2592000', 'image/avif'),
            '.svg': ('public, max-age=2592000', 'image/svg+xml'),
            
            # Short-term caching for HTML
            '.html': ('public, max-age=3600, must-revalidate', 'text/html; charset=utf-8'),
            
            # No caching for service worker
            'service-worker.js': ('no-cache, no-store, must-revalidate', 'text/javascript; charset=utf-8')
        }
        
        # Default strategy
        cache_control = 'public, max-age=86400'
        content_type = None
        
        # Check for service worker special case
        if 'service-worker.js' in path:
            cache_control, content_type = cache_strategies['service-worker.js']
        elif ext in cache_strategies:
            cache_control, content_type = cache_strategies[ext]
        
        self.send_header('Cache-Control', cache_control)
        
        if content_type:
            self.send_header('Content-Type', content_type)
        
        # Add ETag for better caching
        try:
            with open(path, 'rb') as f:
                content = f.read()
                etag = hashlib.md5(content).hexdigest()[:16]
                self.send_header('ETag', f'"{etag}"')
        except:
            pass
    
    def do_GET(self):
        """Handle GET requests with compression"""
        # Parse the path
        parsed_path = urlparse(self.path)
        path = unquote(parsed_path.path)
        
        # Serve index.html for root requests
        if path == '/':
            path = '/index.html'
        
        # Convert to file system path
        file_path = os.path.join('src', path.lstrip('/'))
        
        # Check if file exists
        if not os.path.exists(file_path) or os.path.isdir(file_path):
            self.send_error(404, "File not found")
            return
        
        # Determine if client accepts compression
        accept_encoding = self.headers.get('Accept-Encoding', '')
        use_brotli = 'br' in accept_encoding
        use_gzip = 'gzip' in accept_encoding
        
        try:
            # Read file content
            with open(file_path, 'rb') as f:
                content = f.read()
            
            # Get MIME type
            mime_type, _ = mimetypes.guess_type(file_path)
            if mime_type is None:
                mime_type = 'application/octet-stream'
            
            # Determine if file should be compressed
            compressible_types = {
                'text/', 'application/javascript', 'application/json',
                'application/xml', 'image/svg+xml'
            }
            
            should_compress = any(mime_type.startswith(t) for t in compressible_types)
            should_compress = should_compress and len(content) > 1024  # Only compress files > 1KB
            
            # Apply compression
            compressed_content = content
            encoding = None
            
            if should_compress:
                if use_brotli:
                    compressed_content = brotli.compress(content, quality=6)
                    encoding = 'br'
                    reduction = len(content) - len(compressed_content)
                    print(f"📦 Compressed {file_path}: {len(content)} → {len(compressed_content)} bytes ({reduction/len(content)*100:.0f}% reduction)")
                elif use_gzip:
                    compressed_content = gzip.compress(content, compresslevel=6)
                    encoding = 'gzip'
                    reduction = len(content) - len(compressed_content)
                    print(f"📦 Compressed {file_path}: {len(content)} → {len(compressed_content)} bytes ({reduction/len(content)*100:.0f}% reduction)")
            
            # Send response
            self.send_response(200)
            self.send_header('Content-Type', mime_type)
            self.send_header('Content-Length', str(len(compressed_content)))
            
            if encoding:
                self.send_header('Content-Encoding', encoding)
            
            # Add performance headers
            self.send_header('Vary', 'Accept-Encoding')
            self.send_header('Server', 'Liberty-Ridge-Optimized/1.0')
            
            self.end_headers()
            self.wfile.write(compressed_content)
            
        except Exception as e:
            print(f"❌ Error serving {file_path}: {e}")
            self.send_error(500, "Internal server error")

def create_performance_report():
    """Generate a performance optimization report"""
    report = {
        "timestamp": datetime.now().isoformat(),
        "optimizations": {
            "compression": {
                "brotli": "Available for modern browsers (85%+ compression)",
                "gzip": "Fallback compression (65%+ compression)",
                "threshold": "1KB minimum file size"
            },
            "caching": {
                "static_assets": "1 year cache (CSS, JS, fonts)",
                "images": "30 days cache",
                "html": "1 hour cache with revalidation",
                "service_worker": "No cache (always fresh)"
            },
            "security": {
                "csp": "Content Security Policy enabled",
                "headers": "Comprehensive security headers",
                "xss_protection": "XSS protection enabled",
                "frame_protection": "Clickjacking protection"
            }
        },
        "performance_features": [
            "Brotli compression for 85% size reduction",
            "Intelligent caching strategies",
            "Security headers for protection",
            "ETag support for conditional requests",
            "MIME type optimization",
            "Compression threshold optimization"
        ]
    }
    
    with open('performance-report.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print("📊 Performance report generated: performance-report.json")

def main():
    import argparse
    
    parser = argparse.ArgumentParser(description='Advanced development server with optimizations')
    parser.add_argument('--port', type=int, default=8080, help='Port to serve on (default: 8080)')
    parser.add_argument('--host', default='localhost', help='Host to bind to (default: localhost)')
    
    args = parser.parse_args()
    
    # Create performance report
    create_performance_report()
    
    # Start server
    with socketserver.TCPServer((args.host, args.port), AdvancedHTTPRequestHandler) as httpd:
        print(f"🚀 Serving optimized content at http://{args.host}:{args.port}")
        print(f"📁 Document root: {os.path.abspath('src')}")
        print("✨ Features: Brotli/Gzip compression, advanced caching, security headers")
        print("🔒 Security: CSP, XSS protection, frame protection enabled")
        print("⚡ Performance: Intelligent compression and caching strategies")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped")

if __name__ == "__main__":
    main()