import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import cssAnimateDirective from "universal-css-animations/vue";

let app = createApp(App);

app.use(cssAnimateDirective);

app.mount('#app')
