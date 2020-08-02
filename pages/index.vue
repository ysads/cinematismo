<template>
  <div class="home">
    <loading
      v-if="$fetchState.pending"
      class="home__loading"
    />
    <section v-else>
      <grid-asymmetric
        :posts="posts"
      />
      <section-within-ads
        class="home__section"
        :category="categoryBySlug('listas')"
      />
      <grid-two-by-two
        class="home__section"
        :category="categoryBySlug('reviews')"
      />
      <google-ad
        class="home__section"
        :slot-id="homeHorizOneAd"
      />
      <section-split
        class="home__section"
        :category-left="categoryBySlug('premiacoes')"
        :category-right="categoryBySlug('series')"
      />
      <google-ad
        class="home__section"
        :slot-id="homeHorizOneAd"
      />
      <grid-two-by-two
        class="home__section"
        :category="categoryBySlug('videos')"
      />
    </section>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import api from '@/api/index'
import Loading from '~/components/loading'
import GridAsymmetric from '~/components/grids/grid-asymmetric'
import GridTwoByTwo from '~/components/grids/grid-two-by-two'

import GoogleAd from '~/components/google-ad'
import SectionWithinAds from '~/components/home/section-within-ads'
import SectionSplit from '~/components/home/section-split'
import { HOME_HORIZ_ONE_AD } from '@/constants/ads'

export default {
  components: {
    Loading,
    GoogleAd,
    GridAsymmetric,
    SectionWithinAds,
    SectionSplit,
    GridTwoByTwo,
  },

  async fetch () {
    this.posts = await this.fetchPosts({ per_page: 12, page: 1 })
  },

  data () {
    return {
      homeHorizOneAd: HOME_HORIZ_ONE_AD,
      posts: [],
    }
  },

  computed: {
    ...mapGetters(['categories']),
  },

  head () {
    return {
      title: 'Cinematismo | Notícias Cinematográficas',
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.',
        },
      ],
    }
  },

  methods: {
    async fetchPosts(params) {
      const posts = await api.getPosts(params)
      return posts.data
    },

    categoryBySlug(slug) {
      return this.categories.find(c => slug === c.slug)
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  @include padding(left, 6);
  @include padding(right, 6);

  @include breakpoint(md) {
    padding: 0;
  }

  &__section {
    @include margin(top, 10);
    @include margin(bottom, 10);
  }
}
</style>
