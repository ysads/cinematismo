<template>
  <div class="category">
    <span class="category__title">
      {{ category.name }}
    </span>

    <loading v-if="$fetchState.pending" />
    <div v-else>
      <grid-one
        class="category__grid"
        :posts="posts.data.slice(0, 6)"
      />
      <google-ad
        class="category__ad"
        :slot-id="CATEGORY_MID_GRID_AD"
      />
      <grid-one
        class="category__grid"
        :posts="posts.data.slice(6, 13)"
      />
      <paginator
        class="category__pagination"
        :current-page="currentPage"
        :total-pages="posts.totalPages"
        :base-url="paginateUrl"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GridOne from '~/components/grids/grid-one'
import Loading from '~/components/loading'
import GoogleAd from '~/components/google-ad'
import Paginator from '~/components/paginator'
import { CATEGORY_MID_GRID_AD } from '~/constants/ads'

export default {
  components: {
    GridOne,
    Loading,
    GoogleAd,
    Paginator,
  },

  async fetch () {
    console.log('query')
    await this.getPosts({
      categories: this.category.id,
      per_page: 12,
      page: this.currentPage

    })
    console.log("slot id", CATEGORY_MID_GRID_AD)
  },

  data () {
    return {
      title: 'default',
    }
  },

  computed: {
    ...mapGetters([
      'posts',
      'categories',
    ]),

    category () {
      return this.categories.find(c => c.slug === this.$route.params.slug)
    },

    currentPage () {
      return parseInt(this.$route.query.page) || 1
    },

    paginateUrl () {
      return `/categoria/${this.$route.params.slug}`
    },
  },

  head () {
    return {
      title: `Cinematismo | ${this.category.name}`,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.',
        },
      ],
    }
  },

  methods: {
    ...mapActions(['getPosts']),
  },

  watch: {
    '$route.query': '$fetch'
  },
}
</script>

<style lang="scss" scoped>
.category {
  @include padding(left, 6);
  @include padding(right, 6);
  @include margin(top, 10);
  @include margin(bottom, 10);

  &__title {
    @extend %h2;

    background: $orange;
    color: $white;
    padding: 2 * $base;
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
