<template>
  <form @submit.prevent="submit">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Titre de l'article" />

      <label for="author">Author</label>
      <input type="text" class="form-control" id="author" placeholder="Auteur de l'article" />

      <label for="img">Image</label>
      <input type="text" class="form-control" id="img" placeholder="Miniature de l'article" />

      <label for="tags">Tags</label>
      <input type="text" class="form-control" id="tags" placeholder="Enter tags" />

  </form>
  <QuillEditor toolbar="#my-toolbar" theme="snow">
    <template #toolbar>
      <div id="my-toolbar">
        <span class="ql-formats">
          <select class="ql-font"></select>
          <select class="ql-size"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold"></button>
          <button class="ql-italic"></button>
          <button class="ql-underline"></button>
          <button class="ql-strike"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-color"></select>
          <select class="ql-background"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-script" value="sub"></button>
          <button class="ql-script" value="super"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-header" value="1"></button>
          <button class="ql-header" value="2"></button>
          <button class="ql-blockquote"></button>
          <button class="ql-code-block"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered"></button>
          <button class="ql-list" value="bullet"></button>
          <button class="ql-indent" value="-1"></button>
          <button class="ql-indent" value="+1"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-direction" value="rtl"></button>
          <select class="ql-align"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-link"></button>
          <button class="ql-image"></button>
          <button class="ql-video"></button>
        </span>
      </div>
    </template>
  </QuillEditor>
  <button v-on:click="SaveArticle">Publier l'article</button>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";


export default {
  name: "app",
  components: {
    QuillEditor,
  },
  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      // Instance
      this.quill = new Quill(this.$refs.editor, this._options)
    },
    SaveArticle: function (event) {
      // `this` inside methods points to the Vue instance
      const editor = this.quill.getEditor()
      const contentArticleHTML = editor.getHTML();
      console.log(contentArticleHTML);
    }
  }
};
</script>
<style>

</style>
