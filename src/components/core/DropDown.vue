<template>
  <div class="d-inline-block">
    <div v-if="label">{{ label }}</div>
    <div>
      <select
        v-bind="$attrs"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners"
        class="drop-down mt-4"
      >
        <option :key="item" v-for="item in items" :value="item">{{ item }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'update',
  },
  props: {
    items: {
      type: Array,
    },
    label: {
      type: String,
    },
  },
};
</script>
<style scoped>
.drop-down {
  width: 100px;
  border: 1px solid #6a757e;
}
</style>
