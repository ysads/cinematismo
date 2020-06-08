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
    paginator: {
      prev: 'Anterior',
      next: 'Próximo',
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
