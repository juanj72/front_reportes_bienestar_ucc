<template>
    <h1>Estudiantes</h1>
    <div>
    
        <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Fecha inicio</th>
            <th>Estado</th>
            <th>Telefono</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in datos" :key="usuario.idEvento">
            <td>{{ usuario.idEstudiante }}</td>
            <td>{{ usuario.Perfil_idPerfil }}</td>
            <td>{{ usuario.Programa_idPrograma }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td> {{ usuario.telefono }}</td>
            <td>{{ usuario.codigo }}</td>
          </tr>
        </tbody>
      </table>
    
    </div>
    
    
    
    
    
    </template>
    
    <script>
    import axios from 'axios'
    export default{
    
        name: 'TablasEstudiantes',
        data:function(){
            return {
                datos:[]
            }
        },
        mounted: function() {
        // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
        console.log(axios.get('http://127.0.0.1:8000/api/estudiantes/').then(response => this.datos = response.data).catch(error => console.log(error)));
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