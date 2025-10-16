import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => {
        return import("../main.vue");
      },
    },
    {
      path: "/pokemon/:id",
      name: "pokemon",
      component: () => {
        return import("../components/personalPokemonCard.vue");
      },
    },
  ],
});

export default router;
