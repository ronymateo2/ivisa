<template>
  <a class="link" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </a>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
.link {
  text-decoration: underline;
  cursor: pointer;
}
a {
  color: #43689e;
}
</style>
