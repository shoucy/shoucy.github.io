module.exports = {
  lang: 'zh-CN',
  title: 'Ideal',
  description: '希望这个博客见证我成为更好的人',

  themeConfig: {
    logo: '/favicon.ico',
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        maxSuggestions: 10,
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
}