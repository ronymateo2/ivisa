<template>
  <div id="app">
    <MyCards />
  </div>
</template>

<script>
import MyCards from './components/MyCards.vue';

export default {
  name: 'app',
  components: {
    MyCards,
  },
};
</script>

<style>
@import url('assets/design/helpers.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  margin-top: 60px;
  width: 800px;
  font-size: 12px;
}
</style>
