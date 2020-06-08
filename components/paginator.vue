<template>
  <div class="paginator">
    <div
      class="paginator__text link"
      :class="{
        'invisible': !hasPrev
      }"
    >
      <nuxt-link :to="prevLink">
        {{ $t(`${langPath}.prev`) }}
      </nuxt-link>
    </div>

    <div class="paginator__text ">
      {{ `${currentPage} / ${totalPages}` }}
    </div>

    <div
      class="paginator__text link"
      :class="{
        'invisible': !hasNext
      }">
      <nuxt-link :to="nextLink">
        {{ $t(`${langPath}.next`) }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paginator',

  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    baseUrl: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      langPath: __langpath,
    }
  },

  computed: {
    hasPrev () {
      return this.currentPage !== 1
    },

    hasNext () {
      return this.currentPage !== this.totalPages
    },

    prevLink () {
      return `${this.baseUrl}?page=${this.currentPage - 1}`
    },

    nextLink () {
      return `${this.baseUrl}?page=${this.currentPage + 1}`
    },
  },
}
</script>

<style lang="scss" scoped>
.paginator {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  @include breakpoint(md) {
    width: 50%;
  }

  .paginator__text {
    @extend %h3;

    @include margin(top, 2);

    text-align: center;

    &.link {
      &:hover {
        @include transition(color);

        color: $gray-60;
      }
    }
    &.invisible {
      visibility: hidden;
    }
  }
}
</style>
