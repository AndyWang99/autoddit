<template>
  <div class="lds-dual-ring">
    <div></div>
  </div>
</template>

<style scoped>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;

  /* put exactly in the center of the screen */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #000 transparent #000 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "loading"
});
</script>
