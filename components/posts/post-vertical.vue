<template>
  <div class="post-vertical">
    <nuxt-link :to="post.slug">
      <img
        class="post-vertical__thumb"
        :src="post.featuredImage.sourceUrl"
      >

      <div class="post-vertical__info">
        <div class="post-vertical__title">
          {{ post.title }}
        </div>

        <div class="post-vertical__date">
          {{ post.createdAt }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PostVertical',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.post-vertical {
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
