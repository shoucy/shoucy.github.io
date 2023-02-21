const { searchPlugin } = require('@vuepress/plugin-search')

const { gungnirTheme } = require("vuepress-theme-gungnir");

module.exports = {
  lang: 'zh-CN',
  title: 'ChengYu Shou',
  description: '改变带来改变',


  theme: gungnirTheme({
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "shoucy",
      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.png",
      // 必须：个人简介，将在首页显示
      description: "夢は人生です",
      sns: {
        email: "shouchengyu@outlook.com",
      }
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
      search: false,
      giscus: {
        repo: "shoucy/shoucy.github.io",  // 必须，string，格式：user_name/repo_name
        repoId: "MDEwOlJlcG9zaXRvcnkzNjczOTM2NDA=",  // 必须，string，在 Giscus 官网上生成
        category: "giscus",  // 必须，string
        categoryId: "DIC_kwDOFeX7aM4CSQy0",  // 必须，string，在 Giscus 官网上生成
        mapping: "pathname",  // 可选，string，default="title"
        lazyLoad: false,  // 可选，boolean，default=false（如果设为 true，Giscus 的加载将延迟到用户滚动到评论容器附近）
        // crossorigin: "[crossorigin]",  // 可选，string，default="anonymous"
        // theme: "[light 模式主题]",  // 可选，string，default="light"
        // darkTheme: "[dark 模式主题]"  // 可选，string，default="dark_dimmed"
      }
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