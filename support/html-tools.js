import sanitizeHtml from 'sanitize-html'

const allowedTags = ['ins']

export const sanitize = (data) => {
  return sanitizeHtml(data, { allowedTags: allowedTags })
}
