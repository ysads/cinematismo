<template>
  <div class="grid-column">
    <thumb-over-right
      class="grid-column__main"
      :post="mainPost"
      with-excerpt
    />
    <div class="grid-column__container">
      <thumb-horizontal
        class="grid-column__post-item"
        v-for="post in secondaryPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import ThumbOverRight from '~/components/thumbs/thumb-over-right'
import ThumbHorizontal from '~/components/thumbs/thumb-horizontal'

export default {
  name: 'GridColumn',

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  components: {
    ThumbOverRight,
    ThumbHorizontal,
  },

  computed: {
    mainPost () {
      return this.posts[0]
    },

    secondaryPosts () {
      return this.posts.slice(1, 5);
    },
  },
}
</script>

<style lang="scss" scoped>
.grid-column {
  &__container {
    display: flex;
    flex-flow: column;
  }

  &__post-item {
    @include margin(top, 4);
  }
}
</style>
