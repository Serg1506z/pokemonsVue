<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <div class="badge" :class="label">{{ label }}</div>
</template>

<style scoped>
.badge {
  border: 1px solid;
  padding: 5px;
  width: 38.4375%;
  font-size: 11px;
  text-align: center;
  border-radius: 3px;
  margin: 0 1.5625% 0 0;
  background-color: #9bcc50;
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
