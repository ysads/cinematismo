export const newCategory = (data) => {
  return {
    ...data,

    get url () {
      return `/categoria/${this.slug}`
    }
  }
}
