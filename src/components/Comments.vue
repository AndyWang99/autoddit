<template>
  <div class="comments">
    <b-row>
      <b-col>
        <b-row class="mb-1" v-for="comment in comments" v-bind:key="comment.id">
          <b-col>
            <b-row :style="style">
              {{ comment.body }}
            </b-row>
            <!-- recursively display comment sub-trees -->
            <comments
              v-if="comment.replies"
              :comments="comment.replies"
              :depth="depth + 1"
            >
            </comments>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/variables.scss";
@import "../assets/main.scss";
.comments {
  text-align: left;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "comments",
  props: {
    comments: Array,
    depth: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      let offset = Number(this.depth) * 5;
      return "padding-left: " + offset + "vw";
    }
  }
});
</script>
