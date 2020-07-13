<template>
  <ul
    class="categories"
    :class="{ 'categories--expanded': expanded }"
  >
    <li
      v-for="category in categories"
      :key="category.slug"
      class="categories__item"
      :class="{
        'categories__item--active': isSelected(category.slug)
      }"
      @click="$emit('chosen')"
    >
      <nuxt-link
        class="categories__item-link"
        :to="category.url"
      >
        {{ category.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },

  async fetch () {
    if (this.categories.length) return

    await this.getCategories()
  },

  computed: {
    ...mapGetters(['categories']),
  },

  methods: {
    ...mapActions(['getCategories']),

    isSelected (slug) {
      return this.$route.params.slug === slug
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  @include padding(left, 4);
  @include padding(right, 4);

  background: $gray-100;
  display: block;
  height: auto;
  left: 0;
  position: absolute;
  top: $navigation-height;
  transform: scaleY(0);
  transform-origin: top center;
  transition: 0.4s ease;
  width: 100%;
  z-index: 2;

  &--expanded {
    overflow: inherit;
    transform: scaleY(1);
  }

  @include breakpoint(lg) {
    display: flex;
    position: static;
    transform: scaleY(1);
    width: auto;
    background: none;
    overflow: inherit;
  }

  &__item {
    @extend %subtitle1;

    color: $gray-40;
    line-height: 50px;

    &-link {
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    &:hover {
      color: $white;
    }

    &--active {
      color: $white;
      background-image: linear-gradient(to right, $orange 0%, $orange 100%);
      background-size: 100% 0.3em;
      background-position: bottom;
      background-repeat: no-repeat;
    }

    @include breakpoint(lg) {
      @include padding(left, 1);
      @include padding(right, 1);
    }
  }

  &__item + &__item {
    @include breakpoint(lg) {
      margin-left: 0.5rem;
    }
  }
}
</style>
