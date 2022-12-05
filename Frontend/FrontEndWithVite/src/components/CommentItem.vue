<template>
  <div class="comment">
    <p v-if="comment" class="pseudoU"> {{ comment.author}}</p>
    <p v-if="comment" class="contenuComment"> {{ comment.content}}</p>
  </div>
</template>

<script>
export default {
  props: ["comment"],
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {};
  },
  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
  },
  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {},
};

// function to iterate over the comments and return the comment item
</script>

<style lang="scss" scoped>
* {
  font-family: "Rockwell";
  font-size: 20px;
}
.comment {
  width: 38vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 4vh;
  padding: 0 1vw;
  border-radius: 16px;
  background: #e0e0e0;
  box-shadow: 12px 12px 37px #929292, -12px -12px 37px #ffffff;
}

.pseudoU {
    padding-right: 3vw;
}
</style>
