<template>
    <a href="#" class="download-button">Descargar</a>
    <h1>Cantidad estudiantes por programa</h1>
    
    <div>
    
        <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Programa</th>
            <th>Codigo programa</th>
            <th>Cantidad estudiantes</th>
          
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in datos" :key="usuario.idEvento">
            <td>{{ usuario.idPrograma }}</td>
            <td>{{ usuario.nombre_programa }}</td>
            <td>{{ usuario.codigo_programa }}</td>
            <td>{{ usuario.cantidad_estudiantes }}</td>
            
          </tr>
        </tbody>
      </table>
    
    </div>
    
    
    
    
    
    </template>
    
    <script>
    import axios from 'axios'
    export default{
    
        name: 'EstudiantesPrograma',
        data:function(){
            return {
                datos:[]
            }
        },
        mounted: function() {
        // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
        console.log(axios.get('http://127.0.0.1:8000/api/estudiantes_programa/').then(response => this.datos = response.data).catch(error => console.log(error)));
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

    .download-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #007bff;
  color: white;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}

.download-button:hover {
  background-color: #0062cc;
}

    
    
    </style>