import del from 'del';
import fs from './lib/fs';
import path from 'path';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
    await del(['.tmp', 'build/*', '!build/.git', 'docs/*'], { dot: true });
  
    // TODO: When server is activated this can be uncommented.
    // const targetPath = path.join(__dirname, '..', 'build'); 
    // await fs.makeDir(path.join(targetPath, 'public'));
}

export default clean;