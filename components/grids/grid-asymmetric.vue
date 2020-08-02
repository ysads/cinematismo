<template>
  <div class="grid-asymmetric">
    <thumb-over-right
      class="grid-asymmetric__main"
      :post="posts[0]"
      with-excerpt
    />
    <thumb-over-right
      class="grid-asymmetric__second"
      :post="posts[1]"
      with-excerpt
    />
    <thumb-over-right
      class="grid-asymmetric__third"
      :post="posts[2]"
      with-excerpt
    />
  </div>
</template>

<script>
import ThumbOverRight from '~/components/thumbs/thumb-over-right'

export default {
  name: 'GridTwo',

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  components: {
    ThumbOverRight,
  },
}
</script>

<style lang="scss" scoped>
.grid-asymmetric {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 300px);
  grid-template-areas:
    "main"
    "second"
    "third";

  @include breakpoint(md) {
    grid-template-columns: 66% auto;
    grid-template-rows: 300px 300px;
    grid-template-areas:
      "main second"
      "main third";
  }

  &__main {
    grid-area: main;
  }
  &__second {
    grid-area: second;
  }
  &__second {
    grid-area: third;
  }
}
</style>
