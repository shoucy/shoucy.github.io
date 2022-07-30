const { searchPlugin } = require('@vuepress/plugin-search')

const { gungnirTheme } = require("vuepress-theme-gungnir");

module.exports = {
  lang: 'zh-CN',
  title: 'Ideal',
  description: '改变带来改变',


  theme: gungnirTheme({
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "shoucy",
      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.png",
      // 必须：个人简介，将在首页显示
      description: "夢は人生です",
    },
    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],
    navbar:[
      {
        text: "首页",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "标签",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "链接",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: '笔记',
        link: '/docs/README.md',
        icon: 'ri-book-read-line'
      },
      {
        text: '书签',
        link: '/docs/navigation/README.md',
        icon: 'md-bookmarkborder'
      },
    ],
    hitokoto: true,
    themePlugins: {
      search: false
    },
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '吼哇朋友们，这是标签页',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },

      // 链接页配置
      links: {
        // 可选：链接页副标题
        subtitle: '吼哇朋友们，这是链接页',

        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    }
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10,
      isSearchable: (page) => !["Tags", "Links", "HomePage"].includes(page.frontmatter.layout)
    })
  ],
}