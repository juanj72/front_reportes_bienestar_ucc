<template>
    <a href="http://127.0.0.1:8000/reporte_excel/" class="download-button">Descargar</a>
    <h1>Cantidad estudiantes por programa</h1>
    
    
    <div>
    
        <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Programa</th>
            <th>Codigo programa</th>
            <th>Cantidad estudiantes</th>
            <th>ver</th>
          
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in datos" :key="usuario.idPrograma">
            <td>{{ usuario.idPrograma }}</td>
            <td>{{ usuario.nombre_programa }}</td>
            <td>{{ usuario.codigo_programa }}</td>
            <td>{{ usuario.cantidad_estudiantes }}</td>
            <td>  <button  @click="toggleModal" class="ver-est">Abrir modal</button></td>
          </tr>
        </tbody>
      </table>
    
    </div>
    
    <div>
  
    <ModalEstudiante :is-open="showModal" @close="toggleModal" >
      <h2>Título del modal</h2>
      <p>Contenido del modal</p>
    </ModalEstudiante>
  </div>
    
    
    
    </template>
    
    <script>
    import axios from 'axios'
    import ModalEstudiante from '../modal/ModalEstudiante'
    export default{
    
        name: 'EstudiantesPrograma',
        data:function(){
            return {
                datos:[],
                showModal :false,
            }
        },
        mounted: function() {
        // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
        console.log(axios.get('http://127.0.0.1:8000/api/estudiantes_programa/').then(response => this.datos = response.data).catch(error => console.log(error)));
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

    .download-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #00ACC9;
  color: white;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
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

.download-button:hover {
  background-color: #80BA27;
}

    
    
    </style>