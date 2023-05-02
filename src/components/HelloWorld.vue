<template >

  <h1>Modulo de reportes</h1>
  <p>Aquí encontraras todo lo relacionado a los reportes de horas por Estudiante.</p>
  <CardPrueba dato_prueba="hola undo desde el componente pero card"></CardPrueba>
  <CardPrueba dato_prueba="hola undo desde el componente pero 2"></CardPrueba>
  <div>
    <i class="fas fa-user"></i>
    <i class="far fa-envelope"></i>
  </div>

</template>

<script>

import CardPrueba from '../cards/CardPrueba'





export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    CardPrueba,
   
   
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
