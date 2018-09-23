const fs = require('fs');
const path = require('path');

/**
 * Generates the necessary template files for GitHub pages 
 * based on what we define.
 */

const templates = [
    {
        title: "UoPeopleSDS",
        description: "",
        keywords: "",
        fileName: "index.html"
    },
    {
        title: "Contact Us",
        description: "",
        keywords: "",
        fileName: "contact-us.html"
    }
];

/**
 * Runs the template generator placing generated files in the
 * specified base path provided.
 * @param {String} basePath 
 */
function run(basePath) {
    // Load up the template file.
    const templateFilePath = path.join(__dirname, '..', 'templates', 'base.template.html');
    const templateFileContents = fs.readFileSync(templateFilePath);

    templates.forEach((element) => {
        const targetPath = path.join(basePath, element.fileName);
        const targetFileContents = templateFileContents
            .toString()
            .replace("{{DESCRIPTION}}", element.description) 
            .replace("{{KEYWORDS}}", element.keywords)
            .replace("{{TITLE}}", element.title);

        fs.writeFile(targetPath, targetFileContents, null, (err) => {
            if (!err) {
                console.log(`Finished creating file: ${element.fileName}.`);
            } else {
                console.log(`ERROR: Could not write file ${element.fileName}.`);
                console.log(err);
            }
        });
    });
}

module.exports = {
    run,
    templates
}