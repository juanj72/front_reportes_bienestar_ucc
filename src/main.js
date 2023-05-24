import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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
import PerfilesVista from './components/PerfilesVista'
import TablaHoras from './components/TablaHoras'
import LoginAuth from './auth/LoginAuth'
import TablaBonita from './datatables/TablaBonita'
import AsistenciaEst from './components/AsistenciaEst'
import {variable} from './constantes'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAddressBook,faClipboardQuestion,faDownload,faMagnifyingGlass,faEye,faChartColumn,faChartArea,faFileExcel,faFileCsv,faHatWizard,faHouse,faCalendarCheck,faFileExport,faUsers,faChartLine,faBriefcase,faHourglassHalf,faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDownload,faMagnifyingGlass,faHatWizard,faEye)
library.add(faClipboardQuestion,faHouse)
library.add(faAddressBook,faCalendarCheck)
library.add(faChartColumn,faChartArea,faFileExcel,faFileCsv,faFileExport,faUsers,faChartLine,faBriefcase,faHourglassHalf,faFilePdf)







const routes=[

    {path:'/',component:
     HelloWorld},
     {path:'/formulario',component: FormularioDatos},
     {path:'/eventos',component: TablaEventos},
     {path:'/administrativos',component:tablaAdministrativos},
     {path: '/Estudiantes',component: TablaEstudiantes},
     {path:'/consulta_est', component: ConsultaEstudiante},
     {path:'/estudiantes_programa',component: EstudiantesPrograma},
     {path: '/perfiles',component: PerfilesVista},
     {path:'/horas_bienestar',component:TablaHoras},
     {path:'/login',component:LoginAuth},
     {path:'/tablabonita',component:TablaBonita},
     {path:'/Asistencia',component:AsistenciaEst}



]





const router =createRouter({
    history: createWebHashHistory(),
    routes,

})






 let app =createApp(LoginAuth)


// let variable = variable

if(variable == true ){
    app = createApp(App)
}else{
    app = createApp(LoginAuth)
}



app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
.mount('#app')
