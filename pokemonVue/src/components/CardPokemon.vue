<script setup>
import PokemonType from "./PokemonType.vue";

defineProps({
  pokemon: Object,
});

const capitalizeFirstLetter = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

const transformationId = (id) => {
  return "#" + id.toString().padStart(4, 0);
};
</script>

<template>
  <router-link :to="/pokemon/ + pokemon.id">
    <div class="pokemonCard">
      <img
        class="w-3xs min-h-24 bg-[#ede6e6] rounded-sm m-auto cursor-pointer"
        :src="pokemon.sprites.other['official-artwork'].front_default"
        alt="default images"
      />
      <div class="id">
        <p>{{ transformationId(pokemon.id) }}</p>
      </div>
      <div class="name">
        <h5>{{ capitalizeFirstLetter(pokemon.name) }}</h5>
      </div>
      <div class="types">
        <!-- { slot: 1 type:{ name:"grass" url: "https://pokeapi.co/api/v2/type/12/" } } -->

        <PokemonType :label="item.type.name" v-for="(item, index) in pokemon.types" :key="index" />
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.pokemonCard {
  min-width: 150px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.pokemonCard:hover {
  transform: translateY(-5px);
  transition: 0.5s;
}

/* .image {
  width: 230px;
  min-height: 230px;
  background-color: #ede6e6;
  border-radius: 4px;
  margin: auto;
  cursor: pointer;
} */

.cardId {
  color: #919191;
  font-size: 80%;
  padding-top: 2px;
  margin-bottom: 0;
  margin-left: 25px;
}

.cardName {
  color: #313131;
  margin-bottom: 5px;
  margin-top: 10px;
  font-size: 120%;
  margin-left: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.types {
  display: flex;
  width: 220px;
}

.btn {
  background-color: #30a7d7;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75em 1.25em 0.675em;
  max-width: 300px;
}

.pokemonType {
  border: 1px solid;
  padding: 10px;
  width: 38.4375%;
  font-size: 11px;
  text-align: center;
  border-radius: 3px;
  margin: 0 1.5625% 0 0;
}

.bug {
  background-color: #729f3f;
  color: white;
}

.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  color: white;
}

.fairy {
  background-color: #fdb9e9;
  color: black;
}

.fire {
  background-color: #fd7d24;
  color: white;
}

.ghost {
  background-color: #7b62a3;
  color: white;
}

.ground {
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  color: black;
}

.normal {
  background-color: #a4acaf;
  color: black;
}

.psychic {
  background-color: #f366b9;
  color: white;
}

.steel {
  background-color: #f366b9;
  color: black;
}

.dark {
  background-color: #707070;
  color: white;
}

.electric {
  background-color: #eed535;
  color: black;
}

.fighting {
  background-color: #d56723;
  color: white;
}

.flying {
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  color: black;
}

.grass {
  background-color: #9bcc50;
  color: black;
}

.ise {
  background-color: #51c4e7;
  color: black;
}

.poison {
  background-color: #b97fc9;
  color: white;
}

.rock {
  background-color: #a38c21;
  color: white;
}

.water {
  background-color: #4592c4;
  color: white;
}
</style>
