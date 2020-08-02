<template>
  <div class="search-modal">
    <div
      class="search-modal__overlay"
      @click="$emit('close')"
    />
    <form
      class="search-modal__form"
      @submit.prevent="searchPosts"
    >
      <div class="search-modal__group">
        <span class="search-modal__title">{{ $t('searchFor') }}</span>
        <icn-close
          class="search-modal__icon"
          @click="$emit('close')"
        />
      </div>
      <div class="search-modal__group underline">
        <input
          class="search-modal__input"
          v-model="searchTerm"
          ref="searchInput"
          @keyup.esc="$emit('close')"
        />
        <button>
          <icn-arrow-forward
            class="search-modal__icon"
            @click="searchPosts"
          />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import IcnArrowForward from '~/assets/images/icn-arrow-forward.svg'
import IcnClose from '~/assets/images/icn-close.svg'

export default {
  name: 'SearchModal',

  components: {
    IcnArrowForward,
    IcnClose,
  },

  data () {
    return {
      searchTerm: '',
    }
  },

  mounted () {
    this.$refs.searchInput.focus()
  },

  methods: {
    searchPosts () {
      this.$router.push({
        name: 'busca-term',
        params: {
          term: this.searchTerm,
        }
      })
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-modal {
  &__overlay {
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba($black, 0.75);
    overflow: hidden;
    z-index: 3;
  }

  &__form {
    $top-offset: $navigation-height + $base * 6;
    $modal-width: calc(100% - #{$base * 4 * 2});

    @include margin(left, 4);
    @include margin(right, 4);

    display: flex;
    flex-flow: column;
    position: fixed;
    top: $top-offset;
    left: 0;
    background: $white;
    padding: $base * 6;
    width: $modal-width;
    transition: all 0.5s ease;
    z-index: 4;

    @include breakpoint(md) {
      max-width: 600px;
      left: calc(50% - 300px);
      padding: $base * 10;
    }
  }

  &__group {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    @include margin(bottom, 10);

    @extend %h3;

    text-transform: uppercase;
    color: $gray-80;
  }

  &__input {
    @extend %h4;

    width: 80%;
    color: $black;
    flex-grow: 2;
    padding: $base * 2 0;
  }

  &__icon {
    fill: black;
    margin: 0 0 $base * 2 $base * 4;
    cursor: pointer;
    width: 25px;
    height: 25px;

    &:active {
      @include scale-85;
    }
  }
}

.underline {
  border-bottom: 1px solid $black;
}
</style>

<i18n>
{
  "pt-BR": {
    "searchFor": "Buscar por"
  }
}
</i18n>
