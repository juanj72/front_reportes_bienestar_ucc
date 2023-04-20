<template>
  <h2>prueba de consulta estudiante</h2>
  <form @submit.prevent="submitForm">
    <label for="campo">Id de estudiante:</label>
    <input type="text" id="campo" name="campo" v-model="idEstudiante.id" required>
    <button type="submit">Consultar</button>
  </form>

  <div v-if="datos">
    
    <div style="display:flex; justify-content:center;">
      <div style="width:100%; margin: 2%; background-color:#fff; box-shadow:0px 2px 6px rgba(0,0,0,0.3); padding:20px;">
        <button class="douwnload-btn">descargar informacion</button>
        <h2 style="text-align:center;">Estudiante</h2>
       
        <p style="text-align:center;">informacion del estudiante</p>
        <h3>ID: {{ datos.idEstudiante }}</h3>
        <h3>Perfil: {{ datos.Perfil_idPerfil }}</h3>
        <h3>Programa: {{ datos.Programa_idPrograma }}</h3>
        <h3>Nombre: {{ datos.nombre }}</h3>
        <h3>Apellido: {{ datos.apellido }}</h3>
        <h3>Telefono: {{ datos.telefono }}</h3>
        <h3>Codigo: {{ datos.codigo }}</h3>

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
      axios.get('http://127.0.0.1:8000/api/estudiantes/' + this.idEstudiante.id, {})
        .then(response => {
          this.datos = response.data;
          console.log(this.idEvento)
        })
        .catch(error => {
          console.log(error);
        });
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