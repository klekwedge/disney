<!-- eslint-disable vue/multi-word-component-names -->
<template>
<ul id="example-2">
  <li v-for="(item) in comics" :key="item.id">
    {{ item.name }}
  </li>
</ul>
</template>

<script lang="ts">
import ICharacter from '/src/types/character'
import ComicsAPIService from "../../services/ComicsApi";
const { getAllCharacers } = ComicsAPIService();

export default {
  name: "List",
  props: {},
  data() {
    return {
      comics: [] as ICharacter[],
      nextPage: null,
    };
  },
  created: function () {
    this.getComics();
  },
  computed: {},
  methods: {
    async getComics() {
      await getAllCharacers().then((data) => {
        this.comics = data.data;
        this.nextPage = data.nextPage;

        console.log(this.comics[22]);
      });
    },
  },
};
</script>

<style scoped>
</style>
