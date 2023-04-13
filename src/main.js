import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld'
import FormularioDatos from './formularios/FormularioDatos'
import ConsultaEstudiante from './formularios/ConsultaEstudiante'
import TablaEventos from './components/TablaEventos'
import tablaAdministrativos from './components/tablaAdministrativos'
// createApp(App).mount('#app')
import TablaEstudiantes from './components/TablaEstudiantes'
import EstudiantesPrograma from './components/EstudiantesPrograma'



const routes=[

    {path:'/hello',component:
     HelloWorld},
     {path:'/formulario',component: FormularioDatos},
     {path:'/eventos',component: TablaEventos},
     {path:'/administrativos',component:tablaAdministrativos},
     {path: '/Estudiantes',component: TablaEstudiantes},
     {path:'/consulta_est', component: ConsultaEstudiante},
     {path:'/estudiantes_programa',component: EstudiantesPrograma}
   


]

const router =createRouter({
    history: createWebHashHistory(),
    routes,

})

const app =createApp(App)
app.use(router)
.mount('#app')