import run from './run';
import clean from './clean';
import copy from './copy';
import bundle from './bundle';

process.env.NODE_ENV = 'production';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  console.log("CLEANING OUTPUT FOLDER");
  await run(clean);
  console.log("COPYING PROJECT FILES");
  await run(copy);
  console.log("STARTING WEBPACK AND BUNDLING SOURCE FILES");
  await run(bundle);
  console.log("BUILD COMPLETE!");
}

export default build;