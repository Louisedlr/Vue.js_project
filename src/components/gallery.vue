<template>
  <div id="gallery">
    <div>
      <GalleryOptions
        :search.sync="search"
        :characterSortType.sync="characterSortType"
      />
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
    <div class="search-page-number">
      <input
        type="number"
        name="page_number"
        min="1"
        max="149"
        :value="search_page"
        @input="fill_input"
      />
      <!-- <input type="number" class="form-control" :value="val" @input="inputChange" v-on:keyup.enter="search()"> -->
      <button v-on:click="search_page_function()">Chercher</button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Card from "./card.vue";
import CardInfo from "./card_info.vue";
import get_disney_data from "@/services/api/disneyAPI.js";
import GalleryOptions from "./gallery_option.vue";
import Footer from "./footer.vue";

//

export default {
  name: "Gallery",
  components: {
    Card,
    CardInfo,
    GalleryOptions,
    Footer,
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
      search: localStorage.getItem("search") || "",
      characterSortType: localStorage.getItem("characterSortType") || "AZName",
      is_visible: false,
      count: 1,
      stock: [],
      search_page: 1,
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
      // console.log(this.disney_data);
      // for (var id in this.disney_data) {
      //   console.log(this.disney_data[id].name);
      // }
    },
    next: function () {
      this.retrieve_disney_data(this.count);
      this.count++;
      // console.log(this.count);
    },
    previous: function () {
      this.count = this.count - 2;
      this.retrieve_disney_data(this.count);
      this.count++;
      // console.log(this.count);
    },
    fill_input(e) {
      this.search_page = e.target.value;
      console.log(this.search_page);
    },
    search_page_function: function () {
      this.count = this.search_page;
      this.retrieve_disney_data(this.count - 1);
      console.log("count  " + this.count);
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");
#gallery {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-size: 2.5vh;
  font-weight: 200;
}

.tab {
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
  margin-bottom: 3%;
}

.search-page-number {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2%;
  margin-bottom: 10%;
}

@media screen and (max-width: 966px) {
  .tab {
    grid-template-columns: 40vh 40vh;
  }
}

@media screen and (max-width: 600px) {
  .tab {
    grid-template-columns: 60vh;
  }
}
</style>
