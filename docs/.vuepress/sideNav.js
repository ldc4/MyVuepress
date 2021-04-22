
const plan = {
  '/plan/': [
    '',
    '2020',
    '2021'
  ]
}

const javascript = {
  '/handbook/javascript/': [
    {
      title: 'Javascript',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
        'basic',
        'performance',
      ]
    },
    {
      title: '书籍',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        'book1',
      ]
    },
  ]
}

const linux = {
  '/handbook/linux/': [
    {
      title: 'Linux',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
        'basic',
        'config',
      ]
    }
  ]
}

const mac = {
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
}

const vscode = {
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

const nodejs = {
  '/handbook/nodejs/': [
    {
      title: 'NodeJS',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
        'basic'
      ]
    }
  ]
}

const html = {
  '/handbook/html/': [
    {
      title: 'HTML',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
        'form'
      ]
    }
  ]
}

const css = {
  '/handbook/css/': [
    {
      title: 'CSS',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
      ]
    }
  ]
}

const vue = {
  '/handbook/vue/': [
    {
      title: 'Vue',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
      ]
    }
  ]
}

const mongodb = {
  '/handbook/mongodb/': [
    {
      title: 'MongoDB',
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', '概览'],
        'basic'
      ]
    }
  ]
}


// 获取侧边导航
module.exports = function getSidebar() {
  return {
    ...plan,
    ...javascript,
    ...linux,
    ...mac,
    ...vscode,
    ...nodejs,
    ...html,
    ...css,
    ...vue,
    ...mongodb,
  }
}