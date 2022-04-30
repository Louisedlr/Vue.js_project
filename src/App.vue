<template>
  <div id="app">
    <div>
      <img class="logo" src="./assets/disney_logo.png" />
    </div>
    <div>
      <Gallery id="gallery"></Gallery>
    </div>
  </div>
</template>

<script>
import Gallery from "./components/gallery.vue";
import get_disney_data from "@/services/api/disneyAPI.js";
let current_page = 0;
get_disney_data(current_page);

export default {
  name: "App",
  components: {
    Gallery,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap");

#app {
  font-family: "Mouse Memoirs", sans-serif;
  background: #f7f7f7;
}

.title {
  font-size: 5em;
  font-weight: bold;
}

.logo {
  height: 50%;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
