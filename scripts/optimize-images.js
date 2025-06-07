#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize images in the public/images directory
 * and prepares them for GitHub upload.
 */

const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, '../public/images');

function getImageStats() {
  const stats = {
    totalImages: 0,
    totalSize: 0,
    byType: {},
    byProject: {}
  };

  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const itemRelativePath = path.join(relativePath, item);
      
      if (fs.statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, itemRelativePath);
      } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item)) {
        const stat = fs.statSync(fullPath);
        const ext = path.extname(item).toLowerCase();
        const projectName = relativePath.split('/')[1] || 'root';
        
        stats.totalImages++;
        stats.totalSize += stat.size;
        
        if (!stats.byType[ext]) stats.byType[ext] = { count: 0, size: 0 };
        stats.byType[ext].count++;
        stats.byType[ext].size += stat.size;
        
        if (!stats.byProject[projectName]) stats.byProject[projectName] = { count: 0, size: 0 };
        stats.byProject[projectName].count++;
        stats.byProject[projectName].size += stat.size;
        
        console.log(`${itemRelativePath} - ${(stat.size / 1024).toFixed(1)}KB`);
      }
    });
  }

  if (fs.existsSync(imageDir)) {
    scanDirectory(imageDir);
  }

  return stats;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

console.log('🖼️  Image Analysis Report\n');
console.log('=' * 50);

const stats = getImageStats();

console.log('\n📊 Summary:');
console.log(`Total Images: ${stats.totalImages}`);
console.log(`Total Size: ${formatBytes(stats.totalSize)}`);

console.log('\n📁 By File Type:');
Object.entries(stats.byType).forEach(([ext, data]) => {
  console.log(`${ext}: ${data.count} files (${formatBytes(data.size)})`);
});

console.log('\n🎯 By Project:');
Object.entries(stats.byProject).forEach(([project, data]) => {
  console.log(`${project}: ${data.count} files (${formatBytes(data.size)})`);
});

console.log('\n💡 Optimization Recommendations:');
console.log('1. Convert large PNG files to WebP format for better compression');
console.log('2. Resize images to maximum needed dimensions (e.g., 1920px width for hero images)');
console.log('3. Use progressive JPEG for large photos');
console.log('4. Consider using a CDN for image delivery');
console.log('5. Implement lazy loading for images below the fold');