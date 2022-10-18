import { defineUserConfig } from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar } from "./configs";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "description", content: "D Writing Space - Mình viết về chuyện học, trải nghiệm, crypto, sách, tiếng anh, lập trình...và một chút về kinh tế, đang tiếp cận indie hacker và digital nomad." }],
    ["meta", { name: "keywords", content: "D Writing Space" }],
    [
      "meta",
      { name: "author", content: "Quan Dat" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "D Writing Space",
      description: "D Writing Space"
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "VuePress Theme Gungnir",
    //   description: "VuePress 博客主题"
    // }
  },


  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),
  // configure default theme
  theme: gungnirTheme({
    repo: "DWSpace",
    docsDir: "docs",
    lastUpdated: true,
    // navbarTitle: "breadcrumb",
    hitokoto: "https://api.quotable.io/random", // enable random quote?
    
    // personal information
    personalInfo: {
      name: "D Writing Space",
      avatar: "/img/avatar.png",
      description: "Mình viết về chuyện học, trải nghiệm, crypto, sách, tiếng anh, lập trình...và một chút về kinh tế, đang tiếp cận indie hacker và digital nomad.",
      sns: {
        github: "DWSpace",
        linkedin: "#",
        facebook: "dattq49",
        twitter: "#",
        // zhihu: "chao-neng-gui-su",
        email: "dat10165@gmail.com",
        rss: "/rss.xml",
        // customized sns
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

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,
        // sidebar

      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbar.zh,
        // sidebar

        // i18n
        ...i18n.zh
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // katex: true,
      // mermaid: true,
      chartjs: true,
      // giscus: {
      //   repo: "This-is-an-Apple/gitalk-comments",
      //   repoId: "MDEwOlJlcG9zaXRvcnkyMTA1MjQyMTQ=",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDODIxYNs4CAO1u",
      //   lazyLoad: true
      // },
      mdPlus: {
        all: true
      },
      // ga: "G-EE8M2S3MPB",
      // ba: "10b7bc420625758a319d6b23aed4700f",
      rss: {
        siteURL: "https://dwriting.space",
        title: "D Writing Space's blog",
        description: "A blog maked by Quan Dat",
        copyright: "DWSpace 2022"
      },
      pwa: true,
      search: true // use @vuepress/plugin-docsearch instead
    },

    footer: `
      Hello, here the <a href="https://github.com/DWSpace" target="_blank">D Writing Space!</a> Since 2022
      <br>
      <a href="/rss.xml" target="_blank">RSS Feed</a> |
      <a href="#" target="_blank">Sitemap</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    }
  },

  // plugins: [
  //   docsearchPlugin({
  //     appId: "3DDLGP0IG4",
  //     apiKey: "6556adaa82b31485309b440a525f264a",
  //     indexName: "v2-vuepress-theme-gungnir",
  //     locales: {
  //       "/zh/": {
  //         placeholder: "搜索文档",
  //         translations: {
  //           button: {
  //             buttonText: "搜索文档",
  //             buttonAriaLabel: "搜索文档"
  //           },
  //           modal: {
  //             searchBox: {
  //               resetButtonTitle: "清除查询条件",
  //               resetButtonAriaLabel: "清除查询条件",
  //               cancelButtonText: "取消",
  //               cancelButtonAriaLabel: "取消"
  //             },
  //             startScreen: {
  //               recentSearchesTitle: "搜索历史",
  //               noRecentSearchesText: "没有搜索历史",
  //               saveRecentSearchButtonTitle: "保存至搜索历史",
  //               removeRecentSearchButtonTitle: "从搜索历史中移除",
  //               favoriteSearchesTitle: "收藏",
  //               removeFavoriteSearchButtonTitle: "从收藏中移除"
  //             },
  //             errorScreen: {
  //               titleText: "无法获取结果",
  //               helpText: "你可能需要检查你的网络连接"
  //             },
  //             footer: {
  //               selectText: "选择",
  //               navigateText: "切换",
  //               closeText: "关闭",
  //               searchByText: "搜索提供者"
  //             },
  //             noResultsScreen: {
  //               noResultsText: "无法找到相关结果",
  //               suggestedQueryText: "你可以尝试查询",
  //               reportMissingResultsText: "你认为该查询应该有结果？",
  //               reportMissingResultsLinkText: "点击反馈"
  //             }
  //           }
  //         }
  //       }
  //     }
  //   })
  // ]
});
