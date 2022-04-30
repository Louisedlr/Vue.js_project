<template>
  <div id="gallery">
    <div class="gallery_option">
      <input
        class="shearch_bar"
        type="text"
        v-model="search"
        placeholder="Chercher un personnage"
      />
      <label for="character-sort">Trier par : </label>
      <select v-model="characterSortType" id="character-sort">
        <option value="AZName">Noms de A à Z</option>
        <option value="ZAName">Noms de Z à A</option>
      </select>

      <!-- <div>
        <button v-on:click="doStuff()">Details</button>
      </div> -->
    </div>

    <div class="tab">
      <div v-for="data in characterOrganizedData" :key="data._id">
        <Card
          v-on:click.native="doStuff(data, 0)"
          :name="data.name"
          :pictureURL="data.imageUrl"
        ></Card>
      </div>
      <div class="card_info" v-show="is_visible">
        <CardInfo
          :name="stock.name"
          :pictureURL="stock.imageUrl"
          :films="stock.films"
          :allies="stock.allies"
          :enemies="stock.enemies"
          :parkAttractions="stock.parkAttractions"
          :shortFilms="stock.shortFilms"
          :tvShows="stock.tvShows"
          :videoGames="stock.videoGames"
          v-on:click.native="doStuff(data, 1)"
        ></CardInfo>
      </div>
    </div>
    <div class="next">
      <p>Page : {{ count }} / 149</p>
      <button v-if="count > 1" v-on:click="previous()">Précédent</button>
      <button v-on:click="next()">Suivant</button>
    </div>
  </div>
</template>

<script>
import Card from "./card.vue";
import CardInfo from "./card_info.vue";
import get_disney_data from "@/services/api/disneyAPI.js";

export default {
  name: "Gallery",
  components: {
    Card,
    CardInfo,
  },

  props: {
    data: String,
  },

  computed: {
    characterOrganizedData: function () {
      const field = "name";
      const reversed = ["ZAName"].includes(this.characterSortType) ? -1 : 1;
      const filterFunc = (a) =>
        a.name.toLowerCase().includes(this.search.toLowerCase());
      const comparator = (a, b) => a[field].localeCompare(b[field]);
      let data = this.disney_data.filter(filterFunc);
      data = data.sort(comparator);
      //let data = this.disney_data;
      if (reversed === -1) {
        data = data.reverse();
      }
      return data;
    },
  },
  data() {
    return {
      disney_data: [],
      search: "",
      characterSortType: "AZname",
      is_visible: false,
      count: 1,
      stock: [],
    };
  },

  created: function () {
    this.retrieve_disney_data(0);
  },
  methods: {
    async retrieve_disney_data(current_page) {
      this.disney_data = await get_disney_data(current_page);
      this.disney_data = this.disney_data["data"];
      this.data = 0;
      console.log(this.disney_data);
      // for (var id in this.disney_data) {
      //   console.log(this.disney_data[id].name);
      // }
    },
    next: function () {
      this.retrieve_disney_data(this.count);
      this.count++;
      console.log(this.count);
    },
    previous: function () {
      this.count = this.count - 2;
      this.retrieve_disney_data(this.count);
      this.count++;
      console.log(this.count);
    },
    doStuff: function (data, index) {
      if (index === 1) {
        this.is_visible = !this.is_visible;
      } else {
        if (this.is_visible === true) {
          this.stock = data;
        } else {
          this.is_visible = !this.is_visible;
          this.stock = data;
        }
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Source+Serif+4&display=swap");
#gallery {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
}

.gallery_option {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
}

.tab {
  /* display: grid;
  grid-template-columns: 20vw 20vw 20vw;
  justify-content: space-around;
  align-items: center;
  justify-self: stretch;
  margin: auto;
  column-gap: 1%;
  row-gap: 1%;
  margin-top: 5%; */
  display: grid;
  grid-template-columns: 20vw 20vw 20vw;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}

.next {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-top: 10%;
  margin-bottom: 10%;
}
</style>
