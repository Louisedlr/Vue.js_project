<template>
  <div id="card">
    <div>
      <img class="picture" v-bind:src="pictureURL" />
      <p class="description"><span class="bold">Nom : </span>{{ name }}</p>
      <p class="description-click">Cliquer pour plus d' information</p>
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
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Source+Serif+4&display=swap");
#card {
  font-family: "Poppins", sans-serif;

  background-color: #bdd6ff;
  filter: drop-shadow(5px 15px 15px #d1d1d1);
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
  font-size: 2 vh;
  display: block;
  margin-left: 5%;
  margin-right: 5%;
}

.description-click {
  font-size: 1.5vh;
}

.picture {
  height: 20vh;
  max-width: 20vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  border-radius: 5%;
}

.bold {
  font-weight: 400;
}

@media screen and (max-width: 966px) {
  .picture {
    height: 100px;
    max-width: 100px;
  }
}
</style>