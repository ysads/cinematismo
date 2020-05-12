<template>
  <div class="post-horizontal row">
    <div class="post-horizontal__thumb col-xs-5">
      <img src="https://via.placeholder.com/150" />
    </div>

    <div class="post-horizontal__info col-xs-7">
      <div class="post-horizontal__tag">
        Filmes
      </div>

      <div class="post-horizontal__title">
        Lorem ipsum dolor sit amet consectertum dolor sit amet consectertum
      </div>

      <div class="post-horizontal__date">
        12/04/2019 às 20h12
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostHorizontal'
}
</script>

<style lang="scss" scoped>
.post-horizontal {
  display: flex;

  &__info {
    @include padding(left, 4);
  }

  &__tag {
    @extend %medium;

    color: $orange;
    text-transform: uppercase;
  }

  &__title {
    @include margin(top, 1);
  }

  &__date {
    @include margin(top, 1);

    color: $gray-60;
    text-transform: uppercase;
  }
}
</style>
