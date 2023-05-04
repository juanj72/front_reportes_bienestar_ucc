<template>
  <h2>Actividades</h2>

  <div class="export-buttons">
    <button class="btn btn-danger" @click="exportToPDF">
      <font-awesome-icon :icon="['fas', 'file-pdf']" />  Exportar a PDF
    </button>
    <button class="btn btn-primary" @click="exportToCsv">
      <font-awesome-icon :icon="['fas', 'file-csv']" /> Exportar a CSV
    </button>
    <button class="btn btn-success" @click="exportToExcel">
      <font-awesome-icon :icon="['fas', 'file-excel']" /> Exportar a Excel
    </button>
  </div>


  <div>
    <DataTable :data="myData"  :columns="filas" :options="{language:{search:'Buscar',next:'Siguiente',Previous:'anterior',},dom:'Bfrtip'}" class="display">
      <thead>
        <tr>
          <th> scope</th>
          <th>Actividad</th>
          <th>Lugar</th>
          <th>Persona a cargo</th>
          <th>Día</th>
          <th>Hora de inicio</th>
          <th>Hora de finalización</th>
        </tr>
      </thead>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import Buttons from 'datatables.net-buttons';
import axios from 'axios';
import  * as XLSX from 'xlsx';
import Papa from 'papaparse';

DataTable.use(DataTablesLib);
DataTable.use(Buttons);

export default {
  name:'PerfilesVista',
  components: {
    DataTable,
  },
  data() {
    return {
      myData: [
      ],
      filas:[
          {data:null,render:function(data,type,row,meta){
              return `${meta.row}`
          }},{data:'actividad'},{data:'lugar'},{data:'administrador'},{data:'dia'},{data:'hora_inicio'},{data:'hora_fin'}
      ]
     
    };
  },

  mounted(){
      this.getEstudiantes()
  },
  methods:{
      getEstudiantes(){
          axios.get('http://127.0.0.1:8000/api/actividades/').then(
              response =>(
                  this.myData=response.data
              )
          )
      },

      exportToCsv() {
      const csv = Papa.unparse(this.myData);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },

      
      exportToExcel() {
      // Obtiene los datos que quieres exportar
      const data = this.myData;

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
      
  }
};
</script>

<style scoped>
.export-buttons {
  display: flex;
 
 
}
button{
  margin: 1px;
}

</style>