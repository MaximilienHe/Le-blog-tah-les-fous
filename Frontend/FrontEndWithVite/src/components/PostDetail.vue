<script>
import { usePiniaStore } from "../stores/postsStore";
export default {
<<<<<<< HEAD
  props: ["id", "postItem"],
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
  },
=======
	props: ['id', 'postItem'],
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
	},
>>>>>>> 6e7f0954dd6f8eca97c58abf4499d8b6d6ceca28
};
</script>

<template>
<<<<<<< HEAD

  <body>
    <div class="banner">
      <img src="https://droidsoft.fr/wp-content/uploads/2022/11/Xiaomi-12T-Pro-miniature-scaled.jpg" data-v-cf937a3e />
    </div>
    <div class="direction">
      <h1>TEST – Xiaomi 12T Pro, 200 mégapixels, mais pourquoi faire ?</h1>
      <div id = "infos">
        <p class="author">Maximilien</p>
        <p class="date">25 Novembre 2022</p>
      </div>
    </div>

    <p id="presentation">
      200 mégapixels, 120 Watts … Ce Xiaomi 12T Pro affiche une fiche technique
      avec de « gros » chiffres. Sur le papier, cela devrait annoncer de
      meilleures caractéristiques. On sait dès notre plus tendre enfance qu’il
      vaut mieux 2 cookies qu’un seul. Mais la tech n’a pas besoin de ces « gros
      » chiffres, et le Xiaomi 12T Pro le montre bien.
    </p>
    <div id="content">
      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500</h2>
      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500</h3>
    </div>
    <div id="IMGarticle">
      <img id="articleIMG" src="https://droidsoft.fr/wp-content/uploads/2022/11/Xiaomi-12T-Pro-miniature-scaled.jpg"
        data-v-cf937a3e />
      <div id="gradiant"></div>
    </div>
  </body>
=======
	<h1 v-if="post">{{ post.title }}</h1>
	<p v-if="post">{{ post.content }}</p>
	<img v-if="post" :src="post.img" />
	
>>>>>>> 6e7f0954dd6f8eca97c58abf4499d8b6d6ceca28
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.banner {
  position: relative;
  color: white;

}

.img {
  width: 100%;
  height: auto;
  opacity: 0.6;
  color: white;
  border-radius: 20px;
}

#infos{
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
  bottom: -174px;
  left: 152px;
  color: rgb(255, 255, 255);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  width: 1600px;

}

html {
  margin: 0;
  padding: 0;

}

#content {
  font-size: 180%;
  padding-top: 100px;
  transform: translateX(-5px);
  font-family: var(--font-display);
  margin-bottom: 0;
  padding-left: 140px;
  padding-right: 135px;
  color: black;
}




p {
  color: white;
  font-size: 20px;
}


#presentation {
  width: 1600 px;
  height: auto;
  display: flex;
  align-items: center;
  margin: auto;
  padding-top: 50px;
  padding-left: 140px;
  padding-right: 200px;
  color: black;
  text-align: center;


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
</style>
