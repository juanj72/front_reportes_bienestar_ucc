<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
 
    />
 


  </template>
  
  <script>
  import  {Bar}  from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'GraficasPanel',
    components: { Bar },
    props:{
      datos_h:{
       type : Array,
        required:true
        
      },
   
    },
    data() {
      return {
        chartData: {
          method:{
            
          },
       labels : ['hola','perros','gatos'],
       datasets:[{data:[1,2,3],}]
         
        },
        chartOptions: {
          responsive: true
        },
       datos_si:this.datos


        
      }
    },

     async mounted(){
     

      const totales = this.datos_h;
      const llaves = [];
      const filas = [];
      totales.map((row)=>(
      llaves.push(row.nombre),
      filas.push(row.criterio)
      ))
      console.log(filas,llaves);
      this.chartData={
        labels : llaves,
         datasets: [ { data: filas, backgroundColor : '#ffc107' },],
      }
      

    }
  }
  </script>

  <style scoped>


</style>