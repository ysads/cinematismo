<template>
  <div class="post-vertical row">
    <div class="post-vertical__thumb">
      <img src="https://via.placeholder.com/350" />
    </div>

    <div class="post-vertical__info">
      <div class="post-vertical__tag">
        Filmes
      </div>

      <div class="post-vertical__title">
        Lorem ipsum dolor sit amet consectertum dolor sit amet consectertum dolor sit
      </div>

      <div class="post-vertical__date">
        12/04/2019 às 20h12
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostVertical'
}
</script>

<style lang="scss" scoped>
.post-vertical {
  &__tag {
    @extend %medium;

    color: $orange;
    text-transform: uppercase;
  }

  &__title {
    @include margin(top, 2);
  }

  &__date {
    @include margin(top, 2);

    color: $gray-60;
    text-transform: uppercase;
  }
}
</style>
