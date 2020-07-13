<template>
  <div>
    <section>
      <grid-one
        class="col-md-4 col-xs-12"
        :posts="posts"
      />
    </section>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import api from '@/api/index'
import GridOne from '@/components/grids/grid-one'

export default {
  components: {
    GridOne,
  },

  head () {
    return {
      title: 'Cinematismo | Notícias Cinematográficas',
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
