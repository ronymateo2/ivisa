<template>
  <div class="d-inline-block">
    <div v-if="label">{{ label }}</div>
    <div>
      <input
        :type="type"
        class="input mt-4"
        v-bind="$attrs"
        @input="$emit('update', $event.target.value)"
        v-on="$listeners"
      />
    </div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
    },
  },
};
</script>
<style scoped>
.input {
  border: 1px solid #6a757e;
  width: 100px;
}
</style>
