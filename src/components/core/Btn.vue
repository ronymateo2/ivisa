<template>
  <button v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<style scoped>
.btn-green {
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  color: #fff;
  background-color: #52d03e;
  border: 0;
  cursor: pointer;
}

.btn-dark-gray {
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  color: #6a757e;
  background-color: #ededed;
  border-style: solid;
  border: 1;
  cursor: pointer;
}
</style>
