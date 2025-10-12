#!/usr/bin/env node

/**
 * Lighthouse Audit Script for Liberty Ridge Training Grounds
 * Automated performance testing and reporting
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runLighthouseAudit() {
  const url = 'http://localhost:8080';
  const outputDir = './lighthouse-reports';
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🔍 Running Lighthouse audit...');
  console.log(`📍 URL: ${url}`);
  console.log(`📁 Output: ${outputDir}`);

  try {
    // Check if lighthouse is installed
    try {
      execSync('lighthouse --version', { stdio: 'pipe' });
    } catch (error) {
      console.log('📦 Installing Lighthouse CLI...');
      execSync('npm install -g lighthouse', { stdio: 'inherit' });
    }

    // Run Lighthouse audit
    const htmlReport = path.join(outputDir, `lighthouse-${timestamp}.html`);
    const jsonReport = path.join(outputDir, `lighthouse-${timestamp}.json`);
    
    console.log('🚀 Running performance audit...');
    
    const command = `lighthouse ${url} ` +
      `--output=html,json ` +
      `--output-path=${htmlReport.replace('.html', '')} ` +
      `--chrome-flags="--headless --no-sandbox" ` +
      `--only-categories=performance,accessibility,best-practices,seo ` +
      `--throttling-method=devtools ` +
      `--view`;

    execSync(command, { stdio: 'inherit' });

    console.log('✅ Lighthouse audit completed!');
    console.log(`📄 HTML Report: ${htmlReport}`);
    console.log(`📊 JSON Report: ${jsonReport}`);

    // Read and analyze results
    if (fs.existsSync(jsonReport)) {
      const results = JSON.parse(fs.readFileSync(jsonReport, 'utf8'));
      generateSummary(results);
    }

  } catch (error) {
    console.error('❌ Lighthouse audit failed:', error.message);
    
    // Provide manual audit instructions
    console.log('\n📋 Manual audit instructions:');
    console.log('1. Install Lighthouse: npm install -g lighthouse');
    console.log(`2. Run audit: lighthouse ${url} --view`);
    console.log('3. Or use Chrome DevTools → Lighthouse tab');
  }
}

function generateSummary(results) {
  console.log('\n🎯 Performance Summary:');
  console.log('=' .repeat(50));
  
  const categories = results.lhr.categories;
  
  Object.entries(categories).forEach(([key, category]) => {
    const score = Math.round(category.score * 100);
    const emoji = getScoreEmoji(score);
    console.log(`${emoji} ${category.title}: ${score}/100`);
  });

  // Core Web Vitals
  const audits = results.lhr.audits;
  console.log('\n📊 Core Web Vitals:');
  console.log('-'.repeat(30));
  
  if (audits['largest-contentful-paint']) {
    const lcp = audits['largest-contentful-paint'].displayValue;
    console.log(`🎨 Largest Contentful Paint: ${lcp}`);
  }
  
  if (audits['first-input-delay']) {
    const fid = audits['first-input-delay'].displayValue;
    console.log(`⚡ First Input Delay: ${fid}`);
  }
  
  if (audits['cumulative-layout-shift']) {
    const cls = audits['cumulative-layout-shift'].displayValue;
    console.log(`📏 Cumulative Layout Shift: ${cls}`);
  }

  // Opportunities
  console.log('\n🔧 Optimization Opportunities:');
  console.log('-'.repeat(40));
  
  const opportunities = Object.values(audits)
    .filter(audit => audit.scoreDisplayMode === 'numeric' && audit.score !== null && audit.score < 0.9)
    .sort((a, b) => a.score - b.score)
    .slice(0, 5);

  if (opportunities.length === 0) {
    console.log('🎉 No major optimization opportunities found!');
  } else {
    opportunities.forEach(audit => {
      const score = Math.round(audit.score * 100);
      console.log(`• ${audit.title}: ${score}/100`);
    });
  }

  // Performance grade
  const performanceScore = Math.round(categories.performance.score * 100);
  const grade = getPerformanceGrade(performanceScore);
  console.log(`\n🏆 Overall Performance Grade: ${grade}`);
  
  // Check if we met our target
  if (performanceScore >= 95) {
    console.log('🎯 TARGET ACHIEVED! Performance score 95+ reached!');
  } else if (performanceScore >= 90) {
    console.log('🔥 Great performance! Close to target of 95+');
  } else {
    console.log(`📈 Current: ${performanceScore}/100, Target: 95+/100`);
  }
}

function getScoreEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 70) return '🟡';
  return '🔴';
}

function getPerformanceGrade(score) {
  if (score >= 95) return 'A+';
  if (score >= 90) return 'A';
  if (score >= 85) return 'B+';
  if (score >= 80) return 'B';
  if (score >= 75) return 'C+';
  if (score >= 70) return 'C';
  return 'Needs Improvement';
}

// Run audit if called directly
if (require.main === module) {
  runLighthouseAudit();
}

module.exports = { runLighthouseAudit };