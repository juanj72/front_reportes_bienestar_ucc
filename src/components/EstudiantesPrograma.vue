<template>
    <!-- <a href="http://127.0.0.1:8000/reporte_excel/" class="download-button"><font-awesome-icon :icon="['fas', 'download']" /> Descargar</a> -->
    <button class="download-button"   @click="exportToExcel"><font-awesome-icon :icon="['fas', 'download']" /> Descargar</button>
    <h1>Cantidad estudiantes por programa</h1>

    <div class="grafica" v-if="datos.length > 0">
      <GraficaEstudiantes :datos_h="datos"></GraficaEstudiantes>


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
    import GraficaEstudiantes from '../graficas/GraficaEstudiantes'
    import  * as XLSX from 'xlsx';
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
        console.log(axios.get('http://127.0.0.1:8000/api/EstudiantesPrograma/').then(response => this.datos = response.data).catch(error => console.log(error)));
      },
      components:{
        ModalEstudiante,
        GraficaEstudiantes,
      },
      methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    exportToExcel() {
      // Obtiene los datos que quieres exportar
      const data = this.datos;

      // Crea un libro de trabajo y agrega una hoja de cálculo
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);

      // Agrega la hoja de cálculo al libro de trabajo
      XLSX.utils.book_append_sheet(workbook, sheet, 'Mi Hoja de Cálculo');

      // Crea un objeto Blob para el archivo Excel
      const blob = new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Crea un objeto URL para descargar el archivo Excel
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'mi_archivo.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

  },
    
    
    }
    </script>
    
    <style scoped >


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

    .grafica{
      align-items: center;
      width: 80%;
      margin-top: 5%;
      margin-bottom: 5%;

    }


    
    </style>