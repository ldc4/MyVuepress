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
    editLinks: true,
    editLinkText: '帮助Weedust改善此页面！',
    lastUpdated: '最后更新时间',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '规划', link: '/plan/' },
      { text: '手册', link: '/handbook/' },
    ],
    sidebar: {
      '/plan/': [
        {
          title: '规划',
          path: '/plan/',
        },
        {
          title: '2020年规划',
          path: '/plan/2020',
        }
      ],
      '/handbook': [
        {
          title: '手册',
          path: '/handbook/',
        },
        {
          title: 'Vue',
          path: '/handbook/vue/',
        },
        {
          title: 'Webpack',
          path: '/handbook/webpack/',
        }
      ]
    }
  },
}