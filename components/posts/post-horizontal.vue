<template>
  <div class="post-horizontal row">
    <div class="post-horizontal__thumb col-xs-5">
      <img :src="post.featuredImage.sourceUrl" />
    </div>

    <div class="post-horizontal__info col-xs-7">
      <div class="post-horizontal__tag">
        Filmes
      </div>

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
export default {
  name: 'PostHorizontal',

  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.post-horizontal {
  display: flex;

  &__info {
    @include padding(left, 4);
  }

  &__tag {
    @extend %medium;

    color: $orange;
    text-transform: uppercase;
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
