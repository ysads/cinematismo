import request from 'axios'
import { newPost } from '~/models/post'
import { newCategory } from '~/models/category'

export default {
  baseUrl: `${process.env.NUXT_ENV_WORDPRESS_API_URL}/wp-json/wp/v2/`,

  getPage (slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl
      request.get(`pages?slug=${slug}`).then(response => {
        const data = [...response.data][0]
        if (response.status === 200 && response.data.length > 0) {
          const filtered = {
            content: data.content.rendered,
            author: data.author,
            date: data.date,
            date_gmt: data.date_gmt,
            excerpt: data.excerpt.rendered,
            featured_media: data.featured_media,
            guid: data.guid.rendered,
            link: data.link,
            slug: data.slug,
            title: data.title.rendered,
          }
          resolve(filtered)
        } else {
          reject(response)
        }
      })
    })
  },

  getPost (slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl
      request.get(`posts?slug=${slug}&_embed`).then(response => {
        const data = [...response.data][0]

        if (response.status === 200 && response.data.length > 0) {
          resolve(newPost(data))
        } else {
          reject(response)
        }
      })
    })
  },

  getPosts (params = {}) {
    return new Promise((resolve, reject) => {
      const requestParams = {
        ...params,
        _embed: true,
      }

      request.defaults.baseURL = this.baseUrl
      request.get('posts?', { params: requestParams }).then(response => {
        const data = [...response.data]

        if (response.status === 200) {
          const filtered = {
            total: parseInt(response.headers['x-wp-total']),
            totalPages: parseInt(response.headers['x-wp-totalpages']),
            data: data.map(post => newPost(post)),
          }
          resolve(filtered)
        } else {
          reject(response)
        }
      })
    })
  },

  getCategory (slug) {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl
      return request
        .get(`categories?slug=${slug}`)
        .then(response => {
          const data = [...response.data][0]
          if (response.status === 200) {
            return {
              id: data.id,
              name: data.name,
              slug: data.slug,
            }
          }
        })
        .then(category => {
          return request
            .get(`posts?categories=${category.id}`)
            .then(response => {
              const data = [...response.data]
              if (response.status === 200) {
                category.posts = data.map(item => ({
                  id: item.id,
                  title: item.title.rendered,
                  content: item.content.rendered,
                  excerpt: item.excerpt.rendered,
                  slug: item.slug,
                }))
                resolve(category)
              } else {
                reject(response)
              }
            })
        })
    })
  },

  getCategories () {
    return new Promise((resolve, reject) => {
      request.defaults.baseURL = this.baseUrl
      request.get('categories?hide_empty=true').then(response => {
        if (response.status === 200 && response.data.length > 0) {
          resolve(response.data.map(category => newCategory(category)))
        }
      })
    })
  },
}
