<template>
  <section class="latest">
    <h3>Résultats de la recherche : "{{ search }}"</h3>

    <div v-for="post in posts.slice().reverse()" class="listPost">
      <PostItem
        class="item"
        :post="post"
        textButton="Lire l'article"
        :handleClick="this.readArticle"
      />
    </div>
  </section>
</template>

<script>
import { usePiniaStore } from "../stores/postsStore";
import PostItem from "./PostItem.vue";
import axiosInstance from '../axiosImport';

export default {
  props: ["msg", "search"],
  name: "latest-articles-search",
  components: {
    PostItem,
  },
  // Properties returned fsrom data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      posts: [],
      category: "",
      search: "",
    };
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    readArticle(data) {
      this.$router.push({
        name: "Article",
        params: { id: data.id },
      });

      const postStore = usePiniaStore();
      const post = postStore.getPost(data.id);

      localStorage.setItem("post", JSON.stringify(post));
    },
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    this.search = this.$route.params.search;
    const posts = usePiniaStore();
    const URL =
      "https://r0301-frameworksweb-production.up.railway.app/articles?title=" +
      this.search;
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        this.posts = res.data;
        posts.setPosts(res.data);
      });
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 50px;
}

.latest {
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .posts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 196px);
    grid-gap: 30px;
    margin: 15px;

    .post {
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);

      .image {
        flex: 1;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      h4 {
        box-sizing: border-box;
        padding: 3px 15px 0px 15px;
        height: 50px;
        line-height: 50px;
        margin: 0px;
      }

      &.col-2 {
        grid-column: span 2;
      }

      &.row-2 {
        grid-row: span 2;
      }
    }
  }
}
</style>
