<template>
  <form @submit.prevent="submit">
    <input type="text" class="form-control-LargeInput" id="title" placeholder="Titre de l'article" />
    <textarea type="text" class="form-control-LargeInput" id="extrait" placeholder="Extrait de l'article" />

    <div class="ArticleInfos">
      <select id="Category">
        <option value="" selected disabled hidden>Catégorie de l'article</option>
      </select>
      <input type="text" class="form-control-smallInput" id="img" placeholder="Miniature de l'article (URL)" />
      <input type="text" class="form-control-smallInput" id="slug" placeholder="Slug de l'article" />
    </div>
    <input type="text" class="form-control-LargeInput" id="tags"
      placeholder="Tags de l'article, séparés par un ; (e.g : samsung; xiaomi; apple)" />
  </form>
  <div ref="editor" class="quillEditor"></div>
  <div class="pushArticle">
    <button class="PushButton" v-on:click="SaveArticle">Publier l'article</button>
    <p id="Errors"></p>
  </div>
</template>

<script>
import axios from 'axios';
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";


export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      editor: null,
      authors: null,
      categories: null,
    };
  },
  mounted() {

    // Get list of categories
    fetch('../src/assets/categories.json')
      .then((res) => res.json())
      .then((res) => {
        this.categories = res.categories;
        console.log(this.categories);
      })
      .then((res) => {
        this.categories.forEach((category) => {
          const option = document.createElement("option");
          option.value = category.id;
          option.text = category.name;
          document.getElementById("Category").appendChild(option);
        });
      })



    var _this = this;

    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          ['link', 'image']
        ],
      },
      //theme: 'bubble',
      theme: "snow",
      formats: ["bold", "underline", "header", "italic", "link"],
      placeholder: "Type something in here!",
    });
    this.editor.root.innerHTML = this.modelValue;
  },

  methods: {
    // Creattion of JSON Object + POST in DB when button is clicked
    SaveArticle: function () {
      var selectCategory = document.getElementById("Category");

      var article = {
        title: document.getElementById("title").value,
        extract: document.getElementById("extrait").value,
        slug: document.getElementById("slug").value,
        img: document.getElementById("img").value,
        tags: document.getElementById("tags").value,
        category: selectCategory.options[selectCategory.selectedIndex].text,
        content: this.editor.root.innerHTML
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
  width: 80%;
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
