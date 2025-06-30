#!/usr/bin/env node

/**
 * Responsive Image Generation Script
 * 
 * This script generates multiple sizes and formats of images for optimal LCP performance.
 * Run this script to create WebP and JPEG variants at different breakpoints.
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  inputDir: path.join(__dirname, '../public/images/profile'),
  outputDir: path.join(__dirname, '../public/images/profile'),
  breakpoints: [480, 768, 1024, 1200],
  formats: ['webp', 'jpeg'],
  quality: {
    webp: 80,
    jpeg: 85
  }
};

// Images to process
const images = [
  {
    input: 'headshot.jpg',
    basename: 'headshot'
  }
];

async function generateResponsiveImages() {
  console.log('🖼️  Generating responsive images for LCP optimization...\n');

  for (const image of images) {
    const inputPath = path.join(config.inputDir, image.input);
    
    if (!fs.existsSync(inputPath)) {
      console.error(`❌ Input image not found: ${inputPath}`);
      continue;
    }

    console.log(`Processing: ${image.input}`);

    // Get original image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`);

    for (const width of config.breakpoints) {
      // Skip if breakpoint is larger than original
      if (width > metadata.width) continue;

      for (const format of config.formats) {
        const outputFilename = width === 1200 
          ? `${image.basename}.${format}`
          : `${image.basename}-${width}.${format}`;
        
        const outputPath = path.join(config.outputDir, outputFilename);

        try {
          let pipeline = sharp(inputPath)
            .resize(width, null, {
              withoutEnlargement: true,
              fit: 'inside'
            });

          if (format === 'webp') {
            pipeline = pipeline.webp({ 
              quality: config.quality.webp,
              effort: 6 // Higher effort for better compression
            });
          } else if (format === 'jpeg') {
            pipeline = pipeline.jpeg({ 
              quality: config.quality.jpeg,
              progressive: true,
              mozjpeg: true
            });
          }

          const info = await pipeline.toFile(outputPath);
          const sizeMB = (info.size / 1024).toFixed(1);
          
          console.log(`  ✅ ${outputFilename} - ${info.width}x${info.height}, ${sizeMB}KB`);
        } catch (error) {
          console.error(`  ❌ Failed to generate ${outputFilename}:`, error.message);
        }
      }
    }
    console.log('');
  }

  console.log('✨ Responsive image generation complete!\n');
  
  // Generate usage report
  generateUsageReport();
}

function generateUsageReport() {
  console.log('📊 Implementation Guide:\n');
  
  console.log('1. Add these preload tags to your HTML <head>:');
  console.log('   <link rel="preload" href="/images/profile/headshot.webp" as="image" type="image/webp" fetchpriority="high">');
  console.log('   <link rel="preload" href="/images/profile/headshot.jpg" as="image" fetchpriority="high">\n');
  
  console.log('2. Use this picture element structure:');
  console.log(`   <picture>
     <source 
       srcSet="/images/profile/headshot-480.webp 480w,
               /images/profile/headshot-768.webp 768w,
               /images/profile/headshot-1024.webp 1024w,
               /images/profile/headshot.webp 1200w" 
       sizes="(max-width: 480px) 480px,
              (max-width: 768px) 768px,
              (max-width: 1024px) 1024px,
              1200px"
       type="image/webp" 
     />
     <source 
       srcSet="/images/profile/headshot-480.jpg 480w,
               /images/profile/headshot-768.jpg 768w,
               /images/profile/headshot-1024.jpg 1024w,
               /images/profile/headshot.jpg 1200w" 
       sizes="(max-width: 480px) 480px,
              (max-width: 768px) 768px,
              (max-width: 1024px) 1024px,
              1200px"
       type="image/jpeg" 
     />
     <img
       src="/images/profile/headshot.jpg"
       alt="Will Patterson - Founder of Pattern3 LLC"
       width="600"
       height="800"
       loading="eager"
       fetchpriority="high"
       decoding="sync"
     />
   </picture>\n`);

  console.log('3. Test your implementation:');
  console.log('   - Run Lighthouse performance audit');
  console.log('   - Check Network tab in DevTools');
  console.log('   - Verify WebP images load in supported browsers');
  console.log('   - Test responsive behavior across breakpoints\n');
}

// Error handling
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  generateResponsiveImages().catch(console.error);
}

export { generateResponsiveImages };