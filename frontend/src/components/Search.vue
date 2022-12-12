<script>
export default {
  name: "header-website",
  data() {
    return {
      categories: null,
      searchText: "",
    };
  },

  methods: {
    onEnter: function () {
      console.log(this.searchText);
      localStorage.setItem("search", this.searchText);
      this.$router.push({
        name: "Search",
      });
      window.location.reload();
      
    },
  },

  mounted() {},
};
</script>

<template>
  <label for="search-bar">
    <img src="../assets/search-icon.png" class="icon" />
    <input
      v-model="searchText"
      v-on:keyup.enter="onEnter"
      type="text"
      id="search-bar"
      name="search-bar"
      placeholder="Type to search..."
    />
  </label>
</template>

<style lang="scss" scoped>
label {
  position: relative;
  display: block;
  width: 300px;

  input {
    width: 100%;
    height: 35px;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 5px 0px 0px 35px;
    box-sizing: border-box;
    appearance: none;
    border: none;
    outline: none;
    color: #171717;
    font-family: "Rockwell", serif;
    font-size: 16px;

    &::placeholder {
      color: #888888;
    }
  }

  .icon {
    position: absolute;
    width: 25px;
    margin: 5px;
  }
}
</style>
