const fs = require("fs");
const path = require("path");

const targetDir = "./content/posts"; // 替换为你的目标目录
const targetString = "created"; // 替换为你要替换的字符
const replacementString = "date"; // 替换为替换后的字符

function replaceInFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`读取文件失败: ${filePath}`, err);
      return;
    }
    const result = data.replace(
      new RegExp(targetString, "g"),
      replacementString
    );
    fs.writeFile(filePath, result, "utf8", (err) => {
      if (err) {
        console.error(`写入文件失败: ${filePath}`, err);
      } else {
        console.log(`已更新文件: ${filePath}`);
      }
    });
  });
}

function readDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`读取目录失败: ${dir}`, err);
      return;
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`获取文件状态失败: ${filePath}`, err);
          return;
        }
        if (stat.isDirectory()) {
          readDirectory(filePath); // 递归读取子目录
        } else if (
          path.extname(file) === ".mdx" ||
          path.extname(file) === ".md"
        ) {
          replaceInFile(filePath); // 替换文件内容
        }
      });
    });
  });
}

readDirectory(targetDir);
