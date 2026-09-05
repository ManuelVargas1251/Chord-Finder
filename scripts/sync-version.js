const fs = require('fs');
const path = require('path');

const rootDirectory = path.resolve(__dirname, '..');
const packagePath = path.join(rootDirectory, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const version = packageJson.version;

const updateFile = (relativePath, pattern, replacement) => {
  const filePath = path.join(rootDirectory, relativePath);
  const contents = fs.readFileSync(filePath, 'utf8');

  if (!pattern.test(contents)) {
    throw new Error(`Could not find a version value in ${relativePath}`);
  }

  const updatedContents = contents.replace(pattern, replacement);

  if (contents !== updatedContents) {
    fs.writeFileSync(filePath, updatedContents);
  }
};

const badgeVersion = `Version-${version}-brightgreen.svg`;

updateFile(
  'readme.md',
  /Version-[0-9A-Za-z.-]+-brightgreen\.svg/,
  badgeVersion
);

updateFile(
  'index.html',
  /Version [0-9A-Za-z.-]+(?=<\/footer>)/,
  `Version ${version}`
);

packageJson.description = packageJson.description.replace(
  /Version-[0-9A-Za-z.-]+-brightgreen\.svg/,
  badgeVersion
);
fs.writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);