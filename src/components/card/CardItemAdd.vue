<template>
  <div class="box">
    <div class="title">Add New Card</div>
    <hr class="divider" />
    <div class="subtitle">
      <CheckBox size="58px" value="true"></CheckBox>
      <div class="d-inline-block text-green ml-4">
        <span>We accept all Mayor</span>
        <br />
        <span>Debit/Credit Cards</span>
      </div>
      <PaymentMethods></PaymentMethods>
    </div>
    <div class="content mt-30">
      <div class="inputs">
        <InputText v-model="cardName" label="Name on Card"></InputText>
        <InputText v-model="cardNumber" label="Credit/Debit Card Numbers"></InputText>
        <DropDown v-model="selectdMonth" :items="months" label="Exp. Month"></DropDown>
        <DropDown v-model="selectedYear" :items="years" label="Exp. Year"></DropDown>
        <InputText v-model="securityCode" label="Security Code"></InputText>
      </div>
    </div>
    <div class="footer mt-30">
      <Sectigo class="mr-4" />
      <Btn class="btn-green btn-add mr-4" @click="addCard">Add Card</Btn>
    </div>
  </div>
</template>

<script>
import Sectigo from '../creditcard/Sectigo';
import PaymentMethods from '../creditcard/PaymentMethods';
import { months, years } from './../model/card';
export default {
  data: () => ({
    months: months,
    years: years,
    cardName: '',
    cardNumber: '',
    selectdMonth: undefined,
    selectedYear: undefined,
    securityCode: '',
  }),
  components: {
    Sectigo,
    PaymentMethods,
  },
  methods: {
    addCard() {
      this.$emit('addCard', {
        cardName: this.cardName,
        cardNumber: this.cardNumber,
        month: this.selectdMonth,
        year: this.selectedYear,
        securityCode: this.securityCode,
      });
      this.cardName = '';
      this.cardNumber = '';
      this.month = null;
      this.year = null;
      this.securityCode = '';
    },
  },
};
</script>
<style scoped>
.inputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn-add {
  width: 100%;
}
.subtitle {
  display: flex;
  align-items: center;
}
.footer {
  display: flex;
}
</style>