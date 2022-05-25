<template>
  <div class="gallery_option">
    <input
      class="search-bar"
      type="text"
      :value="search"
      @input="onSearchChanged"
      placeholder="Chercher un personnage"
    />
    <button v-if="search" @click="cleanSearch">Effacer</button>
    <label for="character-sort">Trier par : </label>
    <select
      :value="characterSortType"
      @input="onCharacterSortTypeChanged"
      id="character-sort"
    >
      <option value="AZName">Noms de A à Z</option>
      <option value="ZAName">Noms de Z à A</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "GalleryOptions",
  props: {
    search: String,
    characterSortType: String,
  },
  watch: {
    search: function (newSearch) {
      localStorage.setItem("search", newSearch);
    },
    characterSortType: function (newcharacterSortType) {
      localStorage.setItem("characterSortType", newcharacterSortType);
    },
  },
  methods: {
    cleanSearch: function () {
      this.$emit("update:search", "");
    },
    onSearchChanged(event) {
      this.$emit("update:search", event.target.value);
    },
    onCharacterSortTypeChanged(event) {
      this.$emit("update:characterSortType", event.target.value);
    },
  },
};
</script>

<style>
.gallery_option {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 15px;
}

.search-bar {
  width: 40vw;
  text-align: center;
}
</style>