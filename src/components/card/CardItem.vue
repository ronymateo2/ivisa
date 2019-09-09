<template>
  <div class="card-item-container">
    <div class="card-item">
      <div class="card-item-left">
        <CheckBox :value="selected" class="selected-card"></CheckBox>
        <Amex></Amex>
        <div class="d-inline-block ml-4">
          <span>{{ cardName }}</span>
          <br />
          <span>{{ exDate }}</span>
          <ALink v-if="selected" class="ml-4">Default card</ALink>
        </div>
      </div>
      <div class="card-item-rigth">
        <ALink class="mr-25" @click="setAsDefault" v-if="!selected">Set as default</ALink>
        <Btn class="btn-dark-gray mr-25" @click="remove">Remove</Btn>
      </div>
    </div>
  </div>
</template>

<script>
import Amex from './../creditcard/Amex.vue';

export default {
  props: {
    id: {
      type: [Number, String],
    },
    selected: {
      type: Boolean,
      default: false,
    },
    cardType: {
      type: String,
      default: 'Visa',
    },
    cardName: {
      type: String,
    },
    month: {
      type: String,
    },
    year: {
      type: String,
    },
  },
  components: {
    Amex,
  },
  computed: {
    exDate({ month, year }) {
      return `Ex.Date ${month}/${year}`;
    },
  },
  methods: {
    remove() {
      this.$emit('remove', this.id);
    },
    setAsDefault() {
      this.$emit('setAsDefault', this.id);
    },
  },
};
</script>

<style>
.card-item-container {
  padding: 5px;
}

.card-item {
  padding-top: 5px;
  height: 65px;
  background-color: #ededed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.card-item-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.card-item-rigth {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.selected-card {
  margin-right: 10px;
  margin-left: 25px;
}
.mr-25 {
  margin-right: 25px;
}
</style>
