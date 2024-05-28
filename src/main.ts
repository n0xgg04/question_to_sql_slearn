import App from "./App.vue";
import './index.css'
import {createApp} from "vue";
import router from "./router.ts";
import store from "./store.ts";


createApp(App).use(store).use(router).mount('#app')
