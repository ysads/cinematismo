<template>
  <div>
    <nuxt-link :to="post.slug">
      <div class="thumb-horizontal row">
        <div class="thumb-horizontal__thumb col-xs-4">
          <img
            class="thumb-horizontal__thumb-img"
            :src="post.featuredImage.sourceUrl"
          >
        </div>

        <div class="thumb-horizontal__info col-xs-8">
          <div class="thumb-horizontal__title">
            {{ post.title }}
          </div>

          <div class="thumb-horizontal__date">
            {{ post.createdAt }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ThumbHorizontal',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.thumb-horizontal {
  &__thumb {
    width: 100%;

    &-img {
      height: 100px;
      object-fit: cover;
    }
  }

  &__title {
    transition: text-decoration 0.5s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  &__info {
    @include padding(left, 4);
  }

  &__date {
    @include margin(top, 1);

    color: $gray-60;
    text-transform: uppercase;
  }
}
</style>
