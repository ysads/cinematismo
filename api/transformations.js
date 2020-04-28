import { decodeHTML } from 'entities'

export default {
  filteredPost (data) {
    return {
      content: data.content.rendered,
      author: data.author,
      date: data.date,
      date_gmt: data.date_gmt,
      excerpt: data.excerpt.rendered,
      featured_media: data.featured_media,
      guid: data.guid.rendered,
      link: data.link,
      slug: data.slug,
      title: decodeHTML(data.title.rendered),
    }
  },

  decodeHTML (data) {
    const transformedData = {}

    for (const prop in data) {
      transformedData[prop] = decodeHTML(data[prop])
    }

    return transformedData
  },
}
