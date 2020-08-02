<template>
  <div class="thumb-over-center">
    <nuxt-link
      class="thumb-over-center__container"
      :to="`/${post.slug}`"
    >
      <img
        class="thumb-over-center__thumb"
        :src="post.featuredImage.sourceUrl"
      >

      <div class="thumb-over-center__info">
        <div class="thumb-over-center__title">
          {{ post.title }}
        </div>

        <div class="thumb-over-center__lead">
          {{ post.excerpt }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ThumbOverCenter',

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
.thumb-over-center {
  color: $white;

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
    @include margin(right, 6);
    @include margin(bottom, 6);

    @include transition(background);

    padding: $base * 6;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba($black, 0.75);
    z-index: 1;

    &:hover {
      background: rgba($black, 0.5);
    }
  }

  &__title {
    @extend %h6;
  }

  &__lead {
    @include margin(top, 2);
  }
}
</style>
