<script>
import { usePiniaStore } from "../stores/postsStore";
import Header from "../components/Header.vue";
export default {
  props: ["id", "postItem"],
  components: {
    Header
  },
  // Properties returned fsrom data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      post: undefined,
    };
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {},
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    const postStore = usePiniaStore();
    this.post = postStore.getPost(this.$route.params.id);
    console.log(this.post);
  }
};
</script>

<template>

  <Header />

  <body>
    <div class="banner">
      <img v-if="post" :src="post.img" />
    </div>
    <div class="direction">
      <h1 v-if="post">{{ post.title }}</h1>
      <div id="infos">
        <div v-if="post" class="author">{{ post.author }}</div>
        <div v-if="post" class="date">{{ post.createdAt }}</div>
      </div>
    </div>
    <div class="fix">
      <button class="favorite"><img src="../assets/bookmark.jpg" id="fixedbutton"></button>
    </div>

    <div class="content">
      <p>
        200 mégapixels, 120 Watts … Ce Xiaomi 12T Pro affiche une fiche technique
        avec de « gros » chiffres. Sur le papier, cela devrait annoncer de
        meilleures caractéristiques. On sait dès notre plus tendre enfance qu’il
        vaut mieux 2 cookies qu’un seul. Mais la tech n’a pas besoin de ces « gros
        » chiffres, et le Xiaomi 12T Pro le montre bien.
      </p>

      <h2>Notre avis en bref sur le Xiaomi 12T Pro</h2>
      <h3>Unboxing du Xiaomi 12T Pro</h3>

      <!-- <div id="IMGarticle">
        <img id="articleIMG" src="https://droidsoft.fr/wp-content/uploads/2022/11/Xiaomi-12T-Pro-miniature-scaled.jpg"
          data-v-cf937a3e />
        <div id="gradiant"></div>
      </div> -->
    </div>
  </body>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 20vh;
  padding-right: 20vh;
  color: white;
}


.banner {
  position: relative;
  padding-left: 7.5vw;

}

.img {
  width: 100%;
  height: auto;
  opacity: 0.6;
  color: white;
  border-radius: 20px;
}

#infos {
  display: flex;
  flex-direction: row;
}


h1 {
  font-size: 78px;
  margin-left: 50px;
  margin-right: 50px;
  color: white;
}

.author {
  margin-left: 50px;
  margin-right: 50px;
}

.date {
  margin-left: 50px;
  margin-right: 50px;
}

.direction {
  position: absolute;
  bottom: -12.7vh;
  left: 8.40vw;
  color: rgb(255, 255, 255);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  width: 1600px;

}

html {
  margin: 0;
  padding: 0;

}

h2 {
  font-size: 56px;
  transform: translateX(-5px);
  font-family: var(--font-display);
  margin-bottom: 0;
  color: black;
}

h3 {
  font-size: 28px;
  transform: translateX(-5px);
  font-family: var(--font-display);
  margin-bottom: 0;
  color: black;
}


p {
  font-size: 24px;
  width: 1600 px;
  height: auto;
  display: flex;
  align-items: center;
  margin: auto;
  padding-top: 50px;
  color: black;



}

#IMGarticle {
  position: relative;
  color: white;


}

#gradiant {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  width: 850px;
  height: 100px;
  position: relative;
  margin-top: -100px;
  border-radius: 20px;
}

#articleIMG {
  width: 850px;
  height: auto;
  display: flex;
  align-items: none;
  border-radius: 20px;

}

#fixedbutton {
  width: 50px;
  height: 50px;
  border-radius: 9px;
  box-shadow: 5px 5px 14px #bebebe,
    -5px -5px 14px #ffffff;
}

.fix {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  font-family: sans-serif;

  width: 50px;
  height: 50px;
  border-radius: 9px;
  box-shadow: 5px 5px 14px #bebebe,
    -5px -5px 14px #ffffff;

}

.favorite {
  border: 0;
  background-color: transparent;
}

.favorite:hover {
  border: 0;
  background-color: transparent;
}
</style>