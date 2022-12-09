<template>
  <div id="app">
    <Header />
    <ListPostsFavorites />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ListPostsFavorites from "../components/ListFavorites.vue";
export default {
  name: "app",
  components: {
    Header,
    ListPostsFavorites,
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f3f3f3;
  font-family: "Rockwell", serif;
  h3 {
    color: #171717;
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
