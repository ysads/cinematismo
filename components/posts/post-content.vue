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

<style lang="scss">
.post-content {
  @extend %body-text2;

  figure {
    width: 100% !important;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }

    figcaption {
      @extend %caption;

      @include margin(top, 1);
      @include margin(bottom, 7);
    }
  }

  p {
    @include margin(bottom, 7);
  }

  h3 {
    @extend %h3;

    @include margin(bottom, 7);
  }

  ul {
    list-style: none;

    li {
      @include margin(bottom, 2);

      &::before {
        @include margin(right, 2);

        @extend %h4;

        color: $orange;
        content: "■ ";
      }
    }
  }

  ol {
    list-style: none;
    counter-reset: post-content-ol-counter;

    li {
      @include margin(bottom, 2);

      counter-increment: post-content-ol-counter;

      &::before {
        @include margin(right, 2);

        @extend %h4;

        content: counter(post-content-ol-counter) ".";
      }
    }
  }
}
</style>
