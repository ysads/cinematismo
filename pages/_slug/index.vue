<template>
  <div class="post">
    <div class="tag">
      {{ post.category }}
    </div>
    <div class="post__title">
      {{ post.title }}
    </div>

    <div class="post__lead">
      {{ post.lead }}
    </div>

    <hr width="75%" />

    <div class="post__body">
      <div class="post__content">
        <div class="post__image">
          <img :src="featuredImage.source_url" />
        </div>
        <div v-html="post.content" />
      </div>

      <aside class="post__related">
        Posts recentes
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import api from '~/api'

export default {
  async asyncData ({ params, store }) {
    // We can use async/await ES6 feature
    // const { data } = await axios.get(
    //   config.baseUrl + `posts?slug=${params.slug}`,
    // )
    const post = await api.getPost(params.slug)

    return {
      post: post,
    }
  },
  data () {
    return {
      post: null,
    }
  },
  computed: {
    featuredImage () {
      return this.post.featuredImage
    }
    // ...mapGetters([
    //   'post',
    // ]),
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
  margin: 0 auto;
  max-width: $max-width;

  &__title {
    @extend %h1;
    @include margin(top, 10);
  }

  &__lead {
    @extend %h2;
    @include margin(top, 5);
  }

  &__body {
    display: flex;
  }

  &__content {
    @extend %body-text1;
    width: 60%;
  }

  &__related {
    width: 40%;
  }

  &__image {
    @include margin(top, 5);
    width: 100%;
  }
}
</style>
