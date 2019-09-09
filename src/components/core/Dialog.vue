<template>
  <div class="display" v-bind:class="{ modal: dialog }">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'dialog',
    event: 'toogle',
  },
  props: {
    dialog: Boolean,
  },
  methods: {
    close() {
      this.$emit('toogle', !this.dialog);
    },
  },
};
</script>
<style scoped>
.display {
  display: none;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 350px;
}

.close {
  font-size: 40px;
  color: #aaa;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
