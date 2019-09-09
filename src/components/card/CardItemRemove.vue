<template>
  <div>
    <RemoveCardImg></RemoveCardImg>
    <div class="title mt-30">Remove Card</div>
    <div class="mt-15">Are you sure you want to remove from wallet</div>
    <div class="mt-15 dialog-btns">
      <Btn class="btn-green dialog-btn" @click="agree">Yes</Btn>
      <Btn class="btn-dark-gray dialog-btn" @click="cancel">Cancel</Btn>
    </div>
  </div>
</template>

<script>
import RemoveCardImg from './RemoveCardImg';
export default {
  components: {
    RemoveCardImg,
  },
  methods: {
    agree() {
      this.$emit('agree');
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>
