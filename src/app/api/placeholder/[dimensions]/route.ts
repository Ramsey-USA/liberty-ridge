import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ dimensions: string }> }
) {
  const { dimensions } = await context.params;
  
  // Parse dimensions (e.g., "800/600" or "400/300")
  const dimensionParts = dimensions.split('/').map(Number);
  const width = dimensionParts[0] || 400;
  const height = dimensionParts[1] || 300;
  
  // Validate dimensions
  if (width <= 0 || height <= 0 || width > 2000 || height > 2000) {
    return new NextResponse('Invalid dimensions', { status: 400 });
  }
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect x="0" y="0" width="100%" height="4" fill="#dc2626"/>
      <rect x="0" y="${height - 4}" width="100%" height="4" fill="#2563eb"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#374151" text-anchor="middle" dy=".3em">
        ${width} × ${height}
      </text>
      <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="12" fill="#6b7280" text-anchor="middle" dy=".3em">
        Liberty Ridge Media
      </text>
    </svg>
  `;
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}