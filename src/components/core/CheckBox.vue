<template>
  <div
    v-bind="$attrs"
    v-bind:class="{ checked: value, unChecked: !value }"
    v-bind:style="styleObject"
  ></div>
</template>
<script>
export default {
  // ['value', 'size'],
  props: {
    value: [Boolean, String],
    size: {
      type: String,
      default: '16px',
    },
  },
  data() {
    return {
      styleObject: {
        width: `${this.size}`,
        height: `${this.size}`,
      },
    };
  },
};
</script>
<style scoped>
.checked {
  display: inline-block;
  background-image: url('~@/assets/img/Ok_green_ico.svg');
  background-repeat: no-repeat;
  background-position: center;
  content: ' ';
  width: 16px;
  height: 16px;
}
.unChecked {
  display: inline-block;
  background-image: url('~@/assets/img/Ok_grey_ico.svg');
  background-repeat: no-repeat;
  background-position: center;
  content: ' ';
  width: 16px;
  height: 16px;
}
</style>
