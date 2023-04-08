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
      </tr>
    </thead>
    <tbody>
      <tr v-for="usuario in datos" :key="usuario.idEvento">
        <td>{{ usuario.idEvento }}</td>
        <td>{{ usuario.nombre_evento }}</td>
        <td>{{ usuario.descripcion }}</td>
        <td>{{ usuario.fecha_inicio }}</td>
        <td>{{ usuario.estado }}</td>
      </tr>
    </tbody>
  </table>

</div>





</template>

<script>
import axios from 'axios'
export default{

    name: 'TablasEventos',
    data:function(){
        return {
            datos:[]
        }
    },
    mounted: function() {
    // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
    console.log(axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error)));
  }


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


</style>