<template>
  <div class="google-ad">
    <ads-by-google
      :ad-slot="slotId"
    />
  </div>
</template>

<script>
export default {
  name: 'GoogleAd',

  props: {
    slotId: {
      type: String,
      required: true,
    },
  },
}
</script>
