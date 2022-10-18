export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"- Life":{"path":"/tags/--life/","keys":["v-7d4d21a6"]},"Life":{"path":"/tags/life/","keys":["v-a6f7b90e"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
