export default {
  components: {
    posts: {
      'recent-posts': {
        title: 'Matérias recentes',
      },
      'related-posts': {
        title: 'Matérias relacionadas',
      },
    },
  },
  pages: {
    _slug: {
      index: {
        author: 'Por %{author} • %{date}',
      },
    },
  },
}
