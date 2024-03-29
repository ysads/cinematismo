import api from '../api/index'

export const getRecentPosts = async ({ commit }, excludingIds = []) => {
  const response = await api.getPosts({
    per_page: 4,
    excluding: excludingIds,
  })

  commit('SET_RECENT_POSTS', response.data)
}

export const getRelatedPosts = async ({ commit }, tagIds) => {
  const response = await api.getPosts({
    per_page: 4,
    tags: tagIds.join(','),
  })

  commit('SET_RELATED_POSTS', response.data)
}

export const getPage = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPage(slug).then(
      response => {
        commit('PAGE', response)
        resolve(response)
      },
      response => {
        reject(response)
      },
    )
  })
}

export const getPost = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPost(slug).then(
      response => {
        commit('POST', response)
        resolve(response)
      },
      response => {
        reject(response)
      },
    )
  })
}

export const getPosts = ({ commit, state }, params = {}) => {
  return new Promise((resolve, reject) => {
    api.getPosts(params).then(
      response => {
        commit('POSTS', response)
        resolve(response)
      },
      response => {
        reject(response)
      },
    )
  })
}

export const getCategory = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getCategory(slug).then(
      response => {
        commit('CATEGORY', response)
        resolve(response)
      },
      response => {
        reject(response)
      },
    )
  })
}

export const getCategories = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    api.getCategories().then(
      response => {
        commit('CATEGORIES', response)
        resolve(response)
      },
      response => {
        reject(response)
      },
    )
  })
}
