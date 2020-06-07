<template>
  <div class="post-grid">
    <thumb-grid
      class="post-grid__item"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>


<script>
import ThumbGrid from '~/components/thumbs/thumb-grid'

export default {
  name: 'PostGrid',

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  components: {
    ThumbGrid,
  },
}
</script>

<style lang="scss" scoped>
.post-grid {
  display: flex;
  flex-flow: row wrap;

  &__item {
    width: 100%;

    @include breakpoint(md) {
      width: 33.3333333%;
    }
  }
}
</style>