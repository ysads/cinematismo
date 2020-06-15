<template>
  <div class="grid-one">
    <thumb-grid
      class="grid-one__item"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import ThumbGrid from '~/components/thumbs/thumb-grid'

export default {
  name: 'GridOne',

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
.grid-one {
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
