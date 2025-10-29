#!/usr/bin/env node

/**
 * Deployment Verification Script
 * 
 * This script helps verify that the resume and photo files
 * are correctly accessible in the deployed GitHub Pages site.
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function printHeader() {
  console.log(colors.cyan + colors.bright);
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                 Deployment Verification                     ║');
  console.log('║                                                              ║');
  console.log('║  Checking Resume & Photo Files for GitHub Pages            ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log(colors.reset);
}

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(colors.green + `✅ ${description}` + colors.reset);
    console.log(colors.blue + `   Path: ${filePath}` + colors.reset);
    console.log(colors.blue + `   Size: ${sizeKB} KB` + colors.reset);
    return true;
  } else {
    console.log(colors.red + `❌ ${description}` + colors.reset);
    console.log(colors.red + `   Missing: ${filePath}` + colors.reset);
    return false;
  }
}

function verifyDeployment() {
  printHeader();
  
  console.log(colors.yellow + 'Checking source files in public/ directory:' + colors.reset);
  console.log('');
  
  const publicResume = 'public/Laxman-Singh-Rawat-Resume.pdf';
  const publicPhoto = 'public/laxman-photo.jpeg';
  
  const sourceResumeOk = checkFile(publicResume, 'Resume PDF (source)');
  console.log('');
  const sourcePhotoOk = checkFile(publicPhoto, 'Profile Photo (source)');
  console.log('');
  
  console.log(colors.yellow + 'Checking built files in build/ directory:' + colors.reset);
  console.log('');
  
  const buildResume = 'build/Laxman-Singh-Rawat-Resume.pdf';
  const buildPhoto = 'build/laxman-photo.jpeg';
  
  const buildResumeOk = checkFile(buildResume, 'Resume PDF (build)');
  console.log('');
  const buildPhotoOk = checkFile(buildPhoto, 'Profile Photo (build)');
  console.log('');
  
  // Check component files for correct paths
  console.log(colors.yellow + 'Checking component files for correct paths:' + colors.reset);
  console.log('');
  
  const heroFile = 'src/components/Hero.js';
  const contactFile = 'src/components/Contact.js';
  
  if (fs.existsSync(heroFile)) {
    const heroContent = fs.readFileSync(heroFile, 'utf8');
    if (heroContent.includes('process.env.PUBLIC_URL')) {
      console.log(colors.green + '✅ Hero component uses dynamic PUBLIC_URL' + colors.reset);
    } else {
      console.log(colors.red + '❌ Hero component missing PUBLIC_URL' + colors.reset);
    }
  }
  
  if (fs.existsSync(contactFile)) {
    const contactContent = fs.readFileSync(contactFile, 'utf8');
    if (contactContent.includes('process.env.PUBLIC_URL')) {
      console.log(colors.green + '✅ Contact component uses dynamic PUBLIC_URL' + colors.reset);
    } else {
      console.log(colors.red + '❌ Contact component missing PUBLIC_URL' + colors.reset);
    }
  }
  
  console.log('');
  
  // Summary
  const allOk = sourceResumeOk && sourcePhotoOk && buildResumeOk && buildPhotoOk;
  
  if (allOk) {
    console.log(colors.green + colors.bright + '🎉 All files are correctly placed!' + colors.reset);
    console.log('');
    console.log(colors.cyan + 'Your files should now be accessible at:' + colors.reset);
    console.log(colors.blue + '📄 Resume: https://LaxmanSRawat.github.io/Portfolio/Laxman-Singh-Rawat-Resume.pdf' + colors.reset);
    console.log(colors.blue + '📸 Photo: https://LaxmanSRawat.github.io/Portfolio/laxman-photo.jpeg' + colors.reset);
    console.log('');
    console.log(colors.yellow + 'Note: It may take a few minutes for GitHub Pages to update.' + colors.reset);
  } else {
    console.log(colors.red + colors.bright + '⚠️  Some files are missing or incorrectly placed!' + colors.reset);
    console.log('');
    console.log(colors.yellow + 'Troubleshooting steps:' + colors.reset);
    console.log('1. Ensure files are in the public/ directory');
    console.log('2. Run: npm run build');
    console.log('3. Check that files appear in build/ directory');
    console.log('4. Run: npm run deploy');
  }
}

function testLocalPaths() {
  console.log(colors.cyan + 'Testing local development paths:' + colors.reset);
  console.log('');
  
  // Simulate different PUBLIC_URL values
  const testCases = [
    { env: '', description: 'Local development (no PUBLIC_URL)' },
    { env: '/Portfolio', description: 'GitHub Pages deployment' }
  ];
  
  testCases.forEach(testCase => {
    console.log(colors.yellow + `${testCase.description}:` + colors.reset);
    const resumePath = `${testCase.env}/Laxman-Singh-Rawat-Resume.pdf`;
    const photoPath = `${testCase.env}/laxman-photo.jpeg`;
    
    console.log(colors.blue + `  Resume: ${resumePath}` + colors.reset);
    console.log(colors.blue + `  Photo: ${photoPath}` + colors.reset);
    console.log('');
  });
}

// Main execution
const command = process.argv[2];

if (command === 'test-paths') {
  testLocalPaths();
} else {
  verifyDeployment();
}

console.log(colors.cyan + 'For more help, run: node verify-deployment.js test-paths' + colors.reset);
