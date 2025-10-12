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
const getPokemonsList = async (offset) => {
  try {
    const response = await fetch(`${POKEMON_API}/pokemon?limit=${POKEMON_LIMIT}&offset=${offset}`, {
      method: "GET",
    });
    const allPokemons = await response.json();
    console.log(allPokemons);

    const finalRes = await Promise.all(
      allPokemons.results.map((item) => {
        const pokemonUrl = item.url;

        return fetchPokemonData(pokemonUrl);
      })
    );

    pokemonsData.value.push(...finalRes);
    console.log(1, pokemonsData.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  getPokemonsList(offset);
  console.log("pokemonsData", pokemonsData.value);
});

const handler = () => {
  // console.log("click2");
  offset += POKEMON_LIMIT;
  getPokemonsList(offset);
};
</script>

<template>
  <div class="flex flex-col min-h-300px justify-center">
    <div class="flex flex-col w-full min-h-300px my-auto p-20px items-center min-w-1000px">
      <div class="flex p-10px bg-white flex-wrap w-5/6 m-auto justify-center gap-15">
        <CardPokemon v-for="(pokemon, index) in pokemonsData" :key="index" :pokemon="pokemon" />
      </div>
    </div>
    <Btn title="Load more Pokémon" @click="handler" />
  </div>
</template>

//подгружать новых покумонов
