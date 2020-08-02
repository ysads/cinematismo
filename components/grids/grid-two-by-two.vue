<template>
  <section class="grid-two-by-two">
    <span class="grid-two-by-two__title">
      {{ category.name }}
    </span>
    <div class="grid-two-by-two__container">
      <thumb-over-center
        class="grid-two-by-two__post"
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </section>
</template>

<script>
import api from '@/api/index'
import ThumbOverCenter from '~/components/thumbs/thumb-over-center'

export default {
  name: 'GridTwoByTwo',

  props: {
    category: {
      type: Object,
      required: true,
    },

    adTop: {
      type: String,
      default: null,
    },

    adBottom: {
      type: String,
      default: null,
    },
  },

  components: {
    ThumbOverCenter,
  },

  async fetch () {
    const response = await api.getPosts({ categories: this.category.id, per_page: 4 })
    this.posts = response.data
  },

  data () {
    return {
      posts: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.grid-two-by-two {
  &__ad {
    @include margin(top, 6);

    width: 100%;
  }

  &__title {
    @extend %h3;

    @include margin(right, 2);

    padding: $base * 2;
    background: $orange;
    color: $white;
  }

  &__container {
    @include margin(top, 6);

    display: flex;
    flex-flow: column;

    @include breakpoint(md) {
      flex-flow: row wrap;
    }
  }

  &__post {
    width: 100%;

    @include breakpoint(md) {
      width: 50%;
    }
  }
}
</style>
