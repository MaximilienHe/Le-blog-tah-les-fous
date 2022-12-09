<script>
import { usePiniaStore } from "../stores/postsStore";
import Header from "../components/Header.vue";
import CommentItem from "../components/CommentItem.vue";
import AddComment from "../components/AddComment.vue";
import axiosInstance from "../axiosImport";

export default {
  props: ["id", "postItem"],
  components: {
    Header,
    CommentItem,
    AddComment,
  },
  // Properties returned fsrom data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      post: undefined,
      comments: [],
      nbLike: 0,
      orthographeLikes: "",
      isConnected: false,
    };
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    AddFavorite: function () {
      var favorite = {
        article_id: this.post.id,
      };

      axiosInstance
        .post("https://r0301-frameworksweb-production.up.railway.app/users/favorites", favorite)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    LikeArticle: function () {
      const article_id = this.post.id;

      axiosInstance
        .post("https://r0301-frameworksweb-production.up.railway.app/articles/" + article_id + "/likes")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    // get status of user
    if (localStorage.getItem("dataUser") !== null) {
      this.isConnected = JSON.parse(
        localStorage.getItem("dataUser")
      ).is_authenticated;
    } else {
      this.isConnected = false;
    }

    // // Store informations of article
    // const postStore = usePiniaStore();
    // const post = postStore.getPost(this.$route.params.id);

    // localStorage.setItem("post", JSON.stringify(post));
    this.post = JSON.parse(localStorage.getItem("post"));
    console.log(this.post.id);

    let URL = "https://r0301-frameworksweb-production.up.railway.app/articles/" + this.post.id + "/comments";
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        this.comments = res.data;
      });
    let URL_Likes = "https://r0301-frameworksweb-production.up.railway.app/articles/" + this.post.id + "/likes";

    fetch(URL_Likes)
      .then((res) => res.json())
      .then((res) => {
        this.nbLike = res.data;
        if (this.nbLike > 1) {
          this.orthographeLikes = "likes";
        } else {
          this.orthographeLikes = "like";
        }
      });
    // Charge content of article
    document.getElementById("content").innerHTML = this.post.content;
  },
};
</script>

<template>
  <Header />

  <body>
    <div class="thumbnail">
      <img v-if="post" :src="post.img" />
      <div class="caption">
        <h1 v-if="post">{{ post.title }}</h1>
        <div id="infos">
          <div v-if="post" class="author">{{ post.author }}</div>
          <div v-if="post" class="date">{{ post.creation_date }}</div>
        </div>
      </div>
    </div>
    <div class="banner"></div>
    <div  class="direction"></div>

    <div v-if="isConnected" class="fix">
      <button v-on:click="AddFavorite">
        <img src="../assets/bookmark.jpg" class="fixedbutton" />
      </button>
    </div>


    <div class="content" id="content"></div>

    <!-- <div id="IMGarticle">
        <img id="articleIMG" src="https://droidsoft.fr/wp-content/uploads/2022/11/Xiaomi-12T-Pro-miniature-scaled.jpg"
          data-v-cf937a3e />
        <div id="gradiant"></div>
      </div> -->
    <section class="Like">
      <h3 class="CommentTitle">N'hésite pas à liker l'article</h3>
      <div v-if="!isConnected"><i>Connectez-vous pour liker cet article</i></div>
      <button v-if="isConnected" v-on:click="LikeArticle">
        <img v-if="isConnected" src="../assets/like.png" class="fixedbutton" />
      </button>
      <div v-if="isConnected" class="nbLikes">{{ nbLike }} {{ orthographeLikes }}</div>
    </section>
    <section class="Commentaire">
      <h3 class="CommentTitle">Commentaires</h3>
      <AddComment v-if="(post && isConnected)" :id="post.id" />
      <div v-if="!isConnected"><i>Connectez-vous pour commenter cet article</i></div>
      <div v-for="comment in comments" class="listComments">
        <CommentItem class="item" :comment="comment" :id="post.id" />
      </div>
    </section>
  </body>
</template>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
p {
  font-size: 24px;
  width: 1600px;
  height: auto;
  display: flex;
  align-items: center;
  margin: auto;
  padding-top: 50px;
  color: black;
}

.thumbnail {
  position: relative;
  display: inline-block;
}

.caption {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  position: absolute;
  bottom: 0.5%;
  left: 0%;
  color: white;
  font-weight: bold;
}
.Commentaire {
  padding: 0 15vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Like {
  padding: 0 15vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 20vh;
  padding-right: 20vh;
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
  padding-bottom: 1vh;
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
  bottom: 4vh;
  left: 8.3vw;
  color: rgb(255, 255, 255);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  width: 1600px;
}

html {
  margin: 0;
  padding: 0;
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

.fixedbutton {
  width: 50px;
  height: 50px;
  border-radius: 9px;
  box-shadow: 5px 5px 14px #bebebe, -5px -5px 14px #ffffff;
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
  box-shadow: 5px 5px 14px #bebebe, -5px -5px 14px #ffffff;
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
