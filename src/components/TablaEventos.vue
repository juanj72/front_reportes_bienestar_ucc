<template>
<h1>Eventos</h1>
<div>

    <table class="table">
    <thead>
      <tr>
        <th>nombre</th>
        <th>Descripción</th>
        <th>Lugar</th>
        <th>Detalle</th>
    
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario in datos" :key="usuario.idEvento">
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.descripcion }}</td>
        <td>{{ usuario.lugar }}</td>
        <td><button  @click="openModal(usuario)" class="ver-est"><font-awesome-icon :icon="['fas', 'eye']" /></button></td>
    
        
      </tr>
    </tbody>
  </table>

  <ModalActividad :isOpen="modalOpen" :actividad="dato" @close="closeModal" />

</div>





</template>

<script>
import axios from 'axios'
import ModalActividad from '@/modal/ModalActividad';

export default{

    name: 'TablasEventos',
    data:function(){
        return {
            datos:[],
            modalOpen:false,
            dato:[],
            
       
        }
    },
    mounted: async function() {
    // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
    // axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('TOKEN')
    console.log(axios.get('http://127.0.0.1:8000/api/mostrarEventos/').then(response => this.datos = response.data).catch(error => console.log(error)));
  },
  components:{
   ModalActividad

  },
  methods: {
    openModal(estudiante) {
      this.modalOpen = true;
      this.dato = estudiante;
    },
    closeModal() {
      this.modalOpen = false;
      this.modalEstudiante = null;
    }
  },
  }



</script>

<style scoped >
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
  color: #333;
}

.ver-est{
  background-color: #00ACC9;
  color: white;
  border-radius: 6px;
  position: relative;
  font-size: 1em;
  text-decoration: none;
  padding: 5px 10px;
  margin-left: 25%;
}
.ver-est:hover{
  background-color: #80BA27;
  cursor: pointer;
}


</style>