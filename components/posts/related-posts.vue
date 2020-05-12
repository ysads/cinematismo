<template>
  <div class="related-posts row">
    <h4 class="related-posts__title col-xs-12">
      {{ $t(`${langPath}.title`) }}
    </h4>

    <post-vertical
      class="related-posts__item col-md-3"
      v-for="id in [1, 2, 3, 4]"
      :key="id"
    />
  </div>
</template>

<script>
import PostVertical from '~/components/posts/post-vertical'

export default {
  name: 'RelatedPosts',

  components: {
    PostVertical
  },

  data () {
    return {
      langPath: __langpath,
    }
  }
}
</script>

<style lang="scss" scoped>
.related-posts {
  &__title {
    @extend %h4;
  }

  &__item {
    @include breakpoint(md) {
      @include margin(top, 2);
    }
  }

  &__item + &__item {
    @include breakpoint(md) {
      @include padding(left, 2);
    }
  }
}
</style>
