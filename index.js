const editor = require("mem-fs-editor");
const memFs = require("mem-fs");

const { log } = console;
const fsCallback = () => log('success');
// To copy a folder or file, select overwrite accordingly
try {
  const store = memFs.create();
  const pwd = process.cwd();
  const fs = editor.create(store);

  fs.copy(`./env-template`, `${pwd}/env`);
  fs.commit(fsCallback);
} catch (err) {
  console.error(err);
}
