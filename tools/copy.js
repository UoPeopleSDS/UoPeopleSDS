import path from 'path';
import ncp from 'graceful-ncp';

/**
 * Copies all dependencies of Maltese to the output (build) folder.
 */
async function copy({ watch } = {}) {
  let basePath = path.join(__dirname, '..'); 
  console.log('Base Path located at ' + basePath);
  let targetPath = path.join(basePath, 'build'); 
  console.log('Target Path located at ' + targetPath);

  // Move the vendor folder
  console.log("Moving vendor folder and static files");
  let vendorPath = path.join(targetPath, 'vendor');
  //await ncp(path.join(basePath, 'app', 'vendor'), vendorPath);

  // Move the robots.txt file
  console.log("Moving the robots.txt file");
  let robotsFilePath = path.join(targetPath, "robots.txt");
  await ncp(path.join(basePath, "robots.txt"), robotsFilePath);
}

export default copy;