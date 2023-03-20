<template>
  <ul>
    <li
      v-for="item in comics"
      :key="item.id"
      style="
        display: flex;
        flex: 0 1 12%;
        flex-direction: column;
      "
    >
      <img
        :src="item.imageUrl"
        style="border-radius: 10px; width: 100%; height: 200px"
      />
      <h2 style="text-align: center">
        {{ item.name.length > 16 ? item.name.slice(0, 13) + '...' : item.name }}
      </h2>
    </li>
  </ul>
</template>

<script lang="ts">
import ICharacter from "/src/types/character";
import DisneyService from "../../services/DisneyApi";
const { getAllCharacers } = DisneyService();

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

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  list-style-type: none;
}

li {
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
}

h2 {
  font-weight: 500;
}
</style>
