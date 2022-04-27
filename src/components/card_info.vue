<template>
  <div id="card_info">
    <div class="cube_info">
      <p>test card info</p>
      <p>Name : {{ name }}</p>
      <!-- <img class="picture" v-bind:src="pictureURL" />
      <p>Name : {{ name }}</p> -->
      <!-- <p v-if="films[0]">Film :</p>
      <div v-for="film in films" :key="film">
        <p>{{ film }}</p>
      </div>
      <p v-if="allies">Allié : {{ allies }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  // props: ["name", "pictureURL", "story"],
  props: {
    name: String,
    //   pictureURL: {
    //     type: String,
    //     default:
    //       "https://corgi-creative.com/wp-content/uploads/2021/11/140x140-disney-logo-1.png",
    //   },
    // films: Array,
    // allies: String,
  },
};
</script>

<style>
p {
  text-align: center;
  font-size: 12px;
}

.cube_info {
  background-color: #fdb8ff;
  border-radius: 5%;
  width: 15vw;
  height: 30 vh;
}

/* img {
  max-width: 15vw;
  max-height: 20vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
} */
</style>