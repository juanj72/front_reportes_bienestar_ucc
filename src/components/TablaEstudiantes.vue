<template>
    <h1>Estudiantes</h1>
    <div>
  
        <table class="table">
        <thead>
          <tr>
         
            <th>Nombre</th>
            <th>Apellido</th>
          
            <th>Código</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in datos" :key="usuario.idEstudiante">
            
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
    
            <td>{{ usuario.codigo }}</td>
            <td>  <button  @click="toggleModal(usuario)" class="ver-est">Ver Estudiante</button></td>
          </tr>
        </tbody>
      </table>
    
    </div>
    
    
    <ModalEstudiante :is-open="showModal" @close="toggleModal" :id="dato" >
     
    </ModalEstudiante>
    
    
    </template>
    
    <script>
    import axios from 'axios'
    import ModalEstudiante from '../modal/ModalEstudiante';
    export default{
    
        name: 'TablasEstudiantes',
        methods:{
        toggleModal(id) {
      this.showModal = !this.showModal;
      this.dato=id;
      console.log(id)
      

    },
      },
        data:function(){
            return {
                datos:[],
                showModal:false,
                dato:[]
            }
        },
        mounted: function() {
        // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
        console.log(axios.get('http://127.0.0.1:8000/api/estudiantes/').then(response => this.datos = response.data).catch(error => console.log(error)));
      },
      components:{
        ModalEstudiante
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