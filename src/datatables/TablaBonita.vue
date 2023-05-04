<template>
    <div>
      <DataTable :data="myData" class="display">
        <thead>
          <tr>
            <th>Columna 1</th>
            <th>Columna 2</th>
          </tr>
        </thead>
      </DataTable>
    </div>
  </template>
  
  <script>
  import DataTable from 'datatables.net-vue3';

import DataTablesLib from 'datatables.net';

DataTable.use(DataTablesLib);
  export default {
    name:'TablaBonita',
    components: {
      DataTable,
    },
    data() {
      return {
        myData: [
          ['Fila 1, Columna 1', 'Fila 1, Columna 2'],
          ['Fila 2, Columna 1', 'Fila 2, Columna 2'],
        ],
      };
    },
    mounted:function(){
        
    }
  };
  </script>