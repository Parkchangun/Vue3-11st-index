import {createApp} from 'vue';
import App from "@/App";
import fetch from "@/plugins/fetch";
import store from "@/store";
import 'animate.css';
import lazyLoad from "@/plugins/lazyLoad";

createApp(App)
  .use(fetch)
  .use(store)
  .use(lazyLoad)
  .mount('#app');
