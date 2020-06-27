<template>
  <div class="related-posts">
    <h4 class="related-posts__title">
      {{ $t('title') }}
    </h4>

    <hr width="25%">

    <div class="related-posts__grid">
      <thumb-vertical
        v-for="post in relatedPosts"
        :key="post.id"
        class="related-posts__item"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ThumbVertical from '~/components/thumbs/thumb-vertical'

export default {
  name: 'RelatedPosts',

  components: {
    ThumbVertical,
  },

  props: {
    tagIds: {
      type: Array,
      required: true,
    },
  },

  async fetch () {
    await this.getRelatedPosts(this.tagIds)
  },

  computed: {
    ...mapState(['relatedPosts']),
  },

  methods: {
    ...mapActions(['getRelatedPosts']),
  },
}
</script>

<style lang="scss" scoped>
.related-posts {
  border: 2px solid $gray-60;
  padding: $base * 8;

  &__title {
    @extend %h4;

    @include margin(bottom, 2);
  }

  &__grid {
    @include margin(top, 5);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas: ". ." ". .";

    @include breakpoint(md) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
    }
  }
}
</style>

<i18n>
{
  "pt-BR": {
    "title": "Matérias relacionadas"
  }
}
</i18n>
