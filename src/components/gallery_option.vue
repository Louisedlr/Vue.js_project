<template>
  <div class="gallery_option">
    <input
      class="shearch_bar"
      type="text"
      :v-model="search"
      placeholder="Chercher un personnage"
    />
    <label for="character-sort">Trier par : </label>
    <select v-model="characterSort" id="character-sort">
      <option value="AZName" v-on:input="update('AZName')">
        Noms de A à Z
      </option>
      <option value="ZAName" v-on:input="update('ZAName')">
        Noms de Z à A
      </option>
    </select>
    <p>{{ characterSortType }}</p>

    <div>
      <button v-on:click="doStuff(' test', $event)">My button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery_option",
  props: {
    search: String,
    characterSortType: { type: String, default: "AZName" },
  },
  data() {
    return {};
  },
  methods: {
    doStuff: function (word, event) {
      console.log(event.target);
    },
    update(characterSort) {
      console.log(characterSort);
      this.characterSortType = characterSort;
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
  margin-top: 5%;
}
</style>