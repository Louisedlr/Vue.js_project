<template>
  <div class="cube_info">
    <div>
      <p class="close">Cliquer pour moins d'information</p>
    </div>
    <img class="picture-info" v-bind:src="pictureURL" />
    <p><span class="bold">Nom : </span>{{ name }}</p>
    <p class="bold" v-if="films[0]">Film :</p>
    <div v-for="film in films" :key="film">
      <p>{{ film }}</p>
    </div>
    <p class="bold" v-if="allies[0]">Allié :</p>
    <div v-for="allie in allies" :key="allie">
      <p>{{ allie }}</p>
    </div>
    <p class="bold" v-if="enemies[0]">Enemies :</p>
    <div v-for="enemie in enemies" :key="enemie">
      <p>{{ enemie }}</p>
    </div>
    <p class="bold" v-if="parkAttractions[0]">Parc d'attraction :</p>
    <div v-for="parkAttraction in parkAttractions" :key="parkAttraction">
      <p>{{ parkAttraction }}</p>
    </div>
    <p class="bold" v-if="shortFilms[0]">Court Métrage :</p>
    <div v-for="shortFilm in shortFilms" :key="shortFilm">
      <p>{{ shortFilm }}</p>
    </div>
    <p class="bold" v-if="tvShows[0]">Show TV :</p>
    <div v-for="tvShow in tvShows" :key="tvShow">
      <p>{{ tvShow }}</p>
    </div>
    <p class="bold" v-if="videoGames[0]">Jeux Vidéos :</p>
    <div v-for="videoGame in videoGames" :key="videoGame">
      <p>{{ videoGame }}</p>
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
  font-size: 2vh;
}

.bold {
  font-weight: 400;
  margin-top: 8%;
}

.close {
  text-align: left;
  padding-top: 2%;
  /* padding-left: 5%; */
  font-size: 1.5vh;
}

.cube_info {
  max-height: 50%;
  overflow: auto;
  background-color: #4089ff;
  filter: drop-shadow(5px 15px 15px #f7f7f7);
  border-radius: 5%;
  width: 50vw;
  height: 50 vh;
  padding-left: 2%;
  padding-right: 2%;
  position: fixed;
  top: 20%;
  left: 25%;
  right: 25%;
}

/* .ligne {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2%;
} */

.picture-info {
  max-width: 15vw;
  max-height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin-bottom: 5%;
}
</style>