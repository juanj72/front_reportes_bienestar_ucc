<template>
  <h2>Actividades</h2>

  <div class="export-buttons">
    <button class="btn btn-danger" @click="exportToPDF">
      <i class="fas fa-file-pdf"></i> Exportar a PDF
    </button>
    <button class="btn btn-primary" @click="exportToCSV">
      <i class="fas fa-file-csv"></i> Exportar a CSV
    </button>
    <button class="btn btn-success" @click="exportToExcel">
      <i class="fas fa-file-excel"></i> Exportar a Excel
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
      
  }
};
</script>

<style scoped>
.export-buttons {
  display: flex;
  padding: 2%;
  align-items: center;
}
button{
  margin: 1%;
}

</style>