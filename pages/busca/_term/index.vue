<template>
  <div class="search">
    <form
      class="search__form"
      @submit.prevent="handleSearch"
    >
      <input
        class="search__input"
        v-model="searchTerm"
        ref="searchInput"
      />
      <button class="search__button">
      </button>
    </form>

    <loading
      v-if="$fetchState.pending || loading"
      class="search__loading"
    />

    <div v-else>
      <div v-if="posts.data.length">
        <grid-three-by-two
          class="search__grid"
          :posts="posts.data.slice(0, 6)"
        />
        <google-ad
          class="search__ad"
          :slot-id="searchMidGridAd"
        />
        <grid-three-by-two
          class="search__grid"
          :posts="posts.data.slice(6, 13)"
        />
        <paginator
          class="search__pagination"
          :current-page="currentPage"
          :total-pages="posts.totalPages"
          :base-url="paginateUrl"
        />
      </div>

      <div
        v-else
        class="search__empty"
      >
        {{ $t('noResults') }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { CATEGORY_MID_GRID_AD } from '~/constants/ads'
import Loading from '~/components/loading'
import GoogleAd from '~/components/google-ad'
import GridThreeByTwo from '~/components/grids/grid-three-by-two'
import Paginator from '~/components/paginator'
import { capitalize } from '~/support/string-tools'

export default {
  components: {
    Loading,
    GoogleAd,
    GridThreeByTwo,
    Paginator,
  },

  async fetch () {
    await this.getPosts({
      per_page: 12,
      page: this.currentPage,
      search: this.searchTerm
    })
  },

  data () {
    return {
      title: 'default',
      searchMidGridAd: CATEGORY_MID_GRID_AD,
      searchTerm: capitalize(this.$route.params.term),
      loading: false,
    }
  },

  mounted () {
    this.$refs.searchInput.focus()
  },

  computed: {
    ...mapGetters([
      'posts',
    ]),

    currentPage () {
      return parseInt(this.$route.query.page) || 1
    },

    paginateUrl () {
      return `/busca/${this.searchTerm}`
    },
  },

  head () {
    return {
      title: `Cinematismo | ${this.searchTerm}`,
      meta: [
        {
          name: '',
          content: '',
        },
      ],
    }
  },

  methods: {
    ...mapActions(['getPosts']),

    async handleSearch () {
      this.loading = true
      this.$router.push(this.searchTerm)
      this.loading = false
    }
  },

  watch: {
    '$route.query': '$fetch'
  },
}
</script>

<style lang="scss" scoped>
.search {
  @include padding(left, 6);
  @include padding(right, 6);
  @include margin(top, 10);
  @include margin(bottom, 10);

  height: 100vh;

  &__loading {
    height: calc(100vh - 160px);
  }

  &__empty {
    @extend %h1;

    display: flex;
    color: $gray-40;
    height: 50vh;
    align-items: center;
    justify-content: center;
  }

  &__form {
    display: flex;
    border-bottom: $base solid $black;
  }

  &__input {
    @include padding(top, 2);
    @include padding(bottom, 2);

    @extend %h1;

    flex-grow: 2;
    width: calc(100% - #{$base * 16})
  }

  &__button {
    cursor: pointer;
    width: $base * 12;

    &:active {
      @include scale-85;
    }
  }

  &__title {
    @extend %h3;

    color: $gray-40;
    text-transform: uppercase;
  }

  &__ad {
    @include margin(top, 8);
    @include padding(top, 4);
    @include padding(bottom, 4);

    border-top: 2px solid $black;
    border-bottom: 2px solid $black;
  }

  &__grid {
    @include margin(top, 8);

    width: 100%;
  }

  &__pagination {
    @include margin(top, 8);
  }
}
</style>

<i18n>
{
  "pt-BR": {
    "yourSearch": "Buscar por: ",
    "noResults": "Sem resultados"
  }
}
</i18n>
