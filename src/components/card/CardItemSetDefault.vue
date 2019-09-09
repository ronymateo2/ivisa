<template>
  <div>
    <DefaultCardImg></DefaultCardImg>
    <div class="title mt-30">Change Default card</div>
    <div class="mt-15">
      This card will appear as primary option for your payment. Are you sure you want to set this
      card as default?
    </div>
    <div class="mt-15 dialog-btns">
      <Btn class="btn-green dialog-btn" @click="$emit('agree')">Yes</Btn>
      <Btn class="btn-dark-gray dialog-btn" @click="$emit('cancel')">Cancel</Btn>
    </div>
  </div>
</template>

<script>
import DefaultCardImg from './DefaultCardImg';
export default {
  components: {
    DefaultCardImg,
  },
};
</script>
