import { decodeHTML } from 'entities'
import { newImage } from '~/models/image'
import moment from '~/support/moment'
import { sanitize } from '~/support/html-tools'

export const newPost = (data) => {
  return {
    ...data,
    content: data.content.rendered,
    excerpt: sanitize(decodeHTML(data.excerpt.rendered)),
    guid: data.guid.rendered,
    title: decodeHTML(data.title.rendered),

    get featuredImage () {
      return newImage(this._embedded['wp:featuredmedia'][0])
    },

    get author () {
      return this._embedded.author[0]
    },

    get createdAt () {
      return moment(this.date).format('DD MMM YYYY, HH:mm')
    },

    get url () {
      return `/${this.slug}`
    },
  }
}
