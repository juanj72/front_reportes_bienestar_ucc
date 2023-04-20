<template>
  <h2>prueba de consulta estudiante</h2>
  <form @submit.prevent="submitForm">
    <label for="campo">Id de estudiante:</label>
    <input type="text" id="campo" name="campo" v-model="idEstudiante.id" required>
    <button type="submit">Consultar</button>
  </form>

  <div v-if="datos">
    
    <div style="display:flex; justify-content:center;">
      <div style="width:100%; margin: 2%; background-color:#fff; box-shadow:0px 2px 6px rgba(0,0,0,0.3); padding:20px;" >
        <button class="douwnload-btn">descargar informacion</button>
       
       <div v-for="dato in datos" :key="dato.idEstudiante">
        <h1 style="text-align:center;">Detalle estudiante</h1>
        <hr>
        <img src="../assets/logotipo.svg" alt="">
        <hr>
        <hr>
        <h2 style="text-align:center;">informacion del estudiante</h2>
        <h3>ID: {{ dato.idEstudiante }}</h3>
        <h3>Perfil: {{ dato.nombre }}</h3>
        <h3>Programa: {{ dato.apellido }}</h3>
        <h3>Nombre: {{ dato.usuario }}</h3>
        <h3>Apellido: {{ dato.correo }}</h3>
        <h3>Programa: {{ dato.nombre_programa }}</h3>
        <h3>Total de horas eventos: {{ dato.horas_evento }}</h3>
        <h3>Total horas por actividades: {{ dato.horas_actividad }}</h3>
        <h3>Total de horas bienestar: {{ dato.total_horas }}</h3>
        <hr>
       </div>
        

       

      </div>
    </div>

  </div>
</template>



<script>
import axios from 'axios'


export default {
  name: 'ConsultaEstudiante',
  data() {
    return {
      idEstudiante: {
        id: null,
      },
      datos: null,


    }
  },


  methods: {
    submitForm() {
     console.log( axios.get('http://127.0.0.1:8000/api/informacion_estudiante/' + this.idEstudiante.id, {})
        .then(response => {
          this.datos = response.data;
          console.log(this.idEvento)
        })
        .catch(error => {
          console.log(error);
        }))
    },
  },


}

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  font-size: 20px;
  margin-bottom: 10px;
}

input[type="text"] {
  width: 80%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #333;
  font-size: 18px;
  margin-bottom: 20px;
}

button[type="submit"] {
  background-color: #00ACC9;
  color: #fff;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: right inherit;
}

button[type="submit"]:hover {
  background-color: #80BA27;
}

.douwnload-btn{
  background-color: #00ACC9;
  color: #fff;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

}
.douwnload-btn:hover{
  background-color: #80BA27;
  cursor: pointer;
}
</style>