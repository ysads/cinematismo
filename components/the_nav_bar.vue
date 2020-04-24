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
    <ul
      class="nav__menu"
      :class="{
        'nav__menu--opened': hamburgerOpened
      }"
    >
      <li
        class="nav__menu-item"
        v-for="category in categories"
        :key="category.slug"
      >
        <nuxt-link :to="slugToUrl(category.slug)">
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavBar',

  data () {
    return {
      hamburgerOpened: false
    }
  },

  computed: {
    ...mapGetters(['categories'])
  },

  mounted () {
    if (!this.categories.length) {
      this.$store.dispatch('getCategories')
    }
  },

  methods: {
    slugToUrl (slug) {
      return `/category/${slug}`
    },

    toggleMobile () {
      this.hamburgerOpened = !this.hamburgerOpened
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: $base*2 $base*4;
  background: $orange;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  @include breakpoint(lg) {
    padding: 0;
  }

  &__menu-item {
    @include padding(left, 6);
    @include padding(right, 6);

    @extend %subtitle1;

    text-transform: uppercase;
    color: $white;
    line-height: 50px;
    transition: all 0.5s ease;

    &:hover {
      background: rgba($white, 0.2);
    }
  }

  &__menu-item + &__menu-item {
    border-left: 1px solid rgba($white, 0.2);
  }

  &__menu {
    border-top: 1px solid $gray-10;
    background: $gray-100;
    display: block;
    height: auto;
    left: 0;
    position: absolute;
    top: 220px;
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
    &__hamburger { display: none; }
    &__menu {
      height: 100%;
      overflow: inherit;
      position: static;
    }
  }
}
</style>
