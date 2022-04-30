import { createApp } from "vue";
import { hello, asyncHello } from "@js/components/sub.js";
import "@css/index.scss";
import TsCounter from "@js/components/tsCounter.vue";
import JsCounter from "@js/components/jsCounter.vue";
import TopImage from "@js/components/topImage.vue";

const app = createApp({
  components: { TsCounter, JsCounter, TopImage },
});
app.mount("#vue-root");

hello();
asyncHello();
