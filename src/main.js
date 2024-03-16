import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "@/components";
import CustomScrollbar from 'custom-vue-scrollbar';
import 'custom-vue-scrollbar/dist/style.css';

const app = createApp(App)
components.forEach(component => {app.component(component.name, component)})
app.component(CustomScrollbar.name, CustomScrollbar);
app.use(store).use(router).mount('#app')
