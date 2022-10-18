export const searchIndex = [
  {
    "title": "Links",
    "headers": [],
    "path": "/links/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Links"
  },
  {
    "title": "abcxyz",
    "subtitle": "abcxyz",
    "headers": [],
    "path": "/posts/abcxyz.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Post"
  },
  {
    "title": "Cách nhanh nhất để thành công",
    "subtitle": "Phương pháp thành công người giàu hay áp dụng",
    "headers": [],
    "path": "/posts/Cach-thanh-cong.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Post"
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "404"
  },
  {
    "title": "Tags",
    "headers": [],
    "path": "/tags/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  },
  {
    "title": "- Life | Tags",
    "headers": [],
    "path": "/tags/--life/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Life | Tags",
    "headers": [],
    "path": "/tags/life/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "Tags"
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/page/1/",
    "pathLocale": "/",
    "extraFields": [],
    "layout": "HomePage"
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
