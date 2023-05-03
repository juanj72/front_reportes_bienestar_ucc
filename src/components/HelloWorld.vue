<template >
<h3>Bienvenido al modulo de reportes</h3>


  <div class="card-container">
    <div class="card">
      <div class="card-header">Asistencia por horas en actividades</div>
      <div class="card-body" v-if="actividades.length > 0">
        <GraficasPanel :datos_h="actividades" ></GraficasPanel>

      </div> 
    </div>

    <div class="card">
      <div class="card-header">Cantidad de estudiantes por evento</div>
      <div class="card-body" v-if="eventos.length > 0">
        <GraficasPanel :datos_h="eventos" ></GraficasPanel>

      </div> 
    </div>

    <div class="card">
      <div class="card-header">Card 3</div>
      <div class="card-body">This is the content of card 3.</div> 
    </div>
  </div>



</template>

<script>
import axios from 'axios';
import GraficasPanel from '@/graficas/GraficasPanel.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    GraficasPanel
   
   
},
data:function(){
 return {
  actividades:[],
  eventos:[]
  
 }
},
mounted:function(){

  console.log(axios.get('http://127.0.0.1:8000/api/asistenciaActividades').then(response => this.actividades = response.data).catch(error => console.log(error)));
  console.log(axios.get('http://127.0.0.1:8000/api/asistenciaEventos').then(response => this.eventos = response.data).catch(error => console.log(error)));

}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-container {
  align-items: center;
  display: flex;
  flex-direction: column;

}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  margin-right: 10px;
  width: 80%;
}

.card-header {
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 10px;
}

.card-body {
  padding: 10px;
}

</style>
