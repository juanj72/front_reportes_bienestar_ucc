<template>
<DataTable class="display" :data="datos">  
    <thead>
        <tr>
            <th>First</th>
            <th>Second</th>
            <th>perros</th>
            <th>gatos</th>
            <th>hamsters</th>
            <th>culebas</th>
        </tr>
    </thead>
</DataTable>
{{ datos }}

</template>

<script>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';

 
DataTable.use(DataTablesCore);



export default{
    name:'TablaBonita',
    components:{
        DataTable
    },
    data:()=>{
        return {
           datos:null,
           base:[]
                }

    },

 
    

}

</script>