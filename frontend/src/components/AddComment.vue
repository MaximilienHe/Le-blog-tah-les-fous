<template>
  <textarea v-model="commentText" type="text" class="form-control-LargeInput"  placeholder="Ecrivez votre commentaire ..." />
  <div class="pushArticle">
    <button class="PushButton" v-on:click="SaveComment">Publier le commentaire</button>
    <p id="Errors"></p>
  </div>
</template>
  
<script>
import axiosInstance from '../axiosImport';


export default {
  props: ["id"],

  mounted() {
    var _this = this;
  },
  data() {
    return {
      commentText: "",
    };
  },
  methods: {
    // Creation of JSON Object + POST in DB when button is clicked
    SaveComment: function () {
      var comment = {
        id: this.id,
        content: this.commentText,
      }
      console.log(comment);
      window.location.reload();
      let URL = 'https://r0301-frameworksweb-production.up.railway.app/articles/' + this.id + '/comments';
      axiosInstance.post(URL, comment, { withCredentials: true })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
  
<style scoped>
* {
  font-family: 'Rockwell', serif;
}

input {
  border: 0;
}

textarea {
  border: 0;
  resize: vertical;

  margin-top: 3vh;

  width: 100%;
  height: 10%;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 8px 14px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-control-smallInput {
  width: 25.7%;
  height: 10%;
  font-size: 16px;
  padding: 8px 14px;
}

.ArticleInfos {
  display: flex;
  width: 81.5%;
  justify-content: space-between;
  margin-bottom: 10px;
}

.pushArticle {
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.PushButton {
  background-color: #555555;
  /* Black */
  color: white;
  border-color: #555555;
  font-size: 16px;
  padding: 16px;
}

button:hover {
  background-color: white;
  /* Green */
  color: black;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
  