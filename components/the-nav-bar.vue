<template>
  <div class="nav">
    <search-modal
      class="nav__search"
      v-if="searchBarOpen"
      @close="toggleSearchBar"
    />

    <div class="nav__wrapper">
      <hamburger
        class="nav__hamburger"
        :open="hamburgerOpen"
        @click="toggleMobile"
      />
      <nuxt-link to="/">
        <logo-black-white class="nav__logo" />
      </nuxt-link>
      <categories
        :expanded="hamburgerOpen"
        @chosen="toggleMobile"
      />
      <icn-search
        class="nav__search-icon"
        @click="toggleSearchBar"
      />
    </div>
  </div>
</template>

<script>
import Categories from '~/components/nav/categories'
import Hamburger from '~/components/nav/hamburger'
import IcnSearch from '~/assets/images/search.svg'
import LogoBlackWhite from '~/assets/logo_pb.svg'
import SearchModal from '~/components/search-modal'


export default {
  name: 'TheNavBar',

  components: {
    Categories,
    Hamburger,
    IcnSearch,
    LogoBlackWhite,
    SearchModal,
  },

  data () {
    return {
      hamburgerOpen: false,
      searchBarOpen: false,
    }
  },

  methods: {
    toggleMobile () {
      this.hamburgerOpen = !this.hamburgerOpen
    },

    toggleSearchBar () {
      this.searchBarOpen = !this.searchBarOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  background: $black;
  width: 100%;
  height: $navigation-height;

  &__wrapper {
    @include padding(left, 6);
    @include padding(right, 6);

    max-width: $max-width;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__hamburger {
    @include breakpoint(lg) {
      display: none !important;
    }
  }

  &__logo {
    width: 130px;
    height: auto;
  }

  &__search {
    @include transition(opacity, 0.8s);

    &-icon {
      fill: $gray-40;
      height: $base * 6;
      width: $base * 6;
      cursor: pointer;

      &:active {
        @include scale-85;
      }
      &:hover {
        fill: $white;
      }
    }
  }
}
</style>
