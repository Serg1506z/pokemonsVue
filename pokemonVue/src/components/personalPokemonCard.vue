<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import PokemonType from "./PokemonType.vue";

const countSpecificationsItem = 15;

const router = useRouter();
let pokemonData = ref({});

const getPokemonById = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return await res.json();
};

//  function renderSpecificationsItems(data, index) {
//     console.log(data, index);

//     const a = (data.stats[index]["base_stat"] * 100) / 200;
//     const b = Math.round((a / 100) * countSpecificationsItem);

//     return b;
//   }

const myFunction = (column, index) => {
  console.log(column);
  if (index > 5) {
    return true;
  } else {
    return false;
  }
};

onMounted(async () => {
  const pokemonId = router.currentRoute.value.params.id;
  pokemonData.value = await getPokemonById(pokemonId);
});
</script>

<template>
  <div class="personalCardPokemon">
    <div class="personalCardContainer">
      <header class="header">
        <div class="back">
          <button class="btnBack">&#x25C4;</button>
          <div class="pokenomInfo">
            <span class="pokemonInfoId">{{ pokemonData.id }}</span>
            <span class="pokemonInfoName">Бульбазавр</span>
          </div>
        </div>
        <div class="forward">
          <button class="btnForward">&#x25BA;</button>
          <div class="pokenomInfo">
            <span class="pokemonInfoName">Бульбазавр</span>
            <span class="pokemonInfoId">#0001</span>
          </div>
        </div>
      </header>
      <div class="personalCardTitle">
        <span class="titleName" id="personalCardPokemonName">pokemonname</span>
        <span class="titleId" id="personalCardPokemonId">#0000</span>
      </div>
      <section class="pokemonDetails">
        <div class="leftColumn">
          <img
            class="image"
            id="personalCardPokemonImage"
            src="../assets\img\default.jpg"
            alt="Bulbasaur"
          />
          <div class="statistics">
            <h3 class="statisicsTitle">Статистика</h3>

            <div
              class="columnWrapper"
              v-for="(column, columnIndex) in pokemonData.stats"
              :key="columnIndex"
            >
              <div class="statItem">
                <div
                  v-for="(value, index) in new Array(countSpecificationsItem)"
                  class="item"
                  :class="{ fill: myFunction(column, index) }"
                  :key="index"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="rightColumn">
          <div class="description">
            В течение некоторого времени после рождения он использует питательные вещества,
            находящиеся в семени на его спине, для своего роста.
          </div>
          <div class="version">
            <h3 class="versionTitle">Версии</h3>
            <div class="versionIcon">
              <span class="leftIcon"></span>
              <span class="rightIcon"></span>
            </div>
          </div>
          <div class="parameters">
            <div class="paramLeftColumn">
              <ul>
                <li class="liItem">
                  <span class="liTitle">Высота</span>
                  <span class="liParam" id="liParamHeight">2' 40"</span>
                </li>
                <li class="liItem">
                  <span class="liTitle">Масса</span>
                  <span class="liParam" id="liParamWeight">15,2 фута</span>
                </li>
                <li class="liItem">
                  <span class="liTitle">Пол</span>
                  <span class="liParam">
                    <div class="gender">
                      <div class="man">
                        <img
                          class="genderSvg"
                          src="../assets/svg/Gender Female SVG Icon (1).svg"
                          alt=""
                        />
                      </div>
                      <div class="woman">
                        <img
                          class="genderSvg"
                          src="../assets/svg/Gender Female SVG Icon.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <div class="paramRightColumn">
              <ul>
                <li class="liItem">
                  <span class="liTitle">Категория</span>
                  <span class="liParam" id="liParamCategoty">Семя</span>
                </li>
                <li class="liItem">
                  <span class="liTitle">Способности</span>
                  <span class="liParam" id="liParamAbility">Зарастать</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="typesCard">
            <h3 class="typeTitle">Типы</h3>
            <div class="types">
              <PokemonType
                :label="item.type.name"
                v-for="(item, index) in pokemonData.types"
                :key="index"
              />
            </div>
          </div>
        </div>
      </section>
      <div class="evolution">
        <div class="evolutionContainer">
          <h3 class="evolutionTitle">Эволюции</h3>
          <div class="evolutionItems">
            <div class="stagesOfEvolution">
              <div class="evolutionItem"></div>
              <div class="evolutionName">Бульбазавр</div>
              <div class="evoliutionId">#0001</div>
              <div class="evolutionTypes">
                <div class="evolutionTypeValue">Трава</div>
                <div class="evolutionTypeValue">Яд</div>
              </div>
            </div>
            <div class="arrow">
              <img src="../assets/svg/right-arrow-backup-2-svgrepo-com.svg" alt="" />
            </div>
            <div class="stagesOfEvolution">
              <div class="evolutionItem"></div>
              <div class="evolutionName">Бульбазавр</div>
              <div class="evoliutionId">#0001</div>
              <div class="evolutionTypes">
                <div class="evolutionTypeValue">Трава</div>
                <div class="evolutionTypeValue">Яд</div>
              </div>
            </div>
            <div class="arrow">
              <img src="../assets/svg/right-arrow-backup-2-svgrepo-com.svg" alt="arrow" />
            </div>

            <div class="stagesOfEvolution">
              <div class="evolutionItem"></div>
              <div class="evolutionName">Бульбазавр</div>
              <div class="evoliutionId">#0001</div>
              <div class="evolutionTypes">
                <div class="evolutionTypeValue">Трава</div>
                <div class="evolutionTypeValue">Яд</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="footerBtn">Узнайте больше о покемонах</button>
    </div>
  </div>
</template>

<style scoped>
.personalCardTitle {
  display: flex;
  font-size: 225%;
  margin-top: 0.5em;
  text-align: center;
  gap: 15px;
  margin-bottom: 50px;
}

.header {
  display: flex;
  min-width: 1440px;
  font-size: 150%;
}

.back {
  display: flex;
  background-color: #a4a4a4;
  cursor: pointer;
  width: 50%;
  height: 55px;
  margin-right: 4px;
  padding-left: 220px;
  align-items: center;
}

.forward {
  display: flex;
  background-color: #a4a4a4;
  cursor: pointer;
  width: 50%;
  height: 55px;
  align-items: center;
  justify-content: end;
  padding-right: 220px;
}

.forward:hover {
  background-color: #30a7d7;
}

.back:hover {
  background-color: #30a7d7;
}

.pokenomInfo {
  display: flex;
  gap: 10px;
}

.types {
  display: flex;
  width: 220px;
}

.btnBack {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  margin-right: 15px;
  cursor: pointer;
}

.btnForward {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  margin-right: 15px;
  cursor: pointer;
}

.pokemonInfoId {
  color: white;
}

.pokemonInfoName {
  color: #616161;
}

.titleName {
  margin: 0;
}

.personalCardPokemon {
  width: 100%;
  background-image: url("img/container_bg.png");
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personalCardContainer {
  background-color: white;
  display: flex;
  max-width: 1000px;
  padding: 15px;
  gap: 15px;
  flex-direction: column;
  align-items: center;
}

.pokemonDetails {
  display: flex;
  flex-wrap: wrap;
  max-width: 860px;
}

.leftColumn {
  width: 400px;
  margin-right: 15px;
}

.image {
  width: 100%;
  background-color: #ede6e6;
  border-radius: 4px;
  margin-right: 15px;
  margin-bottom: 5px;
}

.statistics {
  width: 100%;
  min-height: 250px;
  border-radius: 10px;
  background-color: #a4a4a4;
  padding: 15px 0 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.statisicsTitle {
  font-size: 100%;
  font-weight: normal;
  margin: 0;
}

.specifications {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

.specificationsItems {
  width: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 8px;
  text-align: center;
}

.specificationsItem {
  width: 100%;
  height: 7px;
  background-color: white;
}

.red {
  background-color: red;
}

.fill {
  background-color: black;
}

.transparent {
  background-color: transparent;
}

.specificationsTitle {
  font-size: 60%;
  font-weight: 700;
}

.description {
  width: 400px;
  font-family: "Flexo-Medium", arial, sans-serif;
  color: #212121;
  font-size: 105.5%;
  line-height: 150%;
}

.parameters {
  display: flex;
  width: 400px;
  border-radius: 10px;
  background-color: #30a7d7;
  padding: 20px;
  margin-bottom: 20px;
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.liItem {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.liTitle {
  color: white;
  font-size: 100%;
}

.liParam {
  color: #212121;
  font-size: 125%;
}

.genderSvg {
  width: 25px;
  height: 25px;
}

.gender {
  display: flex;
  gap: 10px;
}

.paramRightColumn {
  margin-left: 100px;
}

.personalType {
  display: flex;
  gap: 13px;
  flex-wrap: wrap;
}

.typeTitle {
  width: 100%;
  margin: 0;
  margin-bottom: 10px;
  font-weight: normal;
}

.typeValue {
  width: 29%;
  border-radius: 5px;
  background-color: #9bcc50;
  color: black;
  text-align: center;
  padding: 5px;
}

.weaknesses {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
}

.weaknessesTitle {
  width: 100%;
  font-weight: normal;
}

.itemWeaknesses {
  width: 29%;
  border-radius: 5px;
  background-color: #9bcc50;
  color: black;
  text-align: center;
  padding: 5px;
}

.evolution {
  width: 100%;
  background-image: url(./img/container_bg.png);
  margin-top: 50px;
  clip-path: polygon(0% 5%, 0% 0%, 100% 0%, 100% 5%, 100% 100%, 95% 100%, 5% 100%, 0% 86%);
}

.evolutionContainer {
  background-color: black;
  opacity: 0.7;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
}

.evolutionTitle {
  font-family: "Roboto", arial, sans-serif;
  font-weight: 500;
  color: #fff;
  margin: 1em 0 0 1em;
  text-transform: none;
  margin: 0;
}

.evolutionItems {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.stagesOfEvolution {
  display: flex;
  flex-wrap: wrap;
  width: 155px;
  text-align: center;
  font-size: 20px;
  gap: 10px;
}

.evolutionItem {
  width: 150px;
  height: 150px;
  border: 5px solid white;
  border-radius: 50%;
  background-image: url("https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 135px 135px;
  display: flex;
  flex-wrap: wrap;
  background-color: #616161;
}

.evolutionName {
  color: white;
}

.evoliutionId {
  color: #a4acaf;
}

.evolutionTypes {
  display: flex;
  gap: 10px;
}

.evolutionTypeValue {
  border-radius: 5px;
  background-color: #9bcc50;
  color: black;
  text-align: center;

  width: 75px;
  font-size: 13px;
}

.arrow {
  margin-top: -50px;
  margin-left: 10px;
  margin-right: 70px;
}

.arrow img {
  width: 50px;
  height: 50px;
  color: white;
}

.footerBtn {
  background-color: #ee6b2f;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 105%;
  text-align: center;
  border-radius: 5px;
  width: 100px;
  margin-right: 0;
  margin-left: auto;
  padding: 15px 0;
  width: 250px;
}

.statItem {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.statItem .item {
  width: 100px;
  height: 6px;
  background-color: grey;
}

.statItem .item.fill {
  background-color: blue;
}
</style>
