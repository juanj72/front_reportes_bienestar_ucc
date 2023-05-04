<template>
  <h2>prueba de consulta estudiante</h2>
  <form @submit.prevent="submitForm" ref="myDiv">
    <label for="campo">Id de estudiante:</label>
    <input type="text" id="campo" name="campo" v-model="idEstudiante.id" required>
    <button type="submit"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /> Consultar</button>
  </form>
  <hr>
  <button class="douwnload-btn" @click="downloadPDF" v-if="datos" >descargar informacion</button>
  <div ref="myDiv">
  <div v-if="datos">
    
    <div style="display:flex; justify-content:center;">
      <div style="width:100%; margin: 2%; background-color:#fff; box-shadow:0px 2px 6px rgba(0,0,0,0.3); padding:20px;" >

       
       <div v-for="dato in datos" :key="dato.idEstudiante" >
        
        <h1 style="text-align:center;">Detalle estudiante</h1>
        <hr>
        <img src="../assets/logotipo.svg" alt="">
        <hr>
        <hr>
        <h2 style="text-align:center;">información del estudiante</h2>
        <h3>ID: {{ dato.id }}</h3>
        <h3>Nombre: {{ dato.estudiante }}</h3>
        <h3>Documento: {{ dato.documento }}</h3>
        <h3>Correo: {{ dato.email }}</h3>
        

        <h3>Total de horas eventos: {{ dato.horas_eventos }}</h3>
        <h3>Total horas por actividades: {{ dato.horas_actividades }}</h3>
        <h3>Total de horas bienestar: {{ dato.total_horas }}</h3>
        <hr>
        <p>Este documento certifica las horas obtenidas por la asistencia a los diferentes espacios organizados por Bienestar Universitario. Por lo tanto, se solicita que se proceda a su debida constitución y publicación.</p>
        <span>©</span> universidad cooperativa de colombia - 2023
       </div>
        

       

      </div>
    </div>

  </div>

</div>
 
 


</template>



<script>
import axios from 'axios'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default {
  name: 'ConsultaEstudiante',
  data() {
    return {
      idEstudiante: {
        id: null,
      },
      datos: null,
      divCargado:false,


    }
  },


  methods: {
    submitForm() {
     console.log( axios.get('http://127.0.0.1:8000/api/consultaEstudiante/' + this.idEstudiante.id, {})
        .then(response => {
          this.datos = response.data;
          console.log(this.idEvento)
        })
        .catch(error => {
          console.log(error);
        }))
    },
    cargarDiv(){
      this.divCargado = true;
    },

    downloadPDF() {
      if (this.divCargado){
        const div = this.$refs.myDiv;

        html2canvas(div).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, 208, 200); // Ajusta los valores de ancho y alto según el tamaño de la página
        pdf.save('archivo.pdf');
});
      }

    }


  },
  mounted(){
    this.cargarDiv()


  }


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