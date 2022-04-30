<template>
  <div id="card_info">
    <div class="cube_info">
      <img class="picture" v-bind:src="pictureURL" />
      <p>Name : {{ name }}</p>
      <p v-if="films[0]">Film :</p>
      <div v-for="film in films" :key="film">
        <p>{{ film }}</p>
      </div>
      <p v-if="allies[0]">Allié :</p>
      <div v-for="allie in allies" :key="allie">
        <p>{{ allie }}</p>
      </div>
      <p v-if="enemies[0]">Enemies :</p>
      <div v-for="enemie in enemies" :key="enemie">
        <p>{{ enemie }}</p>
      </div>
      <p v-if="parkAttractions[0]">Enemies :</p>
      <div v-for="parkAttraction in parkAttractions" :key="parkAttraction">
        <p>{{ parkAttraction }}</p>
      </div>
      <p v-if="shortFilms[0]">Court Métrage :</p>
      <div v-for="shortFilm in shortFilms" :key="shortFilm">
        <p>{{ shortFilm }}</p>
      </div>
      <p v-if="tvShows[0]">Show TV :</p>
      <div v-for="tvShow in tvShows" :key="tvShow">
        <p>{{ tvShow }}</p>
      </div>
      <p v-if="videoGames[0]">Jeux Vidéos :</p>
      <div v-for="videoGame in videoGames" :key="videoGame">
        <p>{{ videoGame }}</p>
      </div>
      <p>Click pour moins d'information</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  // props: ["name", "pictureURL", "story"],
  props: {
    name: String,
    pictureURL: {
      type: String,
      default:
        "https://corgi-creative.com/wp-content/uploads/2021/11/140x140-disney-logo-1.png",
    },
    films: Array,
    allies: Array,
    enemies: Array,
    parkAttractions: Array,
    shortFilms: Array,
    tvShows: Array,
    videoGames: Array,
  },
};
</script>

<style>
p {
  text-align: center;
  font-size: 12px;
}

.cube_info {
  max-height: 50%;
  overflow: auto;
  background-color: #fdb8ff;
  border-radius: 5%;
  width: 50vw;
  height: 50 vh;
  z-index: 1;
  position: fixed;
  top: 25%;
  left: 25%;
  right: 25%;
}

/* img {
  max-width: 15vw;
  max-height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
} */
</style>