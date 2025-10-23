#!/usr/bin/env node
// Compatibility shim: some environments expect `node build.js`.
// This file forwards to build-optimized.js (the modern build script).

try {
  const { buildOptimized } = require('./build-optimized');

  if (typeof buildOptimized === 'function') {
    // Execute the build and forward exit code
    buildOptimized()
      .then(() => process.exit(0))
      .catch((err) => {
        console.error('Build (via build.js) failed:', err);
        process.exit(1);
      });
  } else {
    console.error('buildOptimized is not a function in build-optimized.js');
    process.exit(1);
  }
} catch (err) {
  console.error('Failed to require ./build-optimized.js. Ensure it exists and is valid.');
  console.error(err && err.stack ? err.stack : err);
  process.exit(1);
}
