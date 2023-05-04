<template>
    <div>
      <DataTable :data="myData"  :columns="filas" :options="{language:{search:'Buscar',next:'Siguiente',Previous:'anterior',},dom:'Bfrtip'}" class="display">
        <thead>
          <tr>
            <th> scope</th>
            <th>nombre</th>
            <th>correo</th>
            <th>documento</th>
            <th>telefono</th>
            <th>programa</th>
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
    name:'TablaBonita',
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
            }},{data:'nombre'},{data:'correo'},{data:'documento'},{data:'telefono'},{data:'programa'}
        ]
       
      };
    },

    mounted(){
        this.getEstudiantes()
    },
    methods:{
        getEstudiantes(){
            axios.get('http://127.0.0.1:8000/api/estudiantes/').then(
                response =>(
                    this.myData=response.data
                )
            )
        }
    }
  };
  </script>