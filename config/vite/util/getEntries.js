const glob = require("glob");
const path = require("path");

function entryName(RootPath, filePath) {
  console.log(RootPath, filePath);
  const dirName = filePath.replace(RootPath, "").replace(path.basename(filePath), "");
  const name = `${dirName}${path.basename(filePath, path.extname(filePath))}`;
  return name;
}

/**
 * 指定したentryのルートディレクトリ配下のjsまたはtsファイルのファイル名とパスのobjectを取得
 * 例)
 *  - /entries/foo.ts => { foo: "/entries/foo.ts" }
 *  - /entries/bars/bar.ts => { "bars/bar": "/entries/bars/bar.ts" }
 * @param {string} entryRoot entryのルートディレクトリ
 */
module.exports = function getEntries(entryRoot) {
  const result = {};
  const filePaths = glob.sync(`${entryRoot}/**/*.{js,ts,html}`);
  filePaths.forEach((filePath) => {
    result[entryName(entryRoot, filePath)] = filePath;
  });
  return result;
};
