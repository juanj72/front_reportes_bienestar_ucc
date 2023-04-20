<template>
<h1>Eventos</h1>
<div>

    <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Correo Electrónico</th>
        <th>Fecha inicio</th>
        <th>Estado</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario in datos" :key="usuario.idEvento">
        <td>{{ usuario.idEvento }}</td>
        <td>{{ usuario.nombre_evento }}</td>
        <td>{{ usuario.descripcion }}</td>
        <td>{{ usuario.fecha_inicio }}</td>
        <td>{{ usuario.estado }}</td>
        <td>  <button  @click="toggleModal" class="ver-est">Ver evento</button></td>
      </tr>
    </tbody>
  </table>

</div>


<ModalEstudiante :is-open="showModal" @close="toggleModal" >
      <h2>Título del modal</h2>
      <p>Contenido del modal</p>
    </ModalEstudiante>


</template>

<script>
import axios from 'axios'
import ModalEstudiante from '../modal/ModalEstudiante'
export default{

    name: 'TablasEventos',
    data:function(){
        return {
            datos:[],
            showModal:false,
        }
    },
    mounted: function() {
    // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
    console.log(axios.get('http://127.0.0.1:8000/api/eventos/').then(response => this.datos = response.data).catch(error => console.log(error)));
  },
  components:{
    ModalEstudiante,
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
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