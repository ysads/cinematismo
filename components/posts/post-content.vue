<template>
  <div>
    <div
      class="post-content"
      v-html="post.content" />
  </div>
</template>

<script>
export default {
  name: 'PostContent',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.post-content {
  figure {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    @include margin(bottom, 2);
  }
}
</style>
