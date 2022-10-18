export const data = JSON.parse("{\"key\":\"v-7d4d21a6\",\"path\":\"/posts/abcxyz.html\",\"title\":\"abcxyz\",\"lang\":\"en-US\",\"frontmatter\":{\"useHeaderImage\":true,\"layout\":\"Post\",\"title\":\"abcxyz\",\"subtitle\":\"abcxyz\",\"author\":\"abcxyz\",\"date\":\"2022-10-16 22:00:00 +0700\",\"headerImage\":\"\",\"headerMask\":\"\",\"catalog\":false,\"tags\":[\"- Life\"]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":1,\"words\":26},\"filePathRelative\":\"posts/abcxyz.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
