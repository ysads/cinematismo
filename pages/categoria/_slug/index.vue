<template>
  <div class="category">
    <span class="category__title">
      {{ category.name }}
    </span>

    <loading v-if="$fetchState.pending" />
    <div v-else>
      <post-grid class="category__grid" :posts="posts.data.slice(0, 6)" />
      <div>part 2</div>
      <post-grid class="category__grid" :posts="posts.data.slice(6, 13)" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostGrid from '~/components/post-grid'
import Loading from '~/components/loading'

export default {
  components: {
    PostGrid,
    Loading
  },

  async fetch () {
    await this.getPosts({ categories: this.category.id, per_page: 12 })
  },

  data () {
    return {
      title: 'default',
    }
  },
  
  computed: {
    ...mapGetters([
      'posts',
      'categories',
    ]),

    category () {
      return this.categories.find(c => c.slug === this.$route.params.slug)
    },
  },
  
  mounted () {
  },
  
  head () {
    return {
      title: `Cinematismo | ${this.category.name}`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.',
        },
      ],
    }
  },

  methods: {
    ...mapActions(['getPosts']),
  }
}
</script>

<style lang="scss" scoped>
.category {
  @include padding(left, 6);
  @include padding(right, 6);
  @include margin(top, 10);
  @include margin(bottom, 10);

  &__title {
    @extend %h2;

    background: $orange;
    color: $white;
    padding: 2 * $base;
  }

  &__line {
    @include margin(top, 5);

    width: 100%;
    border-bottom: 2px solid $gray-80;
  }

  &__grid {
    @include margin(top, 8);

    width: 100%;
  }
}
</style>
