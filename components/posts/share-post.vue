<template>
  <section class="share-post">
    <span class="share-post__label">{{ $t('share') }}</span>
    <a class="link" :href="fbLink" target="_blank">
      <icn-facebook class="icn icn--fb" />
    </a>
    <a class="link" :href="twitterLink" target="_blank">
      <icn-twitter class="icn icn--twitter" />
    </a>
    <a class="link" :href="whatsAppLink">
      <icn-whatsapp class="icn icn--whatsapp" data-action="share/whatsapp/share" />
    </a>
  </section>
</template>

<script>
import IcnFacebook from '~/assets/images/icn-fb.svg'
import IcnTwitter from '~/assets/images/icn-twitter.svg'
import IcnWhatsapp from '~/assets/images/icn-whatsapp.svg'

export default {
  name: 'SharePost',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  components: {
    IcnFacebook,
    IcnTwitter,
    IcnWhatsapp,
  },

  computed: {
    fullUrl () {
      return `${process.env.NUXT_ENV_HOST}/${this.post.slug}`
    },

    title () {
      return this.post.title.replace('|', '•')
    },

    fbLink () {
      return `http://www.facebook.com/sharer/sharer.php?u=${this.fullUrl}&t=${this.title}`
    },

    twitterLink () {
      return `http://www.twitter.com/intent/tweet?text=${this.title}&url=${this.fullUrl}`
    },

    whatsAppLink () {
      const message = `${this.title}: ${this.fullUrl}`

      return `https://wa.me/?text=${message}`
    }
  },
}
</script>

<style lang="scss" scoped>
.share-post {
  display: flex;
  align-items: center;

  &__label {
    @extend %caption;

    @include margin(right, 6);

    text-transform: uppercase;
  }

  .link + .link {
    @include margin(left, 6);
  }

  .icn {
    @include transition(all);

    width: 28px;
    height: 28px;
    cursor: pointer;
    fill: $gray-80;
    padding: $base;

    &--whatsapp {
      &:hover {
        fill: #25d366;
      }
    }
    &--fb {
      &:hover {
        fill: #3b5998;
      }
    }
    &--twitter {
      &:hover {
        fill: #1da1f2;
      }
    }
  }
}
</style>

<i18n>
  {
    "pt-BR": {
      "share": "Compartilhe: "
    }
  }
</i18n>
