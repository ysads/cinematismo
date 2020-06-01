<template>
  <div class="thumb-vertical">
    <nuxt-link :to="post.slug">
      <img
        class="thumb-vertical__thumb"
        :src="post.featuredImage.sourceUrl"
      >

      <div class="thumb-vertical__info">
        <div class="thumb-vertical__title">
          {{ post.title }}
        </div>

        <div class="thumb-vertical__date">
          {{ post.createdAt }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ThumbVertical',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.thumb-vertical {
  &__thumb {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__title {
    @include margin(top, 2);

    transition: text-decoration 0.5s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  &__date {
    @include margin(top, 2);

    color: $gray-60;
    text-transform: uppercase;
  }
}
</style>
