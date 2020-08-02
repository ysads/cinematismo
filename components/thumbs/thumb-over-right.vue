<template>
  <div class="thumb-over-right">
    <nuxt-link
      class="thumb-over-right__container"
      :to="`/${post.slug}`"
    >
      <img
        class="thumb-over-right__thumb"
        :src="post.featuredImage.sourceUrl"
      >

      <div class="thumb-over-right__info">
        <div class="thumb-over-right__title">
          {{ post.title }}
        </div>

        <div
          v-if="withExcerpt"
          class="thumb-over-right__lead"
        >
          {{ post.excerpt }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ThumbOverLeft',

  props: {
    post: {
      type: Object,
      required: true,
    },

    withExcerpt: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.thumb-over-right {
  &__container {
    display: block;
    position: relative;
    height: 100%;
  }

  &__thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    @include margin(left, 6);

    padding: $base * 6;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: $white;
    z-index: 1;
  }

  &__title {
    @extend %h6;

    @include transition(color);

    &:hover {
      color: $gray-60;
    }
  }

  &__lead {
    @include margin(top, 2);
  }
}
</style>
