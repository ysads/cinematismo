<template>
  <div>
    <section class="header">
      <h1 class="page-title">
        {{ post.title }}
      </h1>
    </section>
    <section class="post-container">
      <div class="post-content">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import config from '../../api/config'
import api from '~/api'

export default {
  async asyncData ({ params, store }) {
    // We can use async/await ES6 feature
    // const { data } = await axios.get(
    //   config.baseUrl + `posts?slug=${params.slug}`,
    // )
    const post = await api.getPost(params.slug)

    console.log(post)

    return {
      post: post,
    }
  },
  computed: {
    ...mapGetters([
      'posts',
      'categories',
    ]),
  },
  mounted () {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getCategories')
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          name: 'description',
          content: 'This is the meta description of the content.',
        },
      ],
    }
  },
}
</script>

<style>
/* layout */

.header {
  background-color:#1e5799;
  background-image: linear-gradient(to right, #34495F, #3A5674);
  text-align: center;
}

.page-title {
  font-family: "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  letter-spacing: 1px;
  font-size: 52px;
  padding:50px 5px 0px 5px;
  text-align:center;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  color: #fff;
  word-spacing: 5px;
  padding-bottom: 15px;
  padding-left:5px;
  text-align:center;
}

.post-container {
  font-family: "Helvetica Neue", Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 0px auto;
  line-height: 150%;
  padding: 60px 30px 30px 30px;
  max-width: 1000px;
  margin: 0px auto;
}

.post-content {
  flex: 1;
}

.post-content img {
  max-width: 100%;
  height: auto;
  margin: 10px 0px;
}

.sidebar {
  width: 180px;
  padding: 0px 20px;
}

/* end layout */

.links {
  padding-top: 15px;
}

p {
  margin-bottom: 10px;
}

.post {
  margin-bottom:20px;
}
h3 {
  font-size:54px;
  font-weight:bold;
  line-height: 64px;
}
h3 a {
  text-decoration: none;
  color:#444;
}
p {
  font-size:24px;
  line-height: 150%;
}
.link-more {
    display:none;
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 480px) {

  .title {
    font-size: 22px;
    line-height:44px;
  }

  .sidebar {
    display: none;
  }

}
</style>
