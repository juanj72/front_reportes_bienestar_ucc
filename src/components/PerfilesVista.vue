<template>
    <h1>Lista de actividades</h1>
    <div>
    
        <table class="table">
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Lugar</th>
            <th>Detalle</th>
      
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in datos" :key="usuario.actividad_nombre">
            <td>{{ usuario.actividad_nombre }}</td>
            <td>{{ usuario.lugar }}</td>
            <td>  <button  @click="toggleModal(usuario)" class="ver-est">Ver actividad</button></td>
            
          </tr>
        </tbody>
      </table>
    
    </div>


    <ModalActividad :is-open="showModal"  @close="toggleModal" :id="dato" >

    </ModalActividad>
    
    
    
    
    
    </template>
    
    <script>
    import axios from 'axios'
    import ModalActividad from '../modal/ModalActividad';
    export default{
    
        name: 'PerfilesVista',
        data:function(){
            return {
                datos:[],
                showModal:false,
                dato:[]
            }
        },
        mounted: function() {
        // axios.get('http://127.0.0.1:8000/consulta_evento/').then(response => this.datos = response.data).catch(error => console.log(error));
        console.log(axios.get('http://127.0.0.1:8000/api/actividades/').then(response => this.datos = response.data).catch(error => console.log(error)));
      },
      components:{
        ModalActividad
      },
      methods:{
        toggleModal(id) {
      this.showModal = !this.showModal;
      this.dato=id;
      console.log(id)
      

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