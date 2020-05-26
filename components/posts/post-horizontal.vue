<template>
  <div class="post-horizontal">
    <div class="post-horizontal__thumb">
      <img :src="post.featuredImage.sourceUrl">
    </div>

    <div class="post-horizontal__info">
      <div class="post-horizontal__title">
        {{ post.title }}
      </div>

      <div class="post-horizontal__date">
        {{ post.createdAt }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostHorizontal',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.post-horizontal {
  display: flex;
  flex-flow: column;

  &__thumb {
    width: 100%;
  }

  &__title {
    @include margin(top, 1);
  }

  &__date {
    @include margin(top, 1);

    color: $gray-60;
    text-transform: uppercase;
  }
}
</style>
