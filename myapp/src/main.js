import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用插件
import "lib-flexible/flexible"
// 注意echarts的引入方式
import * as echarts from "echarts";
import axios from "axios"
axios.defaults.baseURL="http://localhost:8888"
const app = createApp(App)
// 进行全局挂载
app.config.globalProperties.$echarts=echarts
app.config.globalProperties.$axios=axios
app.use(store).use(router).mount('#app')
