import { decodeHTML } from 'entities'
import { newImage } from '~/models/image'
import moment from '~/support/moment'

export const newPost = (data) => {
  return {
    ...data,
    content: data.content.rendered,
    excerpt: data.excerpt.rendered,
    guid: data.guid.rendered,
    title: decodeHTML(data.title.rendered),

    featuredImageSized: function (size) {
      console.log(this.featuredImage.media_details.sizes[size])
    },

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
