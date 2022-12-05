<template>
    <form @submit.prevent="submit">
      <textarea type="text" class="form-control-LargeInput" id="content" placeholder="Ecrivez votre commentaire ..." />
    </form>
    <div class="pushArticle">
      <button class="PushButton" v-on:click="SaveComment">Publier le commentaire</button>
      <p id="Errors"></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  
  export default {
    
    mounted() {
      var _this = this;
    },
  
    methods: {
      // Creattion of JSON Object + POST in DB when button is clicked
      SaveComment: function () {  
        var comment = {
          body: document.getElementById("content").value,
        }
  
        axios.post('/articles', {
            article
          })
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
  
  <style>
  * {
    font-family: 'Rockwell', serif;
  }
  
  input {
    border: 0;
  }
  
  textarea {
    border: 0;
    resize: vertical;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .form-control-LargeInput {
    width: 70%;
    height: 10%;
    font-size: 16px;
    margin-bottom: 10px;
    padding: 8px 14px;
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
    font-size: 20px;
    padding: 16px;
  }
  
  button:hover {
    background-color: white;
    /* Green */
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  </style>
  