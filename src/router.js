import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./pages/MainPage/index.vue";
import DiscsPage from "./pages/DiscsPage/index.vue";
import BandsPage from "./pages/BandsPage/index.vue";
import AddEditDisc from "./pages/Add-edit-disc/index.vue";
import AddEditBand from "./pages/Add-edit-band/index.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/discs",
    name: "discs",
    component: DiscsPage,
  },
  {
    path: "/bands",
    name: "bands",
    component: BandsPage,
  },
  {
    path: "/add-edit-dics/:id?",
    name: "add-edit-dics",
    component: AddEditDisc,
  },
  {
    path: "/add-edit-band/:id?",
    name: "add-edit-band",
    component: AddEditBand,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
