const fs = require('fs');
const { component, story, test, index } = require('./component_templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;
const testDir = `./src/components/${name}/_test_`;

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error('A component with that name already exists.');

// create the folder
fs.mkdirSync(dir);
fs.mkdirSync(testDir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${testDir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, index(name), writeFileErrorHandler);
