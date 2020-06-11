<template>
  <div class="nav">
    <div
      class="nav__hamburger"
      :class="{
        'nav__hamburger--opened': hamburgerOpened
      }"
      @click="toggleMobile"
    >
      <span class="nav__hamburger-bar" />
      <span class="nav__hamburger-bar" />
      <span class="nav__hamburger-bar" />
    </div>

    <nuxt-link to="/">
      <img
        class="nav__logo"
        src="~assets/logo_pb.svg"
      >
    </nuxt-link>

    <ul
      class="nav__menu"
      :class="{
        'nav__menu--opened': hamburgerOpened
      }"
    >
      <li
        v-for="category in categories"
        :key="category.slug"
        class="nav__menu-item"
        :class="{
          'nav__menu-item--active': isSelected(category.slug)
        }"
        @click="toggleMobile"
      >
        <nuxt-link :to="category.url">
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>

    <i class="nav__search material-icons">search</i>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheNavBar',

  async fetch () {
    if (this.categories.length) return

    await this.getCategories()
  },

  data () {
    return {
      hamburgerOpened: false,
    }
  },

  computed: {
    ...mapGetters(['categories']),
  },

  methods: {
    ...mapActions(['getCategories']),

    toggleMobile () {
      this.hamburgerOpened = !this.hamburgerOpened
    },

    isSelected (categorySlug) {
      return this.$route.params.slug === categorySlug
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: $base * 4;
  background: $black;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: $navigation-height;

  @include breakpoint(lg) {
    @include padding(left, 9);
    @include padding(right, 9);
    height: auto;
  }

  &__logo {
    width: 130px;
  }

  &__search {
    color: $white;
    font-size: 24px;
  }

  &__menu-item {
    @extend %subtitle1;

    color: $white;
    line-height: 50px;

    &:hover {
      background-image: linear-gradient(to right, $orange 0%, $orange 100%);
      background-size: 100% 0.3em;
      background-position: bottom;
      background-repeat: no-repeat;
    }
    &--active {
      background-image: linear-gradient(to right, $orange 0%, $orange 100%);
      background-size: 100% 0.3em;
      background-position: bottom;
      background-repeat: no-repeat;
    }
  }

  &__menu {
    @include padding(left, 4);
    @include padding(right, 4);

    border-top: 1px solid $gray-10;
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
    z-index: 10;

    &--opened {
      overflow: inherit;
      transform: scaleY(1);
    }

    @include breakpoint(lg) {
      border-top: 0;
      box-shadow: none;
      display: flex;
      height: 100%;
      left: auto;
      padding: 0;
      position: static;
      transform: scaleY(1);
      width: auto;
      background: none;
    }
  }

  &__hamburger {
    $hamburgerclass: &;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    transition: all 0.4s ease;

    &-bar {
      background: $white;
      border-radius: 0.125em;
      content: '';
      display: inline-block;
      height: $base/2;
      margin: $base/2;
      position: relative;
      transition: all 0.4s ease;
      width: 5*$base;
    }

    &--opened {
      #{ $hamburgerclass }-bar {
        &:nth-child(1) {
          transform: rotate(225deg) translate(-5px, -5px);
        }
        &:nth-child(2) {
          transform: scale(0);
        }
        &:nth-child(3) {
          transform: rotate(135deg) translate(-4px, 3px);
        }
      }
    }
  }

  @include breakpoint(lg) {
    &__hamburger {
      display: none;
    }

    &__menu {
      height: 100%;
      overflow: inherit;
      position: static;
    }

    &__menu-item {
      @include padding(left, 1);
      @include padding(right, 1);
    }

    &__menu-item + &__menu-item {
      margin-left: 0.3em;
    }
  }
}
</style>
