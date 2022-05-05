<template>
  <div id="card">
    <div v-on:click="doStuff()">
      <img class="picture" v-bind:src="pictureURL" />
      <p class="description"><span class="bold">Nom : </span>{{ name }}</p>
      <p class="description-click">Click for more information</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: String,
    pictureURL: {
      type: String,
      default:
        "https://corgi-creative.com/wp-content/uploads/2021/11/140x140-disney-logo-1.png",
    },
  },
  methods: {
    doStuff: function () {
      console.log("test");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Source+Serif+4&display=swap");
#card {
  /* background-color: #bdd6ff;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10%; */
  font-family: "Poppins", sans-serif;
  /* background-color: #ffc7f5; */

  background-color: #bdd6ff;
  /* filter: drop-shadow(5px 15px 15px #bdd6ff); */
  border-radius: 10px;
  margin: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-around;
  text-transform: capitalize;
  cursor: pointer;
}

.description {
  text-align: center;
  font-size: 16px;
  display: block;
  margin-left: 5%;
  margin-right: 5%;
}

.description-click {
  font-size: 12px;
}

.picture {
  height: 10vh;
  max-width: 20vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
}

.bold {
  font-weight: 400;
}
</style>