<template>
  <div class="thumb-through">
    <nuxt-link :to="`/${post.slug}`">
      <img
        class="thumb-through__thumb"
        :src="post.featuredImage.sourceUrl"
      >

      <div class="thumb-through__info">
        <div class="thumb-through__title">
          {{ post.title }}
        </div>

        <div class="thumb-through__lead">
          {{ post.excerpt }}
        </div>

        <div class="thumb-through__date">
          {{ post.createdAt }}
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ThumbGrid',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.thumb-through {
  &__thumb {
    width: 100%;
    object-fit: cover;

    @include breakpoint(md) {
      height: 250px;
    }
  }

  &__info {
    margin: -$base * 10 $base * 5 $base * 5;
    padding: $base * 6;
    position: relative;
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

  &__date {
    @include margin(top, 2);

    color: $gray-60;
    text-transform: uppercase;
  }
}
</style>
