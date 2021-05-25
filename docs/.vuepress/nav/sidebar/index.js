const path = require('path');
const fs = require('fs');

const cwd = process.cwd();
const jsonDir = path.join(cwd, 'docs/.vuepress/nav/sidebar');

// 获取当前目录下的所有配置文件
const files = fs.readdirSync(jsonDir);

let sidebarConfig = {};
files.forEach((file) => {
  if (file === 'index.js') {
    return;
  }
  const data = fs.readFileSync(path.join(jsonDir, file), 'utf8');
  const config = JSON.parse(data);
  sidebarConfig = {
    ...sidebarConfig,
    ...config,
  }
});

module.exports = sidebarConfig;