export const page = state => state.page
export const posts = state => state.posts
export const post = state => state.post
export const categories = state => state.categories
export const categoriesById = (state) => {
  return (filteredIds) => {
    return state.categories.filter(c => filteredIds.includes(c.id))
  }
}
