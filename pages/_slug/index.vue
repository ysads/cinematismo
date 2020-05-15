<template>
  <div class="post">
    <span
      v-for="category in categories"
      class="post__category"
    >
      <nuxt-link :to="category.url">
        {{ category.name }}
      </nuxt-link>
    </span>

    <div class="post__title">
      {{ post.title }}
    </div>
    <div class="post__lead">
      {{ post.lead }}
    </div>

    <div class="post__author">
      {{
        $t(`${langPath}.author`, { author: post.author.name, date: post.createdAt })
      }}
    </div>

    <hr width="100%">

    <div class="post__body row">
      <div class="post__content col-md-8 col-xs-12">
        <img :src="featuredImage.sourceUrl">
        <div class="post__caption">
          {{ post.featuredImage.caption }}
        </div>
        <div
          class="post__text"
          v-html="post.content"
        />
      </div>

      <recent-posts
        class="post__recent-list col-md-4 col-xs-12"
        :excluding-ids="[post.id]"
      />
    </div>

    <related-posts
      class="post__related-list"
      :tag-ids="post.tags"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import api from '~/api'
import RecentPosts from '~/components/posts/recent-posts'
import RelatedPosts from '~/components/posts/related-posts'

export default {
  components: {
    RecentPosts,
    RelatedPosts,
  },

  async asyncData ({ params, store }) {
    const post = await api.getPost(params.slug)

    return {
      post: post,
    }
  },

  data () {
    return {
      post: null,
      langPath: __langpath,
    }
  },

  computed: {
    ...mapGetters(['categoriesById']),

    featuredImage () {
      return this.post.featuredImage
    },

    categories () {
      return this.categoriesById(this.post.categories)
    },
  },

  head () {
    return {
      title: this.post.title,
      meta: [
        {
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.post {
  @include padding(left, 6);
  @include padding(right, 6);
  @include margin(top, 10);

  &__category {
    @extend %subtitle1;

    @include margin(right, 2);
    padding: $base;

    background: $orange;
    color: $white;
  }

  &__title {
    @include margin(top, 5);

    @extend %h1;
  }

  &__lead {
    @extend %h4;
    @include margin(top, 5);
  }

  &__author {
    @extend %body-text1;
    @extend %medium;

    @include margin(top, 5);
    @include margin(bottom, 5);

    color: $gray-60;
    text-transform: uppercase;
  }

  &__caption {
    @extend %caption;

    @include margin(top, 1)

    color: $gray-60;
  }

  &__text {
    @extend %body-text1;

    @include margin(top, 4);

    p {
      @include margin(bottom, 2);
    }
  }

  &__body {
    @include margin(top, 5);

    display: flex;
    flex-flow: row wrap;
  }

  &__content {
    @extend %body-text1;
  }

  &__recent-list {
    @include breakpoint(md) {
      @include padding(left, 6);
    }
  }

  &__related-list {
    @include margin(top, 5);
  }
}
</style>
