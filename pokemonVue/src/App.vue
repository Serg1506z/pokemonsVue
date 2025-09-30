<script setup>
import { onMounted, ref } from "vue";
import CardPokemon from "./components/CardPokemon.vue";
import Btn from "./components/Btn.vue";
// import personalPokemonCard from "./components/personalPokemonCard.vue";

const POKEMON_API = "https://pokeapi.co/api/v2";
const POKEMON_LIMIT = 12;
let offset = 0;

const fetchPokemonData = async (url) => {
  const res = await fetch(url);

  return await res.json();
};

const pokemonsData = ref([]);

onMounted(async () => {
  const response = await fetch(`${POKEMON_API}/pokemon?limit=${POKEMON_LIMIT}&offset=${offset}`, {
    method: "GET",
  });
  const allPokemons = await response.json();
  console.log(allPokemons);

  pokemonsData.value = await Promise.all(
    allPokemons.results.map((item) => {
      const pokemonUrl = item.url;

      return fetchPokemonData(pokemonUrl);
    })
  );

  console.log("pokemonsData", pokemonsData.value);
});

const handler = () => {
  console.log("click2");
};
</script>

<template>
  <div class="flex flex-col w-full min-h-300px my-auto p-20px items-center">
    <div class="flex p-10px bg-white flex-wrap w-5/6 m-auto justify-start gap-15">
      <CardPokemon v-for="(pokemon, index) in pokemonsData" :key="index" :pokemon="pokemon" />
    </div>
  </div>
  <Btn title="Load more Pokémon" @click="handler" />
  <!-- <personalPokemonCard /> -->
</template>

//подгружать новых покумонов 
