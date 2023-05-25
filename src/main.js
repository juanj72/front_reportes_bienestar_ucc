import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld'
import ConsultaEstudiante from './formularios/ConsultaEstudiante'
import TablaEventos from './components/TablaEventos'

// createApp(App).mount('#app')

import EstudiantesPrograma from './components/EstudiantesPrograma'
import PerfilesVista from './components/PerfilesVista'
import TablaHoras from './components/TablaHoras'
import LoginAuth from './auth/LoginAuth'
import TablaBonita from './datatables/TablaBonita'
import AsistenciaEst from './components/AsistenciaEst'
// import {variable} from './constantes'
import { library } from '@fortawesome/fontawesome-svg-core'
import BarraLateral from './components/BarraLateral'
import axios from 'axios';

import { faBuildingColumns,faArrowRightFromBracket,faAddressBook,faClipboardQuestion,faDownload,faMagnifyingGlass,faEye,faChartColumn,faChartArea,faFileExcel,faFileCsv,faHatWizard,faHouse,faCalendarCheck,faFileExport,faUsers,faChartLine,faBriefcase,faHourglassHalf,faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBuildingColumns,faDownload,faMagnifyingGlass,faHatWizard,faEye,faArrowRightFromBracket)
library.add(faClipboardQuestion,faHouse)
library.add(faAddressBook,faCalendarCheck)
library.add(faChartColumn,faChartArea,faFileExcel,faFileCsv,faFileExport,faUsers,faChartLine,faBriefcase,faHourglassHalf,faFilePdf)





const routes=[
 
     {path:'/login',component:LoginAuth},
     
     

     {path:'/',component:BarraLateral,children:[
        {name:'inicio',path:'',component:HelloWorld},
        {name:'asistencia',path:'/Asistencia',component:AsistenciaEst},
        {name:'estudiantes',path:'/estudiantes',component:TablaBonita},
        {name:'horas_bi',path:'/horas_bienestar',component:TablaHoras},
        {name:'actividades',path: '/actividades',component: PerfilesVista},
        {name:'estXprograma',path:'/estudiantes_programa',component: EstudiantesPrograma},
        {name:'?estprogram',path:'/consulta_est', component: ConsultaEstudiante},
        {name:'eventos',path:'/eventos',component: TablaEventos},
     ]}



]





const router =createRouter({
    history: createWebHashHistory(),
    routes,

})



var token = localStorage.getItem('TOKEN');
if(token){
    axios.defaults.headers.common['Authorization']='Bearer '+token
}




let app =null



app = createApp(App)




app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
.mount('#app')
