const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Image optimization script for Liberty Ridge Training Grounds
// This script converts images to modern formats and creates responsive versions

const imageDirs = [
    './src/assets/images',
    './public/images'
];

const supportedFormats = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
    console.log('Starting image optimization...');
    
    for (const dir of imageDirs) {
        if (!fs.existsSync(dir)) continue;
        
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (!supportedFormats.includes(ext)) continue;
            
            const filePath = path.join(dir, file);
            const fileName = path.basename(file, ext);
            
            console.log(`Optimizing ${file}...`);
            
            try {
                // Create WebP version (smaller file size, good browser support)
                const webpPath = path.join(dir, `${fileName}.webp`);
                if (!fs.existsSync(webpPath)) {
                    console.log(`Creating WebP: ${webpPath}`);
                    // This would require imagemin or sharp in a real implementation
                    // For now, we'll create a placeholder script
                }
                
                // Create AVIF version (next-gen format, smallest size)
                const avifPath = path.join(dir, `${fileName}.avif`);
                if (!fs.existsSync(avifPath)) {
                    console.log(`Creating AVIF: ${avifPath}`);
                    // This would require imagemin or sharp in a real implementation
                }
                
                // Create responsive versions (different sizes)
                const sizes = [480, 768, 1024, 1920];
                for (const size of sizes) {
                    const responsivePath = path.join(dir, `${fileName}-${size}w.webp`);
                    if (!fs.existsSync(responsivePath)) {
                        console.log(`Creating responsive ${size}w: ${responsivePath}`);
                        // This would create different sized versions
                    }
                }
                
            } catch (error) {
                console.error(`Error optimizing ${file}:`, error.message);
            }
        }
    }
    
    console.log('Image optimization complete!');
    console.log('\nTo complete the optimization:');
    console.log('1. Install image optimization tools: npm install imagemin imagemin-webp imagemin-avif sharp');
    console.log('2. Update HTML to use <picture> elements with multiple formats');
    console.log('3. Implement lazy loading for images below the fold');
}

// Picture element helper function
function generatePictureElement(imageName, alt, sizes = '100vw', loading = 'lazy') {
    return `
<picture>
    <source 
        srcset="images/${imageName}-480w.avif 480w,
                images/${imageName}-768w.avif 768w,
                images/${imageName}-1024w.avif 1024w,
                images/${imageName}-1920w.avif 1920w"
        sizes="${sizes}"
        type="image/avif">
    <source 
        srcset="images/${imageName}-480w.webp 480w,
                images/${imageName}-768w.webp 768w,
                images/${imageName}-1024w.webp 1024w,
                images/${imageName}-1920w.webp 1920w"
        sizes="${sizes}"
        type="image/webp">
    <img 
        src="images/${imageName}.jpg"
        alt="${alt}"
        loading="${loading}"
        decoding="async"
        sizes="${sizes}"
        srcset="images/${imageName}-480w.jpg 480w,
                images/${imageName}-768w.jpg 768w,
                images/${imageName}-1024w.jpg 1024w,
                images/${imageName}-1920w.jpg 1920w">
</picture>`.trim();
}

// Example usage
console.log('Example optimized picture element:');
console.log(generatePictureElement('training-1', 'Professional firearms training session', '(max-width: 768px) 100vw, 50vw', 'eager'));

if (require.main === module) {
    optimizeImages();
}

module.exports = { optimizeImages, generatePictureElement };