<template>
  <div class="container">
    <div class="box">
      <div class="title">My Cards</div>
      <hr class="divider" />
      <div class="content">
        <template v-for="card in cardList">
          <CardItem
            :key="card.id"
            cardType="visa"
            :id="card.id"
            :selected="card.selected"
            :cardName="card.cardName"
            :year="card.year"
            :month="card.month"
            @remove="openDialogRemove"
            @setAsDefault="openDialogsetAsDefault"
          ></CardItem>
        </template>
      </div>
    </div>
    <CardItemAdd @addCard="addCard"></CardItemAdd>
    <Dialog v-model="removeCard">
      <CardItemRemove @agree="removeItem" @cancel="removeCard = false"></CardItemRemove>
    </Dialog>
    <Dialog v-model="changeDefault">
      <CardItemSetDefault
        @agree="setAsDefault"
        @cancel="changeDefault = false"
      ></CardItemSetDefault>
    </Dialog>
  </div>
</template>

<script>
import CardItem from './card/CardItem';
import CardItemAdd from './card/CardItemAdd';
import CardItemRemove from './card/CardItemRemove';
import CardItemSetDefault from './card/CardItemSetDefault';

export default {
  components: {
    CardItem,
    CardItemAdd,
    CardItemRemove,
    CardItemSetDefault,
  },
  data: () => ({
    cardList: [],
    removeCard: false,
    changeDefault: false,
    selectedId: undefined,
  }),

  methods: {
    addCard(card) {
      this.cardList = [...this.cardList, { ...card, selected: false, id: Date.now() }];
    },
    openDialogRemove(id) {
      this.selectedId = id;
      this.removeCard = true;
    },
    openDialogsetAsDefault(id) {
      this.selectedId = id;
      this.changeDefault = true;
    },
    removeItem() {
      this.cardList = [...this.cardList.filter(({ id }) => id !== this.selectedId)];
      this.selectedId = undefined;
      this.removeCard = false;
    },
    setAsDefault() {
      const others = this.cardList.map(v => {
        return { ...v, selected: v.id === this.selectedId ? true : false };
      });

      this.cardList = others;
      this.selectedId = undefined;
      this.changeDefault = false;
    },
  },
};
</script>
