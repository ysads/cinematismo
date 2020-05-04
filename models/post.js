import { decodeHTML } from 'entities'

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
      console.log(this['wp:featuredmedia'])
      return this['_embedded']['wp:featuredmedia'][0]
    },
  }
}
