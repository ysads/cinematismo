import { decodeHTML } from 'entities'
import { sanitize } from '~/support/html-tools'

export const newImage = (data) => {
  return {
    ...data,
    sourceUrl: data.source_url,

    get caption () {
      return sanitize(data.caption.rendered)
    }
  }
}
