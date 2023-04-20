<template>
    <a href="http://127.0.0.1:8000/api/horas_estudiante/generar_reporte" class="ver-est down">Descargar reporte</a>
    <h1>Total horas de bienestar</h1>
    <div>
    
        <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Carrera</th>
            <th>Horas por evento</th>
            <th>Horas por actividad</th>
            <th>Total horas acumuladas</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in datos" :key="usuario.idEstudiante">
            <td>{{ usuario.idEstudiante }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.nombre_programa }}</td>
            <td>{{ usuario.horas_evento }}</td>
            <td>{{ usuario.horas_actividad }}</td>
            <td>{{ usuario.total_horas }}</td>
            <td>  <button  @click="toggleModal" class="ver-est">Ver evento</button></td>
          </tr>
        </tbody>
      </table>
    
    </div>
    
    
    
    
    
    </template>
    
    <script>
    import axios from 'axios'
    
    export default{
    
        name: 'TablaHoras',
        data:function(){
            return {
                datos:[],
           
            }
        },
        mounted: function() {
        // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
        console.log(axios.get('http://127.0.0.1:8000/api/horas_estudiante/').then(response => this.datos = response.data).catch(error => console.log(error)));
      },
      components:{
    
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
    .down{
        right: 0;
    }
    
    </style>