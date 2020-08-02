<template>
  <section class="section-split">
    <div class="section-split__left">
      <span class="section-split__title">
        {{ categoryLeft.name }}
      </span>
      <grid-column
        v-if="!$fetchState.pending"
        class="section-split__posts"
        :posts="postsLeft"
      />
    </div>

    <div class="section-split__right">
      <span class="section-split__title">
        {{ categoryRight.name }}
      </span>
      <div
        class="section-split__posts"
        v-if="!$fetchState.pending"
      >
        <thumb-vertical
          class="section-split__right__post"
          v-for="post in postsRight"
          :post="post"
          :key="post.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api/index'
import GridColumn from '~/components/grids/grid-column'
import ThumbVertical from '~/components/thumbs/thumb-vertical'

export default {
  props: {
    categoryLeft: {
      type: Object,
      required: true,
    },
    categoryRight: {
      type: Object,
      required: true,
    },
  },

  components: {
    GridColumn,
    ThumbVertical,
  },

  async fetch () {
    const [responseLeft, responseRight] = await Promise.all([
      api.getPosts({ categories: this.categoryLeft.id, per_page: 5 }),
      api.getPosts({ categories: this.categoryRight.id, per_page: 3 }),
    ])

    this.postsLeft = responseLeft.data
    this.postsRight = responseRight.data
  },

  data () {
    return {
      postsLeft: [],
      postsRight: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.section-split {
  display: flex;
  flex-flow: row wrap;

  &__title {
    @extend %h3;

    @include margin(right, 2);

    padding: $base * 2;
    background: $orange;
    color: $white;
  }

  &__left {
    width: 100%;

    @include breakpoint(md) {
      width: calc(100% * 2/3);
    }
  }

  &__right {
    @include padding(top, 6);

    @include breakpoint(md) {
      @include padding(top, 0);
      @include padding(left, 6);

      width: calc(100% * 1/3);
    }

    width: 100%;

    &__post + &__post {
      @include margin(top, 6);
    }
  }

  &__posts {
    @include margin(top, 6);

    width: 100%;
  }
}
</style>
