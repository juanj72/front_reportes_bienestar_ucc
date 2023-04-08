import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld'
import FormularioDatos from './formularios/FormularioDatos'
// createApp(App).mount('#app')


const routes=[

    {path:'/hello',component:
     HelloWorld},
     {path:'/formulario',component:FormularioDatos}

]

const router =createRouter({
    history: createWebHashHistory(),
    routes,

})

const app =createApp(App)
app.use(router)
.mount('#app')