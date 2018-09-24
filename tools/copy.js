import path from 'path';
import ncp from 'graceful-ncp';
import { run as templateGen } from './templateGen';

/**
 * Copies all dependencies of Maltese to the output (build) folder.
 */
async function copy({ watch } = {}) {
  const basePath = path.join(__dirname, '..'); 
  console.log('Base Path located at ' + basePath);

  const targetPath = (process.env.NODE_ENV === 'production') ?
        path.join(basePath, 'docs')
      : path.join(basePath, 'build'); 
  console.log('Target Path located at ' + targetPath);

  // Move the robots.txt file
  console.log("Moving the robots.txt file");
  let robotsFilePath = path.join(targetPath, "robots.txt");
  await ncp(path.join(basePath, "robots.txt"), robotsFilePath);

  // Move the content resources
  console.log("Moving the content folder");
  let contentFolder = path.join(targetPath, 'content');
  await ncp(path.join(basePath, 'content'), contentFolder);

  // Generate the static files
  // Note: basePath parameter is actually the targetPath in this context.
  console.log('Executing the Template Generator');
  templateGen(targetPath);
}

export default copy;