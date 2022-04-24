import { createApp } from "vue";
import { Hey } from "@js/components/tsSub";
import TsCounter from "@js/components/tsCounter.vue";
import JsCounter from "@js/components/jsCounter.vue";
import "@css/home.scss";

const app = createApp({
  components: { TsCounter, JsCounter },
});
app.mount("#vue-root");

console.log("home!");
const hey = new Hey();
hey.call();
