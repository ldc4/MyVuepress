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

// 获取顶部导航
function getNav() {
  return [
    { text: '首页', link: '/' },
    { text: '规划', link: '/plan/' },
    { text: '周刊', link: '/weekly/' },
    {
      text: '手册',
      items: [
        {
          text: '基础',
          items: [
            { text: 'Javascript', link: '/handbook/javascript/' },
            { text: 'Vue', link: '/handbook/vue/' },
          ]
        },
        {
          text: '工具',
          items: [
            { text: 'Linux', link: '/handbook/linux/' },
            { text: 'Webpack', link: '/handbook/webpack/' },
            { text: 'VS Code', link: '/handbook/vscode/' },
            { text: 'Mac', link: '/handbook/mac/' }
          ]
        },
      ]
    },
    { text: '博客', link: 'https://ldc4.github.io/blog/' },
    { text: '生态导航', link: 'https://ldc4.github.io/page/e-nav/'}
  ]
}

// 获取侧边导航
function getSidebar() {
  return {
    '/plan/': [
      '',
      '2020'
    ],
    '/handbook/javascript/': [
      {
        title: 'Javascript',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', '概览'],
          'basic',
          'performance'
        ]
      }
    ],
    '/handbook/linux/': [
      {
        title: 'Linux',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', '概览'],
          'basic'
        ]
      }
    ],
    '/handbook/mac/': [
      {
        title: 'Mac',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', '概览'],
          'shortcuts'
        ]
      }
    ],
    '/handbook/vscode/': [
      {
        title: 'VS Code',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', '概览'],
          'shortcuts'
        ]
      }
    ]
  }
}