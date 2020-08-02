<template>
  <div class="grid-three-by-two">
    <thumb-through
      class="grid-three-by-two__item"
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import ThumbThrough from '~/components/thumbs/thumb-through'

export default {
  name: 'GridOne',

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  components: {
    ThumbThrough,
  },
}
</script>

<style lang="scss" scoped>
.grid-three-by-two {
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
