const getNav = require('./topNav');
const getSidebar = require('./sideNav');

module.exports = {
  title: 'LDC4',
  description: 'weedust\'s docs',
  base: '/docs/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    repo: "ldc4/MyVuepress",
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助Weedust改善此页面！',
    lastUpdated: '最后更新时间',
    smoothScroll: true,
    nav: getNav(),
    sidebar: getSidebar()
  },
}
