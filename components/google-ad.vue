<template>
  <div class="google-ad">
    <ads-by-google
      :ad-slot="slotId"
    />
    <div v-if="isTest">{{ $t('ad', { id: slotId }) }}</div>
  </div>
</template>

<script>
export default {
  name: 'GoogleAd',

  props: {
    slotId: {
      type: [Number, String],
      required: true,
    },
  },

  data () {
    return {
      isTest: process.env.NODE_ENV !== 'production'
    }
  }
}
</script>

<style lang="scss" scoped>
.google-ad {
  background: $gray-20;
  color: $black;
}
</style>

<i18n>
{
  "pt-BR": {
    "ad": "ANÚNCIO %{id}"
  }
}
</i18n>
