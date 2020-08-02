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
      {{ post.excerpt }}
    </div>

    <div class="post__author">
      {{
        $t('author', { author: post.author.name, date: post.createdAt })
      }}
    </div>

    <hr width="100%">

    <div class="post__body row">
      <div class="col-md-8 col-xs-12">
        <img :src="featuredImage.sourceUrl">
        <div class="post__caption">
          {{ post.featuredImage.caption }}
        </div>

        <share-post
          class="post__share"
          :post="post"
        />

        <post-content
          class="post__content"
          :post="post"
        />
      </div>

      <recent-posts
        class="post__recent-list col-md-4 col-xs-12"
        :excluding-ids="[post.id]"
      />
    </div>

    <google-ad
      class="category__ad"
      :slot-id="postAfterTextAd"
    />

    <related-posts
      class="post__related-list"
      :tag-ids="post.tags"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { POST_AFTER_TEXT_AD } from '~/constants/ads'
import axios from 'axios'
import api from '~/api'
import GoogleAd from '~/components/google-ad'
import PostContent from '~/components/posts/post-content'
import RecentPosts from '~/components/posts/recent-posts'
import RelatedPosts from '~/components/posts/related-posts'
import SharePost from '~/components/posts/share-post'

export default {
  components: {
    GoogleAd,
    PostContent,
    RecentPosts,
    RelatedPosts,
    SharePost,
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
      postAfterTextAd: POST_AFTER_TEXT_AD,
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
  @include margin(bottom, 10);

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

  &__share {
    @include margin(top, 5);
    @include margin(bottom, 5);
    @include padding(top, 5);
    @include padding(bottom, 5);

    border-top: 1px solid $gray-20;
    border-bottom: 1px solid $gray-20;
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

    @include margin(top, 1);
  }

  &__body {
    @include margin(top, 5);

    display: flex;
    flex-flow: row wrap;
  }

  &__content {
    @include margin(top, 4);
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

<i18n>
{
  "pt-BR": {
    "author": "Por %{author} • %{date}"
  }
}
</i18n>
